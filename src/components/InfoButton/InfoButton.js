import React from 'react'
import './InfoButton.css'

import { TiInfoLarge } from 'react-icons/ti'

function InfoButton({ infoToggled, toggleInfo }) {

    return (
        <>
            <div className='info-button' onClick={toggleInfo}>
                <TiInfoLarge size={40} />
            </div>
            <div className={infoToggled ? 'info-splashscreen-bg info-splashscreen-bg-active' : 'info-splashscreen-bg'} >
            </div>
        </>
    )
}

export default InfoButton

