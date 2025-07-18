import React, { useState } from 'react';
import axios from 'axios';
import "./assets/css/contactform.css";
import ayushlogo from "./assets/icons/ayushlogo.png";
import arrowsRotate from "./assets/icons/arrows-rotate.svg";

const ContactForm =()=>{

    
  const [formData, setFormData] = useState('');
  const [finalOutput, setFinalOutput] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log(formData,"<=========formData Client");
    const loader = ()=>{
      return(
        <>
          <img src={arrowsRotate} className='arrowsRotate'/>
        </>
      )
      
    }
    setFinalOutput(loader);
    

    try{
                await axios.post('https://portfolio-bil8.onrender.com/contact',formData)
                        .then((response)=>{console.log(response.data,"<---response client ");  setFinalOutput( response.data);})
                        .catch((error)=>{
                          console.log(error,"<---error at client after form submission"); 
                          error.status === 500 && console.log(error.response.data);
                          setFinalOutput(error.response.data);
                        });
                
                
                // console.log(result,"result");
            }catch(error){
                // handleError(error);
                console.error(error);
            }
            
    // const result = await res.json();
    
  }
  console.log(finalOutput,"formData Server");
  return(
    <div className="contact-form" id='contactMe'>
    {/* <h2>Contact Me</h2> */}
    <div className="servicesRow1">
                        <div>
                            <img src={ayushlogo} />
                            {/* <div className="headingUnderline">
                                <img src={lineseparator}/>
                            </div> */}
                        </div>
                        <p> Contact Me</p>
                    </div>
    <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
    {!finalOutput? (
        
        <div className="formWrap">
          <div className="formInside">
            <div className='leftForm'>
              
              <p>Want to get in touch ? </p><p>I'd love to hear from you.</p>
              <p> Fill up the form with required details and soon I will contact you </p>

            </div>
            <div className='rightForm'>
            <form action="/" method="POST" onSubmit={handleSubmit}>

              <label for="name">Name:</label><br/>
              <input type="text" id="name" name="name" required onChange={(e)=>{setFormData({...formData,name:e.target.value})}}/><br/><br/>

              <label for="email">Email:</label><br/>
              <input type="email" id="email" name="email" required onChange={(e)=>{setFormData({...formData,email:e.target.value})}}/><br/><br/>

              <label for="message">Message:</label><br/>
              <textarea id="message" name="message" required onChange={(e)=>{setFormData({...formData,message:e.target.value})}}></textarea><br/><br/>

              <button type="submit">Submit</button>

              </form>
              </div>            
          
          

        </div>
        </div>

  
    ): 
    (
      <div className='finalMessage'>
        {finalOutput}
        </div>)}
  {/* <p>finally - {">"+finalOutput}</p> */}
  </div>
    )
}

export default ContactForm;