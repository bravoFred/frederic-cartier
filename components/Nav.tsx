import styles from './Nav.module.scss';
import { useProgress } from '@react-three/drei';
import { useRef, useEffect, useState, use, useContext } from 'react';
import UserContextProvider from '../store/userContext';
import InputContextProvider from '../store/inputContext';
import { useFrame } from '@react-three/fiber';

export default function Nav() {
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
		showFilm6,
	} = useContext(InputContextProvider);
	const [leftNavText, setLeftNavText] = useState('FILMS');
	const [rightNavText, setRightNavText] = useState('ABOUT');
	useEffect(() => {
		if (about) setLeftNavText('ABOUT');
		if (showFilm1 || showFilm2 || showFilm3 || showFilm4 || showFilm5 || showFilm6)
			setLeftNavText('BACK');
		if (
			!about &&
			!showFilm1 &&
			!showFilm2 &&
			!showFilm3 &&
			!showFilm4 &&
			!showFilm5 &&
			!showFilm6
		)
			setLeftNavText('FILMS');
	}, [about, showFilm1, showFilm2, showFilm3, showFilm4, showFilm5, showFilm6, films]);
	useEffect(() => {
		if (!about && !films) setRightNavText('ABOUT');
		if (films) setRightNavText('CLOSE');
		if (about) setRightNavText('CLOSE');
		if (showFilm1 || showFilm2 || showFilm3 || showFilm4 || showFilm5 || showFilm6)
			setRightNavText('');
	}, [about, films, showFilm1, showFilm2, showFilm3, showFilm4, showFilm5, showFilm6]);
	return (
		<>
			<div className={styles.nav_overlay}></div>
			<nav className={styles.nav}>
				<div className={styles.nav_item} onClick={goToFilms}>
					<p>{leftNavText}</p>
				</div>
				<div className={styles.nav_item} onClick={goToHome}>
					<p className={styles.nav_item_text}>FREDERIC CARTIER</p>
				</div>
				<div className={styles.nav_item} onClick={goToAbout}>
					<p>{rightNavText}</p>
				</div>
			</nav>
		</>
	);
}
