import React, { Component } from "react";
import Header from "../../Component/Header";
import Article from "../../Component/Article";
export default function Home() {
  return (
    <>
      <Header />
      <div className="container d-flex flex-column">
        <Article />
      </div>
    </>
  );
}
