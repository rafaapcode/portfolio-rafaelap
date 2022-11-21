import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiGithubLine } from 'react-icons/ri';
import { TiSocialLinkedin } from 'react-icons/ti';
import { TbMessageCircle2 } from 'react-icons/tb';
import { BiGridAlt } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson, BsImage } from 'react-icons/bs';
import { DiCodeBadge } from 'react-icons/di'
import { MdOutlineMailOutline } from 'react-icons/md';
import { TbSchool } from 'react-icons/tb';
import FOTO from '../../assets/img/FOTO.jpeg';

function Home() {

    const [isOpen, setIsOpen] = useState(false);

    const menuCelAnimation = {
        initial: { y: 200, opacity: 0.5 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.7, type: 'spring' },
    };

    const headerCel = {
        initial: { y: 100 },
        animate: { y: 0 },
        transition: { duration: 1, type: 'spring' }
    };

    const imgAnimation = {
        initial: { x: 300 },
        animate: { x: 0 },
        transition: { duration: 0.8, type: 'spring' }
    };

    const homeAnimation = {
        top: {
            initial: { y: -300 },
            animate: { y: 0 },
            transition: { duration: 0.8, type: 'spring' }
        },
        bottom: {
            initial: { y: 300 },
            animate: { y: 0 },
            transition: { duration: 1.2, type: 'spring' }
        },
    }

    const socialIcons = {
        initial: { x: -200 },
        animate: { x: 0 },
        transition: { duration: 0.8, type: 'spring' }
    }

    return (
        <div className='h-full md:h-[94%] xl:h-[90%] mx-auto flex flex-col md:flex-row max-w-xl md:max-w-2xl xl:max-w-5xl'>
            <div className='w-full h-full flex gap-x-0 md:gap-x-36'>
                <motion.div
                    {...socialIcons}
                    className='flex flex-col justify-center gap-y-5'>
                    <a href="https://github.com/rafaapcode"><RiGithubLine size={'30px'} /></a>
                    <a href="https://www.linkedin.com/in/rafael-ap/"><TiSocialLinkedin size={'30px'} /></a>
                </motion.div>

                <div className='flex flex-col-reverse gap-y-5 xl:gap-y-0 xl:flex-row h-[70%] w-[90%] xl:h-1/2 xl:w-full my-auto justify-between'>
                    <div className='flex flex-col w-full md:w-9/12 xl:h-full h-1/2 ml-[3%] md:ml-0 justify-evenly  xl:gap-y-10'>
                        <motion.h1 {...homeAnimation.top} className='text-3xl xl:text-5xl font-semibold'>Rafael Aparecido</motion.h1>
                        <motion.div {...homeAnimation.top} className='flex w-full'>
                            <div className='bg-slate-300 h-[2px] w-[100px] my-auto'></div>
                            <p className='ml-5'>Desenvolvedor Back-End</p>
                        </motion.div>
                        <motion.div {...homeAnimation.bottom} className='flex h-1/5 w-full'>
                            <p className='text-xs md:text-base'>Olá sou Desenvolvedor Back-End, moro em Bragança Paulista. Sou apaixonado pela tecnologia e a forma como traz uma solução simples para problemas complexos. </p>
                        </motion.div>
                        <motion.div {...homeAnimation.bottom} whileHover={{scale: 1.1}} className='flex items-center rounded-lg xl:rounded-xl w-1/2 xl:w-[35%] bg-[#363535]'>
                            <a href="#contact"><button className='bg-[#363535] w-full px-2 py-5 text-sm md:text-base rounded-lg xl:rounded-xl text-white'>Entre em contato</button></a>
                            <TbMessageCircle2 color='white' size={'20px'} />
                        </motion.div>
                    </div>

                    <motion.div 
                    {...imgAnimation} 
                    className='w-[250px] md:w-[300px] xl:h-full xl:w-5/12 rounded-xl mx-auto md:mx-0'>
                        <img className='rounded-xl' src={FOTO} alt="Minha foto"/>
                    </motion.div>

                </div>

                <motion.div {...headerCel} className='fixed bottom-0 flex justify-around w-full items-center h-[50px] border-t-2 md:hidden bg-white'>
                    <p className='text-xl'>Rafael</p>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <button onClick={() => setIsOpen(true)}>
                        <BiGridAlt size={'30px'} />
                    </button>
                </motion.div>

                {isOpen && (
                    <motion.div
                        {...menuCelAnimation}
                        className='fixed bottom-0 flex justify-around w-full items-center h-[40%] gap-x-2 bg-white flex-wrap rounded-xl md:hidden shadow-xl border-t-2 z-20'>
                        <button className='w-[25%] flex flex-col justify-center items-center p-2 shadow rounded-xl'>
                            <AiOutlineHome size={'30px'} />
                            <a href="#home" className='text-xl p-1'>Home</a>
                        </button>
                        <button className='w-[25%] flex flex-col justify-center items-center p-2 shadow rounded-xl'>
                            <BsPerson size={'30px'} />
                            <a href="#about" className='text-xl p-1'>Sobre</a>
                        </button>
                        <button className='w-[25%] flex flex-col justify-center items-center p-2 shadow rounded-xl'>
                            <DiCodeBadge size={'30px'} />
                            <a href="#skills" className='text-xl p-1'>Skills</a>
                        </button>
                        <button className='w-[25%] flex flex-col justify-center items-center p-2 shadow rounded-xl'>
                            <TbSchool size={'30px'} />
                            <a href="#qualification" className='text-lg p-1'>Qualificação</a>
                        </button>
                        <button className='w-[25%] flex flex-col justify-center items-center p-2 shadow rounded-xl'>
                            <BsImage size={'30px'} />
                            <a href="#portfolio" className='text-xl p-1'>Portfolio</a>
                        </button>
                        <button className='w-[25%] flex flex-col justify-center items-center p-2 shadow rounded-xl'>
                            <MdOutlineMailOutline size={'30px'} />
                            <a href="#contact" className='text-xl p-1'>Contato</a>
                        </button>

                        <button onClick={() => setIsOpen(false)} className='absolute bottom-3 right-5 text-3xl'>X</button>
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default Home;