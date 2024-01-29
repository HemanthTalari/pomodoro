import React, { useState, useEffect } from 'react';
import sound from './ding.mp3'
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [inpt,changeinpt]= useState('')


  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
function secplay(){
  new Audio(sound).play( )
}
  useEffect(() => {
    var interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (inpt === 0) {
            clearInterval(interval);
            setIsActive(false);
          } else {
            changeinpt(inpt - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
    
  }, [isActive, inpt, seconds]);
  useEffect(()=>{secplay()},[])

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    changeinpt(inpt);
    setSeconds(0);
  };
  // useEffect

  return (
    <>
    <input value={inpt} onChange={(e)=>{changeinpt(e.target.value)}}/>

    <Container className="mt-5">
      <Row>
        <Col className="text-center">
          <h1>
            {String(inpt).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-center">
          <Button variant="primary" onClick={toggleTimer}>
            {isActive ? 'Pause' : 'Start'}
          </Button>{' '}
          <Button variant="danger" onClick={resetTimer}>
            Reset
          </Button>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
