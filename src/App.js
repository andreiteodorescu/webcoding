import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import WorkBench from "./pages/work-bench/work-bench.component";

function App() {
  return (
    <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/work-bench' element={<WorkBench/>}/>
    </Routes>
  );
}

export default App;
