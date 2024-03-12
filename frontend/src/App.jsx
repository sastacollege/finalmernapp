//IMPORT COMPONENTS
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import MainPage from "./Pages/MainPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className={"mainContainer"}>
      <MainPage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
