import { useRef, useState, useContext } from 'react';
import Nav from './Nav';
import NavAnimated from './NavAnimated';
import Credits from './Ticker';
import Content from './Content';
import Modal from './Modal';
import About from './About';
import Films from './Films';
import FilmsMobile from './FilmsMobile';
import UserContext from '@/store/userContext';
export default function Main() {
	const { dev, mobile } = useContext(UserContext);
	return (
		<>
			<Nav />
			{/* <NavAnimated /> */}
			<Content />
			<Modal>
				<About />
				{/* {dev && <Films />} */}
				{/* {dev && <FilmsMobile />} */}
				<Films />
				<FilmsMobile />
			</Modal>
			<Credits />
		</>
	);
}
