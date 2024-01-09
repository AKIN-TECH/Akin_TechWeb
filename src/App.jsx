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
  Article,
  

} from "./components";

const App = () => {
  return (
    
    <BrowserRouter>
      <div className="ti-container relative z-5">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        {/* <div className="bg-hero-footer bg-cover bg-no-repeat bg-center"> */}
        <Aboutcopy />  
            
      {/* </div>   */}
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
        <Works />
        
          <Feedbacks />
          {/* <WishList /> */}
          <Article />
        <div className=" ti-container relative z-5 ">
         
          
          <Contact />
          <StarsCanvas />
        </div>
      {/* </div> */}
         <Footer/>
    </BrowserRouter>
  );
};

export default App;
