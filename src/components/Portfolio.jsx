import "./assets/css/services.css";
import ayushlogo from "./assets/icons/ayushlogo.png";
import lineseparator from "./assets/icons/lineseparator.png";
import playSVG from "./assets/icons/play.svg";
import service from "./assets/icons/service.svg";
import right from "./assets/icons/right.svg";
import pin from "./assets/icons/pin.png";
import "./assets/css/portfolio.css";
import {PortfolioUtility} from "./PortfolioUtility";
import pointerBackground from "./assets/icons/pointerBackground.svg";

const Portfolio = ()=>{
    return (
        <>
            <div className="servicesWrap portfolioWrap" id="myProject">
                <div className="servicesInside">
                    <div className="servicesRow1">
                        <div>
                            <img src={ayushlogo} />
                            {/* <div className="headingUnderline">
                                <img src={lineseparator}/>
                            </div> */}
                        </div>
                        <p> My Portfolio</p>
                    </div>
                    
                    <div className="subheading">
                        <p><span className="servicessubtext">Latest</span> Projects built by me . . .</p>
                        {/* <div className="viewAllButton">
                            <div className="viewMe">
                                <a href="#">View All Projects</a>
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
                            {PortfolioUtility.map((data)=>{
                                return (
                                    <>
                                        <div className="servicesMainUnitInside">
                                        <div className="portfolioimage">
                                            <img src={data.image} />

                                        </div>
                                        <div className="servicesMainUnitName">
                                            <p>{data.title}</p>
                                        </div>
                                        {/* <div className="servicesMainUnitDesc">
                                            <p>Service Description Service Description Service Description Service Description Service Description </p>
                                            <p>Service Description Service Description Service Description Service Description Service Description </p>
                                        </div> */}
                                        <div className="portfolioTags">
                                            <div className="portfolioTagUnit">
                                                <p>{data.tags[0]}</p>
                                            </div>
                                            <div className="portfolioTagUnit">
                                                <p>{data.tags[1]}</p>
                                            </div>
                                            <div className="portfolioTagUnit">
                                                <p>{data.tags[2]}</p>
                                            </div>
                                            <div className="portfolioTagUnit">
                                                <p>{data.tags[3]}</p>
                                            </div>
                                            <div className="portfolioTagUnit">
                                                <p>{data.tags[4]}</p>
                                            </div>

                                        </div>
                                        <div className="servicesMainUnitDesc">
                                            <p>{data.description}</p>

                                        </div>
                                        <div className="servicesMainUnitFooter">
                                            <a href={data.viewMore} target="_blank">View More <img src={right}/> </a>
                                            
                                        </div>
                                        {/* <img src={pin} className="pinRight"/> */}
                                        <div className="porfolioIndicatorWrap">
                                            <div className="porfolioIndicator">
                                                {/* <img src={pointerBackground} /> */}
                                                <p>{data?.indicator}</p>
                                            </div>

                                        </div>

                                    </div>
                                    </>
                                )

                            })}
                            
                            
                            
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Portfolio;