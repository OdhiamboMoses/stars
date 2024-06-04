import React, {useState} from "react";
import './Home.css';
import Navbar from "./Navbar";
import About from "./About";
import Button from "./Button";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";


function Home(){
    const [bio, setBio] = useState("High-Definition Multimedia Interface is a proprietary audio/video interface for transmitting uncompressed video data and compressed or uncompressed digital audio data from an HDMI. High-Definition Multimedia Interface is a proprietary audio/video interface for transmitting uncompressed video data and compressed or uncompressed digital audio data from an HDMI. High-Definition Multimedia Interface is a proprietary audio/video interface for transmitting uncompressed video data and compressed or uncompressed digital audio data from an HDMI");

    function changeBio(){
        setBio("High-Definition Multimedia Interface is a proprietary audio/video interface for transmitting uncompressed");
    }
    return(
        <div>
            <Navbar />
            <section id="home-page">
                <h2>Welcome to Nairobi City</h2>
                <p>{bio}</p>
                <Button bioFunction={changeBio} text="Click for more"/>
            </section>
            <About />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;