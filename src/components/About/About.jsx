import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { TbNews } from 'react-icons/tb';
import Text from '../Text';
import CV from '../../assets/RafaelAparecido.pdf';
import FOTO from '../../assets/img/FOTO.jpeg';

function About() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='h-full flex flex-col text-center'>
            <Text title='Sobre'/>

            <div className='flex flex-col items-center gap-y-5 xl:gap-y-0 xl:flex-row xl:justify-center w-full h-[90%] md:h-[90%] md:my-auto xl:gap-x-12'>
                <motion.div
                    dragConstraints={{
                        right: 15,
                        left: 5,
                        top: 20,
                        bottom: 20
                    }}
                    drag
                    className='w-[300px] h-[300px] md:w-[500px] md:h-[500px] xl:w-[470px] xl:h-[470px] flex items-center rounded-xl'>
                    <img className='mx-auto rounded-xl w-[230px] md:w-[300px] xl:w-[350px]' src={FOTO} alt="Minha foto" />
                </motion.div>

                <div className='w-full md:w-[90%] xl:w-1/2 h-1/2 md:h-[50%] xl:h-[80%] flex flex-col gap-y-5 text-justify xl:mt-11'>
                    <motion.div layout  onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'w-[300px] h-[150px] md:w-[450px] md:h-[200px] xl:h-[300px] xl:w-[550px] border-2 rounded-xl bg-slate-200/70 shadow flex flex-col items-center justify-around mx-auto card' : 'w-[150px] h-[100px] md:h-[100px] xl:h-[100px] border-2 rounded-xl bg-slate-200/70 shadow flex flex-col items-center justify-around mx-auto card'}>
                        <MdOutlineWorkOutline size={'30px'} />
                        <p className={isOpen ? 'hidden' : 'text-xs text-gray-600'}>10 + Projetos pessoais</p>
                        {isOpen && (
                            <motion.div className='text-center'>
                                <p className='text-sm md:text-lg'>Todos os c??digos podem ser acessados pelo meu GitHub :</p>
                                <button className='p-2 md:p-5 rounded-lg bg-slate-300'><a rel='noreferrer' target='_blank' href="https://github.com/rafaapcode">GitHub</a></button>
                            </motion.div>
                        )}
                    </motion.div>
                    <div className='w-[90%] md:w-[95%] md:ml-10 h-[50%] mx-auto'>
                        <p className='text-sm md:text-2xl xl:text-lg text-slate-500 font-semibold'>
                            Ol?? , me chamo Rafael Aparecido Gon??alves da Silva , amo programar e principalmente a forma como a programa????o resolve os problemas do dia a dia. Nunca trabalhei na ??rea de tecnologia e esse ?? meu objetivo , apesar de n??o ter nenhuma experi??ncia profissional tento me desafiar todos os dias , desenvolvendo projetos pessoais que podem ser encontrados nas minha publica????es do Linkedin ou no meu GitHub.
                        </p>
                    </div>

                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }} className='w-[45%] md:w-[25%] py-4 px-2 md:p-3 xl:py-5 xl:px-3 xl:ml-8 mx-auto xl:mx-0 bg-black/70 rounded-xl text-white shadow-lg flex items-center justify-evenly mt-5 xl:mt-0'><a download="" href={CV}>Download CV</a> <TbNews size={'20px'} /> </motion.button>
                </div>
            </div>


        </div>
    )
}

export default About