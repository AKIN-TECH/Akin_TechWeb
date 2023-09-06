import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";


const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <div class="mt-8 text-slate-500	flex flex-wrap justify-center items-center text-center ">
   <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-white-300 p-10 rounded-5x5 w-[200px] w-full items-center justify-center text-center"
   >
    <p className="text-cyan-200 font-black text-[25px] text-center justify-center items-center">"</p>

    <div className="mt-7">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
      
      <div className="mt-5 flex justify-between items-center gap-5 ">
        <div className="flex-1 flex flex-col">
          <p className="text-cyan-300 font-medium text-[18px]justify-center text-center items-cneter">
            <span className="blue-text-gradient"></span> {name}
          </p>
          <p className="mt-1 text-secondary text-[14px] justify-center text-center irems-center">
            {designation} of {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover justify-center items-center text-center"
        />
      </div>
      
    </div>
   </motion.div>
  </div>
  
);

const Feedbacks = () => {
  return (
    // w-full h-[50px] py-2  fixed shadow-lg   shadow-[#00ECFE]/40  bg-slate-300/30  bg-[#03001417]   backdrop-blur-md z-2//
    <div class="mt-8 text-slate-500	flex flex-wrap justify-center  items-center text-center">
    <div className="mb-4 bg-black-100 rounded-[30px]">
      <div
        className={`${styles.padding} bg-#121212 rounded-2xl min-h-[200px]text-center `}
      >
        <div class="mt-5 flex flex-wrap justify-center text-center  ">
        <motion.div variants={textVariant()}>
          
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
          <p className={styles.sectionSubText}>What others say</p>
        </motion.div>
        </div>
      </div>
      
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-5 `}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Feedbacks;
