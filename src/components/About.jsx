import "./assets/css/about.css";
import ayushlogo from "./assets/icons/ayushlogo.png";
import education from "./assets/icons/menu/education.svg";
import workexp from "./assets/icons/menu/workexp.svg";
import skill from "./assets/icons/menu/skill.svg";

const About = ()=>{
    
    return (
        <>
            
            <div className="aboutWrap" id="about">
                <div className="aboutinside">
                    <div className="aboutRow1">
                        <div className="aboutLogo">
                            <img src={ayushlogo} />
                        </div>
                        <div className="abouttitle">
                            <p>About Me</p>
                        </div>
                    </div>
                    <div className="aboutparagraph">
                        <p>Hi, I am Ayush. </p>
                        <p>I am a Website developer with a passion for</p>
                        <p>building scalable and efficient web solutions.</p>
                        <p>Design | Development | Maintenance</p>
                        <p>and much more . . . </p>
                    </div>
                    <div className="aboutstats">
                        <div className="aboutstatsinside">
                            <div className="aboutstatsunit">
                                <div className="aboutstatsunitRow1">
                                    <div>
                                        <img src={education} />
                                    </div>
                                    
                                </div>
                                <div className="aboutstatsunitRow2">
                                    <p>Education</p>
                                    
                                </div>
                                <div className="aboutstatsunitRow3">
                                    
                                    <p>B.Tech [CSE]</p>
                                </div>
                                
                            </div>

                            <div className="aboutstatsunit">
                                <div className="aboutstatsunitRow1">
                                    <div>
                                        <img src={workexp} />
                                    </div>
                                    
                                </div>
                                <div className="aboutstatsunitRow2">
                                    <p>Work Experience</p>
                                    
                                </div>
                                <div className="aboutstatsunitRow3">
                                    
                                    <p>2+ Years</p>
                                </div>
                                
                            </div>

                            <div className="aboutstatsunit">
                                <div className="aboutstatsunitRow1">
                                    <div>
                                        <img src={skill} />
                                    </div>
                                    
                                </div>
                                <div className="aboutstatsunitRow2">
                                    <p>Expert in</p>
                                    
                                </div>
                                <div className="aboutstatsunitRow3">
                                    
                                    <p>Web Development</p>
                                </div>
                                
                            </div>

                            {/* <div className="aboutstatsunit">
                                <div className="aboutstatsunitRow1">
                                    <div>
                                        <img src={ayushlogo} />
                                    </div>
                                    
                                </div>
                                <div className="aboutstatsunitRow2">
                                    <p>Email Address</p>
                                    
                                </div>
                                <div className="aboutstatsunitRow3">
                                    
                                    <p>ayushdce2@gmail.com</p>
                                </div>
                                
                            </div> */}

                            

                        </div>

                    </div>


                </div>

            </div>
        </>
    )
}

export default About;