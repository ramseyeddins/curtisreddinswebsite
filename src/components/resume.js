import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css';
import DownloadLink from "react-download-link";
import Resume from './Curtis Ramsey Eddins_Resume.pdf'

const resume = () => {
    return (
        <div className="App">
            <div id="body">
                <div id="body-object">
                    <a href={Resume} className="Title" download="Curtis Ramsey Eddins_Resume.pdf">RESUME</a>
                    <hr/>
                    <div id="bold">CERTIFICATIONS</div>
                    <br/>
                    <br/>
                    <div id="text">
                        > Saleforce Platform Developer <br/>
                        > Salesforce Administrator
                    </div>
                    <br/>
                    <br/>
                    <div id="bold">LANGUAGES / FRAMEWORKS</div>
                    <br/>
                    <br/>
                    <div id="text">
                        Apex, SOQL, SOSL, Python, C++, Sql, 
                        HTML, CSS, JavaScript, Git, JQuery, 
                        Bootstrap, React.js, Node.js, .Net, Unix
                    </div>
                    <br/>
                    <br/>
                    <div id="bold">TECHNOLOGIES</div>
                    <br/>
                    <br/>
                    <div id="text">
                        Visual Studio Code, SFDX, GitHub, Salesforce Data Loader, Salesforce Workbench, MySql Server
                    </div>
                    <br/>
                    <br/>
                    <div id="bold">EDUCATION</div>
                    <br/>
                    <br/>
                    <div id="bold">Austin Community College</div><br/>
                    <div id="text">
                        August 2017 - December 2019 <br/>
                        > Programming Fundamentals I - III <br/>
                        > Intro MySql <br/>
                        > Web Programming I - II <br/>
                    </div>
                    
                    <br/>

                    <div id="bold">The University of Texas</div>
                    <div className="italic"> - Bachelor of Arts</div> <br/>
                    <div id="text">
                        August 2006 - December 2010 <br/>
                        > B.A. in History with a concentration in Social Studies. <br/>
                        > Minor in Education/UTeach Secondary Education Program. <br/>
                    </div>
                    <br/>
                    <div id="bold">EXPERIENCE</div>
                    <br/>
                    <br/>
                    <div id="bold">Asti Trattoria</div>
                    <div className="italic"> - Server</div> <br/>
                    <div id="text">
                        July 2017 - March 2020<br/>
                        > Provided customer service and wine knowledge<br/>
                        > Trained new employees in effective service<br/>
                    <br/>
                    </div>

                    <div id="bold">Honey’s</div>
                    <div className="italic"> - Server</div> <br/>
                    <div id="text">
                        November 2015 - June 2017 <br/>
                        > Waited tables and provided customer service <br/>
                    <br/>
                    </div>

                    <div id="bold">El Mercado</div>
                    <div className="italic"> - Server</div> <br/>
                    <div id="text">
                        August 2012 - July 2015 <br/>
                        > Served tables in a fast-paced locally owned restaurant <br/>
                    <br/>
                    </div>

                    <div id="bold">Pflugerville ISD</div>
                    <div className="italic"> - Substitute Teacher</div> <br/>
                    <div id="text">
                        August 2010 - May 2011<br/>
                        > Assisted in the execution of lesson plans<br/>
                        > Utilized effective classroom management<br/>
                    <br/>
                    </div>

                    <div id="bold">Touchstone Builders</div>
                    <div className="italic"> - Assistant</div> <br/>
                    <div id="text">
                        May 2009 - August 2012 <br/>
                        > Assisted in the completion of custom concrete homes <br/>
                        > Installed finishes, delivered materials, and organized sites <br/>
                    <br/>
                    </div>
                </div>
                    <a href={Resume} className="Pdf" download="Curtis Ramsey Eddins_Resume.pdf">PDF DOWNLOAD</a>
                    <br/>
                    <br/>
            </div>
        </div>
    )
}

export default resume