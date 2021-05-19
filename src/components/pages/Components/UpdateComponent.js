import { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, Card, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import EditFormComponent from "../../shared/EditFormComponent";

const UpdateComponent = () => {
  const [columns, setColumns] = useState([]);
  const [element, setElement] = useState("Component");
  const [selected, setSelected] = useState([]);
  const [component, setComponent] = useState({});

  useEffect(() => {
    let c = [
      "Name",
      "Price",
      "Description",
      "Manufacturer",
      "ManufacturerPartId",
    ];

    setColumns(c);
    axios
      .get("https://localhost:44345/Components/6")
      .then((res) => setComponent(res.data))
      .then(console.log(component));
  }, []);

  console.log(component);
  return (
    <div>
      <Row>
        <Col sm={10} md={8} lg={6} className="m-0 m-auto">
          <Card className="p-5 ">
            <h5>Update {element}</h5>
            <hr />

            <EditFormComponent
              editObject={component}
              setEditObject={setComponent}
              columns={columns}
              selected={selected}
              setSelected={setSelected}
              element={element}
            ></EditFormComponent>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UpdateComponent;
