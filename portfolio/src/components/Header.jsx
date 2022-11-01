import React from 'react';

function Header() {
  return (
    <header>
       <div className='hidden md:flex max-w-2xl xl:max-w-5xl mx-auto py-5 justify-between'>
          <h2 className='text-md'>Rafael</h2>

          <div>
            <ul className='flex gap-x-8'>
              <li><a href="#home">Home</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

       </div>
    </header>
  )
}

export default Header