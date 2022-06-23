import './SubmitButton.css';
import React from 'react'

function SubmitButton({ completedCount }) {
    const handleSubmit = () => {
        if (!(completedCount === 4)) { return }
        console.log('Hello World');
    }

    return (
        <button className={completedCount === 4 ? 'submit-btn' : 'submit-btn submit-btn-disabled'} onClick={handleSubmit}>Submit</button>
    )
}

export default SubmitButton