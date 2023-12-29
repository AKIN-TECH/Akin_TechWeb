import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Footer,
  Features,
  // Tech,
  Works,
  Supporters,
  StarsCanvas,
  Ourteam,
  // Advisory,
  Spline,
  Type,
  Aboutcopy,
  articles,

} from "./components";

const App = () => {
  return (
    
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Aboutcopy />  
            
      </div>  
          

           
          <Type />
          {/* <TypewriterText text="NEW ERA OF IMMERESIVE LEARNING" /> */}
          
        </div>
        <About />
        <Features/>
        <Type /> 
        <Spline />
        <Experience />
        <Ourteam />
        <Supporters/> 
        
        
        <div className=" ti-container relative z-5 ">
          <Works />
          <articles />
          <Feedbacks />
          {/* <WishList /> */}
          <Contact />
          <StarsCanvas />
          <Footer/>
        </div>
      {/* </div> */}
    </BrowserRouter>
  );
};

export default App;
