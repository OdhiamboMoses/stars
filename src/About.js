import React from "react";
import './About.css';
import Button from "./Button";

export default function About(){
    return(
        <>
            <div className="about-cont">
                <div className="about-paragraph">
                    <h2>About</h2>
                    <p>
                        High-Definition Multimedia Interface is a proprietary audio/video interface for transmitting uncompressed video data and compressed or uncompressed digital audio data from an HDMI. High-Definition Multimedia Interface is a proprietary audio/video interface for transmitting uncompressed video data and compressed or uncompressed digital audio data from an HDMI.
                        High-Definition Multimedia Interface is a proprietary audio/video interface for transmitting uncompressed video data and compressed or uncompressed digital audio data from an HDMI
                    </p>
                    <Button text="More"/>
                </div>
                <img src="https://images.unsplash.com/photo-1716847214553-15c68ce82c94?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
        </>
    );
}

