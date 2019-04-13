import React, { Component } from 'react'
import {
  Container,
  Row,
  Col
} from 'bootstrap-4-react';
import "./index.css"
export default class Description extends Component {
  render() {
    return (
      <div className="container">
       <Container className="container">
        <Row>
            <Col col="sm">
              <div >

              </div>
          <p>hey there!</p>
                 i’m john doe
          </Col>
          <Col col="sm">One of three columns</Col>
         
          </Row>
          </Container>
       </div>
    )
  }
}
