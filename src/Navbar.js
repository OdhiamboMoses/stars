import React from "react";
import './Navbar.css';

function Navbar(){
    return(
        <nav>
            <h2>County <span>Government</span></h2>
            <div className="navlinks">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact-Us</a></li>
                </ul>
            </div>
            <div className="hum-icon">
                <span><i class="fa-solid fa-bars"></i></span>
            </div>
        </nav>
    );
}

export default Navbar;