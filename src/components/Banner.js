import React from 'react';
import image from '../assets/avatar.png';
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';  // Import Link dari react-scroll

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1 
              variants={fadeIn('up', 0.7)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              KHAN <span className="text-primary">NEKI</span>
            </motion.h1>

            <motion.div 
              variants={fadeIn('up', 0.7)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className="mt-4 text-[36px] mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"  
              style={{ color: 'white' }}
            >
              Welcome to my portfolio
            </motion.div>

            <motion.div 
              variants={fadeIn('up', 0.7)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={['Front-End Developer', 2000, 'Designer', 2000, 'Programmer', 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p 
              variants={fadeIn('up', 0.7)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              asdkfdagfhdaghdhgkhdakgkdsaghkdshg
            </motion.p>

            <motion.div 
              variants={fadeIn('up', 0.7)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-50}
                className="text-gradient btn-link cursor-pointer"
              >
                Contact me
              </Link>

              <Link
                to="work"
                smooth={true}
                duration={500}
                offset={-50}
                className="text-gradient btn-link cursor-pointer"
              >
                My Portfolio
              </Link>
            </motion.div>

            {/* Socials */}
            <motion.div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaGithub /></a>
              <a href="#"><FaDribbble /></a>
            </motion.div>
          </div>

          {/* Avatar Image */}
          <motion.div 
            variants={fadeIn('down', 0.5)} 
            initial='hidden' 
            whileInView={'show'}  
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto'
          >
            <img src={image} alt='Avatar' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
