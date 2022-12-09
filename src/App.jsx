import { Route } from "react-router-dom";
import { Routes } from "react-router";
import Register from "./pages/Register";
import RegisterCarta from "./pages/Register-Carta";
import Login from "./pages/Login";
import MostraCarta from "./components/mostraCarta/mostraCarta";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register-carta" element={<RegisterCarta />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mostraCarta" element={<MostraCarta />} />
    </Routes>
  )
};
