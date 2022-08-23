import React from "react";
import '../styles/Header.css'
import {Link} from "react-router-dom"
import { AiOutlineSearch} from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";
import { userActionLogout } from "../redux/actions/userActions";


const Header = () =>{
    
    //Get UserData
    const userLoginState = useSelector((state) => state.userLoginState);
    const {userData} = userLoginState;
    //console.log(userData)

    const value = true

    //LOGOUT
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(userActionLogout())
    }

    return (
        <div>
            
            {/* Header - Navigation Bar*/}
            <div className="wapper">
                <div className="logoContainer">
                    <div className="logoText">
                        <Link to="/">Authentics</Link>
                    </div>
                </div>
                <div className="searchBar">
                    <div className="searchBarIcon">
                        <AiOutlineSearch/>
                    </div>
                    <input className="searchBarinput" 
                    placeholder="Search for brand, color, etc."/>
                </div>
                {
                    !userData ? 
                    (
                        <div className="navContainer">
                            <Link to="/Browse"><div className="navItem">Browse</div></Link>
                            <Link to="/Login" className="navConnect">Sign In</Link>
                        </div>
                    )
                    :
                    (
                            <div className="navContainer">
                                <Link to="/Browse"><div className="navItem">Browse</div></Link>
                                <Link to="/Cart/"><div className="navItem pl-1"><FaShoppingBag/></div></Link>
                                <div className="navDropdown">
                                <Link to="/Profile"><button 
                                        className="navDropdown__Hover"
                                        type="button" 
                                        data-toggle="dropdown" 
                                        aria-haspopup="true" 
                                        aria-expanded="false">
                                            Hi, {userData.name}
                                    </button></Link>
                                    <div className="navDropdown__menu">
                                        <Link to="/Profile"><div className="contentDropdown">Orders</div></Link>
                                        <Link to="/login"  onClick={logoutHandler}><div className="contentDropdown">Logout</div></Link>
                                    </div>
                                </div>
                            </div>
                    )
                }
            </div>
        </div>
    );
}

export default Header