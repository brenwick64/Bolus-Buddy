import React, { useState } from 'react'
import './InfoButton.css'

import { TiInfoLarge } from 'react-icons/ti'

function InfoButton() {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <>
            <div className='info-button' onClick={handleClick}>
                <TiInfoLarge size={40} />
            </div>
            <div className={active ? 'info-splashscreen-bg info-splashscreen-bg-active' : 'info-splashscreen-bg'} >
            </div>
            <div className={active ? 'info-splashscreen-tooltips info-splashscreen-tooltips-active' : 'info-splashscreen-tooltips'}>
                <div className={active ? 'tooltip tooltip-carbs tooltip-active tooltip-carbs-active' : 'tooltip tooltip-carbs tooltip-inactive'}>
                    <p className='tooltip-text'>The amount of carbohydrates consumed in the past hour in grams (G).</p>
                </div>
                <div className={active ? 'tooltip tooltip-bg tooltip-active tooltip-bg-active' : 'tooltip tooltip-bg tooltip-inactive'}>
                    <p className='tooltip-text'>Your current bloog glucose (BG) level at the time of a bolus.</p>
                </div>
                <div className={active ? 'tooltip tooltip-basal tooltip-active tooltip-basal-active' : 'tooltip tooltip-basal tooltip-inactive'}>
                    <p className='tooltip-text'>The basal insulin rate (M/U) configured by your medical provider.</p>
                </div>
                <div className={active ? 'tooltip tooltip-bolus tooltip-active tooltip-bolus-active' : 'tooltip tooltip-bolus tooltip-inactive'}>
                    <p className='tooltip-text'>The amount of bolus insulin (U) delivered in the past hour.</p>
                </div>
            </div>


        </>
    )
}

export default InfoButton

