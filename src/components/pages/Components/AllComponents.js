import { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Row, Card, Spinner, Table, Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Component } from 'react'
import { render } from '@testing-library/react'

function AllComponent(props) {

  const [filteredList, setFilteredList] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState("")
  const [columns, setColumns] = useState([])
  const [element, setElement] = useState('Component')
  const [selected, setSelected] = useState([]);
  const [posts, setPosts] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {

    axios.get('https://localhost:44345/Components')
      .then((res) => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    axios.get('https://localhost:44345/Components/')
      .then((res) => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const clickHandler = (e) => {
    console.log(e.target.id)
  }
  return (
    <div>
      <Row>
        <Col sm={10} md={8} lg={6} className="m-0 m-auto">
          <Card className='p-5'>
            <h5>{element} List</h5>
            <hr />
            <div>
              <Table className="center">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Discription</th>
                    <th>Manufacturer</th>
                    <th>ManufacturerPartId</th>
                  </tr>
                </thead>
                {posts.map(post => {
                  return (
                    <tbody>
                      <tr>
                        <td>{post.name}</td>
                        <td>{post.price}</td>
                        <td>{post.description}</td>
                        <td>{post.manufacturer}</td>
                        <td>{post.manufacturerPartId}</td>
                        <div>
                          <td>
                            <Router>
                              <Switch>
                                <Route >
                                  <div variant="primary" onClick={handleShow}>
                                    <Button onClick={clickHandler} id={post.id}>Details
                                    </Button>
                                  </div>
                                  <div onClick={handleShow} >
                                  <Button variant="danger" className="mt-3" onClick={clickHandler}>
                                    Delete
                                  </Button>
                                  </div>
                                  <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                  >
                                    <Modal.Header closeButton>
                                      <Modal.Title>Details for id: {post.id}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                      <Table>
                                        <thead>
                                          <tr>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Discription</th>
                                            <th>Manufacturer</th>
                                            <th>ManufacturerPartId</th>
                                          </tr>
                                        </thead>
                                      </Table>
                                    </Modal.Body>
                                    <Modal.Footer>
                                      <Button variant="secondary" onClick={handleClose}>
                                        Close
                                      </Button>
                                    </Modal.Footer>
                                  </Modal>
                                </Route>
                              </Switch>
                            </Router>
                          </td>
                        </div>
                      </tr>
                    </tbody>
                  )
                })}
              </Table>
            </div>
          </Card >
        </Col>
      </Row>
    </div>
  )
}
export default AllComponent;