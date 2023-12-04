import './App.css';
import Labs from "./labs/index"
import HelloWorld from './labs/lab3/HelloWorld';
import Kanbas from './Kanbas/index';
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Project from "./Project";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/labs" />} />
          <Route path="/labs/lab3/HelloWorld" element={<HelloWorld />} />
          <Route path="/labs/*" element={<Labs />} />
          <Route path="/project/*" element={<Project />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>

  );
}

export default App;
