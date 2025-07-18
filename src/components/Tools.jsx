import ayushlogo from "./assets/icons/ayushlogo.png";
import "./assets/css/tools.css";
import figma from "./assets/icons/figma.svg";
import VisualStudioCode from "./assets/icons/VisualStudioCode.svg";
import github from "./assets/icons/github.svg";
import lighthouse from "./assets/icons/lighthouse.svg";
import postman from "./assets/icons/postman.svg";
import node from "./assets/icons/node.svg";
import wordpress from "./assets/icons/wordpress.svg";
import firebase from "./assets/icons/firebase.svg";
const Tools = ()=>{
    return (
        <>
          
            <div className="toolsWrap" id="favouriteTool">
                <div className="toolsinside">
                    <div className="toolsRow1">
                        <div className="toolsRow1img"><img src={ayushlogo}/></div>
                        <p className="toolsRow1text">My Favourite Tools</p>

                    </div>
                    <div className="toolsRow2">
                        <p className="toolsRow2text1">Exploring the Tools</p>
                        <p className="toolsRow2text2">Behind My Web Applications</p>

                    </div>
                    <div className="toolsRow3">
                        <div className="toolsList">
                            <div className="toolsitemMain">
                                <div className="toolsiteminside">
                                    <div className="toolsitemimg">
                                        <img src={VisualStudioCode}/>

                                    </div>
                                    <div className="toolsitemtitle">
                                        <p>Visual Studio Code </p>

                                    </div>
                                    <div className="toolsitemtext">
                                        <p><span>Expertise - </span>95%</p>

                                    </div>
                                    {/* <div className="toolsitembasement">
                                        

                                        </div> */}
                                    

                                </div>


                            </div>
                            <div className="toolsitemMain">
                                <div className="toolsiteminside">
                                    <div className="toolsitemimg">
                                        <img src={github}/>

                                    </div>
                                    <div className="toolsitemtitle">
                                        <p>Git & GitHub</p>

                                    </div>
                                    <div className="toolsitemtext">
                                        <p><span>Expertise - </span>95%</p>

                                    </div>
                                    {/* <div className="toolsitembasement">
                                        

                                        </div> */}
                                    

                                </div>


                            </div>
                            <div className="toolsitemMain">
                                <div className="toolsiteminside">
                                    <div className="toolsitemimg">
                                        <img src={figma}/>

                                    </div>
                                    <div className="toolsitemtitle">
                                        <p>Figma</p>

                                    </div>
                                    <div className="toolsitemtext">
                                        <p><span>Expertise - </span>92%</p>

                                    </div>
                                    {/* <div className="toolsitembasement">
                                        

                                        </div> */}
                                    

                                </div>


                            </div>
                            <div className="toolsitemMain">
                                <div className="toolsiteminside">
                                    <div className="toolsitemimg">
                                        <img src={lighthouse}/>

                                    </div>
                                    <div className="toolsitemtitle">
                                        <p>Lighthouse</p>

                                    </div>
                                    <div className="toolsitemtext">
                                        <p><span>Expertise - </span>95%</p>

                                    </div>
                                    {/* <div className="toolsitembasement">
                                        

                                        </div> */}
                                    

                                </div>


                            </div>
                            <div className="toolsitemMain">
                                <div className="toolsiteminside">
                                    <div className="toolsitemimg">
                                        <img src={postman}/>

                                    </div>
                                    <div className="toolsitemtitle">
                                        <p>Postman</p>

                                    </div>
                                    <div className="toolsitemtext">
                                        <p><span>Expertise - </span>98%</p>

                                    </div>
                                    {/* <div className="toolsitembasement">
                                        

                                        </div> */}
                                    

                                </div>


                            </div>
                            <div className="toolsitemMain">
                                <div className="toolsiteminside">
                                    <div className="toolsitemimg">
                                        <img src={node}/>

                                    </div>
                                    <div className="toolsitemtitle">
                                        <p>MERN Stack</p>

                                    </div>
                                    <div className="toolsitemtext">
                                        <p><span>Expertise - </span>90%</p>

                                    </div>
                                    {/* <div className="toolsitembasement">
                                        

                                        </div> */}
                                    

                                </div>


                            </div>

                            <div className="toolsitemMain">
                                <div className="toolsiteminside">
                                    <div className="toolsitemimg">
                                        <img src={wordpress}/>

                                    </div>
                                    <div className="toolsitemtitle">
                                        <p>Wordpress</p>

                                    </div>
                                    <div className="toolsitemtext">
                                        <p><span>Expertise - </span>90%</p>

                                    </div>
                                    {/* <div className="toolsitembasement">
                                        

                                        </div> */}
                                    

                                </div>


                            </div><div className="toolsitemMain">
                                <div className="toolsiteminside">
                                    <div className="toolsitemimg">
                                        <img src={firebase}/>

                                    </div>
                                    <div className="toolsitemtitle">
                                        <p>Firebase</p>

                                    </div>
                                    <div className="toolsitemtext">
                                        <p><span>Expertise - </span>90%</p>

                                    </div>
                                    {/* <div className="toolsitembasement">
                                        

                                        </div> */}
                                    

                                </div>


                            </div>
                             
                            

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Tools;