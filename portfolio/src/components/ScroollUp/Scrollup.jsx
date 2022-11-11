import React from 'react';
import { BsArrowUpShort } from 'react-icons/bs';
import { motion } from 'framer-motion';

function Scrollup() {
  return (
    <motion.div whileHover={{y: -10}} className='fixed right-[2.5rem] bottom-[10%] bg-black/60 hover:bg-black/80 p-1 rounded-lg cursor-pointer'><a href="#home"><BsArrowUpShort color='white' size={'30px'}/></a></motion.div>
  )
}

export default Scrollup;