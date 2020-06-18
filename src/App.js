import React, {useState} from 'react';
import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap'
import './App.css';
import AppService from './App.service';

function App() {

  const [calculate, concatNumber, SUM, SUBTRACTION, MULTIPLICATION, DIVISION] = AppService();

  const [txtNumbers, setTxtNumbers] = useState('0');
  const [number1, setNumber1] = useState('0');
  const [number2, setNumber2] = useState(null);
  const [operation, setOperation] = useState(null);

  function addNumber(number){
    let result;
    if(operation === null) {
      result = concatNumber(number1, number);
      setNumber1(result);
    } else {
      result = concatNumber(number2, number);
      setNumber2(result);
    }

    setTxtNumbers(result);
  }

  function defineOperation(op) {
    if(operation === null){
      setOperation(op);
      return;
    }

    if(number2 !== null){
      const result = calculate(parseFloat(number1), parseFloat(number2), operation);
      setOperation(op);
      setNumber1(result.toString());
      setNumber2(null);
      setTxtNumbers(result.toString());
    }
  }

  function actionCalculate() {
    if(number2 === null){
      return;
    }

    const result = calculate(parseFloat(number1), parseFloat(number2), operation);
    setTxtNumbers(result);
  }

  function clear() {
    setTxtNumbers('0');
    setNumber1(null);
    setNumber2(null);
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
            <Button variant="danger"
              onClick={clear} >C</Button>
          </Col>
          <Col xs="9">
            <Form.Control type="text"
              name="txtNumbers"
              className="text-right"
              value={txtNumbers}
              data-testid="txtNumbers"
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
              onClick={() => defineOperation(DIVISION)} >/</Button>
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
              onClick={() => defineOperation(MULTIPLICATION)} >*</Button>
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
              onClick={() => defineOperation(SUBTRACTION)} >-</Button>
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
              onClick={(e) => addNumber('.')} 
            >.</Button>
          </Col>
          <Col>
            <Button variant="success"
              onClick={actionCalculate} >=</Button>
          </Col>
          <Col>
            <Button variant="warning" 
              onClick={() => defineOperation(SUM)} >+</Button>
          </Col>
        </Row>
      </Container>

    </Jumbotron>
  );
}

export default App;
