import { useRef, useState, useContext } from 'react';
import Nav from './Nav';
import Credits from './Ticker';
import Content from './Content';
import Modal from './Modal';
import About from './About';
import Films from './Films';
export default function Main() {
	return (
		<>
			<Nav />
			<Content />
			<Modal>
				<About />
				<Films />
			</Modal>
			<Credits />
		</>
	);
}
