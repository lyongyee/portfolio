
import RoundedImageWithBorder from "./roundimage";
import TypeWriter from 'typewriter-effect';
import {motion} from "framer-motion"


export default function HomeContainer() {
  return (
    // The wrapper div handles the sizing, border radius, stroke, and overflow
    <div id="about" className="flex flex-col min-h-screen w-full items-center justify-start gap-10 text-center sm:items-start sm:text-left mx-auto pt-20 align-top">
          <h1 className="max-w-xs text-5xl font-semibold leading-20 mx-auto tracking-tight text-zinc-50">
          <TypeWriter
            onInit={(typewriter) => {
              typewriter.typeString('Hey There!')
                .pauseFor(2500)
                //.deleteAll()
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();
            }}
          />
          </h1>
          <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", delay: 1.5, duration: 1.0, ease: "easeOut" }}
        className="mx-auto"
        >
      <RoundedImageWithBorder />
        
    </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl text-2xl font-semibold leading-10 tracking-tight text-zinc-50 text-center mx-auto"
      >
        I’m YY, an aspiring developer <br />
        currently studying in university. <br />Below are the works I have done
      </motion.h2>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1, 
          y: [0, 10, 0] // Moves down 10px, then back up
        }}
        transition={{ 
          opacity: { delay: 3.5, duration: 1 }, // Fades in after text
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } // Loops forever
        }}
      >
        <a 
            href="#works"
            onClick={(e) => {
                e.preventDefault();
                document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-zinc-400 hover:text-white transition-colors"
        >
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
};


