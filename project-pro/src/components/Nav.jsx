import React from "react";
import menu from "../arrays/nav"
import List from "./sub-components/List";

const mapMenu =(one)=>{
    return(
        <List item={one} />
    )
}

const Nav = () =>{
    return(
        <>
            <nav className="container flex-space-btw pdg">
                <a className="big-head" href="index.html">Project Pro</a>
                <ul className="container no-list">
                    {menu.map(mapMenu)}
                </ul>
                <button className="btn btn-gradient">Login</button>
            </nav>
        </>
    )
}
export default Nav;