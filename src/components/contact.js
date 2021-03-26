import ContactUs from './contactform.js';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css';
import Mailto from './mail.js';
import{ init } from 'emailjs-com';
init("user_8aC1BLVpvT2WgHD4j7IVw");


const contact = () => {
    return (
        <div className="App">
            <div id="body">
                <div id="body-object">
                    <h1 id="bold" className="Contact">CONTACT</h1>
                    <ContactUs/>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default contact