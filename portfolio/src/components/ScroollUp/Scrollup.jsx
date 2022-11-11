import React from 'react';
import { BsArrowUpShort } from 'react-icons/bs';
import { motion } from 'framer-motion';

function Scrollup() {

    window.addEventListener('scroll', function () {
        const scroll = this.document.querySelector('#scrollUp');

        if(this.scrollY >= 560) {
            scroll.classList.remove('hidden');
            scroll.classList.add('fixed');
        }
        else {
            scroll.classList.remove('fixed');
            scroll.classList.add('hidden');
        }

    });

  return (
    <motion.div whileHover={{y: -10}} id="scrollUp" className='right-[1.5rem] md:right-[2.5rem] xl:right-[2rem] bottom-[7%] md:bottom-[5%] xl:bottom-[10%] bg-black/60 hover:bg-black/80 p-1 md:p-3 xl:p-1 rounded-lg cursor-pointer'><a href="#home"><BsArrowUpShort color='white' size={'30px'}/></a></motion.div>
  )
}

export default Scrollup;