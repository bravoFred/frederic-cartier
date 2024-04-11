import { useRef, useState, useContext } from 'react';
import NavNonAnimated from './NavNonAnimated';
import Nav from './Nav';
import Credits from './Ticker';
import Content from './Content';
import Modal from './Modal';
import About from './About';
import Films from './Films2';
import UserContext from '@/store/userContext';
export default function Main() {
	const { dev } = useContext(UserContext);
	return (
		<>
			{/* <Nav /> */}
			<NavNonAnimated />
			<Content />
			<Modal>
				<About />
				{dev && <Films />}
				{/* <Films /> */}
			</Modal>
			<Credits />
		</>
	);
}
