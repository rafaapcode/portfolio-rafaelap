import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { TbNews } from 'react-icons/tb';

function About() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='h-full flex flex-col'>
            <div className='w-full p-5 text-center'><p className='text-4xl md:text-6xl xl:text-5xl'>Sobre</p></div>

            <div className='flex flex-col items-center gap-y-5 xl:gap-y-0 xl:flex-row xl:justify-center w-full h-[90%] md:h-[90%] md:my-auto xl:gap-x-12'>
                <motion.div
                    dragConstraints={{
                        right: 15,
                        left: 5,
                        top: 20,
                        bottom: 20
                    }}
                    drag
                    className='w-[300px] h-[300px] md:w-[500px] md:h-[500px] xl:w-[470px] xl:h-[470px] bg-slate-200 rounded-xl'>
                    img
                </motion.div>

                <div className='w-full md:w-[90%] xl:w-1/2 h-1/2 md:h-[50%] xl:h-[80%] flex flex-col gap-y-5 text-justify xl:mt-11'>
                    <motion.div layout  onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'w-[300px] h-[150px] md:w-[450px] md:h-[200px] xl:h-[300px] xl:w-[550px] border-2 rounded-xl bg-slate-200/70 shadow flex flex-col items-center justify-around mx-auto card' : 'w-[150px] h-[100px] md:h-[100px] xl:h-[100px] border-2 rounded-xl bg-slate-200/70 shadow flex flex-col items-center justify-around mx-auto card'}>
                        <MdOutlineWorkOutline size={'30px'} />
                        <p className={isOpen ? 'hidden' : 'text-xs text-gray-600'}>10 + Projetos pessoais</p>
                        {isOpen && (
                            <motion.div className='text-center'>
                                <p className='text-sm md:text-lg'>Todos os códigos podem ser acessados pelo meu GitHub :</p>
                                <button className='p-2 md:p-5 rounded-lg bg-slate-300'><a rel='noreferrer' target='_blank' href="https://github.com/rafaapcode">GitHub</a></button>
                            </motion.div>
                        )}
                    </motion.div>
                    <div className='w-[90%] md:w-[95%] md:ml-10 h-[50%] mx-auto'>
                        <p className='text-sm md:text-2xl xl:text-lg text-slate-500 font-semibold'>
                            Olá , me chamo Rafael Aparecido Gonçalves da Silva , amo programar e principalmente a forma como a programação resolve os problemas do dia a dia. Nunca trabalhei na área de tecnologia e esse é meu objetivo , apesar de não ter nenhuma experiência profissional tento me desafiar todos os dias , desenvolvendo projetos pessoais que podem ser encontrados nas minha publicações do Linkedin ou no meu GitHub.
                        </p>
                    </div>

                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }} className='w-[45%] md:w-[25%] py-4 px-2 md:p-3 xl:py-5 xl:px-3 xl:ml-8 mx-auto xl:mx-0 bg-black/70 rounded-xl text-white shadow-lg flex items-center justify-evenly'>Download CV  <TbNews size={'20px'} /> </motion.button>
                </div>
            </div>


        </div>
    )
}

export default About