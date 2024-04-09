import React, { useState } from "react";
import Swal from "sweetalert2";
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
    if (funcion === "" || a === "" || b === "") {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "Faltan datos",
      });
    } else {
      let aActual = parseFloat(a);
      let bActual = parseFloat(b);
      const resultadosTemp = [];
      for (let i = 0; i < valorI; i++) {
        const f_a = math.evaluate(funcion.replace(/x/g, `(${aActual})`));
        const f_b = math.evaluate(funcion.replace(/x/g, `(${bActual})`));
        const c = (aActual * f_b - bActual * f_a) / (f_b - f_a);
        const f_c = math.evaluate(funcion.replace(/x/g, `(${c})`));
        resultadosTemp.push({
          iteracion: i + 1,
          a: aActual,
          f_a: f_a,
          b: bActual,
          f_b: f_b,
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
    }
  };
  return (
    <div>
      <NavBarGeneral />
      <h2>Falsa Posición</h2>
      <Funcion funcion={funcion} setFuncion={setFuncion} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="range"
          min="1"
          max="5"
          step="1"
          value={valorI}
          onChange={handleRangeChange}
        />
        <p>Iteraciones totales: {valorI}</p>
        <input
          type="text"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="Valor inicial x0"
        />
        <input
          type="text"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="Valor inicial x1"
        />
        <Button onClick={aplicarMetodoBiseccion}>
          Aplicar Método de Bisección
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
              <td>{resultado.a}</td>
              <td>{resultado.f_a}</td>
              <td>{resultado.b}</td>
              <td>{resultado.f_b}</td>
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
