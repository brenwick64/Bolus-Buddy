import './ResultsPage.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { IoMdArrowRoundBack } from 'react-icons/io'

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
            transition={1000}
        >
            <Link to='/'>
                <div className='backarrow-container'>
                    <IoMdArrowRoundBack className='backarrow' size={50} />
                    {/* <div>Back to Menu</div> */}
                </div>
            </Link>
            <div>{results.prediction}</div>


        </motion.div>
    )
}

export default ResultsPage