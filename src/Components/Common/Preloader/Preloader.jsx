import preload from "../../../assets/images/preview.gif";
import React from "react";

const Preloader = () =>{
    return <div style={{backgroundColor:'white'}}><img src={preload}/></div>
}

export default Preloader;