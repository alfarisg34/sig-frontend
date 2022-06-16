import React from 'react';
import styles from './styles.module.css';

export default function SearchBar(props) {
  return (
		<footer class={styles.footerdistributed}>

			<div class={styles.footerright}>

				<a href="#"><i class="fa fa-facebook"></i></a>
				<a href="#"><i class="fa fa-twitter"></i></a>
				<a href="#"><i class="fa fa-linkedin"></i></a>
				<a href="#"><i class="fa fa-github"></i></a>

			</div>

			<div class={styles.footerleft}>

				<p class={styles.footerlinks}>
					<a class="link-1" href="#">Home</a>

					<a href="#">Blog</a>

					<a href="#">Pricing</a>

					<a href="#">About</a>

					<a href="#">Faq</a>

					<a href="#">Contact</a>
				</p>

				<p>Company Name &copy; 2015</p>
			</div>

		</footer>
  )
}