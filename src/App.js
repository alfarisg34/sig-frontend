import React, { useMemo,useState,Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import { routes } from './configs/routes';
import { AdminContext } from "./context/AdminContext";
import { ModalContext } from './context/ModalContext';
import { useLocalStorage } from "./hooks/useLocalStorage";
import PageBase from "./components/layout/PageBase";

const LandingPage = React.lazy(() => import('./pages/LandingPage'));
const LoginPage = React.lazy(() => import('./pages/Admin/LoginPage'));
const MapPage = React.lazy(() => import('./pages/MapPage'));
const Dashboard = React.lazy(() => import('./pages/Admin/Dashboard'));
const AddBudaya = React.lazy(() => import("./pages/Admin/AddBudaya"));

function App() {
  const [admin, setAdmin] = useLocalStorage("admin");
  const [modal, setModal] = useState(false);

  const ProtectedRoute = ({ user, children }) => {
    console.log(user)
		if (user === null) {
			return <Navigate to={routes.LOGIN()} replace />;
		}
		return children ? children : <Outlet />;
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
          <Suspense fallback={<div>Loading..</div>}>
            <Router>
              <Routes>
                <Route element={<LandingPage />} exact path={routes.LANDING_PAGE()} />
                <Route element={<LoginPage />} exact path={routes.LOGIN_PAGE()} />
                <Route element={<MapPage />} exact path={routes.MAPE_PAGE()} />
                <Route
                  element={
                    <ProtectedRoute user={admin}>
                      <PageBase />
                    </ProtectedRoute>
                  }
                  exact path=""
                >
                  <Route element={<Dashboard />} exact path={routes.DASHBOARD()}/>
                  <Route element={<AddBudaya />} exact path={routes.ADD_BUDAYA()} />
                </Route>
              </Routes>
            </Router>
          </Suspense>
        </AdminContext.Provider>
      </ModalContext.Provider>
    </div>
  );
}

export default App;
