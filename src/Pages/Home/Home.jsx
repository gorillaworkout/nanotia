import React, { useEffect, useState, createContext, useContext } from "react";
import Header from "../../Component/Header";
import Article from "../../Component/Article";
import Iklan from "../../Component/Iklan";

export default function Home() {
  const [allIklan, setAllIklan] = useState([
    "Bayu",
    "Darmawan",
    "Adella",
    "Nanda",
  ]);

  const onSave = () => {
    console.log(...allIklan, "all iklan");
    let newItem = allIklan;
    newItem.push("ini data baru");
    // setAllIklan([...newItem]);
    // setAllIklan(...allIklan,'aku laper banget')
  };

  // useEffect(() => {
  //   console.log(allIklan, " did update");
  // }, [allIklan]);

  // const [data, setData] = useState('');
  // const parentToChild = () => {
  //   setData("This is data from Parent Component to the Child Component.");
  // }

  // const childToParent = (childdata) => {
  //   setData(childdata);
  //   console.log(childdata,' child data from child')
  // }

  const render = () => {
    console.log("render is running, home");
    return allIklan.map((val, index) => {
      return (
        <>
          <p key={index + 100}>{val}</p>
        </>
      );
    });
  };
  return (
    <>
      {/* <CurrentName.Provider value={userDetails}> */}
      <Header />
      <div className="container d-flex flex-row">
        <div className="d-flex flex-column col-8">
          <Article title="Bayu Darmawan" />
          {/* <div onClick={onSave}>
            tambah item
          </div> */}
          {/* {render()} */}
        </div>
        <div className="d-flex flex-column col-4">
          <div></div>

          {/* <Iklan key={1} data={allIklan}
            // parentToChild={data}
            // childToParent={childToParent}
            />

           */}
        </div>
      </div>

      {/* </CurrentName.Provider> */}
    </>
  );
}
