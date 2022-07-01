import './ResultsLoading.css'
import React from 'react'
import { motion } from 'framer-motion'
import RobotHead from '../../../components/AnimatedSVGs/RobotHead/RobotHead'

const variants = {
    hidden: { opacity: 0, scale: 0.6 },
    enter: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.6 }
}

function ResultsLoading() {
    return (
        <motion.div
            className='results-loading-screen'
            key='resultLoad'
            variants={variants}
            initial='hidden'
            animate='enter'
            exit='exit'
            transition={1000}
        >
            <RobotHead />
        </motion.div>
    )
}

export default ResultsLoading