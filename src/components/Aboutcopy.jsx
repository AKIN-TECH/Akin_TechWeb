import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Spline from '@splinetool/react-spline';



const Aboutcopy = () => {
  return (
    <>

  <Spline scene="https://prod.spline.design/cLaUct9bnQWsrDZA/scene.splinecode" />
   <div>
          
          <motion.div variants={textVariant()}>
          <p className={`${styles.heroSubText} mt-5 text-cyan-900	text-[11px] flex-wrap justify-center text-center leading-[30Px] ">`}>
          NEW ERA OF IMMERESIVE LEARNING<br className="sm:block hidden" />
          </p>
          <h1 className={`${styles.heroHeadText} text-white mt-5 text-slate-300	flex text-[20x] flex-wrap justify-center text-center ">`}>
            <p>interactive- </p>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white "> Building Process</span>
           
          </h1>
          </motion.div>
          <motion.div variants={textVariant()}>
            <p className={`${styles.heroSubText} mt-2 text-white-200 mt-10 text-slate-300	flex text-[20px] flex-wrap justify-center text-center leading-[25Px] ">`}>
          We build new immersive, and rewarding architectural educational world with 
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white leading-[50Px]" >
          Enjoyable experience. </span>
            </p>
          </motion.div>  
            <h className= "flex flex-wrap mt-2 text-cyan-300 mt-7 text-slate-300	flex text-[14x] flex-wrap justify-center text-center ">
              
              
           {/* <a
            href="#Section_4"
            id="button-secondry"
            className=" animate-slideleftT4 text-cyan-300 px-[30x] py-[10px] cursor-pointer hover:scale-105 active:scale-90 hover bg-tertiary duration-150 select-none rounded-[px]  hover: border-indigo-cyan-30 hover:bg-shadow-[#67e8f9]/50  font-bold py-2 px-10 border-b-2 border-cyan-300 hover:border-cyan-800 px-[20px] py-[10px] rounded-[9px]  hover: text-cyan-800 shadow-lg shadow-[#67e8f9]/50  "
          
            >
             COMMING SOON
          </a>
         */}
    
  
          </h>
        </div>
      {/* <div class="mt-0  ">
      <motion.div variants={textVariant()}>
      
        
      </motion.div>
      </div> 
     
      <div class="mt-10 text-slate-300	flex text-[18px] flex-wrap leading-[300px] ">
      <h2 className={styles.sectionHeadText}>About.</h2>
        <p className={styles.sectionSubText}>Who We Are?</p>
       <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-0 text-secondary text-[ 18px-center max-w-4xl leading-[30px]"
       >
        Manzel is the first VR educational game for Architects that utilizes AI & Virtual reality to teach students using challenges to maximize the quality of the learning process in a short time through metaverse.

       </motion.p>
      
      </div> */}
      {/* <div className="mt-20 flex flex-wrap gap-10 leading-[40px] ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
          
        ))}
        
      </div>
      <div class="mt-10 flex flex-wrap ">
      <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>Our Vision & Goals.</h2>
        <p className={styles.sectionSubText}>what we want to Acheive?</p>
        
       
      </motion.div>
      </div>  */}
     
      {/* <div class="mt-10 text-slate-300	flex text-[18px] flex-wrap justify-center text-center leading-[50px] ">
       <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-0 text-secondary text-[ 18px-center max-w-4xl leading-[30px]"
       >
        We aim to fill the gaps between theoretical learning and market needs by transforming theoretical knowledge into a poignant, interactive, easy-to-learn experiment to build a solid foundation that helps students and engineers gain more experience before engaging with a real job in short time through metaverse.

       </motion.p>
      
      </div> */}
          
    
    </>
    
  );
  
};

export default SectionWrapper(Aboutcopy);
