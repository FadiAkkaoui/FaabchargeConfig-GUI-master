import { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Row, Card, Spinner, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function AllItems(props) {

  const [filteredList, setFilteredList] = useState([])
  const [elementList, setElementList] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState("")
  const [columns, setColumns] = useState([])
  const [element, setElement] = useState('Item')
  const [posts, setPosts] = useState([])


  useEffect(() => {
    axios.get('https://localhost:44345/Items')
    .then((res) => {
      console.log(res)
      setPosts(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}, [])
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
                </tr>
              </thead>
              {posts.map(post=>{
            return(
              <tbody>
              <tr>    
                  <td>{post.name}</td>
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

export default AllItems;
