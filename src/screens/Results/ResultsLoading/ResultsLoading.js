import './ResultsLoading.css'
import React, { useState, useEffect } from 'react'
import RobotHeadGears from '../../../components/AnimatedSVGs/RobotHeadGears/RobotHeadGears'


const messages = [
    { msg: "uploading form data", ms: 3000 },
    { msg: "calculating optimal bolus", ms: 2000 },
    { msg: "finished!", ms: 2000 },
]

function ResultsLoading({ setLoading, results }) {
    const [currentMessage, setCurrentMessage] = useState("")

    // Dispatches each message, exexution time basesd on cumulative time of messages
    const iterateMessages = () => {
        // Will only connect if data is fetched by parent component
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
        <>
            <div className='results-loading'>
                <RobotHeadGears />
                <div className='results-loading-message-container'>
                    <p key={currentMessage} className='results-loading-message'>{currentMessage}</p>
                </div>
            </div>
        </>
    )
}

export default ResultsLoading