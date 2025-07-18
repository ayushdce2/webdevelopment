import playSVG from "./assets/icons/play.svg";
import ayushSVG from "./assets/icons/ayush.png";
import servicesseparator from "./assets/icons/servicesseparator.svg";
import instagram from "./assets/icons/social/instagram.png";
import linkedin from "./assets/icons/social/linkedin.png";
import wordpress from "./assets/icons/social/wordpress.png";
import youtube from "./assets/icons/social/youtube.png";
import homeicon from "./assets/icons/menu/home.svg";
import user from "./assets/icons/menu/user.svg";
import skill from "./assets/icons/menu/skill.svg";
import download from "./assets/icons/menu/download.svg";
import digitalMark from "./assets/icons/menu/digitalMark.svg";
import www from "./assets/icons/menu/www.svg";
import tool from "./assets/icons/menu/tool.svg";
import projects from "./assets/icons/menu/projects.svg";
import email from "./assets/icons/menu/email.svg";
import ayushlogo from "./assets/icons/ayushlogo.png";
import { useState } from "react";




const TopHeader = ()=>{
    const[activeMenu,setActiveMenu]=useState("home");
    const selectedMenu=(item)=>{
        setActiveMenu(item);
    }
    return (
        <>
        
            <div className="topheaderMain area" id="home">
                <div className="topheaderMainInside">

                
                <div className="topMenu">
                    <div className="brandLogo">
                        <div className="brnadLogoIcon">
                            {/* <p>A</p> */}
                            <img src={ayushlogo} />
                        </div>
                        <a href="/portfolio" className="brandText">Ayush</a>
                    </div>
                    <div className="topMenuList">
                        <ul>
                            <li><a href="#home" className={activeMenu==="home" ? "activeMenu" : ""} onClick={()=>{selectedMenu("home")}}><div className="topMenuIconItem"><img src={homeicon}/></div><p>Home</p></a></li>
                            <li><a href="#services" className={activeMenu==="services" ? "activeMenu" : ""} onClick={()=>{selectedMenu("services")}}><div className="topMenuIconItem"><img src={skill}/></div><p>Services</p></a></li>
                            <li><a href="#about" className={activeMenu==="about" ? "activeMenu" : ""} onClick={()=>{selectedMenu("about")}}><div className="topMenuIconItem"><img src={user} /></div><p>About</p></a></li>
                            <li><a href="#favouriteTool" className={activeMenu==="favouriteTool" ? "activeMenu" : ""} onClick={()=>{selectedMenu("favouriteTool")}}><div className="topMenuIconItem"><img src={tool}/></div><p>Favourite Tools</p></a></li>
                            <li><a href="#myProject" className={activeMenu==="myProject" ? "activeMenu" : ""} onClick={()=>{selectedMenu("myProject")}}><div className="topMenuIconItem"><img src={projects}/></div><p>My Projects</p></a></li>
                            
                            {/* <li>HOME</li> */}
                        </ul>

                    </div>
                    <div className="topMenuContact">
                        
                            <a href="#contactMe">
                            <div>
                                <img src={email}/>
                            </div>
                            <p>
                                Contact Me
                            </p>
                            </a>

                    </div>
                    
                </div>

                <div className="topheaderbanner">
                    <div className="topheaderbannerleft">
                        <div className="thbl_row1">
                            <div className="thbl_row1_inside">
                            
                                    <span className="thbl_corner_top"></span>
                                    <span className="thbl_corner_bottom"></span>
                                    <p>Hello There !</p>
                              

                            </div>

                        </div>

                        <div className="thbl_row2">
                            <div className="thbl_row2_inside">
                            
                                    <p>I'm <span className="myName">Ayush,</span></p>
                                    <p>Website Developer</p>
                                    <p>Based in India.</p>
                              

                            </div>

                        </div>

                        <div className="thbl_row3">
                            <div className="thbl_row3_inside">
                            
                                    <p>I'm an experienced Website Developer with 2+ years in the field, collaborating with various individual clients and startups.</p>
                              
                            </div>

                        </div>

                        <div className="thbl_row5">
                            <div className="thbl_row5_inside">
                                <a href="https://www.linkedin.com/in/ayushdce2/" target="_blank"><img src={linkedin}/></a>
                                <a href="https://www.instagram.com/ayushdce2/" target="_blank"><img src={instagram}/></a>
                                <a href="https://techtapasvi.com/" target="_blank"><img src={wordpress}/></a>
                                <a href="https://www.youtube.com/@TechTapasvi" target="_blank"><img src={youtube}/></a>

                            </div>

                        </div>

                        <div className="thbl_row4">
                            <div className="thbl_row4_inside">
                                <div className="thbl_row4_button_wrap">
                                    <div className="viewMe">
                                        <a href="https://drive.google.com/file/d/1Az7fVqf4zjsAoIRQQwhS8ivDR3goeMt-/view?usp=sharing" target="_black" className="thbl_button">Download CV</a>
                                    </div>
                                    <div className="playButton">
                                        <a href="https://drive.google.com/file/d/1Az7fVqf4zjsAoIRQQwhS8ivDR3goeMt-/view?usp=sharing" target="_blank" className="thbl_button">
                                            <img src={download}/>
                                        </a>
                                    </div>

                                </div>
                                <a href="#contactMe" className="thbl_row4_hireMe"  >
                                    Hire Me
                                </a>
                                                          
                            </div>

                        </div>
                        
                        

                    </div>
                    <div className="topheaderbannerright">
                        <div className="topheaderbannerright_inside">
                            <img src={ayushSVG}/>
                            <div className="thbr_website_text">
                                <div className="thbr_web_text_img1">
                                    <img src={digitalMark}/>
                                </div>
                                <p>Website Design</p>
                            </div>
                            <div className="thbr_marketing_text">
                                <div className="thbr_web_text_img2">
                                    <img src={www}/>
                                </div>
                                <p>Website Development</p>
                            </div>
                        </div>
                        <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
                        

                    </div>

                </div>
                <div className="services_list">
                            <div className="services_list_inside">
                                <div className="servicesseparator"><img src={servicesseparator}/></div>
                                <div><p>Web Development</p></div>
                                <div className="servicesseparator"><img src={servicesseparator}/></div>
                                <div><p>Website Design</p></div>
                                <div className="servicesseparator"><img src={servicesseparator}/></div>
                                <div><p>Dashboard</p></div>
                                <div className="servicesseparator"><img src={servicesseparator}/></div>
                                <div><p>Business Web</p></div>
                                <div className="servicesseparator"><img src={servicesseparator}/></div>
                                <div><p>Ecommerce Web</p></div>
                                <div className="servicesseparator"><img src={servicesseparator}/></div>
                                <div><p>Landing Pages</p></div>
                                <div className="servicesseparator"><img src={servicesseparator}/></div>


                            </div>

                        </div>
                        

            </div>
            </div>
            
       
            
        </>
    )
}

export default TopHeader;