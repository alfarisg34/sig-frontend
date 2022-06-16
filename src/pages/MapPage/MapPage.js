import React from 'react';
import styles from './styles.module.css';
import Navbar from '../../components/elements/Navbar';
import Footer from '../../components/elements/Footer';

export default function MapPage() {
  return (
    <>
    <Navbar/>
    <div class="flex flex-row min-h-screen mt-8">
            <div class="basis-1/2 flex p-20 content-center">
                <div class="flex flex-col ">
                    <div class="text-2xl font-bold">Peta Budaya di Indonesia</div>
                    <div class="text-base my-6">Media informasi pengenalan budaya di Indonesia. Hadirkan data dan visualisasi budaya.</div>
                    <div>
                        {/* <Button href="#" text="Mulai" color="bg-transparent" borderColor="black" textColor="black"></Button> */}
                        </div>
                </div>
            </div>
            <div class="basis-1/2 flex justify-end">
                <img src='https://fvmstatic.s3.amazonaws.com/maps/m/ID-EPS-02-8001.png' class="w-full h-full" alt="Indonesia" />
            </div>
        </div>
    <Footer/>
    </>
  )
}
