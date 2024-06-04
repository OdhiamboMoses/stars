import React from "react";
import './Navbar.css';

function Navbar(){

    function humBtn(){
        let humlinkBtn = document.getElementsByClassName("hum-links")[0];
        let res = window.getComputedStyle(humlinkBtn);
        if(res.display === "block"){
            humlinkBtn.style.display = "none";
        }else{
            humlinkBtn.style.display = "block";
        }
    }
    
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
                <span className="hum" onClick={humBtn}><i className="fa-solid fa-bars"></i></span>
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

