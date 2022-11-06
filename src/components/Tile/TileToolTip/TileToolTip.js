import React from 'react'
import './TileToolTip.css'

function TileTooltip({ infoToggled, tooltipText, metric }) {

    const getAnimationState = () => {
        if(infoToggled === null) { return 'disabled' }
        else if(infoToggled === false) { return 'inactive' }
        else if(infoToggled === true) { return 'active' }
    }

    return (
        <div className={`tile-tooltip ${metric}-tooltip tile-tooltip-${getAnimationState()}`} >
            <p className='tile-tooltip-text'>{tooltipText}</p>
        </div>
    )
}

export default TileTooltip