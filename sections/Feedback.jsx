'use client';
import { motion } from 'framer-motion';
 
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

import { insights } from '../constants';
import { InsightCard, TitleText, TypingText } from '../components';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once: 'false', amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}
  > 
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1 )}
        className="flex-1 lg:max-w-[370px] flex justify-end flex-col gradient-05 
        sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
        >
          <div className="feedback-gradient p-[30px] z-10">
              <div >
                <h4 className='font-bold sm:text-[32px] text-[26px] leading-[36px] sm:leading-[40px]'>
                  Samantha
                </h4>
                <p className='mt-[8px] font-normal sm:text-[18px] text-[12px]
              sm:leading-[22px] leading-[16px] text-white'>
                  Founder | Metaversus
                </p>

              </div>
              <p className='mt-[24px] font-normal sm:text-[24px] text-[18px]
              sm:leading-[45px] leading-[39px] text-white'>



              </p>
          </div>

      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
