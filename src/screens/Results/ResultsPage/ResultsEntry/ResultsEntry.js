import './ResultsEntry.css'
import React from 'react'
import { BiDownArrow, BiUpArrow, BiRightArrow } from 'react-icons/bi'

//DEBUG 
const dummyData = [
    { bolus: 5.5, bg: 87.89, arrow: 'up', label: 'Aggressive Bolus' },
    { bolus: 4.1, bg: 120.01, arrow: 'right', label: 'Suggested Bolus' },
    { bolus: 3.2, bg: 151.76, arrow: 'down', label: 'Passive Bolus' }
]

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
    return (
        <div className='results-container'>
            <h2 className='results-title'>Results</h2>
            {dummyData.map((entry, index) => {
                const delay = 1.75 + (index * .25)
                return (
                    <div className='results-entry' key={entry.bg} style={{ animationDelay: delay + 's' }}>
                        {arrowParser(entry.arrow)}
                        <div className='results-entry-right'>
                            <p className='results-text'>{entry.label}</p>
                            <p><strong>{entry.bolus}u</strong></p>
                        </div>
                        <div className='results-entry-left'>
                            <p>Estimated BG:</p>
                            <p><strong>{entry.bg}</strong></p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ResultsEntry