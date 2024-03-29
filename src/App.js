import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Bisección from "./pages/Bisección";
import Falsa from "./pages/Falsa"
import NewtonRaphson from "./pages/NewtonRaphson";
import Secante from "./pages/Secante";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/bise" element={<Bisección />} />
          <Route path="/falsa" element={<Falsa />} />
          <Route path="/newton" element={<NewtonRaphson />} />
          <Route path="/secante" element={<Secante />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
