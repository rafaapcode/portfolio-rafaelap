import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Text from '../Text';
import Cards from './Cards';

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
  };

  return (
    <div className='h-[70%] w-full md:flex md:flex-wrap items-center gap-y-5 md:gap-y-0 md:gap-x-5  md:flex-row  overflow-auto'>

      <Cards time={0.5} animation={animations.left} title='Rafinha'/>

      <Cards time={1} animation={animations.right} title='Rafinha2'/>

      <Cards time={1.3} animation={animations.left} title='Rafinh3'/>

      <Cards time={1.8} animation={animations.right} title='Rafinha4'/>

      <Cards time={2} animation={animations.left} title='Rafinha5'/>

      <Cards time={2.5} animation={animations.right} title='Rafinha6'/>

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
  };

  return (
    <div className='h-[70%] w-full md:flex md:flex-wrap items-center gap-y-5 md:gap-y-0 md:gap-x-5  md:flex-row  overflow-auto'>

      <Cards time={0.5} animation={animations.left} title='Rafael'/>

      <Cards time={1} animation={animations.left} title='RafaelLindo'/>

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
  };

  return (
    <div className='h-[70%] w-full md:flex md:flex-wrap items-center gap-y-5 md:gap-y-0 md:gap-x-5  md:flex-row  overflow-auto'>

      <Cards time={0.5} animation={animations.left} title='Gabinho'/>

      <Cards time={1} animation={animations.right} title='Gabi'/>

      <Cards time={0.5} animation={animations.right} title='Gabi2'/>

    </div>
  )
};

function Portfolio() {

  const [selected, setSelected] = useState('all');

  return (
    <div className='h-full mx-auto flex flex-col items-center max-w-xl md:max-w-2xl xl:max-w-5xl'>
      <Text title='Portfolio' />
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