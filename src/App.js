import React from "react";
import Home from "./components/Home";
import Details from "./components/Details";
import { Route, Routes } from "react-router-dom";
import BookTicket from "./components/BookTicket";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/bookTicket" element={<BookTicket />} />
    </Routes>
  );
}

export default App;
