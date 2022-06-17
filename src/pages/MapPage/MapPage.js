import React from 'react';
// import styles from './styles.module.css';
import Navbar from '../../components/elements/Navbar';
import Footer from '../../components/elements/Footer';

export default function MapPage() {
  return (
    <>
    <Navbar/>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md">
          <h1>Peta Budaya di Indonesia</h1>
          <h5>Media informasi pengenalan budaya di Indonesia. Hadirkan data dan visualisasi budaya.</h5>
        </div>
        <div class="col-md">
          <img src='https://vemaps.com/uploads/img/large/id-06.jpg' class="img-fluid rounded float-end" alt="Peta Indonesia" />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
