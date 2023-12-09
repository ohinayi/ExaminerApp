import React, {  } from "react";
import {Link, } from 'react-router-dom'
import "./Navbar.css";




const Navbar = () => { 
    return(
        <div>
            <nav className="main"  style={{}}>
                <a className="ui teal inverted segment" href="/">Examiner</a>
                <div className="links" id="links">
                    <Link to='/' className="each">Home</Link>
                    <Link to='/about' className="each">About</Link>
                    <Link to='/contact' className="each">Contact</Link>
                </div>  
                
            </nav>
        </div>
    )
}

export default Navbar;