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
import FilmsVideoPlayer from './FilmsPlayer';
import 'swiper/css/effect-coverflow';

export default function App() {
	const { films, showFilm1, toggleFilm1, showFilm2, showFilm3, showFilm4, showFilm5, showFilm6 } =
		useContext(InputContextProvider);
	const { mobile } = useContext(UserContextProvider);
	const { filmsData } = useContext(DataContextProvider);
	const Desktop3D = () => {
		const realIndex = useRef(0);
		const swiperRef = useRef(null!);
		// console.log(swiperRef.current);
		const clickHandler = (swiper) => {
			if (mobile) toggleFilm1();
			// swiperRef.current.swiper.slideTo(swiper.activeIndex);
			// console.log(swiperRef.current.swiper.activeIndex);
			// console.log('click');
			// console.log(swiper.current);
		};
		const doubleClickHandler = (swiper) => {
			// swiperRef.current.swiper.slideTo(swiper.activeIndex);
			// console.log(swiperRef.current.swiper.activeIndex);
			if (!mobile) toggleFilm1();
			// console.log('double');
		};
		const swipeHandler = (swiper) => {
			// swiperRef.current.swiper.slideTo(swiper.activeIndex);
			// console.log(swiperRef.current.swiper.realIndex);
			// realIndex.current = swiperRef.current.swiper.realIndex;
			// console.log('swipe');
		};

		useEffect(() => {
			// add mouse move event listener

			function handleMouseMove(e) {
				const instruction = document.getElementById(styles.instruction);
				const instruction2 = document.getElementById(styles.instruction2);
				const instruction3 = document.getElementById(styles.instruction3);
				const contentWidth = document.getElementById(
					styles.instruction_container
				).offsetWidth;
				const contentHeight = document.getElementById(
					styles.instruction_container
				).offsetHeight;
				const contentWidth2 = document.getElementById(
					styles.instruction_container2
				).offsetWidth;
				const contentHeight2 = document.getElementById(
					styles.instruction_container2
				).offsetHeight;
				const contentWidth3 = document.getElementById(
					styles.instruction_container3
				).offsetWidth;
				const contentHeight3 = document.getElementById(
					styles.instruction_container3
				).offsetHeight;
				instruction.style.left = e.pageX - contentWidth + 0 + 'px';
				instruction.style.top = e.pageY - contentHeight + 0 + 'px';
				instruction2.style.left = e.pageX - contentWidth2 + 0 + 'px';
				instruction2.style.top = e.pageY - contentHeight2 + 0 + 'px';
				instruction3.style.left = e.pageX - contentWidth3 + 0 + 'px';
				instruction3.style.top = e.pageY - contentHeight3 + 0 + 'px';
			}
			document.addEventListener('mousemove', handleMouseMove);
			// cleanup
			return () => {
				document.removeEventListener('mousemove', handleMouseMove);
			};
		}, []);
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
					// ref={swiperRef}
					slidesPerView={mobile ? 1.5 : 3}
					spaceBetween={mobile ? 48 : 32}
					mousewheel={true}
					grabCursor={true}
					centeredSlides={true}
					slideToClickedSlide={true}
					direction={mobile ? 'vertical' : 'horizontal'}
					speed={mobile ? 500 : 1000}
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
							alt={filmsData[0].title}
							width={300}
							height={450}
							className={styles.films_list_item_image}
						/>
						<div id={styles.instruction_container}>
							<div id={styles.instruction}>double click to watch</div>
						</div>
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
						<div id={styles.instruction_container2}>
							<div id={styles.instruction2}>double click to watch</div>
						</div>
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
						<div id={styles.instruction_container3}>
							<div id={styles.instruction3}>double click to watch</div>
						</div>
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
	return <Desktop3D />;
}
