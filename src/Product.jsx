import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
const productApiUrl = "https://six5130273-api-nodejs.onrender.com";
export default class Product extends Component {
  state = {
    data: []
  }
  getData = async () => {
    try {
      await axios
        .get(`${productApiUrl}/products`)
        .then((response) => {
          let res = response.data;
          this.setState({
            data: res,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    const { data } = this.state;
    return (
      <Container>
        <Row>
          {data.map((res, index) => (
            <Col lg="4" md="6" sm="12" key={index}>
              <div style={{paddingBottom: "25px"}}>
                <Card>
                  <Card.Img variant="top" src={res.cover} />
                  <Card.Body>
                    <Card.Title>{res.name}</Card.Title>
                    {res.category}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
