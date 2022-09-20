import React from 'react';
// import styles from './styles.module.css';
import NavbarUser from '../../components/elements/NavbarUser';
import Footer from '../../components/elements/Footer';

export default function MapPage() {
  return (
    <>
    <NavbarUser/>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md">
          <h1>Peta Budaya di Indonesia</h1>
          <h5>Media informasi pengenalan budaya di Indonesia. Hadirkan data dan visualisasi budaya.</h5>
        </div>
        <div className="col-md">
          <a href="/map"><img href="/map" src='https://vemaps.com/uploads/img/large/id-06.jpg' className="img-fluid rounded float-end" alt="Peta Indonesia" /></a>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
