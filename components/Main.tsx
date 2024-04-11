import { useRef, useState, useContext } from 'react';
import Nav from './Nav';
import NavAnimated from './NavAnimated';
import Credits from './Ticker';
import Content from './Content';
import Modal from './Modal';
import About from './About';
import Films from './Films';
import UserContext from '@/store/userContext';
export default function Main() {
	const { dev } = useContext(UserContext);
	return (
		<>
			<Nav />
			{/* <NavAnimated /> */}
			<Content />
			<Modal>
				<About />
				{dev && <Films />}
			</Modal>
			<Credits />
		</>
	);
}
