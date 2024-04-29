import React, { useEffect, useRef, useState } from 'react';
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
import FilmsPlayer from './FilmsPlayer';
import 'swiper/css/effect-coverflow';
const previewImg =
	'https://raw.githubusercontent.com/thomasmatlock/public-fred/main/images/posterFilm1.png';

export default function App() {
	const { films, showFilm1, toggleFilm1, toggleFilm2, showFilm2, setShowFilm1, setShowFilm2 } =
		useContext(InputContextProvider);
	const { mobile } = useContext(UserContextProvider);
	const { filmsData } = useContext(DataContextProvider);
	const clickHandler = (swiper) => {
		if (!mobile) return;
		if (swiper.clickedIndex === 0) setShowFilm1(true);
		if (swiper.clickedIndex === 1) setShowFilm2(true);
	};
	const doubleClickHandler = (swiper) => {
		if (mobile) return;
		if (swiper.clickedIndex === 0) setShowFilm1(true);
		if (swiper.clickedIndex === 1) setShowFilm2(true);
	};
	const swipeHandler = (swiper) => {};
	useEffect(() => {
		function handleMouseMove(e) {
			const instruction = document.getElementById(styles.instruction);
			const instruction2 = document.getElementById(styles.instruction2);
			const contentWidth = document.getElementById(styles.instruction_container).offsetWidth;
			const contentHeight = document.getElementById(
				styles.instruction_container
			).offsetHeight;
			const contentWidth2 = document.getElementById(
				styles.instruction_container2
			).offsetWidth;
			const contentHeight2 = document.getElementById(
				styles.instruction_container2
			).offsetHeight;
			instruction.style.left = e.pageX - contentWidth + 0 + 'px';
			instruction.style.top = e.pageY - contentHeight + 0 + 'px';
			instruction2.style.left = e.pageX - contentWidth2 + 0 + 'px';
			instruction2.style.top = e.pageY - contentHeight2 + 0 + 'px';
		}
		document.addEventListener('mousemove', handleMouseMove);
		// cleanup
		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);
	const poster1 =
		'https://image.mux.com/7xrhPwu5KDJWVUm1Jfnu977l98w002mwNzXGJ01vwDNdA/thumbnail.png?width=1280&height=720&time=5';
	const poster2 =
		'https://pub-b939a725b21a4ff0aeb386a49caa581c.r2.dev/images%2Flab%2Fdesktop.png';

	return (
		<>
			<div
				className={styles.swiper_overlay}
				style={{
					opacity: showFilm1 || showFilm2 ? 0 : 1,
				}}
			></div>
			<Swiper
				slidesPerView={mobile ? 1.5 : 3}
				spaceBetween={mobile ? 48 : 32}
				mousewheel={true}
				grabCursor={true}
				centeredSlides={true}
				slideToClickedSlide={true}
				direction={mobile ? 'vertical' : 'horizontal'}
				speed={mobile ? 250 : 500}
				modules={[Mousewheel, EffectCoverflow]}
				// modules={[Mousewheel, Autoplay, Pagination]}
				className={films ? styles.swiper : styles.swiper_hidden}
				effect={'coverflow'}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 1,
					modifier: 1,
					slideShadows: false,
				}}
				id={'swiper'}
				onClick={(swiper) => clickHandler(swiper)}
				onDoubleClick={(swiper) => doubleClickHandler(swiper)}
				onDoubleTap={(swiper) => doubleClickHandler(swiper)}
				onScroll={(swiper) => swipeHandler(swiper)}
			>
				<SwiperSlide className={styles.films_list_item} key={filmsData[0].id}>
					<Image
						src={filmsData[0].poster}
						// src={previewImg}
						alt={filmsData[0].title}
						width={300}
						height={450}
						className={styles.films_list_item_image}
					/>
					<div id={styles.instruction_container}>
						<div id={styles.instruction}>double click to watch</div>
					</div>
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
					<div id={styles.instruction_container2}>
						<div id={styles.instruction2}>double click to watch</div>
					</div>
					<p className={styles.films_list_item_title}>{filmsData[1].title}</p>
					<p className={styles.films_list_item_description}>{filmsData[1].description}</p>
				</SwiperSlide>
			</Swiper>
			<FilmsPlayer
				show={showFilm1}
				title={filmsData[0].title}
				description={filmsData[0].description}
				team={filmsData[0].team}
			/>
			<FilmsPlayer
				show={showFilm2}
				title={filmsData[1].title}
				description={filmsData[1].description}
				team={filmsData[1].team}
			/>
		</>
	);
}
