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

function App() {

  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })

  return (
    <div className='App'>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location}>
          <Route path='/' element={loading ? <Splash /> : <Main />} />
          <Route path='/main' element={<Main />} />
        </Routes>
      </AnimatePresence>
    </div >
  );
}

export default App;
