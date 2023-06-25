import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/LandingPage/Landing';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element = {<Landing/>} >
        </Route>
      </Routes>
  </Router>
  )
};

export default App;
