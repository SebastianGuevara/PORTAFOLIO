import React from 'react'
import Contact from './Contact';
import About from './About'
import Home from './Home'
import Projects from './Projects'
import Sidebar from './Sidebar'
import {Routes, Route, useLocation} from 'react-router-dom';

import {AnimatePresence} from 'framer-motion'


function AnimatorRoutes() {
    const location = useLocation();
  return (
    <div>
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<><Home/><Sidebar/></>}/>
                <Route path='/about' element={<><About/><Sidebar/></>}/>
                <Route path='/projects' element={<><Projects/><Sidebar/></>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </AnimatePresence>
    </div>
  )
}

export default AnimatorRoutes
