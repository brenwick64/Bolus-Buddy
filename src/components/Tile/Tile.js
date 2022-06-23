import React, { useState } from 'react'
import './Tile.css';


function Tile({ updateState, metric, img, label }) {
    const [value, setValue] = useState("")

    const handleBlur = () => {
        updateState({ [metric]: value })
    }

    // Clears foucs on enter 
    const handleEnter = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault()
            e.target.blur();
        }
    }

    return (
        <div className='tile'>
            <img className='tile-img' alt='' src={img} />
            <p className='tile-text'>{label}</p>
            <input className='tile-input' type="number" value={value} onChange={e => setValue(e.target.value)} onBlur={handleBlur} onKeyUp={handleEnter}></input>
        </div>
    )
}

export default Tile