import React from "react";

const Para = (props) =>{
    return(
        <p style={{color: props.color}} className="p-text w-50">{props.text}</p>
    )
}
export default Para;