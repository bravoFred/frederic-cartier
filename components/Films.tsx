import styles from './Films.module.scss';
import InputContextProvider from '@/store/inputContext';
import DataContextProvider from '@/store/dataContext';
import Image from 'next/image';
import { useContext } from 'react';
export default function Films() {
	const { films } = useContext(InputContextProvider);
	const { filmsData } = useContext(DataContextProvider);
	// list of films as cards
	const clickHandler = (id) => {
		console.log('clicked', id);
	};
	const poster =
		'https://image.mux.com/PlOtKFblHHPcnEo014WY8K35eBsp3cFGK44daYCepOPQ/thumbnail.webp?width=3840&height=1634&time=80';

	const FilmsCards = () => {
		return (
			<ul className={styles.films_list}>
				{filmsData.map((film) => (
					<li
						key={film.id}
						className={styles.films_list_item}
						onClick={() => clickHandler(film.id)}
					>
						{/* <Image
							src={film.poster}
							alt={film.title}
							width={200}
							height={300}
							layout="responsive"
							objectFit="cover"
						/> */}
						<h3>{film.title}</h3>
					</li>
				))}
			</ul>
		);
	};

	return (
		<div className={films ? styles.films : styles.films_hidden}>
			<FilmsCards />
		</div>
	);
}
