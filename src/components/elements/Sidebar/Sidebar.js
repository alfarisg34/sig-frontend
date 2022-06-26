import React from 'react';
// import styles from './styles.module.css';

export default function Sidebar(props) {
  return (
    <>
    <div class="border-end bg-white" id="sidebar-wrapper">
                <div class="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
                <div class="list-group list-group-flush">
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Dashboard</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Shortcuts</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Overview</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Events</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Profile</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Status</a>
                </div>
            </div>
    {/* <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: '280px',height:'630px'}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
      <span className="fs-4">Sidebar</span>
    </a>
    <hr></hr>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use href="#home"></use></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi pe-none me-2" width="16" height="16"><use href="#speedometer2"></use></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi pe-none me-2" width="16" height="16"><use href="#table"></use></svg>
          Orders
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi pe-none me-2" width="16" height="16"><use href="#grid"></use></svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark">
          <svg className="bi pe-none me-2" width="16" height="16"><use href="#people-circle"></use></svg>
          Customers
        </a>
      </li>
    </ul>
    <hr></hr>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"></img>
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"></hr></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div> */}
  </>
  )
}