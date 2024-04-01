import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import NavBarGeneral from "../components/navBarGeneral";
import Funcion from "../components/calculadora";
import * as math from "mathjs";

function Bisección() {
  const [funcion, setFuncion] = useState("");
  const [valorI, setValor] = useState(1);
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [resultados, setResultados] = useState([]);

  const handleRangeChange = (event) => {
    setValor(Number(event.target.value));
  };

  const aplicarMetodoBiseccion = () => {
    let aActual = parseFloat(a);
    let bActual = parseFloat(b);
    const resultadosTemp = [];
    for (let i = 0; i < valorI; i++) {
      const c = (aActual + bActual) / 2;
      const f_c = math.evaluate(funcion.replace(/x/g, `(${c})`));
      resultadosTemp.push({
        iteracion: i + 1,
        a: aActual,
        b: bActual,
        c: c,
        f_c: f_c,
      });
      if (f_c < 0) {
        aActual = c;
      } else {
        bActual = c;
      }
    }
    setResultados(resultadosTemp);
  };

  return (
    <div>
      <NavBarGeneral />
      <h2>Bisección</h2>
      <input
        type="range"
        min="1"
        max="5"
        step="1"
        value={valorI}
        onChange={handleRangeChange}
      />
      <p>Iteraciones totales: {valorI}</p>
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
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="Valor inicial a"
        />
        <input
          type="text"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="Valor inicial b"
        />
        <Button onClick={aplicarMetodoBiseccion}>
          Aplicar Método de Bisección
        </Button>
      </div>

      <Table>
        <thead>
          <tr>
            <th>Iteración</th>
            <th>a</th>
            <th>b</th>
            <th>c</th>
            <th>f(c)</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((resultado, index) => (
            <tr key={index}>
              <td>{resultado.iteracion}</td>
              <td>{resultado.a}</td>
              <td>{resultado.b}</td>
              <td>{resultado.c}</td>
              <td>{resultado.f_c}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Bisección;
