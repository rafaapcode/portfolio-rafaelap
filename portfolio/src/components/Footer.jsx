import React from 'react';

function Footer() {
  return (
    <div className="h-[300px] w-full mx-auto flex flex-col items-center max-w-xl md:max-w-2xl xl:max-w-5xl gap-y-16 mt-14">
      <h2 className='text-3xl md:text-4xl font-semibold'>Rafael</h2>

      <div className='flex w-full items-center justify-around'>
        <a href="#home" className='text-lg md:text-xl'>Home</a>
        <a href="#about" className='text-lg md:text-xl'>Sobre</a>
        <a href="#portfolio" className='text-lg md:text-xl'>Portfolio</a>
      </div>
    
    
      <p className='text-slate-400'>Desenvolvido por <a href="https://github.com/rafaapcode" className='text-slate-600'>rafaapcode</a></p>
    </div>
  )
}

export default Footer;