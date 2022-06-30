import React from 'react';
// import styles from './styles.module.css';

export default function NavbarUser(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/map">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/map">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Map</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/map">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}