import React, {useState} from 'react';
import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap'
import './App.css';

function App() {

  const [txtNumbers, setTxtNumbers] = useState('0');

  function addNumber(number){
    setTxtNumbers(txtNumbers + number)
  }

  function defineOperation(operation) {
    setTxtNumbers(operation)
  }

  return (
    <Jumbotron style={{
      background: 'transparent !important',
      backgroundColor: '#007bff',
      padding: '5px',
      margin: '5px',
      width: '400px'
    }} 
    >
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger">C</Button>
          </Col>
          <Col xs="9">
            <Form.Control type="text"
              name="txtNumbers"
              className="text-right"
              value={txtNumbers}
              readOnly />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" 
              onClick={(e) => addNumber('7')} 
            >7</Button>
          </Col>
          <Col>
            <Button variant="light" 
              onClick={(e) => addNumber('8')} 
            >8</Button>
          </Col>
          <Col>
            <Button variant="light" 
              onClick={(e) => addNumber('9')} 
            >9</Button>
          </Col>
          <Col>
            <Button variant="warning" 
              onClick={() => defineOperation('/')} >/</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" 
              onClick={(e) => addNumber('4')} 
            >4</Button>
          </Col>
          <Col>
            <Button variant="light" 
              onClick={(e) => addNumber('5')} 
            >5</Button>
          </Col>
          <Col>
            <Button variant="light" 
              onClick={(e) => addNumber('6')} 
            >6</Button>
          </Col>
          <Col>
            <Button variant="warning" 
              onClick={() => defineOperation('*')} >*</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" 
              onClick={(e) => addNumber('1')} 
            >1</Button>
          </Col>
          <Col>
            <Button variant="light" 
              onClick={(e) => addNumber('2')} 
            >2</Button>
          </Col>
          <Col>
            <Button variant="light" 
              onClick={(e) => addNumber('3')} 
            >3</Button>
          </Col>
          <Col>
            <Button variant="warning" 
              onClick={() => defineOperation('-')} >-</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" 
              onClick={(e) => addNumber('0')} 
            >0</Button>
          </Col>
          <Col>
            <Button variant="light" 
              onClick={(e) => addNumber()} 
            >.</Button>
          </Col>
          <Col>
            <Button variant="success">=</Button>
          </Col>
          <Col>
            <Button variant="warning" 
              onClick={() => defineOperation('+')} >+</Button>
          </Col>
        </Row>
      </Container>

    </Jumbotron>
  );
}

export default App;
