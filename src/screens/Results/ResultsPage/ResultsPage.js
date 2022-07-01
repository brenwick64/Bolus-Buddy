import './ResultsPage.css'
import React from 'react'
import { motion } from 'framer-motion'


const variants = {
    hidden: { opacity: 0, scale: 0.6 },
    enter: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.6 }
}

function ResultsPage({ results }) {
    return (
        <motion.div
            className='results-page-screen'
            key='results'
            variants={variants}
            initial='hidden'
            animate='enter'
            exit='exit'
            transition={1000}>{results.prediction}</motion.div>
    )
}

export default ResultsPage