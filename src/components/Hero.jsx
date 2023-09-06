import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc/index";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
// import { Spline } from 'react-spline';

import React  from 'react';
import { fadeIn, textVariant } from "../utils/motion";


// import Typical from 'react-typical';

const Hero = () => {
  return (
    
    <section className={`relative w-full h-screen mx-auto  `}>
      <div
        className={`absolute inset-0 top-[-280px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-">
          <div className="w-5 h-5 rounded-full bg-[#00ECFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div> 
        
          {/* <Spline scene="https://prod.spline.design/7oWceMpPb4qZMA8I/scene.splinecode" /> */}

           
         <div>
          <motion.div variants={textVariant()}>
          <p className={`${styles.heroSubText} mt-5 text-cyan-800	text-[11px] flex-wrap justify-center text-center leading-[30Px] ">`}>
          NEW ERA OF IMMERESIVE LEARNING<br className="sm:block hidden" />
          </p>
          <h1 className={`${styles.heroHeadText} text-white mt-5 text-slate-300	flex text-[20x] flex-wrap justify-center text-center ">`}><span id="curosor">Interactive - </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white "> Building Design</span>

          </h1>
          </motion.div>
          <motion.div variants={textVariant()}>
            <p className={`${styles.heroSubText} mt-2 text-white-200 mt-7 text-slate-300	flex text-[18px] flex-wrap justify-center text-center leading-[30Px] ">`}>
          We build new immersive, and rewarding architectural educational world with <span className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white leading-[50Px]" >
          Fun experience.</span>
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
        
        <div className="w-auto h-auto flex flex-col group items-center cursor-pointer ">
          {/* <Image
            className="w-[50px]  translate-y-5 transition-all duration-200 group-hover:translate-y-11 "
            src="/2.png"
            width={1920}
            height={1080}
            alt="Securty"
          />
          <Image
            className="w-[70px] z-10"
            src="/q-92fb8db8.png"
            width={1920}
            height={1080}
            alt="Securty" */}
        </div>

        
      </div>
     
      <ComputersCanvas />
     
      <div className="absolute top-[-10] xs:bottom-[10px] bottom-32 w-full flex justify-enditems-end justify-center ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            
            />
          </div>
        </a>
      </div> 
      
    </section>
  );
};

export default SectionWrapper (Hero);
;
