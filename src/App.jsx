import { Route } from "react-router-dom";
import { Routes } from "react-router";
import Register from "./pages/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
    </Routes>
  )
};
