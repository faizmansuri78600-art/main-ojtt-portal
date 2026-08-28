import { Routes, Route } from "react-router-dom";

import Home from "../pages201/Home";
import Login from "../pages201/Login";
import Register from "../pages201/Register";
import About from "../pages201/About";
import Contact from "../pages201/Contact";

function AppRoutes201() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes201;