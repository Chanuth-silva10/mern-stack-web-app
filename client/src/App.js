import "./App.css";
import { Route, Routes, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingCar from "./pages/BookingCar";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bookingcar" element={<BookingCar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
