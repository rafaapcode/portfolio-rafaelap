import React from 'react';
import { motion } from 'framer-motion';
import { RiGithubLine } from 'react-icons/ri';
import { TiSocialLinkedin } from 'react-icons/ti';
import { TbMessageCircle2 } from 'react-icons/tb';
import { BiGridAlt } from 'react-icons/bi';

function Home() {
    return (
        <div className='h-full md:h-[94%] xl:h-[90%] mx-auto flex flex-col md:flex-row max-w-xl md:max-w-2xl xl:max-w-5xl'>
            <div className='w-full h-full flex gap-x-0 md:gap-x-36'>
                <motion.div
                    initial={{ x: -200 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    className='flex flex-col justify-center gap-y-5'>
                    <a href="https://github.com/rafaapcode"><RiGithubLine size={'30px'} /></a>
                    <a href="https://www.linkedin.com/in/rafael-ap/"><TiSocialLinkedin size={'30px'} /></a>
                </motion.div>

                <div className='flex flex-col-reverse gap-y-5 xl:gap-y-0 xl:flex-row h-[70%] w-[90%] xl:h-1/2 xl:w-full my-auto justify-between'>
                    <div className='flex flex-col w-full md:w-9/12 xl:h-full h-1/2 ml-[3%] md:ml-0 justify-evenly  xl:gap-y-10'>
                        <motion.h1 initial={{ y: -300 }} animate={{ y: 0 }} transition={{ duration:0.8, type: 'spring' }} className='text-3xl xl:text-5xl font-semibold'>Rafael Aparecido</motion.h1>
                        <motion.div initial={{ y: -300 }} animate={{ y: 0 }} transition={{ duration:0.8, type: 'spring' }} className='flex w-full'>
                            <div className='bg-slate-300 h-[2px] w-[100px] my-auto'></div>
                            <p className='ml-5'>Desenvolvedor Back-End</p>
                        </motion.div>
                        <motion.div initial={{y: 300}} animate={{y:0}} transition={{duration:1.2, type: 'spring'}} className='flex h-1/5 w-full'>
                            <p className='text-xs md:text-base'>Olá sou Desenvolvedor Back-End, moro em Bragança Paulista. Sou apaixonado pela tecnologia e a forma como traz uma solução simples para problemas complexos. </p>
                        </motion.div>
                        <motion.div initial={{y: 300}} animate={{y:0}} transition={{duration:1.2, type: 'spring'}} className='flex items-center rounded-lg xl:rounded-xl w-1/2 xl:w-[35%] bg-[#363535]'>
                            <a href="#contato"><button className='bg-[#363535] w-full px-2 py-5 text-sm md:text-base rounded-lg xl:rounded-xl text-white'>Entre em contato</button></a>
                            <TbMessageCircle2 color='white' size={'20px'} />
                        </motion.div>
                    </div>

                    <motion.div initial={{ x: 300 }} animate={{ x: 0 }} transition={{ duration:0.8, type: 'spring' }} className='bg-slate-200  w-[300px] h-[300px] md:w-[350px] md:h-[350px] xl:h-full xl:w-5/12 rounded-xl mx-auto md:mx-0'>
                        teste
                    </motion.div>

                </div>

                <motion.div initial={{y: 100}} animate={{y: 0}} transition={{duration: 1, type: 'spring'}} className='fixed bottom-0 flex justify-around w-full items-center h-[50px] border-t-2 md:hidden'>
                    <p className='text-xl'>Rafael</p>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <button>
                        <BiGridAlt size={'30px'} />
                    </button>
                </motion.div>

            </div>
        </div>
    )
}

export default Home;