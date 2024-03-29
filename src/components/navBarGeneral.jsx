import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";

function NavBarGeneral() {
  return (
    <div>
      <Nav className="justify-content-center bg-body-tertiary bg-dark" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/bise">Bisección</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/falsa">Falsa posición</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/newton">Newton-Raphson</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/secante">Secante</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavBarGeneral;
