import styles from './Films.module.scss';
import InputContextProvider from '@/store/inputContext';
import DataContextProvider from '@/store/dataContext';
import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { useState, useRef } from 'react';
export default function Films() {
	const { films } = useContext(InputContextProvider);
	const { filmsData } = useContext(DataContextProvider);
	const [selectedFilmID, setSelectedFilmID] = useState(filmsData[0].id ? filmsData[0].id : 0);
	const [sortedFilms, setSortedFilms] = useState(filmsData);

	function sortFilmsSelectedInMiddle(id) {
		const sortedFilms = filmsData.filter((film) => film.id !== id);
		const selectedFilm = filmsData.filter((film) => film.id === id);
		const sortedFilmsMiddle = [];
		const middle = Math.floor(sortedFilms.length / 2);
		sortedFilms.forEach((film, index) => {
			if (index === middle) {
				sortedFilmsMiddle.push(selectedFilm[0]);
			}
			sortedFilmsMiddle.push(film);
		});
		setSortedFilms(sortedFilmsMiddle);
	}
	const clickHandler = (id) => {
		setSelectedFilmID(id);
		// setSortedFilms(sortedFilms);
		sortFilmsSelectedInMiddle(id);
		// sortedFilms.forEach((film) => {
		// 	console.log(film.id);
		// });
		// move selected film to middle
	};

	const FilmsCards = () => {
		return (
			<ul className={styles.films_list}>
				{sortedFilms.map((film) => {
					return (
						<li
							key={film.id}
							className={
								selectedFilmID === film.id
									? styles.films_list_item_selected
									: styles.films_list_item
							}
							onClick={() => clickHandler(film.id)}
						>
							<div className={styles.film_card_image}>
								{/* <Image src={film.image} alt={film.title} width={200} height={300} /> */}
							</div>
							<div className={styles.film_card_title}>{film.title}</div>
						</li>
					);
				})}
			</ul>
		);
	};

	return (
		<div className={films ? styles.films : styles.films_hidden}>
			<FilmsCards />
		</div>
	);
}
