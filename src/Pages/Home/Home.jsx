import React from "react";
import Header from "../../Component/Header";
import Article from "../../Component/Article";
import Iklan from '../../Component/Iklan';
export default function Home() {
  return (
    <>
      <Header />
      <div className="container d-flex flex-row">
        <div className="d-flex flex-column col-8">
            <Article />
        </div>
        <div className="d-flex flex-column col-4">
            {/* <Iklan/> */}
        </div>
      </div>
    </>
  );
}
