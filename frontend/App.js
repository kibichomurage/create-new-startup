import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Analytics from './Pages/AnalyticsPage/Analytics';


const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element = {<Analytics/>} >
        </Route>
      </Routes>
  </Router>
  )
};

export default App;
