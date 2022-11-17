import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowRightShort } from 'react-icons/bs';

function Cards(props) {
  return (
    <motion.div 
    {...props.animation }
    transition={{duration:  props.time , type: 'spring'}}
    className='flex flex-col items-center justify-center gap-y-5 w-[65%] md:w-[40%] xl:w-[30%] h-[280px] shadow-2xl rounded-xl bg-white border-2 mx-auto mb-5 mt-2 md:mt-0'>
      <div className='w-[90%] h-fit rounded-lg shadow'>
        <img className='bg-cover rounded-lg' src={props.logo} alt="" />
      </div>
      <p className='flex items-center self-start ml-5 rounded-md px-2 hover:text-white hover:bg-black cursor-pointer'><a rel='noreferrer' target={'_blank'} href={props.link}>{props.title}</a><BsArrowRightShort size={'30px'}/></p>
    </motion.div>
  )
}

export default Cards;