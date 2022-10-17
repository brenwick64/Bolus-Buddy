import './ResultsEntry.css'
import React from 'react'
import { BiDownArrow, BiUpArrow, BiRightArrow } from 'react-icons/bi'

const arrowParser = (arrow) => {
    switch (arrow) {
        case 'up':
            return <BiUpArrow color='red' size={30} />
        case 'right':
            return <BiRightArrow color='blue' size={30} />
        case 'down':
            return <BiDownArrow color='green' size={30} />
        default:
            return null
    }
}


function ResultsEntry({ results }) {
    const resultSet = [
        { bolus: results.aggressive_bolus, bg: 100, arrow: 'up', label: 'Aggressive' },
        { bolus: results.recommended_bolus, bg: 101, arrow: 'right', label: 'Recommended' },
        { bolus: results.passive_bolus, bg: 102, arrow: 'down', label: 'Passive' },
    ]

    return (
        <div className='results-container'>
            <h2 className='results-title'>Results</h2>
            {resultSet.map((entry, index) => {
                const delay = 2.5 + (index * .25)
                return (
                    <div className='results-entry' key={entry.label} style={{ animationDelay: delay + 's' }}>
                        {arrowParser(entry.arrow)}
                        <div className='results-content'>
                            <div className='results-entry-left'>
                                <p className='results-text'>{entry.label}</p>
                                <p className='results-number'><strong>{entry.bolus.toFixed(2)}u</strong></p>
                            </div>
                            <div className='results-entry-right'>
                                <p>Estimated BG:</p>
                                <p className='results-number'><strong>{entry.bg}</strong></p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ResultsEntry