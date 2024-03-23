import styles from './Nav.module.scss';
import { useProgress } from '@react-three/drei';
import { useRef, useEffect, useState, use, useContext } from 'react';
import UserContextProvider from '../store/userContext';
import InputContextProvider from '../store/inputContext';
import { useFrame } from '@react-three/fiber';

export default function Nav() {
	const { theme, setTheme } = useContext(UserContextProvider);

	return (
		<nav className={styles.nav}>
			<p className={styles.nav_logo}>FREDERIC CARTIER</p>
		</nav>
	);
}
