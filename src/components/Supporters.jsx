import Tilt from "react-tilt";
import { motion, AnimatePresence  } from "framer-motion";

import { styles } from "../styles";
// import { discord} from "../assets";
 import { SectionWrapper } from "../hoc";
import { images } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { feature } from "../constants";


const ProjectCard = ({
  index,
  name,

  
  image,
}) => {
  return (
    <div class="mt-10 flex flex-wrap justify-center ">
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className=" realtives bg-white p-1 rounded-2xl sm:w-[200px] "
      >
        <div className="relative w-full h-[150px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="mt-0">
        </div>
      </Tilt>
    </motion.div>
    </div>
  );
};

const Supporters = () => {
  return (
    <>
       <div class="mt-10 flex flex-wrap justify-center">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Our Supporters</h2>
        <p className={styles.sectionSubText}> MEET OUR SUPPORTERS
        </p>
        
      </motion.div>
      </div>
      
      
      
      <div className="mt-10 flex flex-wrap gap-2 justify-center">
        {images.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      
    </>
    
  );
};
const Card = ({
  index,
  name,
  description,
  // tags,
  image,
  source_code_link,
}) => {
  return (
    <div class="mt-0 flex flex-wrap justify-center">
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-[20px] sm:w-[400px] w-full border-x-1 border-b-2 border-cyan-300 shadow-[#00ECFE]/20 full p-[10px] rounded-[10px] shadow-card center   p-5 rounded-2xl sm:w-[300px] w-full"
      >
        <div className="relative w-full h-[250px]  rounded-[20px] ">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div class="mt-0 flex flex-wrap justify-center  ">
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="gradient w-14 h-14 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-cyan- font-bold text-[16px] flex-wrap justify-center text-center ">{name}</h3>
          <p className="mt-2 text-cyan-900 text-[ 18px-center max-w-4xl leading-[30px]">{description}</p>
        </div>
        {/* <div className="mt-0 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[12px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div> */}
      </Tilt>
    </motion.div>
    </div>
  );
};


export default SectionWrapper(Supporters, "");
