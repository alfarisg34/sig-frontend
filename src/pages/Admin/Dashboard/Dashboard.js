import React, { useContext, useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Outlet, Navigate ,navigate} from "react-router-dom";
// import styles from './styles.module.css';
// import Navbar from '../../components/elements/Navbar';
import Sidebar from '../../../components/elements/Sidebar';
import API from "../../../api/API";
import { AdminContext } from "../../../context/AdminContext";
import authAPI from "../../../api/authAPI";

export default function LoginPage({children}) {
  // const [isOpen, setIsOpen] = useState(true);
	const [isLogged, setIsLogged] = useState(true);
  const { admin, setAdmin } = useContext(AdminContext);

  const logout = async () => {
		try {
			const res = await authAPI.logout();
			console.log(res);
			if (res.status === 200) {
				setAdmin(null);
				return <Navigate to="/login" />
			}
		} catch (error) {
			console.log(error);
		}
	};

  API.interceptors.response.use(
      (response) => response,
      (error) => {
        if (
          error &&
          error.response &&
          error.response.status === 401 &&
          error.response.data.message === "admin not found"
        ) {
          setIsLogged(false);
          console.log("satu");
          console.log(isLogged);
          return Promise.reject();
        }
        console.log("2")
        return Promise.reject(error);
      } 
    );
    
  return (
    <>
    <button
			type="button"
			className="btn btn-primary"
			onClick={logout}
		> logout</button>
    <div className="wrapper d-flex align-items-stretch">
      <nav id="sidebar" className="active">
        <div className="custom-menu">
          <button type="button" id="sidebarCollapse" className="btn btn-primary">
            <i className="fa fa-bars"></i>
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
      <h1><a href="index.html" className="logo">Project Name</a></h1>
      <ul className="list-unstyled components mb-5">
        <li className="active"><a href="#"><span className="fa fa-home mr-3"></span> Homepage</a></li>
        <li><a href="#"><span className="fa fa-user mr-3"></span> Dashboard</a></li>
        <li><a href="#"><span className="fa fa-sticky-note mr-3"></span> Friends</a></li>
        <li><a href="#"><span className="fa fa-sticky-note mr-3"></span> Subcription</a></li>
        <li><a href="#"><span className="fa fa-paper-plane mr-3"></span> Settings</a></li>
        <li><a href="#"><span className="fa fa-paper-plane mr-3"></span> Information</a></li>
      </ul>
      </nav>

      <div id="content" className="p-4 p-md-5 pt-5">
        <h2 className="mb-4">Sidebar #04</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
    </>
  )
}