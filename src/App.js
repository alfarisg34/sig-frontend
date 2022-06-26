import React, { useMemo,useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { routes } from './configs/routes';
import { AdminContext } from "./context/AdminContext";
import { ModalContext } from './context/ModalContext';
import { useLocalStorage } from "./hooks/useLocalStorage";

const LandingPage = React.lazy(() => import('./pages/LandingPage'));
const LoginPage = React.lazy(() => import('./pages/Admin/LoginPage'));
const MapPage = React.lazy(() => import('./pages/MapPage'));
const Dashboard = React.lazy(() => import('./pages/Admin/Dashboard'));

function App() {
  const [admin, setAdmin] = useLocalStorage("admin");
  const [modal, setModal] = useState(false);

  const ProtectedRoute = ({ user, children }) => {
    console.log(user)
		if (user === null) {
			return <Navigate to="/login" replace />;
		}
		return children;
	};

  const adminProviderValue = useMemo(
		() => ({
			admin,
			setAdmin,
		}),
		[admin, setAdmin]
	);
  const modalProviderValue = useMemo(
		() => ({
			modal,
			setModal,
		}),
		[modal, setModal]
	);
  return (
    <div>
      <ModalContext.Provider value={modalProviderValue}>
        <AdminContext.Provider value={adminProviderValue}>
          <Router>
            <Routes>
              <Route element={<LandingPage />} exact path={routes.LANDING_PAGE()} />
              <Route element={<LoginPage />} exact path={routes.LOGIN_PAGE()} />
              <Route element={<MapPage />} exact path={routes.MAPE_PAGE()} />
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute user={admin}>
                    <Dashboard />
                  </ProtectedRoute>
                }
              >
            </Route>
            </Routes>
          </Router>
        </AdminContext.Provider>
      </ModalContext.Provider>
    </div>
  );
}

export default App;
