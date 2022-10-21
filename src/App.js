import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Language from './components/Language';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App()
{
  return (
    <div className="App">
      <Router>
        <Header/>
        <Sidebar/>
        <Language/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
