import React from "react";

const List = (props)=>{
    return(
            <li><a className="listItem" href="index">{props.item}</a></li>
    )
}
export default List;