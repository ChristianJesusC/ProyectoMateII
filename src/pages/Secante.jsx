import React, { useState } from "react";
import Funcion from "../components/calculadora";
import NavBarGeneral from "../components/navBarGeneral";
import * as math from "mathjs";
import { Button, Table } from "react-bootstrap";

function MetodoSecante() {
  const [x0, setX0] = useState();
  const [x1, setX1] = useState();
  const [funcion, setFuncion] = useState("");
  const [resultados, setResultados] = useState([]);
  const [valorI, setValor] = useState(1);

  const handleRangeChange = (event) => {
    setValor(Number(event.target.value));
  };

  const aplicarMetodoSecante = () => {
    let x0Actual = parseFloat(x0);
    let x1Actual = parseFloat(x1);
    const resultadosTemp = [];
    for (let i = 0; i < valorI; i++) {
      const f_x0 = math.evaluate(funcion.replace(/x/g, `(${x0Actual})`));
      const f_x1 = math.evaluate(funcion.replace(/x/g, `(${x1Actual})`));
      const x_temp = x1Actual - (f_x1 * (x1Actual - x0Actual)) / (f_x1 - f_x0);
      x0Actual = x1Actual;
      x1Actual = x_temp;
      const f_xi = math.evaluate(funcion.replace(/x/g, `(${x1Actual})`));
      resultadosTemp.push({
        iteracion: i + 1,
        x0: x0Actual,
        f_x0: f_x0,
        x1: x1Actual,
        f_x1: f_x1,
        xi: x_temp,
        f_xi: f_xi,
      });
    }
    setResultados(resultadosTemp);
  };

  return (
    <div>
      <NavBarGeneral />
      <Funcion funcion={funcion} setFuncion={setFuncion} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={x0}
          onChange={(e) => setX0(e.target.value)}
          placeholder="Valor inicial x0"
        />
        <input
          type="text"
          value={x1}
          onChange={(e) => setX1(e.target.value)}
          placeholder="Valor inicial x1"
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

        <Button onClick={aplicarMetodoSecante}>
          Aplicar Método de la Secante
        </Button>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Iteración</th>
            <th>x0</th>
            <th>f(x0)</th>
            <th>x1</th>
            <th>f(x1)</th>
            <th>xi</th>
            <th>f(xi)</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((resultado, index) => (
            <tr key={index}>
              <td>{resultado.iteracion}</td>
              <td>{resultado.x0}</td>
              <td>{resultado.f_x0}</td>
              <td>{resultado.x1}</td>
              <td>{resultado.f_x1}</td>
              <td>{resultado.xi}</td>
              <td>{resultado.f_xi}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MetodoSecante;
