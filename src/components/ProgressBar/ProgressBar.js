import './ProgressBar.css';
import React from 'react'

function ProgressBar({ completedCount }) {

    const calculatedPercentage = completedCount * 25;
    return (
        <div className='bar-container'>
            <div className='progress-bar-outside'>
                <div className='progress-bar-inside' style={{ width: calculatedPercentage + '%' }}></div>
            </div>
            {completedCount === 4 ? <div className='progress-bar-checkmark'><p>&#10003;</p></div> : null}
        </div>
    )
}

export default ProgressBar