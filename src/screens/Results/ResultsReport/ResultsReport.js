import './ResultsReport.css'
import React from 'react'
import ResultsEntry from './ResultsEntry/ResultsEntry'
import RobotHeadAntenna from '../../../components/AnimatedSVGs/RobotHeadAntenna/RobotHeadAntenna'


function ResultsReport({ results }) {
    return (
        <>
            <div className='results-report'>
                <RobotHeadAntenna />
                <ResultsEntry results={results} />
            </div>
        </>
    )
}

export default ResultsReport
