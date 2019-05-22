/**
 * NPM import
 */
import React from 'react';
import {Container,Row,Col, Badge} from 'react-bootstrap';
/**
 * Local import
 */
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div >
    <Container id="app">
      <Row>
      <Col >
        <Badge xs={12} md={3} lg={8} variant="primary">Hello</Badge>
      </Col>
      <Col >
        <Badge xs={12} md={6} lg={6} variant="sucess">Depuis</Badge>
      </Col>
      <Col >
        <Badge xs={12} md={3} lg={3} variant="primary">React</Badge>
      </Col>
      </Row> 
    </Container>
  </div>
);

/**
 * Export
 */
export default App;
