import React from "react";
import NavBarGeneral from "../components/navBarGeneral";
import "../css/Inicio.css"; 

function Inicio() {
  const nombre = "Christian Jesús Chiu Valdivieso";
  const matri = "224745, 223225";
  const cuatrimestre = "5to Cuatrimestre";
  const grupo = "Grupo C";
  const materia = "Matemáticas para Ingeniería II	";
  const universidad = "Universidad Politecnica de Chiapas";

  return (
    <div>
      <NavBarGeneral />
      <div className="inicio-container">
        <div className="info-container">
          <p>Nombre: {nombre}</p>
          <p>Matriculas: {matri}</p>
          <p>Cuatrimestre: {cuatrimestre}</p>
          <p>Grupo: {grupo}</p>
          <p>Materia: {materia}</p>
          <p>Universidad: {universidad}</p>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
