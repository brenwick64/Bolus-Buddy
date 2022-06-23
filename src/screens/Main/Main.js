import './Main.css'
import React, { useEffect, useReducer, useState } from 'react'

// Components
import Tile from '../../components/Tile/Tile'
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import SubmitButton from '../../components/SubmitButton/SubmitButton';

// Images
import Carbs from '../../img/burger.png';
import BG from '../../img/bloodsugar.png';
import Basal from '../../img/basal.png';
import Bolus from '../../img/syringe.png';



function Main() {
    const [completedCount, setCompletedCount] = useState(0);
    const initialState = { carbs: "", bg: "", basal: "", bolus: "" };
    const [state, updateState] = useReducer(
        (state, updates) => ({
            ...state,
            ...updates,
        }),
        initialState
    );

    useEffect(() => {
        // Extracts state from 
        let tempCount = 0
        const keys = Object.keys(state);
        keys.forEach(key => {
            if (!(state[key] === "")) { tempCount++ }
        })
        setCompletedCount(tempCount)
    }, [state])



    return (
        <div className='main-screen'>
            <ProgressBar completedCount={completedCount} />
            <div className='tile-container'>
                <Tile updateState={updateState} metric='carbs' label='Carbs (g)' img={Carbs} />
                <Tile updateState={updateState} metric='bg' label='BG (u/h)' img={BG} />
                <Tile updateState={updateState} metric='basal' label='Basal Rate (m/u)' img={Basal} />
                <Tile updateState={updateState} metric='bolus' label='Previous Bolus (u)' img={Bolus} />
            </div>
            <div className='bottom'>
                <SubmitButton completedCount={completedCount} />
            </div>
        </div>
    )
}

export default Main