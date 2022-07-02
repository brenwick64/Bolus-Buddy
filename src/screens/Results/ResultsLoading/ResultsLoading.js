import './ResultsLoading.css'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import RobotHeadGears from '../../../components/AnimatedSVGs/RobotHeadGears/RobotHeadGears'

const variants = {
    hidden: { opacity: 0, scale: 0.6 },
    enter: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.6 }
}

const messages = [
    { msg: "injecting form data", ms: 3000 },
    { msg: "iterating through predictions", ms: 2000 },
    { msg: "calculating best outcome", ms: 2000 },
    { msg: "finished!", ms: 2000 },
]

function ResultsLoading({ setLoading, results }) {
    const [currentMessage, setCurrentMessage] = useState("")

    // Dispatches each message, exexution time basesd on cumulative time of messages
    const iterateMessages = () => {
        // Will only connect if data is fetched my parent component
        if (results) {
            let totalMs = 0
            messages.forEach((value, index) => {
                setTimeout(() => {
                    setCurrentMessage(value.msg)
                }, (totalMs + value.ms))
                totalMs = totalMs + value.ms
            })
            setTimeout(() => {
                setLoading(false)
            }, (totalMs + 2000))
        }
        // Waits for form data from parent
        else {
            setTimeout(() => {
                setCurrentMessage('connecting')
            }, (1000))
        }
    }

    useEffect(() => {
        iterateMessages();
    }, [results])


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
            <RobotHeadGears />
            <div className='results-loading-message-container'>
                <p key={currentMessage} className='results-loading-message'>{currentMessage}</p>
            </div>
        </motion.div>
    )
}

export default ResultsLoading