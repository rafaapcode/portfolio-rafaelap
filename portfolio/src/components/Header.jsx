import React from 'react';
import { motion } from 'framer-motion';

function Header() {

  const headerAnimation = {
    initial: { y: -100 },
    animate: { y: 0 }
  }

  return (
    <header>
      <div className='hidden md:flex max-w-2xl xl:max-w-5xl mx-auto py-5 justify-between'>
        <motion.h2 initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 0.8, type: 'spring' }} className='text-md'>Rafael</motion.h2>

        <div>
          <ul className='flex gap-x-8'>
            <motion.li
              {...headerAnimation}
              transition={{ duration: 0.7, type: 'spring' }}><a href="#home">Home</a></motion.li>

            <motion.li
              {...headerAnimation}
              transition={{ duration: 1.1, type: 'spring' }}><a href="#sobre">Sobre</a></motion.li>

            <motion.li
              {...headerAnimation}
              transition={{ duration: 1.5, type: 'spring' }}><a href="#skills">Skills</a></motion.li>

            <motion.li
              {...headerAnimation}
              transition={{ duration: 1.9, type: 'spring' }}><a href="#portfolio">Portfolio</a></motion.li>

            <motion.li
              {...headerAnimation}
              transition={{ duration: 2.3, type: 'spring' }}><a href="#contato">Contato</a></motion.li>

          </ul>
        </div>

      </div>
    </header>
  )
}

export default Header