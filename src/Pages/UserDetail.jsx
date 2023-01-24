import React, { useState } from "react";

import Iklan from '../Component/Iklan'
import SubChild from '../Component/subChild'

var userDetailContext = React.createContext(null);
export default function UserDetailsComponent() {
  var [userDetails] = useState({
    name: "Mayank",
    age: 30
  });

  return (
    <userDetailContext.Provider value={userDetails}>
      <h1>This is the Parent Component</h1>
      <hr />
      <ChildComponent userDetails={userDetails} />
      <SubChild userDetails={userDetails}/>
    </userDetailContext.Provider>
  );
}

function ChildComponent(props) {
  return (
    <div>
      <h2>This is Child Component</h2>
      <hr />
      <SubChildComponent />
    </div>
  );
}

function SubChildComponent(props) {
  var contextData = React.useContext(userDetailContext);
  return (
    <div>
      <h3>This is Sub Child Component</h3>
      <h4>User Name: {contextData.name}</h4>
      <h4>User Age: {contextData.age}</h4>
    </div>
  );
}

// function SubChild() {
//     var contextData = React.useContext(userDetailContext);
//     console.log(contextData,' context data')
//     return (
//       <>
//         <div>
//           <h3>This is Sub Child Component</h3>
//           {/* <h4>User Name: {contextData.name}</h4>
//           <h4>User Age: {contextData.age}</h4> */}
//         </div>
//       </>
//     );
//   }
  