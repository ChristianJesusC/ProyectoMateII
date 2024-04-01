import React,{useState} from "react";
import NavBarGeneral from "../components/navBarGeneral";
import Funcion from "../components/calculadora";

function Falsa() {
  const [funcion, setFuncion] = useState("");
  
  return (
    <div>
      <NavBarGeneral />
      <h2>Falsa posición</h2>
      <Funcion funcion={funcion} setFuncion={setFuncion} />
    </div>
  );
}

export default Falsa;
