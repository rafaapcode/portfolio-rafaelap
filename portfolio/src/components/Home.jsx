import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { CiLinkedin } from 'react-icons/ci';

function Home() {
  return (
    <div className='h-full md:h-[94%] xl:h-[90%] mx-auto flex flex-col md:flex-row max-w-xl md:max-w-2xl xl:max-w-5xl'>
        <div className='w-full h-full flex gap-x-36'>
            <div className='flex flex-col justify-center gap-y-5'>
                <a href="https://github.com/rafaapcode"><BsGithub size={'30px'}/></a>
                <a href="https://www.linkedin.com/in/rafael-ap/"><CiLinkedin size={'30px'}/></a>
            </div>

            <div className='ml- flex flex-col h-1/2 w-1/2 my-auto gap-y-5'>
                <h1 className='text-2xl md:text-5xl font-semibold'>Rafael Aparecido</h1>
                <div className='flex'>
                    <div className='bg-slate-300 h-[2px] w-[100px] my-auto'></div>
                    <p className='ml-5'>Desenvolvedor Back-End</p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Home;