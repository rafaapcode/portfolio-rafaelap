import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsArrowRightShort } from 'react-icons/bs';

const CardsAll = (props) => {
  const animations = {
    left: {
      initial: {x: -200},
      animate: {x: 0}
    },
    right: {
      initial: {x: 200},
      animate: {x: 0}
    }
  }

  return (
    <div className='h-[70%] w-full md:flex md:flex-wrap items-center gap-y-5 md:gap-y-0 md:gap-x-5  md:flex-row  overflow-auto'>

      <motion.div 
      {...animations.left}
      transition={{duration: 0.5, type: 'spring'}}
      className='flex flex-col items-center justify-center gap-y-5 w-[65%] md:w-[40%] xl:w-[30%] h-[280px] shadow-2xl rounded-xl bg-white border-2 mx-auto mb-5 mt-2 md:mt-0'>
        <div className='w-[90%] h-[75%] bg-slate-200 rounded-lg shadow'></div>
        <p className='flex items-center self-start ml-5 rounded-md px-2 hover:text-white hover:bg-black cursor-pointer'><a rel='noreferrer' target={'_blank'} href="https://github.com/rafaapcode">Titulo</a><BsArrowRightShort size={'30px'}/></p>
      </motion.div>

      <motion.div 
      {...animations.right}
      transition={{duration: 0.8, type: 'spring'}}
      className='flex flex-col items-center justify-center gap-y-5 w-[65%] md:w-[40%] xl:w-[30%] h-[280px] shadow-2xl rounded-xl bg-white border-2 mx-auto mb-5'>
        <div className='w-[90%] h-[75%] bg-slate-200 rounded-lg shadow'></div>
        <p className='flex items-center self-start ml-5 rounded-md px-2 hover:text-white hover:bg-black cursor-pointer'><a rel='noreferrer' target={'_blank'} href="https://github.com/rafaapcode">Titulo</a><BsArrowRightShort size={'30px'}/></p>
      </motion.div>

      <motion.div 
      {...animations.left}
      transition={{duration: 1.2, type: 'spring'}}
      className='flex flex-col items-center justify-center gap-y-5 w-[65%] md:w-[40%] xl:w-[30%] h-[280px] shadow-2xl rounded-xl bg-white border-2 mx-auto mb-5 relative'>
        <div className='w-[90%] h-[75%] bg-slate-200 rounded-lg shadow'></div>
        <p className='flex items-center self-start ml-5 rounded-md px-2 hover:text-white hover:bg-black cursor-pointer'><a rel='noreferrer' target={'_blank'} href="https://github.com/rafaapcode">Titulo</a><BsArrowRightShort size={'30px'}/></p>
      </motion.div>

      <motion.div 
      {...animations.right}
      transition={{duration: 1.5, type: 'spring'}}
      className='flex flex-col items-center justify-center gap-y-5 w-[65%] md:w-[40%] xl:w-[30%] h-[280px] shadow-2xl rounded-xl bg-white border-2 mx-auto mb-5'>
        <div className='w-[90%] h-[75%] bg-slate-200 rounded-lg shadow'></div>
        <p className='flex items-center self-start ml-5 rounded-md px-2 hover:text-white hover:bg-black cursor-pointer'><a rel='noreferrer' target={'_blank'} href="https://github.com/rafaapcode">Titulo</a><BsArrowRightShort size={'30px'}/></p>
      </motion.div>

      <motion.div 
      {...animations.left}
      transition={{duration: 1.8, type: 'spring'}}
      className='flex flex-col items-center justify-center gap-y-5 w-[65%] md:w-[40%] xl:w-[30%] h-[280px] shadow-2xl rounded-xl bg-white border-2 mx-auto mb-5'>
        <div className='w-[90%] h-[75%] bg-slate-200 rounded-lg shadow'></div>
        <p className='flex items-center self-start ml-5 rounded-md px-2 hover:text-white hover:bg-black cursor-pointer'><a rel='noreferrer' target={'_blank'} href="https://github.com/rafaapcode">Titulo</a><BsArrowRightShort size={'30px'}/></p>
      </motion.div>

      <motion.div 
      {...animations.right}
      transition={{duration: 2.2, type: 'spring'}}
      className='flex flex-col items-center justify-center gap-y-5 w-[65%] md:w-[40%] xl:w-[30%] h-[280px] shadow-2xl rounded-xl bg-white border-2 mx-auto mb-5'>
        <div className='w-[90%] h-[75%] bg-slate-200 rounded-lg shadow'></div>
        <p className='flex items-center self-start ml-5 rounded-md px-2 hover:text-white hover:bg-black cursor-pointer'><a rel='noreferrer' target={'_blank'} href="https://github.com/rafaapcode">Titulo</a><BsArrowRightShort size={'30px'}/></p>
      </motion.div>

    </div>
  )
};

const CardsApis = (props) => {
  const animations = {
    left: {
      initial: {x: -200},
      animate: {x: 0}
    },
    right: {
      initial: {x: 200},
      animate: {x: 0}
    }
  }

  return (
    <div className='h-[70%] w-full md:flex md:flex-wrap items-center gap-y-5 md:gap-y-0 md:gap-x-5  md:flex-row  overflow-auto'>

      <motion.div 
      {...animations.left}
      transition={{duration: 0.5, type: 'spring'}}
      className='flex flex-col items-center justify-center gap-y-5 w-[65%] md:w-[40%] xl:w-[30%] h-[280px] shadow-2xl rounded-xl bg-white border-2 mx-auto mb-5 mt-2 md:mt-0'>
        <div className='w-[90%] h-[75%] bg-slate-200 rounded-lg shadow'></div>
        <p className='flex items-center self-start ml-5 rounded-md px-2 hover:text-white hover:bg-black cursor-pointer'><a rel='noreferrer' target={'_blank'} href="https://github.com/rafaapcode">GitHub</a><BsArrowRightShort size={'30px'}/></p>
      </motion.div>

      <motion.div 
      {...animations.right}
      transition={{duration: 1, type: 'spring'}}
      className='flex flex-col items-center justify-center gap-y-5 w-[65%] md:w-[40%] xl:w-[30%] h-[280px] shadow-2xl rounded-xl bg-white border-2 mx-auto mb-5'>
        <div className='w-[90%] h-[75%] bg-slate-200 rounded-lg shadow'></div>
        <p className='flex items-center self-start ml-5 rounded-md px-2 hover:text-white hover:bg-black cursor-pointer'><a rel='noreferrer' target={'_blank'} href="https://github.com/rafaapcode">GitHub</a><BsArrowRightShort size={'30px'}/></p>
      </motion.div>

    </div>
  )
};

const CardsWeb = (props) => {
  const animations = {
    left: {
      initial: {x: -200},
      animate: {x: 0}
    },
    right: {
      initial: {x: 200},
      animate: {x: 0}
    }
  }


  return (
    <div className='h-[70%] w-full md:flex md:flex-wrap items-center gap-y-5 md:gap-y-0 md:gap-x-5  md:flex-row  overflow-auto'>

      <motion.div 
      {...animations.left}
      transition={{duration: 0.5, type: 'spring'}}
      className='flex flex-col items-center justify-center gap-y-5 w-[65%] md:w-[40%] xl:w-[30%] h-[280px] shadow-2xl rounded-xl bg-white border-2 mx-auto mb-5 mt-2 md:mt-0'>
        <div className='w-[90%] h-[75%] bg-slate-200 rounded-lg shadow'></div>
        <p className='flex items-center self-start ml-5 rounded-md px-2 hover:text-white hover:bg-black cursor-pointer'><a rel='noreferrer' target={'_blank'} href="https://github.com/rafaapcode">GitHub</a><BsArrowRightShort size={'30px'}/></p>
      </motion.div>

      <motion.div 
      {...animations.right}
      transition={{duration: 1, type: 'spring'}}
      className='flex flex-col items-center justify-center gap-y-5 w-[65%] md:w-[40%] xl:w-[30%] h-[280px] shadow-2xl rounded-xl bg-white border-2 mx-auto mb-5'>
        <div className='w-[90%] h-[75%] bg-slate-200 rounded-lg shadow'></div>
        <p className='flex items-center self-start ml-5 rounded-md px-2 hover:text-white hover:bg-black cursor-pointer'><a rel='noreferrer' target={'_blank'} href="https://github.com/rafaapcode">GitHub</a><BsArrowRightShort size={'30px'}/></p>
      </motion.div>

      <motion.div 
      {...animations.left}
      transition={{duration: 1.5, type: 'spring'}}
      className='flex flex-col items-center justify-center gap-y-5 w-[65%] md:w-[40%] xl:w-[30%] h-[280px] shadow-2xl rounded-xl bg-white border-2 mx-auto mb-5'>
        <div className='w-[90%] h-[75%] bg-slate-200 rounded-lg shadow'></div>
        <p className='flex items-center self-start ml-5 rounded-md px-2 hover:text-white hover:bg-black cursor-pointer'><a rel='noreferrer' target={'_blank'} href="https://github.com/rafaapcode">GitHub</a><BsArrowRightShort size={'30px'}/></p>
      </motion.div>

    </div>
  )
};

function Portfolio() {

  const [selected, setSelected] = useState('all');

  return (
    <div className='h-full mx-auto flex flex-col items-center max-w-xl md:max-w-2xl xl:max-w-5xl'>
      <div className='p-5 md:p-7'><p className='text-4xl mb-5 md:text-6xl'>Portfolio</p></div>
      <div className='flex w-full items-center justify-evenly p-2'>
        
        <motion.div 

          whileTap={{scale: 0.90}}
          onClick={() => setSelected('all')} 
          className={selected === 'all' ? 'h-full w-[19%] xl:w-[12%] text-center rounded-lg p-2 text-lg bg-black text-white md:text-3xl hover:text-white cursor-pointer hover:bg-black' : 'h-full w-[19%] xl:w-[12%] text-center rounded-lg p-2 text-lg md:text-3xl hover:text-white cursor-pointer hover:bg-black'}>Todos</motion.div>
        
        <motion.div 
          whileTap={{scale: 0.90}}

          onClick={() => setSelected('apis')} 
          className={selected === 'apis' ? 'h-full w-[14%] xl:w-[10%] text-center rounded-lg p-2 text-lg bg-black text-white md:text-3xl hover:text-white cursor-pointer hover:bg-black' : 'h-full w-[10%] text-center rounded-lg p-2 text-lg md:text-3xl hover:text-white cursor-pointer hover:bg-black'}>APIs</motion.div>
        
        <motion.div 
          whileTap={{scale: 0.90}}

          onClick={() => setSelected('webpages')} 
          className={selected === 'webpages' ? 'h-full w-[20%] xl:w-[12%] text-center rounded-lg p-2 text-lg bg-black text-white md:text-3xl hover:text-white cursor-pointer hover:bg-black' : 'h-full w-[20%] xl:w-[12%] text-center rounded-lg p-2 text-lg md:text-3xl hover:text-white cursor-pointer hover:bg-black'}>Sites</motion.div>
      
      </div>

      {selected === 'all' && <CardsAll />}
      {selected === 'apis' && <CardsApis />}
      {selected === 'webpages' && <CardsWeb />}
      

    </div>
  )
}

export default Portfolio;