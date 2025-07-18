import "./assets/css/services.css";
import ayushlogo from "./assets/icons/ayushlogo.png";
import lineseparator from "./assets/icons/lineseparator.png";
import playSVG from "./assets/icons/play.svg";
import service from "./assets/icons/service.svg";
import service1 from "./assets/icons/service1.svg";
import service2 from "./assets/icons/service2.svg";
import service3 from "./assets/icons/service3.svg";
import service4 from "./assets/icons/service4.svg";
import service5 from "./assets/icons/service5.svg";
import service6 from "./assets/icons/service6.svg";
import service7 from "./assets/icons/service7.svg";
import service8 from "./assets/icons/service8.svg";
import arrowdouble from "./assets/icons/arrowdouble.png";
import pin from "./assets/icons/pin.png";

const Services = ()=>{
    return (
        <>
            <div className="servicesWrap" id="services">
                <div className="servicesInside">
                    <div className="servicesRow1">
                        <div>
                            <img src={ayushlogo} />
                            {/* <div className="headingUnderline">
                                <img src={lineseparator}/>
                            </div> */}
                        </div>
                        <p> Services</p>
                    </div>
                    
                    <div className="subheading">
                        <p><span className="servicessubtext">Services</span> I Provide are</p>
                        {/* <div className="viewAllButton">
                            <div className="viewMe">
                                <a href="#">View All Services</a>
                            </div>
                            <div className="playButton">
                                <a href="#">
                                    <img src={playSVG} />
                                </a>
                            </div>

                        </div> */}
                    </div>
                    <div>
                        <div className="servicesMainUnit">
                            <div className="servicesMainUnitInside">
                                <div className="servicesMainUnitIcon">
                                    <img src={service} />

                                </div>
                                <div className="servicesMainUnitName">
                                    <p>Custom Website Development</p>
                                </div>
                                <div className="servicesMainUnitDesc">
                                    <p>Stand out with a custom-built website tailored to your brand, goals, and audience — no templates, just results.
                                    Fast, responsive, and designed to convert — let's build something uniquely yours.</p>
                                    {/* <p>Service Description Service Description Service Description Service Description Service Description </p> */}
                                </div>
                                {/* <div className="servicesMainUnitFooter">
                                    <p>Learn More</p>
                                    <img src={arrowdouble}/>
                                </div> */}
                                <img src={pin} className="pinRight"/>

                            </div>
                            <div className="servicesMainUnitInside">
                                <div className="servicesMainUnitIcon">
                                    <img src={service1} />

                                </div>
                                <div className="servicesMainUnitName">
                                    <p>Wordpress Development</p>
                                </div>
                                <div className="servicesMainUnitDesc">
                                    <p>Power your website with WordPress — flexible, scalable, and easy to manage.
                                    Custom themes, plugins, and performance optimization tailored to your business.</p>
                                    {/* <p>Service Description Service Description Service Description Service Description Service Description </p> */}
                                </div>
                                {/* <div className="servicesMainUnitFooter">
                                    <p>Learn More</p>
                                    <img src={arrowdouble}/>
                                </div> */}

                                <img src={pin} className="pinRight"/>

                            </div>
                            <div className="servicesMainUnitInside">
                                <div className="servicesMainUnitIcon">
                                    <img src={service2} />

                                </div>
                                <div className="servicesMainUnitName">
                                    <p>eCommerce Web Development</p>
                                </div>
                                <div className="servicesMainUnitDesc">
                                    <p>Launch a powerful online store that’s built to sell, scale, and succeed.
                                    Custom eCommerce solutions designed for seamless shopping experiences and maximum conversions. </p>
                                    {/* <p>Service Description Service Description Service Description Service Description Service Description </p> */}
                                </div>
                                {/* <div className="servicesMainUnitFooter">
                                    <p>Learn More</p>
                                    <img src={arrowdouble}/>
                                </div> */}

                                <img src={pin} className="pinRight"/>

                            </div>
                            <div className="servicesMainUnitInside">
                                <div className="servicesMainUnitIcon">
                                    <img src={service3} />

                                </div>
                                <div className="servicesMainUnitName">
                                    <p>Website Redesign</p>
                                </div>
                                <div className="servicesMainUnitDesc">
                                    <p>Give your website a fresh, modern makeover that boosts performance and engagement.
                                    From outdated to outstanding — let’s transform your site into a high-converting experience. </p>
                                    {/* <p>Service Description Service Description Service Description Service Description Service Description </p> */}
                                </div>
                                {/* <div className="servicesMainUnitFooter">
                                    <p>Learn More</p>
                                    <img src={arrowdouble}/>
                                </div> */}

                                <img src={pin} className="pinRight"/>

                            </div>
                            {/* <div className="servicesMainUnitInside">
                                <div className="servicesMainUnitIcon">
                                    <img src={service4} />

                                </div>
                                <div className="servicesMainUnitName">
                                    <p>Landing Page Design</p>
                                </div>
                                <div className="servicesMainUnitDesc">
                                    <p>Turn clicks into customers with a high-converting, beautifully crafted landing page.
                                    Strategically designed to capture attention, drive action, and boost ROI. </p>
                                    
                                </div>
                                

                                <img src={pin} className="pinRight"/>

                            </div> */}
                            {/* <div className="servicesMainUnitInside">
                                <div className="servicesMainUnitIcon">
                                    <img src={service5} />

                                </div>
                                <div className="servicesMainUnitName">
                                    <p>Responsive Web Design</p>
                                </div>
                                <div className="servicesMainUnitDesc">
                                    <p>One website, every device — seamless, mobile-friendly design that adapts beautifully.
                                    Deliver a flawless user experience whether your visitors are on desktop, tablet, or phone. </p>
                                    

                                <img src={pin} className="pinRight"/>

                            </div> */}
                            <div className="servicesMainUnitInside">
                                <div className="servicesMainUnitIcon">
                                    <img src={service6} />

                                </div>
                                <div className="servicesMainUnitName">
                                    <p>Web App Development</p>
                                </div>
                                <div className="servicesMainUnitDesc">
                                    <p>Bring your ideas to life with dynamic, scalable, and interactive web applications.
                                    Built for performance, tailored to your needs — from MVP to full-scale platforms.</p>
                                    {/* <p>Service Description Service Description Service Description Service Description Service Description </p> */}
                                </div>
                                {/* <div className="servicesMainUnitFooter">
                                    <p>Learn More</p>
                                    <img src={arrowdouble}/>
                                </div> */}

                                <img src={pin} className="pinRight"/>

                            </div><div className="servicesMainUnitInside">
                                <div className="servicesMainUnitIcon">
                                    <img src={service7} />

                                </div>
                                <div className="servicesMainUnitName">
                                    <p>Web Hosting & Deployment</p>
                                </div>
                                <div className="servicesMainUnitDesc">
                                    <p>Reliable, secure, and fast web hosting solutions for seamless website performance.
                                    Effortless deployment and hassle-free management — get your site online quickly and securely. </p>
                                    {/* <p>Service Description Service Description Service Description Service Description Service Description </p> */}
                                </div>
                                {/* <div className="servicesMainUnitFooter">
                                    <p>Learn More</p>
                                    <img src={arrowdouble}/>
                                </div> */}

                                <img src={pin} className="pinRight"/>

                            </div><div className="servicesMainUnitInside">
                                <div className="servicesMainUnitIcon">
                                    <img src={service8} />

                                </div>
                                <div className="servicesMainUnitName">
                                    <p>Web Optimization</p>
                                </div>
                                <div className="servicesMainUnitDesc">
                                    <p>Supercharge your website’s speed, performance, and SEO for a better user experience.
                                    Optimize load times, improve rankings, and keep visitors engaged with a faster, smoother site.</p>
                                    {/* <p>Service Description Service Description Service Description Service Description Service Description </p> */}
                                </div>
                                {/* <div className="servicesMainUnitFooter">
                                    <p>Learn More</p>
                                    <img src={arrowdouble}/>
                                </div> */}

                                <img src={pin} className="pinRight"/>

                            </div><div className="servicesMainUnitInside">
                                <div className="servicesMainUnitIcon">
                                    <img src={service4} />

                                </div>
                                <div className="servicesMainUnitName">
                                    <p>Web Maintenance & Support</p>
                                </div>
                                <div className="servicesMainUnitDesc">
                                    <p>Keep your website running smoothly with ongoing maintenance and expert support.
                                    Stay secure, up-to-date, and bug-free with reliable services tailored to your needs. </p>
                                    {/* <p>Service Description Service Description Service Description Service Description Service Description </p> */}
                                </div>
                                {/* <div className="servicesMainUnitFooter">
                                    <p>Learn More</p>
                                    <img src={arrowdouble}/>
                                </div> */}

                                <img src={pin} className="pinRight"/>

                            </div>
                            

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Services;