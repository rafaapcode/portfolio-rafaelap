import React from 'react';
import { motion } from 'framer-motion';
import { TbSchool } from 'react-icons/tb';
import { MdWorkOutline, MdOutlineDateRange } from 'react-icons/md';

const Education = () => {
    return(
        <div className='h-full w-full '>
            
         <div className='flex flex-col justify-around w-fit h-[20%]'>
            <h3 className='text-xl font-semibold'>Ensino Médio</h3>
            <p className='text-slate-500'>SESI</p>
            <div className='flex items-center'>
                <MdOutlineDateRange size={'35px'} color='gray'/>
                <p className='px-2 text-slate-500'>2019 - 2021</p>
            </div>
         </div>


        </div>
    )
}


function Qualification() {
  return (
    <div className='h-full mx-auto flex flex-col items-center max-w-xl md:max-w-2xl xl:max-w-5xl gap-y-16'>
        <div className='p-5 md:p-7'><p className='text-4xl md:text-6xl'>Qualificação</p></div>

        <div className='flex p-5 w-full items-center'>

            <motion.div whileTap={{scale: 0.96}} className='flex items-center w-1/2 justify-center'>
                <TbSchool size={'12%'}/> 
                <a href='#skills' className='text-xl md:text-4xl px-2'>Educação</a>
            </motion.div>
            
            <motion.div whileTap={{scale: 0.96}} className='flex items-center w-1/2 justify-center'>
                <MdWorkOutline size={'12%'}/> 
                <a href='#skills' className='text-xl md:text-4xl px-2'>Experiência</a>
            </motion.div>

        </div>

        <div className='h-[80%] w-full'>
            <Education />
        </div>
    </div>
  )
}

export default Qualification;