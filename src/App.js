import './App.css';
import React, { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

//Pages 
import Splash from './screens/Splash/Splash';
import Main from './screens/Main/Main';
import Results from './screens/Results/Results';

function App() {

  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  })

  return (
    <div className='App'>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location}>
          <Route path='/' element={loading ? <Splash /> : <Main />} />
          <Route path='/results' element={<Results />} />
        </Routes>
      </AnimatePresence>
    </div >
  );
}

export default App;
