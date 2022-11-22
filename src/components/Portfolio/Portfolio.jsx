import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Text from '../Text';
import Cards from './Cards';
import ToDoList from '../../assets/img/toDoList.jpg';
import PortfolioImg from '../../assets/img/Portfolio.png';
import NewsPortal from '../../assets/img/news.jpg';
import ImagesManipultion from '../../assets/img/image.jpg';
import JogoMemoria from '../../assets/img/jogoMemoria.jpg';
import ToolsManagement from '../../assets/img/toolsManagement.jpg';
import InventoryControl from '../../assets/img/inventoryControl.jpg';
import OrdersList from '../../assets/img/OrdersList.jpg';
import StoreApi from '../../assets/img/StoreApi.jpg';
import ApiFinanceira from '../../assets/img/ApiFinanceira.jpg';
import RestaurantApi from '../../assets/img/RestaurantApi.jpg';

const CardsAll = (props) => {
  const animations = {
    left: {
      initial: { x: -200 },
      animate: { x: 0 }
    },
    right: {
      initial: { x: 200 },
      animate: { x: 0 }
    }
  };

  return (
    <div className='h-[70%] w-full md:flex md:flex-wrap items-center gap-y-5 md:gap-y-0 md:gap-x-5  md:flex-row  overflow-auto'>

      <Cards time={0.5} animation={animations.left} link="https://github.com/rafaapcode/portfolio-rafaelap" title='Portfolio' logo={PortfolioImg} />

      <Cards time={1} animation={animations.right} link="https://github.com/rafaapcode/newsPortal" title='News Portal' logo={NewsPortal} />

      <Cards time={1.3} animation={animations.left} link="https://github.com/rafaapcode/imageManipulation" title='Image Manipulation' logo={ImagesManipultion} />

      <Cards time={1.8} animation={animations.right} link="https://github.com/rafaapcode/To-do-list" title='To-Do List' logo={ToDoList} />

      <Cards time={2} animation={animations.left} link="https://github.com/rafaapcode/jogoDaMemoria-DIO" title='Jogo da Memória' logo={JogoMemoria} />

      <Cards time={2.4} animation={animations.right} link="https://github.com/rafaapcode/toolsManagement" title='Tools Management' logo={ToolsManagement} />

      <Cards time={2.8} animation={animations.left} link="https://github.com/rafaapcode/inventoryControl" title='Inventory Control' logo={InventoryControl} />

      <Cards time={3.4} animation={animations.right} link="https://github.com/rafaapcode/ordersList" title='Orders List' logo={OrdersList} />

      <Cards time={3.8} animation={animations.left} link="https://github.com/rafaapcode/storeApi" title='Store Api' logo={StoreApi} />

      <Cards time={4.4} animation={animations.right} link="https://github.com/rafaapcode/API-Financeira" title='API Financeira' logo={ApiFinanceira} />

      <Cards time={4.8} animation={animations.left} link="https://github.com/rafaapcode/restaurant_api" title='Restaurant Management' logo={RestaurantApi} />

    </div>
  )
};

const CardsApis = (props) => {
  const animations = {
    left: {
      initial: { x: -200 },
      animate: { x: 0 }
    },
    right: {
      initial: { x: 200 },
      animate: { x: 0 }
    }
  };

  return (
    <div className='h-[70%] w-full md:flex md:flex-wrap items-center gap-y-5 md:gap-y-0 md:gap-x-5  md:flex-row  overflow-auto'>
      <Cards time={2} animation={animations.left} link="https://github.com/rafaapcode/restaurant_api" title='Restaurant Management' logo={RestaurantApi} />

      <Cards time={2.4} animation={animations.right} link="https://github.com/rafaapcode/toolsManagement" title='Tools Management' logo={ToolsManagement} />

      <Cards time={2.8} animation={animations.left} link="https://github.com/rafaapcode/inventoryControl" title='Inventory Control' logo={InventoryControl} />

      <Cards time={3.4} animation={animations.right} link="https://github.com/rafaapcode/ordersList" title='Orders List' logo={OrdersList} />

      <Cards time={3.8} animation={animations.left} link="https://github.com/rafaapcode/storeApi" title='Store Api' logo={StoreApi} />

      <Cards time={4.4} animation={animations.right} link="https://github.com/rafaapcode/API-Financeira" title='API Financeira' logo={ApiFinanceira} />

    </div>
  )
};

const CardsWeb = (props) => {
  const animations = {
    left: {
      initial: { x: -200 },
      animate: { x: 0 }
    },
    right: {
      initial: { x: 200 },
      animate: { x: 0 }
    }
  };

  return (
    <div className='h-[70%] w-full md:flex md:flex-wrap items-center gap-y-5 md:gap-y-0 md:gap-x-5  md:flex-row  overflow-auto'>


      <Cards time={0.5} animation={animations.left} link="https://github.com/rafaapcode/portfolio-rafaelap" title='Portfolio' logo={PortfolioImg} />

      <Cards time={1} animation={animations.right} link="https://github.com/rafaapcode/newsPortal" title='News Portal' logo={NewsPortal} />

      <Cards time={1.3} animation={animations.left} link="https://github.com/rafaapcode/imageManipulation" title='Image Manipulation' logo={ImagesManipultion} />

      <Cards time={1.8} animation={animations.right} link="https://github.com/rafaapcode/To-do-list" title='To-Do List' logo={ToDoList} />

      <Cards time={2} animation={animations.left} link="https://github.com/rafaapcode/jogoDaMemoria-DIO" title='Jogo da Memória' logo={JogoMemoria} />


    </div>
  )
};

function Portfolio() {

  const [selected, setSelected] = useState('all');

  return (
    <div className='h-full mx-auto flex flex-col items-center max-w-xl md:max-w-2xl xl:max-w-5xl'>
      <Text title='Portfolio' />
      <div className='flex w-full items-center justify-evenly p-2'>

        <motion.div

          whileTap={{ scale: 0.90 }}
          onClick={() => setSelected('all')}
          className={selected === 'all' ? 'h-full w-[19%] xl:w-[12%] text-center rounded-lg p-2 text-lg bg-black text-white md:text-3xl hover:text-white cursor-pointer hover:bg-black' : 'h-full w-[19%] xl:w-[12%] text-center rounded-lg p-2 text-lg md:text-3xl hover:text-white cursor-pointer hover:bg-black'}>Todos</motion.div>

        <motion.div
          whileTap={{ scale: 0.90 }}

          onClick={() => setSelected('apis')}
          className={selected === 'apis' ? 'h-full w-[14%] xl:w-[10%] text-center rounded-lg p-2 text-lg bg-black text-white md:text-3xl hover:text-white cursor-pointer hover:bg-black' : 'h-full w-[10%] text-center rounded-lg p-2 text-lg md:text-3xl hover:text-white cursor-pointer hover:bg-black'}>APIs</motion.div>

        <motion.div
          whileTap={{ scale: 0.90 }}

          onClick={() => setSelected('webpages')}
          className={selected === 'webpages' ? 'h-full w-[20%] xl:w-[12%] text-center rounded-lg p-2 text-lg bg-black text-white md:text-3xl hover:text-white cursor-pointer hover:bg-black' : 'h-full w-[20%] xl:w-[12%] text-center rounded-lg p-2 text-lg md:text-3xl hover:text-white cursor-pointer hover:bg-black'}>Sites</motion.div>

      </div>

      {selected === 'all' && <CardsAll />}
      {selected === 'apis' && <CardsApis />}
      {selected === 'webpages' && <CardsWeb />}

    </div>
  )
}

export default Portfolio;