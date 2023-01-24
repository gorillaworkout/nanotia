import React from "react";
var userDetailContext = React.createContext(null);
export default function SubChild() {
  var contextData = React.useContext(userDetailContext);
  console.log(contextData,' context data')
  return (
    <>
      <div>
        <h3>This is Sub Child Component</h3>
        {/* <h4>User Name: {contextData.name}</h4>
        <h4>User Age: {contextData.age}</h4> */}
      </div>
    </>
  );
}
