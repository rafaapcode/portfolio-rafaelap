import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TbSchool } from 'react-icons/tb';
import { MdWorkOutline, MdOutlineDateRange } from 'react-icons/md';

const Education = () => {

    const animation = {
        initial: {scale: 0},
        animate: {scale: 1},
    };

    return(
        <motion.div {...animation}  transition={{duration: 0.5, type: 'spring'}} className='h-full w-full xl:w-[70%] xl:mx-auto flex flex-col'>

         <div className='flex flex-col justify-around w-fit h-[20%] ml-5'>
            <h3 className='text-xl md:text-3xl font-semibold text-black/50'>Ensino Médio</h3>
            <p className='text-lg md:text-2xl text-slate-300'>SESI</p>
            <div className='flex items-center'>
                <MdOutlineDateRange size={'35px'} color='gray'/>
                <p className='px-2 text-slate-500 md:text-lg'>2019 - 2021</p>
            </div>
         </div>

         <div className='flex flex-col justify-around w-fit h-[20%] md:h-[25%] self-end mr-5'>
            <h3 className='text-xl md:text-3xl font-semibold text-black/50'>Técnico <br /> em Redes de <br /> Computadores<br /></h3>
            <p className='text-lg md:text-2xl text-slate-300'>SENAI</p>
            <div className='flex items-center'>
                <MdOutlineDateRange size={'35px'} color='gray'/>
                <p className='px-2 text-slate-500 md:text-lg'>2020 - 2021</p>
            </div>
         </div>

         <div className='flex flex-col justify-around w-fit h-[20%] ml-5'>
            <h3 className='text-xl md:text-3xl font-semibold text-black/50'>Engenharia de <br />Sofware</h3>
            <p className='text-lg md:text-2xl text-slate-300'>UNINTER</p>
            <div className='flex items-center'>
                <MdOutlineDateRange size={'35px'} color='gray'/>
                <p className='px-2 text-slate-500 md:text-lg'>2022 - atual</p>
            </div>
         </div>

        </motion.div>
    )
}

const Experience = () => {

    const animation = {
        initial: {scale: 0},
        animate: {scale: 1},
    };

    return (
        <motion.div {...animation} transition={{duration: 0.5, type: 'spring'}} className='h-full w-full xl:w-[70%] xl:mx-auto flex flex-col'>

         <div className='flex flex-col justify-around w-fit h-[20%] ml-5'>
            <h3 className='text-xl md:text-3xl font-semibold text-black/50'>Projetos Pessoais</h3>
            <p className='text-lg md:text-2xl text-slate-300'><a href="https://github.com/rafaapcode">GitHub</a></p>
            <div className='flex items-center'>
                <MdOutlineDateRange size={'35px'} color='gray'/>
                <p className='px-2 text-slate-500 md:text-lg'>2022 - atual</p>
            </div>
         </div>

         <div className='flex flex-col justify-around w-fit h-[20%] md:h-[25%] self-end mr-5'>
            <h3 className='text-xl md:text-3xl font-semibold text-black/50'> Em breve outras <br /> experiências </h3>
            <p className='text-lg md:text-2xl text-slate-300'> ... </p>
            <div className='flex items-center'>
                <MdOutlineDateRange size={'35px'} color='gray'/>
                <p className='px-2 text-slate-500 md:text-lg'> 20?? - 20?? </p>
            </div>
         </div>

        </motion.div>
    )
}


function Qualification() {

    const [isCliked, setClicked] = useState(false);

  return (
    <div className='h-full mx-auto flex flex-col items-center max-w-xl md:max-w-2xl xl:max-w-5xl gap-y-16'>
        <div className='p-5 md:p-7'><p className='text-4xl md:text-6xl'>Qualificação</p></div>

        <div className='flex p-5 w-full items-center'>

            <motion.div onClick={() => setClicked(true)} whileTap={{scale: 0.96}} className='flex items-center w-1/2 justify-center cursor-pointer'>
                <TbSchool size={'12%'}/> 
                <p className='text-xl md:text-4xl px-2'>Educação</p>
            </motion.div>
            
            <motion.div onClick={() => setClicked(false)} whileTap={{scale: 0.96}} className='flex items-center w-1/2 justify-center cursor-pointer'>
                <MdWorkOutline size={'12%'}/> 
                <p className='text-xl md:text-4xl px-2'>Experiência</p>
            </motion.div>

        </div>

        <div className='h-[80%] w-full'>
            {isCliked && <Education />}
            {!isCliked && <Experience />}
        </div>
    </div>
  )
}

export default Qualification;