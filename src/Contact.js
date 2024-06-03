import React from "react";
import './Contact.css';

function Contact(){
    return(
        <>
            <div className="contact" id="contact">
                <div className="contact-body">
                    <div className="left-side">
                        
                    </div>
                    <div className="right-side">
                        <form>
                            <h3>Contact Us</h3><br/>
                            <label>Name</label><br/>
                            <input type="text" required/><br/>
                            <label>Email</label><br/>
                            <input type="email" required/><br/>
                            <label>Message</label><br/>
                            <textarea required></textarea><br/>
                            <button id="send-btn" onClick={sendclick}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;

function sendclick(){
        alert("Ready to send a Message.");
}