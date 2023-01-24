import React,{useEffect, useState,createContext, useContext } from 'react'
import '../Style/Iklan.scss'
import IklanImage from '../Asset/iklam.jpg'
const currentName = createContext();
export default  function Iklan({parentToChild,data,childToParent}){
    const [allIklan,setAllIklan]=useState([])
    useEffect(()=>{
        console.log('did update runing iklan')
        setAllIklan(data)
    },[allIklan,data])
    // useMemo(() => {
    //     console.log('use memo jalan')
    //     // componentWillReceiveProps
    //     setAllIklan(data)
    //   },[data]);

    const render=()=>{
        return data.map((val,index)=>{
            return (
                <>
                <p key={index+100}>{val}</p>
                </>
            )
        })
    }

    // const data3 = "This is data from Child Component to the Parent Component."

    

    return (
        <>
            {/* <div primary onClick={() => childToParent(data3)}>Click Child</div>
            {parentToChild} */}
            {/* <UserContext.Provider value={user}> */}
                {/* <h1>{`Hello ${user}!`}</h1> */}
                {render()}
                <div className="iklan-card" key={1}>
                    <img src={IklanImage} alt="" />
                </div>    

            {/* </UserContext.Provider> */}
        </>
    )
}