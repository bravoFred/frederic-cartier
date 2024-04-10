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
	const clickHandler = (swiper) => {
		console.log(swiper.activeIndex);

		// setSelectedFilm(id);
		// go to selected film page
	};
	// console.log(mobile);
	const Desktop3D = () => {
		return (
			<Swiper
				slidesPerView={3}
				mousewheel={true}
				spaceBetween={32}
				loop={true}
				speed={250}
				autoplay={{
					delay: 2500,
					disableOnInteraction: true,
				}}
				modules={[Mousewheel, Autoplay, EffectCoverflow, Pagination]}
				className={films ? styles.swiper : styles.swiper_hidden}
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				coverflowEffect={{
					rotate: 5,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				slideToClickedSlide={true}
				onClick={(swiper) => clickHandler(swiper)}
			>
				<SwiperSlide className={styles.films_list_item} key={filmsData[0].id}>
					{filmsData[0].title}
				</SwiperSlide>
				<SwiperSlide className={styles.films_list_item} key={filmsData[1].id}>
					{filmsData[1].title}
				</SwiperSlide>
				<SwiperSlide className={styles.films_list_item} key={filmsData[2].id}>
					{filmsData[2].title}
				</SwiperSlide>
				<SwiperSlide className={styles.films_list_item} key={filmsData[3].id}>
					{filmsData[3].title}
				</SwiperSlide>
				<SwiperSlide className={styles.films_list_item} key={filmsData[4].id}>
					{filmsData[4].title}
				</SwiperSlide>
			</Swiper>
		);
	};
	const DesktopFlat = () => {
		return (
			<Swiper
				slidesPerView={3.5}
				mousewheel={true}
				spaceBetween={32}
				grabCursor={false}
				centeredSlides={true}
				speed={250}
				// direction={mobile ? 'vertical' : 'horizontal'}
				loop={true}
				// pagination={{
				// 	clickable: true,
				// }}
				autoplay={{
					delay: 2500,
					disableOnInteraction: true,
				}}
				modules={[Mousewheel, Autoplay]}
				className={films ? styles.swiper : styles.swiper_hidden}
				// effect={'coverflow'}
				// coverflowEffect={{
				// 	rotate: 10,
				// 	stretch: 0,
				// 	depth: 100,
				// 	modifier: 1,
				// 	slideShadows: true,
				// }}
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
			</Swiper>
		);
	};
	const Mobile = () => {
		return (
			<Swiper
				// slidesPerView={1.25}
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
				// modules={[Mousewheel, Autoplay, EffectCoverflow]}
				modules={[Mousewheel, Autoplay]}
				className={films ? styles.swiper : styles.swiper_hidden}
				effect={'coverflow'}
				// coverflowEffect={{
				// 	rotate: 10,
				// 	stretch: 0,
				// 	depth: 100,
				// 	modifier: 1,
				// 	slideShadows: mobile ? false : true,
				// }}
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
			</Swiper>
		);
	};
	return (
		<>
			{!mobile && <Desktop3D />}
			{/* {!mobile && <DesktopFlat />} */}
			{mobile && <Mobile />}
			{/* <Mobile /> */}
		</>
	);
}
