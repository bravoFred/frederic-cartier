import styles from './Nav.module.scss';
import { useProgress } from '@react-three/drei';
import { useRef, useEffect, useState, use, useContext } from 'react';
import UserContextProvider from '../store/userContext';
import InputContextProvider from '../store/inputContext';
import { useFrame } from '@react-three/fiber';

export default function Nav() {
	useEffect(() => {}, []);
	const {
		about,
		films,
		goToHome,
		goToFilms,
		goToAbout,
		showFilm1,
		showFilm2,
		showFilm3,
		showFilm4,
		showFilm5,
	} = useContext(InputContextProvider);

	return (
		<nav className={styles.nav}>
			<div className={styles.nav_item} onClick={goToFilms}>
				{!about && <p>FILMS</p>}
				{about && <p>ABOUT</p>}
			</div>
			<div className={styles.nav_item} onClick={goToHome}>
				<p className={styles.nav_item_text}>FREDERIC CARTIER</p>
			</div>
			<div className={styles.nav_item} onClick={goToAbout}>
				{!about && !films && <p>ABOUT</p>}
				{films && <p>CLOSE</p>}
				{about && <p>CLOSE</p>}
			</div>
		</nav>
	);
}
