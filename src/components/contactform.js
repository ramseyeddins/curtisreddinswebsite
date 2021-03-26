import emailjs from "emailjs-com";
import React, { useState } from 'react';
import Popup from './Popup';

export default function ContactUs() {


    const [isOpen, setIsOpen] = useState(false);
    
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    function sendEmail(e) {


        e.preventDefault();

        emailjs.sendForm('service_heggimc', 'template_1x1w8p8', e.target, 'user_8aC1BLVpvT2WgHD4j7IVw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()

    
    }

    return(
        <div>
            <div id="Padding" className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5">
                        <div id="Padding"  className="col-12 form-group">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div id="Padding" className="col-12 form-group pt-2">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div id="Padding" className="col-12 form-group pt-2">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div id="Padding" className="col-12 form-group pt-2">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div id="Padding" className="col-12 form-group pt-2">
                            <input type="submit" className="btn btn-info form-control" value="Send Message" onClick={togglePopup}></input>
                        </div>
                    </div>
                </form>
            </div>
                {isOpen && <Popup
                    content={<>
                    <b>Thank You!</b>
                    <p></p>
                    </>}
                    handleClose={togglePopup}
                />}
        </div>
    )
}

