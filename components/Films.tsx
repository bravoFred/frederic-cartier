import styles from './Films.module.scss';
import InputContextProvider from '@/store/inputContext';
import { useContext } from 'react';
export default function Films() {
	const { films } = useContext(InputContextProvider);
	return (
		<div className={films ? styles.films : styles.films_hidden}>
			<h1>Films</h1>
			<p>Some text about films.</p>
		</div>
	);
}
