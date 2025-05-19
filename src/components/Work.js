import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';
import img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          {/* Left column */}
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* Text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My latest <br /> work.
              </h2>
              <p className='max-w-sm mb-16'>
                Artikel adalah sebuah karya tulis yang menyajikan informasi, opini, atau analisis. Tujuannya adalah menyampaikan gagasan, fakta, dan bahkan hiburan kepada pembaca.
              </p>
              <button className='btn btn-sm'>View all projects</button>
            </div>

            {/* Image 1 */}
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.3 }}
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
            >
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project One</span>
              </div>
            </motion.div>
          </div>

          {/* Right column */}
          <div className='flex-1 flex flex-col gap-y-10'>
            {/* Image 2 */}
            <motion.div
              variants={fadeIn('left', 0.5)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.3 }}
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
            >
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Web Development</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Two</span>
              </div>
            </motion.div>

            {/* Image 3 */}
            <motion.div
              variants={fadeIn('left', 0.7)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.3 }}
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
            >
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Mobile App</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Three</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
