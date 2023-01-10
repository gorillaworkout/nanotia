import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import { GetAllProduct } from "./Redux/Actions/ProductActions";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DetailArticle from "./Pages/Detail/detailArticle.jsx";

function App() {
  const dispatch = useDispatch();
  const REACT_VERSION = React.version;
  useEffect(() => {
    fetchingAllProduct();
  }, []);
  const fetchingAllProduct = () => {
    dispatch(GetAllProduct());
  };

  return (
    <Routes>
      <Route exact path="/" element={<Home new_params={"testing"} />} />
      <Route exact path="/detail/:detail" element={<DetailArticle new_params={"testing"} />} />
    </Routes>
  );
}

export default App;
