import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Interface1 from "./pages/interface1";
import Interface2 from "./pages/interface2";
import Interface3 from "./pages/interface3";
import Interface4 from "./pages/interface4";
import Interface5 from "./pages/interface5";
import Interface6 from "./pages/interface6";
import Interface7 from "./pages/interface7";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interface1" element={<Interface1 />} />
          <Route path="/interface2" element={<Interface2 />} />
          <Route path="/interface3" element={<Interface3 />} />
          <Route path="/interface4" element={<Interface4 />} />
          <Route path="/interface5" element={<Interface5 />} />
          <Route path="/interface6" element={<Interface6 />} />
          <Route path="/interface7" element={<Interface7 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
