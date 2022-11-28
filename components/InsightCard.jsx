'use client';
import { motion } from 'framer-motion';
 
import styles from '../styles';
import { fadeIn} from '../utils/motion';



const InsightCard = ({imgUrl, index, title, subtitle}) => (
  <motion.div
    variants={fadeIn('up', 'spring', index*0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img src={imgUrl} alt="" className='md:w-[270px] w-full h-[250px] object-cover rounded-[32px]'/>

    <div className='w-full flex justify-between items-center'>
      <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
        <h4 className='font-normal lg:text-[42px] text-[26px] text-white'>{title}</h4>
        <p className='mt-[10px] text-secondary-white font-normal text-[14px] lg:text-[18px]'>{subtitle}</p>
      </div>

      <div className='lg:flex hidden items items-center justify-center w-[100px] 
      h-[100px] rounded-full bg-transparent border-[1px] border-white ml-5'>
        <img 
          src="arrow.svg"
          alt=""
          className='w-[40%] h-[40%] object-contain'
          />

      </div>
    </div>

  </motion.div>
);

export default InsightCard;
