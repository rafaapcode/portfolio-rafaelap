import React from 'react';

function Text(props) {
  return (
    <div className='p-5 md:p-7'><p className='text-4xl md:text-6xl'>{props.title}</p></div>
  )
}

export default Text;