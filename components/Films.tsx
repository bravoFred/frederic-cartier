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
import FilmsVideoPlayer from './FilmsVideoPlayer';
import 'swiper/css/effect-coverflow';

export default function App() {
	const { films, showFilm1, toggleFilm1 } = useContext(InputContextProvider);
	const { mobile } = useContext(UserContextProvider);
	const { filmsData } = useContext(DataContextProvider);
	const [activeIndex, setActiveIndex] = useState(2);
	const Desktop3D = () => {
		const swiperRef = useRef(null!);
		console.log(swiperRef.current);
		const clickHandler = (swiper) => {
			swiperRef.current.swiper.slideTo(swiper.activeIndex);
			console.log(swiperRef.current.swiper.activeIndex);
			// console.log(swiper.current);
		};
		const doubleClickHandler = (swiper) => {
			swiperRef.current.swiper.slideTo(swiper.activeIndex);
			console.log(swiperRef.current.swiper.activeIndex);
			toggleFilm1();
		};
		const swipeHandler = (swiper) => {
			swiperRef.current.swiper.slideTo(swiper.activeIndex);
			console.log(swiperRef.current.swiper.activeIndex);
		};

		return (
			<>
				<Swiper
					ref={swiperRef}
					slidesPerView={3}
					mousewheel={true}
					spaceBetween={32}
					loop={true}
					speed={250}
					// autoplay={{
					// 	delay: 2500,
					// 	disableOnInteraction: true,
					// }}
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
						slideShadows: false,
					}}
					id={'swiper'}
					slideToClickedSlide={true}
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
						<p className={styles.films_list_item_title}>{filmsData[0].title}</p>
						<p className={styles.films_list_item_description}>
							{filmsData[0].description}
						</p>
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
				<FilmsVideoPlayer
					show={showFilm1}
					title={filmsData[0].title}
					description={filmsData[0].description}
					team={filmsData[0].team}
				/>
			</>
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
					// onClick={() => clickHandler(filmsData[0].id)}
					key={filmsData[0].id}
				>
					{filmsData[0].title}
				</SwiperSlide>
				<SwiperSlide
					className={styles.films_list_item}
					// onClick={() => clickHandler(filmsData[1].id)}
					key={filmsData[1].id}
				>
					{filmsData[1].title}
				</SwiperSlide>
				<SwiperSlide
					className={styles.films_list_item}
					// onClick={() => clickHandler(filmsData[2].id)}
					key={filmsData[2].id}
				>
					{filmsData[2].title}
				</SwiperSlide>
				<SwiperSlide
					className={styles.films_list_item}
					// onClick={() => clickHandler(filmsData[3].id)}
					key={filmsData[3].id}
				>
					{filmsData[3].title}
				</SwiperSlide>
				<SwiperSlide
					className={styles.films_list_item}
					// onClick={() => clickHandler(filmsData[4].id)}
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
				slideToClickedSlide={true}
				// onClick={(swiper) => clickHandler(swiper)}
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
	return (
		<>
			{!mobile && <Desktop3D />}
			{/* {!mobile && <DesktopFlat />} */}
			{mobile && <Mobile />}
			{/* <Mobile /> */}
		</>
	);
}
