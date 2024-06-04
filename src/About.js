import React from "react";
import './About.css';
import Button from "./Button";

export default function About(){
    return(
        <>
            <div className="about-cont" id="about">
                <div className="about-paragraph">
                    <h2>About</h2>
                    <p>
                        High-Definition Multimedia Interface is a proprietary audio/video interface for transmitting uncompressed video data and compressed or uncompressed digital audio data from an HDMI. High-Definition Multimedia Interface is a proprietary audio/video interface for transmitting uncompressed video data and compressed or uncompressed digital audio data from an HDMI.
                        High-Definition Multimedia Interface is a proprietary audio/video interface for transmitting uncompressed video data and compressed or uncompressed digital audio data from an HDMI
                    </p>
                    <Button text="More"/>
                </div>
                <img src={require("./logo.jpg")} />
            </div>
        </>
    );
}

