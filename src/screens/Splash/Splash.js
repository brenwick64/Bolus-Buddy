import './Splash.css'
import React from 'react'
import { motion } from 'framer-motion';
import Logo from '../../img/cardiogram.png';

function Splash() {

    const variants = {
        hidden: { opacity: 0, scale: 1 },
        enter: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.6 }
    }

    return (
        <motion.div
            className='splash-screen'
            key='main'
            variants={variants}
            initial='hidden'
            animate='enter'
            exit='exit'
            transition={1000}
        >
            <div className='splash-title-container'>
                <h1 className='splash-title splash-title-1'><span>B</span>olus</h1>
                <h1 className='splash-title splash-title-2'><span>B</span>uddy</h1>
            </div>
            <img className='splash-logo' alt='' src={Logo} />
        </motion.div>

    )
}

export default Splash