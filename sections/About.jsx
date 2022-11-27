'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';


const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once:false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
          <TypingText title="| About Metaversus "
          textStyles="text-center"/>
          <motion.p 
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
              <span className='bolder'>Metaverse </span> a term coined in the novel Snow Crash by Neal Stephenson, is a space in which humans can participate in a shared virtual universe. 
              The Metaverse is the idea that there will be <span className='bolder'>an interoperable virtual-reality </span> in which humans will become avatars. 
              The Metaverse is the new internet, an unfolding past the flat <span className='bolder'>World Wide Web we've </span> come to know. It will connect people all over the world, create a plane for building and engaging-in activities, 
              and unleash the collective <span className='bolder'>imagination and creative</span> might of communities across the globe.
          </motion.p>
          <motion.img variants={fadeIn('up', 'tween', 0.3, 1)}
            src="./arrow-down.svg"
            alt='arrow down'
            className='w-[18px] h-[28px] object-contain mt-[28px]'
          />
    </motion.div>
  </section>
);

export default About;
