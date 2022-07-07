import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import Resume from "./pages/resume/resume.component";

function App() {
  return (
    <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/resume' element={<Resume/>}/>
    </Routes>
  );
}

export default App;
