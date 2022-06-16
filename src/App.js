import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './configs/routes';

const LandingPage = React.lazy(() => import('./pages/LandingPage'));
const Admin = React.lazy(() => import('./pages/Admin'));
const MapPage = React.lazy(() => import('./pages/MapPage'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading..</div>}>
        <Router>
          <Routes>
            <Route element={<LandingPage />} exact path={routes.LANDING_PAGE()} />
            <Route element={<Admin />} exact path={routes.ADMIN()} />
            <Route element={<MapPage />} exact path={routes.MAPE_PAGE()} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
