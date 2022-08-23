import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import '../styles/Header.css';

const Header = () =>{
    return (
    <div className="wapper">
        <div className="logoContainer">
             <div className="logoText">Authentics</div>
        </div>
        <div className="searchBar">
            <div className="searchBarIcon">
                <AiOutlineSearch/ >
            </div>
        </div>
    </div>
    )
}

export default Header