import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import ResultsLoading from './ResultsLoading/ResultsLoading';
import ResultsPage from './ResultsPage/ResultsPage';


function Results() {
    const location = useLocation();
    const BOLUS_BUDDY_API = process.env.REACT_APP_BOLUS_BUDDY_API

    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState(null);

    const getData = async () => {
        const res = await fetch(`${BOLUS_BUDDY_API}/bolus?` + new URLSearchParams({ bolus: location.state.bolus }))
        const jsonData = await res.json()
        setResults(jsonData)
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <>
            {loading ? <ResultsLoading setLoading={setLoading} results={results} /> : <ResultsPage results={results} />}
        </>
    )
}

export default Results
