import React, { lazy, Suspense } from 'react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const LazyAnalytics = lazy(() => import('././Pages/AnalyticsPage/Analytics'));

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/*" element = {<Suspense fallback={<Skeleton count={10} />}> <LazyAnalytics/> </Suspense>} />
      </Routes>
  </Router>
  )
};

export default App;
