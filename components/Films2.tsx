import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Films2.module.scss';

// import required modules
import { Pagination } from 'swiper/modules';
import { useContext } from 'react';
import InputContextProvider from '@/store/inputContext';
import DataContextProvider from '@/store/dataContext';

export default function App() {
	const { films } = useContext(InputContextProvider);
	const { filmsData } = useContext(DataContextProvider);
	const FilmsCards = () => {
		return (
			<>
				{filmsData.map((film) => {
					return (
						<SwiperSlide key={film.id} className={styles.films_list_item}>
							{film.title}
						</SwiperSlide>
					);
				})}
			</>
		);
	};
	return (
		<Swiper
			slidesPerView={4}
			centeredSlides={false}
			spaceBetween={0}
			grabCursor={false}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className={styles.swiper}
		>
			{/* <FilmsCards /> */}
			<SwiperSlide className={styles.films_list_item}>{filmsData[0].title}</SwiperSlide>
			<SwiperSlide className={styles.films_list_item}>{filmsData[1].title}</SwiperSlide>
			<SwiperSlide className={styles.films_list_item}>{filmsData[2].title}</SwiperSlide>
			<SwiperSlide className={styles.films_list_item}>{filmsData[3].title}</SwiperSlide>
			<SwiperSlide className={styles.films_list_item}>{filmsData[4].title}</SwiperSlide>
		</Swiper>
	);
}
