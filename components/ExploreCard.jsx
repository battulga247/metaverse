'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, textVariant2 } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index*0.5, 0.75)}
    className={`relative 
    ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'}
    flex item-center justify-center min-w-[170px]
    h-[600px] transition-[flex] duration-[0.7s]
    ease-out-flex cursor-pointer    
    `}

    onClick={() => handleClick(id)}
    >
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white  z-10
        absolute bottom-0 origin-[0 0] lg:bottom-20 md:rotate-[180deg], md:left-5 xl:rotate-[-90deg]
        ">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] bg-black bg-opacity-50 
        rounded-b-[24px] z-10">
          <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}>
            <img src="./headset.svg" alt="headset" 
            className="w-1/2 h-1/2 object-contain"/>
          </div>
          <p className='font-normal text-white text-[16px] leading-[20px] uppercase'>
            Enter the Metaverse
          </p>
          <h2 className="mt-[20px] font-semibold sm:tezt-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
 
    <img src={imgUrl} alt={title} 
    className="absolute w-full h-full object-cover rounded-[24px]"/>
  </motion.div>
);

export default ExploreCard;
