import React, { useState } from "react";
import { FaCircleXmark } from "react-icons/fa6";
import { FaEllipsisVertical } from "react-icons/fa6";


const Projects = (props)=>{
    const [ground, setGround] = useState(false);

    const handleClick = () =>{
        setGround(true)
    }
    return(
        <div className="container flex-col">
            <div className="container">
                <p className="project-state">{props.state}</p>
                <button className="btn" onClick={handleClick}>{ground ?  <FaCircleXmark />:<FaEllipsisVertical /> }</button>
            </div>
        </div>
    )
}
export default Projects;