import React from 'react';
import { Outlet, useLocation } from 'react-router';
import style from './styles.module.css';
// import logo from '../../../assets/logo-kemendikbud.png';
import { routes } from '../../../configs/routes';
import { faListCheck, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PageBase() {
  const { pathname } = useLocation();
  const navData = [
    // {name: 'Dashboard', to: routes.ADMIN(), icon: faHome},
    {name: 'Manajemen Budaya', to: routes.DASHBOARD(), icon: faListCheck, active: true},
    {name: 'Tambah Budaya', to: routes.ADD_BUDAYA(), icon: faCirclePlus}
  ];

  return (
    <>
      <aside className={style.aside}>
        <section>
          <div className={style.header}>
            <div>
              {/* <img alt="logo-kemendikbud" src={logo}/> */}
            </div>
            <div>
              {/* <p>DASHBOARD ADMIN</p> */}
              <p>DASHBOARD ADMIN </p>
              <br></br>
              <p>SENI TRADISIONAL INDONESIA</p>
            </div>
          </div>
          <nav className={style.navItem}>
            {navData.map((i,idx)=>(
              <NavItem data={i} key={idx} pathname={pathname}/>
            ))}
          </nav>
          {/* <div className={style.signOut} onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOut}/>
            <p>Sign Out</p>
          </div> */}
        </section>
      </aside>
      <main className={style.content}><Outlet/></main>
    </>
  )
}

function NavItem(props){
  const {
    data,
    pathname
  } = props;

  let isActive = data.to === pathname;

  return (
    <Link to={data.to} >
      <div className={isActive && style.isActive}>
        {/* <FontAwesomeIcon icon={data.icon}/> */}
        <p>{data.name}</p>
      </div>
    </Link>
  )
}