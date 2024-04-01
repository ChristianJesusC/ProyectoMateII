import React, { useState } from "react";
import NavBarGeneral from "../components/navBarGeneral";
import * as math from "mathjs";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import Funcion from "../components/calculadora";
import Swal from "sweetalert2";

function NewtonRaphson() {
  const [valorInicial, setValorInicial] = useState("");
  const [raiz, setRaiz] = useState(null);
  const [funcion, setFuncion] = useState("");
  const [derivada, setDerivada] = useState("");
  const [resultados, setResultados] = useState([]);
  const [valorI, setValor] = useState(1);

  const handleRangeChange = (event) => {
    setValor(Number(event.target.value));
  };

  const calcularDerivada = () => {
    try {
      const deriv = math.derivative(funcion, "x").toString();
      setDerivada(deriv);
    } catch (error) {
      console.error("Error al calcular la derivada:", error);
      setDerivada("Error en la función ingresada");
    }
  };

  const aplicarNewtonRaphson = () => {
    if (funcion === ""||derivada===""||valorInicial==="") {
      Swal.fire({
        icon: "error",
        title:"ERROR",
        text: "Faltan datos"
      })    }else {
      let valorActual = valorInicial;
      let resultadosTemp = [];
      for (let i = 0; i < valorI; i++) {
        try {
          const fxi = math.evaluate(funcion.replace(/x/g, `(${valorActual})`));
          const dfxi = math.evaluate(
            derivada.replace(/x/g, `(${valorActual})`)
          );
          valorActual = valorActual - fxi / dfxi;
          resultadosTemp.push(valorActual);
        } catch (error) {
          console.error("Error en el método de Newton-Raphson:", error);
          break;
        }
      }
      setRaiz(valorActual);
      setResultados(resultadosTemp);
    }
  };

  return (
    <div>
      <NavBarGeneral />
      <h1>Newton-Raphson</h1>
      <Funcion funcion={funcion} setFuncion={setFuncion} />
      <Container>
        <Row className="mt-3">
          <Col>
            <Button onClick={calcularDerivada}>Calcular Derivada</Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p>Derivada: {derivada}</p>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={valorInicial}
          onChange={(e) => setValorInicial(e.target.value)}
          placeholder="Valor inicial x0"
        />
        <p />
        <input
          type="range"
          min="1"
          max="5"
          step="1"
          value={valorI}
          onChange={handleRangeChange}
        />
        <p>Iteraciones totales: {valorI}</p>
        <Button onClick={aplicarNewtonRaphson}>Aplicar Newton-Raphson</Button>
        <p>Raíz aproximada: {raiz}</p>
        <Table>
          <thead>
            <tr>
              <th>Iteración</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {resultados.map((resultado, index) => (
              <tr key={index}>
                <td>x{index + 2}</td>
                <td>{resultado}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default NewtonRaphson;
