import React from 'react'
import './TileToolTip.css'

function TileTooltip({ infoToggled, tooltipText, metric }) {
    return (
        <div className={infoToggled ? `tile-tooltip ${metric}-tooltip tile-tooltip-active` : `tile-tooltip ${metric}-tooltip tile-tooltip-inactive`} >
            <p className='tile-tooltip-text'>{tooltipText}</p>
        </div>
    )
}

export default TileTooltip