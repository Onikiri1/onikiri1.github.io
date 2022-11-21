import React from 'react';
import {motion} from 'framer-motion';
import { images } from '../../constants';
import './Header.scss';

import {AppWrap} from '../../wrapper';

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition:{
      duration: 1,
      ease: 'easeInOut'
    }
  }
}


export const Header = () => {


  return (
    <div   className='app__header app__flex'>
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1]}}
      transition={{ duration: 0.5 }}
      className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span> 🍟 </span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hola, soy</p>
              <h1 className='head-text'> Onikiri</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
          <p className='p-text'>Editor txto aqui cambiar</p>
          <p className='p-text'>Artista 2D & 3D aca tambn </p>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
      whileInView={{ opacity: [0, 1]}}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className='app__header-img'
      >
        <img src={images.profile} alt="profile_bg"/>
        <motion.img
        whileInView={{ scale: [0, 1]}}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle} 
        alt="Fotocircular"
        className='overlay_circle'
        />          
      </motion.div>

      <motion.div
      variant={scaleVariants}
      whileInView= {scaleVariants.whileInView}
      className='app__header-circles'
      >
        {[images.photoshop, images.blender, images.premiere].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default  AppWrap(Header, 'Inicio');