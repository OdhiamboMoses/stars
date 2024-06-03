import React from "react";
import './Navbar.css';

function Navbar(){
    return(
        <nav>
            <h2>County <span>Government</span></h2>
            <div className="navlinks">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact-Us</a></li>
                </ul>
            </div>
            <div className="hum-icon">
                <span className="hum"><i className="fa-solid fa-bars"></i></span>
                <div className="hum-links">
                    <ul>
                        <li><a href="./">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact-Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

// let humlinkBtn = document.getElementsByClassName("hum-links");

// function humBtn(){
//     if(humlinkBtn.style.display === "block"){
//         humlinkBtn = "none";
//     }else{
//         humlinkBtn = "block";
//     }
// }