import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Autoplay, EffectCoverflow, Pagination, Grid } from 'swiper/modules';
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
	const swiperRef = useRef(null!);
	const Mobile = () => {
		const realIndex = useRef(0);

		// console.log(swiperRef.current);
		const clickHandler = (swiper) => {
			// swiperRef.current.swiper.slideTo(swiper.activeIndex);
			// console.log(swiperRef.current.swiper.activeIndex);
			toggleFilm1();
			// console.log(swiper.current);
		};
		const doubleClickHandler = (swiper) => {
			// swiperRef.current.swiper.slideTo(swiper.activeIndex);
			// console.log(swiperRef.current.swiper.activeIndex);
		};
		const swipeHandler = (swiper) => {
			// swiperRef.current.swiper.slideTo(swiper.activeIndex);
			// console.log(swiperRef.current.swiper.realIndex);
			// realIndex.current = swiperRef.current.swiper.realIndex;
			// console.log('swipe');
		};
		return (
			<>
				<div
					className={styles.swiper_overlay}
					style={{
						opacity:
							showFilm1 ||
							showFilm2 ||
							showFilm3 ||
							showFilm4 ||
							showFilm5 ||
							showFilm6
								? 0
								: 1,
					}}
				></div>
				<Swiper
					slidesPerView={2}
					mousewheel={true}
					spaceBetween={16}
					grabCursor={true}
					centeredSlides={true}
					direction={'vertical'}
					speed={250}
					// loop={true}
					pagination={{
						clickable: true,
					}}
					modules={[Mousewheel]}
					className={films ? styles.swiper : styles.swiper_hidden}
					// effect={'coverflow'}
					slideToClickedSlide={true}
					id={'swiper'}
					onClick={(swiper) => clickHandler(swiper)}
					onDoubleClick={(swiper) => doubleClickHandler(swiper)}
					onDoubleTap={(swiper) => doubleClickHandler(swiper)}
					onScroll={(swiper) => swipeHandler(swiper)}
					onTap={(swiper) => clickHandler(swiper)}
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
						<p className={styles.films_list_item_description}>
							{filmsData[0].description}
						</p>
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
						<p className={styles.films_list_item_description}>
							{filmsData[1].description}
						</p>
					</SwiperSlide>
					<SwiperSlide className={styles.films_list_item} key={filmsData[2].id}>
						<Image
							src={filmsData[2].poster}
							alt={filmsData[2].title}
							width={300}
							height={450}
							className={styles.films_list_item_image}
						/>
						<p className={styles.films_list_item_title}>{filmsData[2].title}</p>
						<p className={styles.films_list_item_description}>
							{filmsData[2].description}
						</p>
					</SwiperSlide>
				</Swiper>
				<FilmsVideoPlayer
					show={showFilm1}
					title={filmsData[0].title}
					description={filmsData[0].description}
					team={filmsData[0].team}
				/>
			</>
		);
	};
	return <>{mobile && <Mobile />}</>;
}
