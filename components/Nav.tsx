import styles from './Nav.module.scss';
import { useProgress } from '@react-three/drei';
import { useRef, useEffect, useState, use, useContext } from 'react';
import UserContextProvider from '../store/userContext';
import InputContextProvider from '../store/inputContext';
import { useFrame } from '@react-three/fiber';

export default function Nav() {
	const { theme, setTheme } = useContext(UserContextProvider);
	const { aboutMe, setAboutMe, films, setFilms, goToHome, gotoFilms, gotoAboutMe } =
		useContext(InputContextProvider);
	const clickHandler = (e) => {
		console.log(e.target.innerText);

		console.log('clicked');
	};
	return (
		<nav className={styles.nav}>
			<p className={styles.nav_item} onClick={gotoFilms}>
				{films ? 'BACK' : 'FILMS'}
			</p>
			<p className={styles.nav_item} onClick={goToHome}>
				FREDERIC CARTIER
			</p>
			<p className={styles.nav_item} onClick={gotoAboutMe}>
				{aboutMe ? 'CLOSE' : 'ABOUT'}
			</p>
		</nav>
	);
}
