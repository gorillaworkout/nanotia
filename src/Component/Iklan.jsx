import React from 'react'
import '../Style/Iklan.scss'
import IklanImage from '../Asset/iklam.jpg'
export default  function Iklan(){

    return (
        <>
            <div className="iklan-card">
                <img src={IklanImage} alt="" />
            </div>    
        </>
    )
}