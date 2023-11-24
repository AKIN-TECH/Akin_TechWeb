import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";





 function Splinescene()

{
  return (
    
    <div class="bg-hero-footer bg-cover bg-no-repeat bg-center bg-shadow-[#67e8f9]/50">
      
     
     {/* <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>Our Features</h2>
        <p className={styles.sectionSubText}>what we want to Acheive?</p>
        
       
      </motion.div>
      */}
      
      
       <Spline scene="https://prod.spline.design/q13p6Hf0FzrJYZbU/scene.splinecode" />
   
   </div>
    
    );

  
}
export default Splinescene;

