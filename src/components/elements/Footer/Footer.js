import React from 'react';
// import styles from './styles.module.css';

export default function Footer(props) {
  return (
	<div className="fixed-bottom">
		<footer className="bg-light text-center text-lg-start">
			<div className="text-center p-3 bg-primary text-light">
				© 2020 Copyright:
				<a className="text-light" href="https://mdbootstrap.com/">MDBootstrap.com</a>
			</div>
		</footer>
	</div>
  )
}