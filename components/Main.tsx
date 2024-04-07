import { useRef, useState, useContext } from 'react';
import Nav from './Nav';
import UserContextProvider from '../store/userContext';
import Status from './Status';
import Credits from './Ticker';
import ComingSoon from './ComingSoon';
import Content from './Content';
import Modal from './Modal';
import About from './About';
import Email from './Email';
export default function Main() {
	return (
		<>
			<Nav />
			<Content />
			<Modal>
				<About />
			</Modal>
			<Credits />
		</>
	);
}
