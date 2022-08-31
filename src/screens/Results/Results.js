import './Results.css'
import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import ResultsLoading from './ResultsLoading/ResultsLoading';
import ResultsReport from './ResultsReport/ResultsReport';

// React Icons
import { BiArrowBack } from 'react-icons/bi'

const variants = {
    hidden: { opacity: 0, scale: 0.6 },
    enter: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.6 }
}

function Results() {
    const location = useLocation();
    const BOLUS_BUDDY_API = process.env.REACT_APP_BOLUS_BUDDY_API

    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState(null);

    const getData = async () => {
        const res = await fetch(`${BOLUS_BUDDY_API}/prediction`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                carbs: location.state.carbs,
                bg: location.state.bg,
                basal: location.state.basal,
                bolus: location.state.bolus
            })
        })
        const jsonData = await res.json()
        setResults(jsonData)
        console.log(jsonData);

        //DEBUG
        // setLoading(false)
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <>
            <motion.div
                className='results-page'
                key='results'
                variants={variants}
                initial='hidden'
                animate='enter'
                exit='exit'
                transition={1000}
            >
                <Link to='/'>
                    <div className='backarrow-container'>
                        <BiArrowBack className='backarrow' size={45} />
                    </div>
                </Link>
                {loading ? <ResultsLoading setLoading={setLoading} results={results} /> : <ResultsReport results={results} />}
            </motion.div>
        </>
    )
}

export default Results
