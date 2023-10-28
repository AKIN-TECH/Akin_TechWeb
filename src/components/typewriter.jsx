// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const typewriter = () => {
//   const [text, setText] = useState("");

//   const type = () => {
//     const newText = text + "Hello, world!";

//     setText(newText);

//     if (newText.length < 10) {
//       setTimeout(type, 100);
//     }
//   };

//   return (
//     <motion.div
//       animate={{
//         text: text,
//       }}
//       transition={{
//         duration: 0.2,
//       }}
//     >
//       <h2 className={styles.sectionHeadText}>About.</h2>
//       {text}
//     </motion.div>
//   );
// };

// export default typewriter;