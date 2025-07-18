import "./assets/css/footer.css";
import instagram from "./assets/icons/social/instagram.png";
import linkedin from "./assets/icons/social/linkedin.png";
import wordpress from "./assets/icons/social/wordpress.png";
import youtube from "./assets/icons/social/youtube.png";
import ayushlogo from "./assets/icons/ayushlogo.png";
import location from "./assets/icons/location.svg";
import footerEmail from "./assets/icons/footerEmail.svg";

const Footer = ()=>{
    let currentYear = new Date().getFullYear();
    return (
        <>
            <div className="footertopWrap">
                <div className="footertopinside">

                    <div className="footerIntroWrap">
                        <div className="footerIntroinside">
                            <div className="footerIntroRow1">
                                <div className="footerIntroRow1symbol">
                                    {/* A */}
                                    <img src={ayushlogo} />
                                </div>
                                <div className="footerIntroRow1text">
                                    <p>Ayush</p>
                                </div>

                            </div>
                            <div className="footerIntroRow2">
                                <p>Passionate web developer crafting fast, responsive, and user-friendly websites that drive results.
                                Skilled in both frontend and backend technologies, turning ideas into functional, beautiful digital experiences.</p>

                            </div>
                            <div className="footerIntroRow3">
                            <a href="https://www.linkedin.com/in/ayushdce2/" target="_blank"><img src={linkedin}/></a>
                                <a href="https://www.instagram.com/ayushdce2/" target="_blank"><img src={instagram}/></a>
                                <a href="https://techtapasvi.com/" target="_blank"><img src={wordpress}/></a>
                                <a href="https://www.youtube.com/@TechTapasvi" target="_blank"><img src={youtube}/></a>

                            </div>

                        </div>

                    </div>
                    <div className="footerNavWrap">
                        <div className="footerNavinside">
                            <p>Navigation</p>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#favouriteTool">Favourite Tools</a></li>
                                <li><a href="#myProject">My Projects</a></li>
                            </ul>

                        </div>

                    </div>
                    <div className="footerContactWrap">
                        <div className="footerContactinside">
                            <p>Contact</p>
                            <ul>
                                <li><div><img src={location} /></div><p className="contactText">India</p></li>
                                <li><div><img src={footerEmail} /></div><p className="contactText">Ayushdce2@gmail.com</p></li>
                                

                            </ul>

                        </div>

                    </div>

                </div>

            </div>
            <div className="footerbottomWrap">
                <div className="footerbottominside">
                    <div>
                        <p>Copyright &#169; {currentYear} <span className="ayushFooter">Ayush</span> | All Rights Reserved</p>
                    </div>
                    {/* <div>
                        <p>User Terms and Conditions | Privacy Policy</p>
                    </div> */}

                </div>

            </div>
        </>
    )
}

export default Footer;