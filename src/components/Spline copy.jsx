import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";




 function Splinescene()

{
  return (
    
    <div class="mt-5 text-slate-300	flex text-[30px] flex-wrap justify-center text-center items-center ">
     
     <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>Our Features</h2>
        <p className={styles.sectionSubText}>what we want to Acheive?</p>
        
       
      </motion.div>
     
     <Spline scene="https://prod.spline.design/oNcoyYsW5eZniXB5/scene.splinecode" />
   
   </div>
    
    );

  
}
export default Splinescene;

