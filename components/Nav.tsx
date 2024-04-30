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
		setShowFilm1,
		setShowFilm2,
	} = useContext(InputContextProvider);
	useEffect(() => {}, [about, films, showFilm1, showFilm2, setShowFilm1, setShowFilm2]);
	const leftHandler = () => {
		goToFilms();
	};
	const centerHandler = () => {
		goToHome();
	};
	const rightHandler = () => {
		goToAbout();
	};

	return (
		<>
			<div className={styles.nav_overlay}></div>

			<nav className={styles.nav}>
				<div className={styles.nav_item} onClick={leftHandler}>
					<p
						className={
							about || showFilm1 || showFilm2
								? styles.nav_item_text_fadeOut
								: styles.nav_item_text_fadeIn
						}
					>
						FILMS
					</p>
					<p
						className={
							about && !showFilm1
								? styles.nav_item_text_fadeIn
								: styles.nav_item_text_fadeOut
						}
					>
						ABOUT
					</p>
					<p
						className={
							showFilm1 || showFilm2
								? styles.nav_item_text_fadeIn
								: styles.nav_item_text_fadeOut
						}
					>
						BACK
					</p>
				</div>
				<div className={styles.nav_item} onClick={centerHandler}>
					<p className={styles.nav_item_text}>FREDERIC CARTIER</p>
				</div>
				<div className={styles.nav_item} onClick={rightHandler}>
					<p
						className={
							about || films
								? styles.nav_item_text_fadeOut
								: styles.nav_item_text_fadeIn
						}
					>
						ABOUT
					</p>
					<p
						className={
							(about || films) && !showFilm1 && !showFilm2
								? styles.nav_item_text_fadeIn
								: styles.nav_item_text_fadeOut
						}
					>
						CLOSE
					</p>
				</div>
			</nav>
		</>
	);
}
