import React from 'react';
import { motion } from 'framer-motion';
import { AiFillCheckCircle } from 'react-icons/ai';

function Skills() {

  const boxAnimationnHover = {
    scale: 1.1
  }

  return (
    <div className='h-full mx-auto flex flex-col items-center max-w-xl md:max-w-2xl xl:max-w-5xl'>
      <div className='p-5 md:p-7'><p className='text-4xl md:text-6xl'>Skills</p></div>

      <div className='h-[90%] w-full flex flex-col xl:flex-row xl:justify-between items-center gap-y-10 md:gap-y-20 xl:gap-y-0'>
        <motion.div whileHover={{ ...boxAnimationnHover }} className='w-[85%] h-2/5 xl:w-[45%] xl:h-[60%] border-2 rounded-lg'>
          <h2 className='text-center py-5 text-base md:text-lg font-semibold'>Desenvolvimento Frontend</h2>

          <div className='grid grid-cols-2 gap-x-1 w-[90%] h-[86%] mx-auto items-center'>

            <div className='flex h-[20%] justify-around items-center text-center mx-auto'>
              <div className='flex flex-col w-full'>
                <div className='w-fit font-semibold flex items-center justify-start gap-x-2'><AiFillCheckCircle /> <h3>HTML</h3></div>
                <p className='text-slate-300 text-center md:ml-7 md:text-left'>Intermediário</p>
              </div>
            </div>

            <div className='flex h-[20%] justify-around items-center mx-auto'>
              <div className='flex flex-col w-full'>
                <div className='w-fit font-semibold flex items-center justify-start gap-x-2'><AiFillCheckCircle /> <h3>CSS</h3></div>
                <p className='text-slate-300 text-center md:ml-7 md:text-left'>Intermediário</p>
              </div>
            </div>

            <div className='flex h-[20%] justify-around items-center mx-auto'>
              <div className='flex flex-col w-full'>
                <div className='w-fit font-semibold flex items-center justify-start gap-x-2'><AiFillCheckCircle /> <h3>Tailwind</h3></div>
                <p className='text-slate-300 text-center md:ml-7 md:text-left'>Intermediário</p>
              </div>
            </div>

            <div className='flex h-[20%] justify-around items-center mx-auto'>
              <div className='flex flex-col w-full'>
                <div className='w-fit font-semibold flex items-center justify-start gap-x-2'><AiFillCheckCircle /> <h3>JavaScript</h3></div>
                <p className='text-slate-300 text-center md:ml-7 md:text-left'>Avançado</p>
              </div>
            </div>

            <div className='flex h-[20%] justify-around items-center mx-[15%] md:mx-[25%] xl:mx-[15%]'>
              <div className='flex flex-col w-full'>
                <div className='w-fit font-semibold flex items-center justify-start gap-x-2'><AiFillCheckCircle /> <h3>React</h3></div>
                <p className='text-slate-300 ml-5'>Básico</p>
              </div>
            </div>

          </div>

        </motion.div>

        <motion.div whileHover={{ ...boxAnimationnHover }} className='w-[85%] h-2/5 xl:w-[45%] xl:h-[60%] border-2 rounded-lg'>
          <h2 className='text-center py-5 text-base md:text-lg font-semibold'>Desenvolvimento Backend</h2>

          <div className='grid grid-cols-2 gap-x-1 w-[90%] h-[86%] mx-auto items-center'>

            <div className='flex h-[20%] justify-around items-center text-center mx-auto'>
              <div className='flex flex-col w-full'>
                <div className='w-fit font-semibold flex items-center justify-start gap-x-2'><AiFillCheckCircle /> <h3>NodeJs</h3></div>
                <p className='text-slate-300 text-center md:ml-7 md:text-left'>Intermediário</p>
              </div>
            </div>

            <div className='flex h-[20%] justify-around items-center mx-auto'>
              <div className='flex flex-col w-full'>
                <div className='w-fit font-semibold flex items-center justify-start gap-x-2'><AiFillCheckCircle /> <h3>SQL</h3></div>
                <p className='text-slate-300 text-center md:ml-7 md:text-left'>Intermediário</p>
              </div>
            </div>

            <div className='flex h-[20%] justify-around items-center mx-[17%]'>
              <div className='flex flex-col w-full'>
                <div className='w-fit font-semibold flex items-center justify-start gap-x-2'><AiFillCheckCircle /> <h3>MongoDB</h3></div>
                <p className='text-slate-300 text-center md:ml-7 md:text-left'>Básico</p>
              </div>
            </div>

            <div className='flex h-[20%] justify-around items-center mx-[20%]'>
              <div className='flex flex-col w-full'>
                <div className='w-fit font-semibold flex items-center justify-start gap-x-2'><AiFillCheckCircle /> <h3>MYSQL</h3></div>
                <p className='text-slate-300 text-center md:ml-7 md:text-left'>Básico</p>
              </div>
            </div>

          </div>

        </motion.div>
      </div>

    </div>
  )
}

export default Skills