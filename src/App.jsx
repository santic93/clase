import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Rrd } from "./Components/ReactRouterDom";
import { About } from "./Components/About";
import { NavBar } from "./Components/NavBar";
import AboutDetail from "./Components/AboutDetail";
import { PostList } from "./Components/PostList";

import { ContReact } from "./Components/ContReact";
import DatosPersonalesProvider from "./Context/DatosPersonalesContext";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      {/* Compartimos con nuestros componentes el Contexto para que puedan acceder */}
      <DatosPersonalesProvider>
        <Routes>
          <Route path="/" element={<ContReact />} />
          <Route path="/" element={<Rrd />} /> 
          {/* <Route path="/" element={<Rrd />} /> */}
          {/* <Route path="/" element={<PostList />} props={variable} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:id" element={<AboutDetail />} /> */}
        </Routes>
      </DatosPersonalesProvider>
    </>
  );
}

export default App;
