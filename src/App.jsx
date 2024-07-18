import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cakecutting from './components/cakecutting';
import Photos from './components/photos';
import Gift from './components/gift';
import Wishing from './components/wishing';


const App = () => (
  <Router>
    <div className="App">
   
      <Routes>
        <Route path="/" element={<Cakecutting/>} />
        <Route path="/photos" element={<Photos/>} />
        <Route path="/Gift" element={<Gift/>} />
        <Route path="/wishing" element={<Wishing/>} />
        
      </Routes>
    </div>
  </Router>
);

export default App;
