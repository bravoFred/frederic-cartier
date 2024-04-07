import styles from './Nav.module.scss';
import { useProgress } from '@react-three/drei';
import { useRef, useEffect, useState, use, useContext } from 'react';
import UserContextProvider from '../store/userContext';
import InputContextProvider from '../store/inputContext';
import { useFrame } from '@react-three/fiber';

export default function Nav() {
	const { about, films, goToHome, goToFilms, goToAbout } = useContext(InputContextProvider);
	return (
		<nav className={styles.nav}>
			<div className={styles.nav_item} onClick={goToFilms}>
				{/* <p className={styles.nav_item_text}>{films ? 'BACK' : 'FILMS'}</p> */}
				{!about && <p className={styles.nav_item_text}>FILMS</p>}
				{/* {films && <p className={styles.nav_item_text}>FILMS</p>} */}
				{about && <p className={styles.nav_item_text}>ABOUT</p>}
			</div>
			<div className={styles.nav_item} onClick={goToHome}>
				<p className={styles.nav_item_text}>FREDERIC CARTIER</p>
			</div>
			<div className={styles.nav_item} onClick={goToAbout}>
				<p className={styles.nav_item_text}>{about || films ? 'CLOSE' : 'ABOUT'}</p>
			</div>
		</nav>
	);
}
