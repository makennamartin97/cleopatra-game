import React,{useState} from 'react';
import {  Link } from '@reach/router';
import close from "../images/x-mark-16.png";
import open from "../images/whiteopen.png";
import logo from '../images/finallogo2.png'




function Navbar(props){
    //setting up state hook to tell whether nav options 
    //or mobile menu has been clicked
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <nav className="nav fixed">
            <div className="logo-nav">
                <div className="logo-container">
                Cleopatra Game
                    <a href="/"><img src={logo} className="navlogo" alt="logo"/></a>
                </div>
                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={closeMobileMenu}>
                        <Link to="/">Pyramid</Link>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <Link to="codesubmission" >Code Submission</Link>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <Link to="products" >Products</Link>
                    </li>
                </ul>
            </div>
            <div className="mobile-menu" onClick={handleClick}>
            {click ? (
                <img src={close} className="menu-icon2" alt="icon" />) : 
            ( <img src={open} className="menu-icon1" alt="icon" />)}
            </div>
        </nav>
    )
}

export default Navbar;