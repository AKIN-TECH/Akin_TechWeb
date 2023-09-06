import Tilt from "react-tilt";
import { motion, AnimatePresence  } from "framer-motion";

import { styles } from "../styles";
// import { discord} from "../assets";
 import { SectionWrapper } from "../hoc";
import { images } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

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
        <h2 className={styles.sectionHeadText}>Our Supporters.</h2>
        <p className={styles.sectionSubText}> MEET OUR SUPPORTERS.
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


export default SectionWrapper(Supporters, "");
