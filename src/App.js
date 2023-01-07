import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home new_params={"testing"} />} />
    </Routes>
  );
}

export default App;
