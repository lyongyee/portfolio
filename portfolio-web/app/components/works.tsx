import TypeWriter from 'typewriter-effect';
import {motion} from "framer-motion"


export default function WorksContainer() {
  return (
    // The wrapper div handles the sizing, border radius, stroke, and overflow
    <div 
      id="works" 
      className="flex flex-col min-h-screen w-full items-center justify-start gap-15 text-center sm:items-start sm:text-left mx-auto pt-20"
    >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="max-w-xs text-5xl font-semibold leading-20 mx-auto tracking-tight text-zinc-50">
          Works
        </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl text-2xl font-semibold leading-10 tracking-tight text-zinc-50 text-center mx-auto"
      >
        I’m YY, an aspiring developer <br />
        currently studying in university. <br />Below are the works I have done
      </motion.h2>
    </div>
  );
};


