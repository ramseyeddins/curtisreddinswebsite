import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css';
import ImageSource from './me.png';
import Mailto from './mail.js';
import { SocialIcon } from 'react-social-icons';





const me = () => {
    return (
        <div className="App">
            <div id="me">
                <img className="Photo" src={ImageSource} alt="logo"></img>
                <div className="Name">
                CURTIS RAMSEY EDDINS
                    <div className="Email">
                        <Mailto className="Email" email="ramseyeddins@gmail.com">
                        ramseyeddins@gmail.com
                        </Mailto>
                    </div>
                    <hr/>
                    <div>
                        <div className="Welcome">
                            Hi! My name is Curtis Ramsey Eddins. 
                            Welcome to my personal website. 
                            I enjoy building applications, creating websites, 
                            and learning new skills. This site was build using 
                            React, React-Bootstrap, React-Router, React-Mailto, 
                            and EmailJS. Thanks for stopping by. 
                        </div>
                    </div>
                    <hr/>
                    <SocialIcon id="icon" url="https://github.com/ramseyeddins" />
                    <SocialIcon id="icon" url="https://www.linkedin.com/in/curtis-e-63b954208/" />
                    <SocialIcon id="icon" url="https://www.instagram.com/cre_iv/" />
                    <SocialIcon id="icon" url="https://trailblazer.me/id/ramseyeddins" />    
                    <br/>
                    <br/>
                </div>
            </div>                
        </div>
    )
}

export default me