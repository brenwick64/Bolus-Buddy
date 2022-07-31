import './SubmitButton.css'
import React from 'react'
import { Link } from 'react-router-dom'

function SubmitButton({ completedCount, state }) {
    const handleSubmit = () => {
        if (!(completedCount === 4)) { return }
    }

    return (
        <Link to="/results" state={state} style={completedCount === 4 ? {} : { cursor: 'default', pointerEvents: 'none' }}>
            <button className={completedCount === 4 ? 'submit-btn' : 'submit-btn submit-btn-disabled'} onClick={handleSubmit}>Submit</button>
        </Link>
    )
}

export default SubmitButton