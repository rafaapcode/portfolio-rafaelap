import React from 'react';
import { motion } from 'framer-motion';

function Header() {

  return (
    <header>
      <div className='hidden md:flex max-w-2xl xl:max-w-5xl mx-auto py-5 justify-between'>
        <motion.h2 initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 0.8, type: 'spring' }} className='text-md'>Rafael</motion.h2>

        <div>
          <ul className='flex gap-x-8'>
            <motion.li><a href="#home">Home</a></motion.li>

            <motion.li><a href="#about">Sobre</a></motion.li>

            <motion.li><a href="#skills">Skills</a></motion.li>

            <motion.li><a href="#qualification">Qualificação</a></motion.li>

            <motion.li><a href="#portfolio">Portfolio</a></motion.li>

            <motion.li><a href="#contact">Contato</a></motion.li>

          </ul>
        </div>

      </div>
    </header>
  )
}

export default Header