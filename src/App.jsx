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
  Livethemoment,
<<<<<<< HEAD
  knowmore,
=======
  Intro,
  Play,
>>>>>>> d9076a1e1da9f500b53a73e629f1d49f9dd430a0
  

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
        <Intro/>
        <About />
        <Features/>
     
        
        <Type /> 
        <Spline />
        
        <Play/>
        <Experience />
        <Ourteam />
        <Supporters/> 
        <Works />
        <Article />
        
          <Feedbacks />
          <Livethemoment/>
        <knowmore/>


          {/* <WishList /> */}
          
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
