import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styles from './Films.module.scss';
// import required modules
import { useContext } from 'react';
import InputContextProvider from '@/store/inputContext';
import DataContextProvider from '@/store/dataContext';
import UserContextProvider from '@/store/userContext';
import FilmsVideoPlayer from './FilmsPlayer';
import 'swiper/css/effect-coverflow';

export default function App() {
	const { films, showFilm1, toggleFilm1, showFilm2, showFilm3, showFilm4, showFilm5, showFilm6 } =
		useContext(InputContextProvider);
	const { mobile } = useContext(UserContextProvider);
	const { filmsData } = useContext(DataContextProvider);
	const [activeIndex, setActiveIndex] = useState(2);
	const Mobile = () => {
		return (
			<Swiper
				slidesPerView={3}
				mousewheel={true}
				spaceBetween={16}
				grabCursor={true}
				centeredSlides={true}
				direction={'vertical'}
				speed={250}
				loop={true}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: true,
				}}
				modules={[Mousewheel, Autoplay]}
				className={films ? styles.swiper : styles.swiper_hidden}
				effect={'coverflow'}
				slideToClickedSlide={true}
			>
				<SwiperSlide className={styles.films_list_item} key={filmsData[0].id}>
					<Image
						src={filmsData[0].poster}
						alt={filmsData[0].title}
						width={300}
						height={450}
						className={styles.films_list_item_image}
					/>
					<p className={styles.films_list_item_title}>{filmsData[0].title}</p>
					<p className={styles.films_list_item_description}>{filmsData[0].description}</p>
				</SwiperSlide>

				<SwiperSlide className={styles.films_list_item} key={filmsData[1].id}>
					<Image
						src={filmsData[1].poster}
						alt={filmsData[1].title}
						width={300}
						height={450}
						className={styles.films_list_item_image}
					/>
					<p className={styles.films_list_item_title}>{filmsData[1].title}</p>
					<p className={styles.films_list_item_description}>{filmsData[1].description}</p>
				</SwiperSlide>
			</Swiper>
		);
	};
	return <>{mobile && <Mobile />}</>;
}
