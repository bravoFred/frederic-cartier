import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styles from './Films2.module.scss';

// import required modules
import { useContext } from 'react';
import InputContextProvider from '@/store/inputContext';
import DataContextProvider from '@/store/dataContext';
import UserContextProvider from '@/store/userContext';
import 'swiper/css/effect-coverflow';

export default function App() {
	const { films } = useContext(InputContextProvider);
	const { mobile } = useContext(UserContextProvider);
	const { filmsData } = useContext(DataContextProvider);
	const [selectedFilm, setSelectedFilm] = useState(null);
	const clickHandler = (id) => {
		console.log('clicked', id);
		setSelectedFilm(id);
		// go to selected film page
	};
	return (
		<Swiper
			slidesPerView={mobile ? 1.25 : 3.5}
			mousewheel={true}
			spaceBetween={mobile ? 16 : 32}
			grabCursor={true}
			centeredSlides={true}
			direction={mobile ? 'vertical' : 'horizontal'}
			loop={true}
			pagination={{
				clickable: true,
			}}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			modules={[Mousewheel, Autoplay, EffectCoverflow]}
			className={films ? styles.swiper : styles.swiper_hidden}
			effect={'coverflow'}
			coverflowEffect={{
				rotate: 10,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: mobile ? false : true,
			}}
		>
			<SwiperSlide
				className={styles.films_list_item}
				onClick={() => clickHandler(filmsData[0].id)}
				key={filmsData[0].id}
			>
				{filmsData[0].title}
			</SwiperSlide>
			<SwiperSlide
				className={styles.films_list_item}
				onClick={() => clickHandler(filmsData[1].id)}
				key={filmsData[1].id}
			>
				{filmsData[1].title}
			</SwiperSlide>
			<SwiperSlide
				className={styles.films_list_item}
				onClick={() => clickHandler(filmsData[2].id)}
				key={filmsData[2].id}
			>
				{filmsData[2].title}
			</SwiperSlide>
			<SwiperSlide
				className={styles.films_list_item}
				onClick={() => clickHandler(filmsData[3].id)}
				key={filmsData[3].id}
			>
				{filmsData[3].title}
			</SwiperSlide>
			<SwiperSlide
				className={styles.films_list_item}
				onClick={() => clickHandler(filmsData[4].id)}
				key={filmsData[4].id}
			>
				{filmsData[4].title}
			</SwiperSlide>
			<SwiperSlide
				className={styles.films_list_item}
				onClick={() => clickHandler(filmsData[0].id)}
				key={filmsData[0].id}
			>
				{filmsData[0].title}
			</SwiperSlide>
			<SwiperSlide
				className={styles.films_list_item}
				onClick={() => clickHandler(filmsData[1].id)}
				key={filmsData[1].id}
			>
				{filmsData[1].title}
			</SwiperSlide>
			<SwiperSlide
				className={styles.films_list_item}
				onClick={() => clickHandler(filmsData[2].id)}
				key={filmsData[2].id}
			>
				{filmsData[2].title}
			</SwiperSlide>
			<SwiperSlide
				className={styles.films_list_item}
				onClick={() => clickHandler(filmsData[3].id)}
				key={filmsData[3].id}
			>
				{filmsData[3].title}
			</SwiperSlide>
			<SwiperSlide
				className={styles.films_list_item}
				onClick={() => clickHandler(filmsData[4].id)}
				key={filmsData[4].id}
			>
				{filmsData[4].title}
			</SwiperSlide>
		</Swiper>
	);
}
