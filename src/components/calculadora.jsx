import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";

const Funcion = ({ funcion, setFuncion }) => {

  const agregarOperador = (operador) => {
    setFuncion(funcion + operador);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Form.Control
            type="text"
            value={funcion}
            onChange={(e) => setFuncion(e.target.value)}
            placeholder="Ingresa la función f(x)"
          />
        </Col>
      </Row>
      <Row className="mt-3 justify-content-center">
        <Col>
          <Button className="m-2" onClick={() => agregarOperador("^")}>
            ^
          </Button>
          <Button className="m-2" onClick={() => agregarOperador("e^")}>
            e^
          </Button>
          <Button className="m-2" onClick={() => agregarOperador("sin(")}>
            sen
          </Button>
          <Button className="m-2" onClick={() => agregarOperador("cos(")}>
            cos
          </Button>
          <Button className="m-2" onClick={() => agregarOperador("tan(")}>
            tan
          </Button>
          <Button className="m-2" onClick={() => agregarOperador("log(")}>
            log
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Funcion;
