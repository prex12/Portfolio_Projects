import React from "react";

const ProgressBar = (props)=>{
    const outerProg = {
        height: "18px",
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: '10px 0'
      }

    const innerProg = {
        height: '100%',
        width: props.completed +"%",
        backgroundColor: props.color,
        borderRadius: 'inherit',
        textAlign: 'right'
      }
      
    return(
        <div style={outerProg}>
            <div style={innerProg}>
                <span style={{color: "white", fontSize: '0.8rem', padding: '0'}}>{props.completed}</span>
            </div>
        </div>
    )
}
export default ProgressBar;