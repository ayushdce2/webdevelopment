import Services from "./Services";
import Portfolio from "./Portfolio";
import PracticeFiles from "./PracticeFiles";
import About from "./About";
import Tools from "./Tools";
import ContactForm from "./ContactForm";

const MidContent = ()=>{
    return (
        <>
            <Services />
            <About />
            <Tools />
            <Portfolio />
            <PracticeFiles/>
            <ContactForm/>
            
        </>
    )
}

export default MidContent;