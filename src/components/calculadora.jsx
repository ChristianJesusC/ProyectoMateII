import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import Plot from "react-plotly.js";
import * as math from 'mathjs';

const Funcion = ({ funcion, setFuncion }) => {
  const [data, setData] = useState([]);

  const agregarOperador = (operador) => {
    setFuncion(funcion + operador);
  };

  const actualizarGrafica = (funcion) => {
    if (typeof funcion === 'string') {
      const xValues = Array.from({ length: 1000 }, (_, i) => i / 100 - 5);
      const yValues = xValues.map((x) => math.evaluate(funcion.replace("x", x.toString())));
      setData([{ x: xValues, y: yValues, type: "scatter", mode: "lines" }]);

      let x0 = 0;
      let error = 1e-7;
      let derivada = math.derivative(funcion, 'x').toString();

      for (let i = 0; i < 100; i++) {
        let f = math.evaluate(funcion.replace("x", x0.toString()));
        let df = math.evaluate(derivada.replace("x", x0.toString()));

        if (Math.abs(f) < error) {
          break;
        }

        x0 = x0 - f / df;
      }
      setData(prevData => [...prevData, { x: [x0], y: [0], mode: 'markers', marker: { color: 'red', size: 10 }}]);
    }
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
      <Row className="mt-3 justify-content-center">
        <Col>
          <Button className="m-2" onClick={() => actualizarGrafica(funcion)}>
            Actualizar
          </Button>
          <Plot data={data} layout={{ title: "Gráfico de la función", autosize: true, xaxis: {range: [-5, 5]}, yaxis: {range: [-10, 10]}}} />
        </Col>
      </Row>
    </Container>
  );
};

export default Funcion;
