import React from "react";
import './Home.css';
import Navbar from "./Navbar";
import About from "./About";
import Button from "./Button";
import Services from "./Services";
import Contact from "./Contact";

function Home(){
    return(
        <div>
            <Navbar />
            <section id="home-page">
                <h2>Welcome to Nairobi City</h2>
                <p>
                High-Definition Multimedia Interface is a proprietary audio/video interface for transmitting uncompressed video data and compressed or uncompressed digital audio data from an HDMI. High-Definition Multimedia Interface is a proprietary audio/video interface for transmitting uncompressed video data and compressed or uncompressed digital audio data from an HDMI. High-Definition Multimedia Interface is a proprietary audio/video interface for transmitting uncompressed video data and compressed or uncompressed digital audio data from an HDMI
                </p>
                <Button text="Click for more"/>
            </section>
            <About />
            <Services />
            <Contact />
        </div>
    );
}

export default Home;