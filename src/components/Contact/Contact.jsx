import React from 'react'
import { TbBrandWhatsapp } from 'react-icons/tb';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { motion } from 'framer-motion';
import Text from '../Text';

function Contact() {
  return (
    <div className='h-full mx-auto flex flex-col items-center max-w-xl md:max-w-2xl xl:max-w-5xl xl:mt-10'>
      <Text title='Contato'/>

      <div className='flex flex-col xl:flex-row-reverse xl:flex-wrap justify-between items-center gap-y-16 mt-5 h-[79%] w-full'>
        <h2 className='text-xl text-slate-400 w-full text-center'>Entre em contato</h2>
      
        <div className='flex flex-col items-center justify-center gap-y-5 w-3/4 h-1/3 xl:w-[40%] xl:h-[70%] border-4 shadow-lg rounded-lg hover:shadow-2xl'>
          <TbBrandWhatsapp size={'50px'}/>
          <p className='text-lg md:text-3xl font-semibold'>Whatsapp</p>
          <p className='text-slate-500 md:text-xl'>(11)91012-1809</p>

          <motion.button 
            whileHover={{scale: 1.1}}
          className='border-4 md:border-2 shadow-md px-2 py-1 rounded-xl duration-400 md:text-lg'><a rel="noreferrer" target={'_blank'} href="https://api.whatsapp.com/send?phone=5511910121809">Mande uma mensagem</a></motion.button>
        </div>

        <div className='flex flex-col items-center justify-center gap-y-5 w-3/4 h-1/3 xl:w-[40%] xl:h-[70%] border-4 shadow-lg rounded-lg hover:shadow-2xl'>
          <MdOutlineMarkEmailRead size={'50px'}/>
          <p className='text-lg md:text-3xl font-semibold'>E-mail</p>
          <p className='text-slate-500 md:text-xl'>rafaap2003@gmail.com</p>

          <motion.button 
          whileHover={{scale: 1.1}}
          className='border-4 md:border-2 shadow-md px-2 py-1 rounded-xl md:text-lg'><a href="mailto:rafaap2003@gmail.com">Mande uma mensagem</a></motion.button>
        </div>
      
      </div>
    </div>
  )
}

export default Contact