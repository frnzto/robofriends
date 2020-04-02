import React from 'react';
import "./Scroll.css"


const Scroll = (props)=>{
    return (
        <div id="style-5" className="pa3" style={{overflowY: "scroll",background:"#018181",borderRadius:"10px", height:"500px",width:"90%", margin:"0 auto",boxShadow:" inset 11px 10px 10px -4px rgba(0,0,0,0.51)"}}>
            {props.children}
        </div>
    )
}


export default Scroll;