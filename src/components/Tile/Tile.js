import React, { useState } from 'react'
import TileToolTip from './TileToolTip/TileToolTip';
import './Tile.css';


function Tile({ infoToggled, tooltipText, updateState, metric, img, label }) {
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
            <TileToolTip infoToggled={infoToggled} tooltipText={tooltipText} metric={metric} />
            <img className='tile-img' alt='' src={img} />
            <p className='tile-text'>{label}</p>
            <input className='tile-input' inputMode='decimal' type="number" value={value} onChange={e => setValue(e.target.value)} onBlur={handleBlur} onKeyUp={handleEnter}></input>
        </div>
    )
}

export default Tile