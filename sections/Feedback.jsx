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
        sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative feedback-gradient"
        >
          <div className="pt-[30px] lg:pt-[120px] rounded-[32px] h-full">
              <div >
                <h4 className='font-bold sm:text-[32px] text-[26px] leading-[36px] sm:leading-[40px] text-white z-10'>
                  Samantha
                </h4>
                <p className='mt-[8px] font-normal sm:text-[18px] text-[12px]
              sm:leading-[22px] leading-[16px] text-white'>
                  Founder | Metaversus
                </p>

              </div>
              <p className='mt-[24px] font-normal sm:text-[18px] text-[12px]
              sm:leading-[22px] leading-[16px] text-white'>
                  "With the development of today'section 
                  technology, metaverse is very useful 
                  for today's work, or can be called web 3.0.. by
                  using metaverse you can use it as anything
                  "
              </p>
          </div>
      </motion.div>

      <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="relative flex-1 flex justify-center items-center"
          >
            <img src="/planet-09.png" alt="" 
            className='w-full lg:h-[610px] h-auto 
            min-h-[210px] object-cover rounded-[40px]'
            />
                <motion.div
                  variants={zoomIn(0.4, 1)}
                  className="lg:block hidden absolute -left-[10%] top-[5%]"
                >
                  <img src="/stamp.png" alt="" 
                  className='w-[155px] h-[auto] object-contain'
                  />
              </motion.div>
      </motion.div>

    </motion.div>
  </section>
);

export default Feedback;
