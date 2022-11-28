'use client';
import { motion } from 'framer-motion';
 
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

import { insights } from '../constants';
import { InsightCard, TitleText, TypingText } from '../components';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: 'false', amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    > 
      <TypingText title="| Insight " textStyle="text-center" />
      <TitleText title="Insight about metaverse" textStyle="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]" >
          {insights.map((insight, index) => (
            <InsightCard key={`insight-${index}`}
            {...insight} index={index+1} />
          ))}
      </div>  


    </motion.div>
  </section>
);

export default Insights;
