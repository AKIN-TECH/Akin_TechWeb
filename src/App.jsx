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

} from "./components";

const App = () => {
  return (
    
    <BrowserRouter>
    
      <div className="relative z-0 bg primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          
        </div>
        <About />
        <Features/>
        <Experience />
        <Ourteam />
        {/* <Advisory /> */}
        <Supporters/> 
        
        
        <div className=" ti-container relative z-5 ">
          <Works />
          <Feedbacks />
          <Contact />
          <StarsCanvas />
          
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
