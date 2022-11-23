import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TbSchool } from 'react-icons/tb';
import { MdWorkOutline, MdOutlineDateRange } from 'react-icons/md';
import Text from '../Text';

const Education = () => {

    const animation = {
        initial: { scale: 0 },
        animate: { scale: 1 },
    };

    return (
        <motion.div {...animation} transition={{ duration: 0.5, type: 'spring' }} className='h-full w-full xl:w-[70%] xl:mx-auto grid grid-cols-2 justify-items-center overflow-auto'>

            <div className='flex flex-col justify-around w-fit h-[20%] ml-5 md:ml-0 mt-7 md:mt-0 xl:mt-7'>
                <h3 className='text-lg md:text-3xl xl:text-2xl font-bold text-black/50'>Ensino Médio</h3>
                <p className='text-lg md:text-2xl text-slate-300'>SESI</p>
                <div className='flex items-center'>
                    <MdOutlineDateRange size={'35px'} color='gray' />
                    <p className='px-2 text-slate-500 md:text-lg'>Jan/2019 - Dez/2021</p>
                </div>
            </div>

            <div className='flex flex-col justify-around w-fit h-[20%] md:h-[25%] mt-10 md:mt-5 xl:mt-10'>
                <h3 className='text-lg md:text-3xl xl:text-2xl font-bold text-black/50'>Técnico em Redes<br />de Computadores<br /></h3>
                <p className='text-lg md:text-2xl text-slate-300'>SENAI</p>
                <div className='flex items-center'>
                    <MdOutlineDateRange size={'35px'} color='gray' />
                    <p className='px-2 text-slate-500 md:text-lg'>Jan/2020 - Jun/2021</p>
                </div>
            </div>

            <div className='flex flex-col justify-around w-fit h-[20%] ml-5 md:ml-0'>
                <h3 className='text-lg md:text-3xl xl:text-2xl font-bold text-black/50'>Engenharia de <br />Sofware</h3>
                <p className='text-lg md:text-2xl text-slate-300'>UNINTER</p>
                <div className='flex items-center'>
                    <MdOutlineDateRange size={'35px'} color='gray' />
                    <p className='px-2 text-slate-500 md:text-lg'>Fev/2022 - atual</p>
                </div>
            </div>

            <div className='flex flex-col justify-around w-fit h-[20%]'>
                <h3 className='text-lg md:text-3xl xl:text-2xl font-bold text-black/50'>Azure AI <br />Fundamentals</h3>
                <p className='text-lg md:text-2xl text-slate-300'>SENAI</p>
                <div className='flex items-center'>
                    <MdOutlineDateRange size={'35px'} color='gray' />
                    <p className='px-2 text-slate-500 md:text-lg'>Jun/2022 - Nov/2022</p>
                </div>
            </div>

        </motion.div>
    )
}

const Experience = () => {

    const animation = {
        initial: { scale: 0 },
        animate: { scale: 1 },
    };

    return (
        <motion.div {...animation} transition={{ duration: 0.5, type: 'spring' }} className='h-full w-full xl:w-[70%] xl:mx-auto flex flex-col'>

            <div className='flex flex-col justify-around w-fit h-[20%] ml-5'>
                <h3 className='text-xl md:text-3xl font-semibold text-black/50'>Projetos Pessoais</h3>
                <p className='text-lg md:text-2xl text-slate-300'><a href="https://github.com/rafaapcode">GitHub</a></p>
                <div className='flex items-center'>
                    <MdOutlineDateRange size={'35px'} color='gray' />
                    <p className='px-2 text-slate-500 md:text-lg'>2022 - atual</p>
                </div>
            </div>

            <div className='flex flex-col justify-around w-fit h-[20%] md:h-[25%] self-end mr-5'>
                <h3 className='text-xl md:text-3xl font-semibold text-black/50'> Em breve outras <br /> experiências </h3>
                <p className='text-lg md:text-2xl text-slate-300'> ... </p>
                <div className='flex items-center'>
                    <MdOutlineDateRange size={'35px'} color='gray' />
                    <p className='px-2 text-slate-500 md:text-lg'> 20?? - 20?? </p>
                </div>
            </div>

        </motion.div>
    )
}


function Qualification() {

    const [isCliked, setClicked] = useState(true);

    return (
        <div className='h-full mx-auto flex flex-col items-center max-w-xl md:max-w-2xl xl:max-w-5xl gap-y-5'>
            <Text title='Qualificação' />

            <div className='flex p-5 w-full items-center'>

                <motion.div onClick={() => setClicked(true)} whileTap={{ scale: 0.96 }} className='flex items-center w-1/2 justify-center cursor-pointer'>
                    <TbSchool size={'12%'} />
                    <p className='text-xl md:text-4xl px-2'>Educação</p>
                </motion.div>

                <motion.div onClick={() => setClicked(false)} whileTap={{ scale: 0.96 }} className='flex items-center w-1/2 justify-center cursor-pointer'>
                    <MdWorkOutline size={'12%'} />
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