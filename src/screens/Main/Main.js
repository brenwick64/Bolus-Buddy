import './Main.css'
import React, { useEffect, useReducer, useState } from 'react'
import { motion } from 'framer-motion';

// Components
import Tile from '../../components/Tile/Tile'
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import NotificationBanner from '../../components/NotificationBanner/NotificationBanner';
import InfoButton from '../../components/InfoButton/InfoButton';

// Images
import Carbs from '../../img/burger.png';
import BG from '../../img/bloodsugar.png';
import Basal from '../../img/basal.png';
import Bolus from '../../img/syringe.png';

const variants = {
    hidden: { opacity: 0, scale: 0.6 },
    enter: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.6 }
}


function Main() {
    const [infoToggled, setInfoToggled] = useState(false)
    const [completedCount, setCompletedCount] = useState(0);
    const initialState = { carbs: "", bg: "", basal: "", bolus: "" };
    const [state, updateState] = useReducer(
        (state, updates) => ({
            ...state,
            ...updates,
        }),
        initialState
    );

    const toggleInfo = () => {
        setInfoToggled(!infoToggled)
    }

    useEffect(() => {
        // Extracts completion state from child component's state
        let tempCount = 0
        const keys = Object.keys(state);
        keys.forEach(key => {
            if (!(state[key] === "")) { tempCount++ }
        })
        setCompletedCount(tempCount)
    }, [state])



    return (
        <motion.div
            className='main-screen'
            key='splash'
            variants={variants}
            initial='hidden'
            animate='enter'
            exit='exit'
            transition={1000}
        >
            <InfoButton infoToggled={infoToggled} toggleInfo={toggleInfo} />
            <NotificationBanner />
            <div className=''></div>
            <ProgressBar completedCount={completedCount} />
            <div className='tile-container'>
                <Tile infoToggled={infoToggled} tooltipText='The amount of bolus insulin (u) delivered in the past hour.' updateState={updateState} metric='carbs' label='Carbs (g)' img={Carbs} />
                <Tile infoToggled={infoToggled} tooltipText='Your current blood glucose (bg) level at the time of a bolus.' updateState={updateState} metric='bg' label='BG (u/h)' img={BG} />
                <Tile infoToggled={infoToggled} tooltipText='The basal insulin rate (m/u) configured by your medical provider.' updateState={updateState} metric='basal' label='Basal Rate (m/u)' img={Basal} />
                <Tile infoToggled={infoToggled} tooltipText='The amount of bolus insulin (u) delivered in the past hour.' updateState={updateState} metric='bolus' label='Previous Bolus (u)' img={Bolus} />
            </div>
            <div className='bottom'>
                <SubmitButton completedCount={completedCount} state={state} />
            </div>
        </motion.div>
    )
}

export default Main