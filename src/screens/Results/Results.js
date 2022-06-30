import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0, scale: 0.6 },
    enter: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.6 }
}

function Results() {
    const location = useLocation();
    const BOLUS_BUDDY_API = process.env.REACT_APP_BOLUS_BUDDY_API

    const [loading, setLoading] = useState(true);
    const [prediction, setPrediction] = useState(null);
    const [label, setLabel] = useState(null);

    const getData = async () => {
        const res = await fetch(`${BOLUS_BUDDY_API}/bolus?` + new URLSearchParams({ bolus: location.state.bolus }))
        const jsonData = await res.json()
        setPrediction(jsonData.prediction)
        setLabel(jsonData.label)
        setLoading(false)
        console.log(location.state.bolus)
        console.log(jsonData);
    }

    useEffect(() => {
        setTimeout(() => {
            getData();
        }, 2000)

    }, []);


    return (
        <>
            {loading ?
                <motion.div
                    className='main-screen'
                    key='resultLoad'
                    variants={variants}
                    initial='hidden'
                    animate='enter'
                    exit='exit'
                    transition={1000}>Loading...</motion.div>
                :
                <motion.div
                    className='main-screen'
                    key='results'
                    variants={variants}
                    initial='hidden'
                    animate='enter'
                    exit='exit'
                    transition={1000}>{prediction}</motion.div>}
        </>
    )
}

export default Results
