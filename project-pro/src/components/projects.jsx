import React, { useState } from "react";
import ProgressBar from "./sub-components/progressbar";
import { FaCircleXmark, FaEllipsisVertical } from "react-icons/fa6";


const Projects = (props)=>{
    const [ground, setGround] = useState(false);
    // const [floor, setFloor] = useState(true);

    const handleClick = () =>{
        setGround(true);
    }
    return(
        <div style={{backgroundColor : '#fff', padding: '10px 30px', marginRight: '20px'}} className="container flex-col mid-box">
            <div style= {{margin: "5px 0 2px"}} className="container flex-space-btw">
                <p className="project-state" style={{backgroundColor: props.bg}}>{props.state}</p>
                <button className="btn-no-bg"  onClick={handleClick}>{ground ?  <FaCircleXmark />:<FaEllipsisVertical /> }</button>
            </div>
            <h4 style={{margin: '0 0 3px'}}>{props.head3}</h4>
            <p style={{color : 'grey', margin: '0'}}>progress</p>
            <ProgressBar color= {props.bg} completed= {props.complete} />
        </div>
    )
}
export default Projects;