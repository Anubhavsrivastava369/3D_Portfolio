import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const updateVH = () => {
      const vh = window.innerHeight * 0.01;
      if (sectionRef.current) {
        sectionRef.current.style.setProperty('--vh', `${vh}px`);
      }
    };

    updateVH();
    window.addEventListener('resize', updateVH);
    window.addEventListener('orientationchange', updateVH);

    return () => {
      window.removeEventListener('resize', updateVH);
      window.removeEventListener('orientationchange', updateVH);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full mx-auto"
      style={{ 
        height: 'calc(var(--vh, 1vh) * 100)',
        '--vh': '1vh' // Fallback value
      }}
    >
      {/* Rest of your component remains the same */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Anubhav</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full Stack Web Developer,
            <br className='sm:block hidden' />  
            focused on UI design and interactive web experiences.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={shouldReduceMotion ? {} : {
                y: [0, 24, 0],
              }}
              transition={shouldReduceMotion ? {} : {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
