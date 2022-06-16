import React from 'react';
import styles from './styles.module.css';

export default function Navbar(props) {
  return (
    <div>
        <ul>
            <li><a href="/map">Home</a></li>
            <li><a href="/">Map</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    </div>
  )
}