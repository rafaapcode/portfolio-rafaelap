import React from 'react'
import { MdOutlineWorkOutline } from 'react-icons/md';
import { TbNews } from 'react-icons/tb';

function About() {
    return (
        <div className='h-full flex flex-col'>
            <div className='w-full p-5 text-center'><p className='text-4xl md:text-6xl xl:text-5xl'>Sobre</p></div>

            <div className='flex flex-col items-center gap-y-5 md:gap-y-0 md:flex-row md:justify-center w-full h-[90%] md:h-[40%] xl:h-[90%] md:my-auto xl:gap-x-20'>
                <div className='w-[300px] h-[300px] md:w-[350px] md:h-[350px] xl:w-[470px] xl:h-[470px] bg-slate-200 rounded-xl'>
                    img
                </div>

                <div className='w-full md:w-1/2 h-1/2 md:h-[70%] xl:h-[90%] flex flex-col gap-y-5 text-justify xl:mt-11'>
                    <div className='w-[150px] h-[100px] md:h-[100px] border-2 rounded-xl bg-slate-200/70 shadow flex flex-col items-center justify-around mx-auto'>
                        <MdOutlineWorkOutline size={'30px'} />
                        <p className='text-xs text-gray-600'>10 + Projetos pessoais</p>
                    </div>
                    <div className='w-[90%] md:w-[95%] md:ml-10 h-[50%] mx-auto'>
                        <p className='text-sm xl:text-lg text-slate-500'>
                            Olá , me chamo Rafael Aparecido Gonçalves da Silva , amo programar e principalmente a forma como a programação resolve os problemas do dia a dia. Nunca trabalhei na área de tecnologia e esse é meu objetivo , apesar de não ter nenhuma experiência profissional tento me desafiar todos os dias , desenvolvendo projetos pessoais que podem ser encontrados nas minha publicações do Linkedin ou no meu GitHub.
                        </p>
                    </div>

                    <button className='w-[50%] xl:w-[25%] p-2 md:p-3 xl:py-5 xl:px-3 xl:ml-8 md:mx-auto xl:mx-0 bg-black/70 rounded-xl text-white shadow-lg flex items-center justify-evenly'>Download CV  <TbNews size={'20px'}/> </button>
                </div>
            </div>
        </div>
    )
}

export default About