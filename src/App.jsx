import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Rrd } from "./Components/ReactRouterDom";
import { About } from "./Components/About";
import { NavBar } from "./Components/NavBar";
import AboutDetail from "./Components/AboutDetail";
import { PostList } from "./Components/PostList";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Rrd />} /> */}
        <Route path="/" element={<PostList />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:id" element={<AboutDetail />} />
      </Routes>
    </div>
  );
}

export default App;
