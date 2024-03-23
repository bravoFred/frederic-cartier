import { useRef, useState, useContext } from 'react';
import Nav from './Nav';
import UserContextProvider from '../store/userContext';
import Tip from './Tip';
import Status from './Status';
import Credits from './Credits';
import Email from './Email';
export default function Main() {
	const { theme, setTheme, frameloop, mobile } = useContext(UserContextProvider);
	return (
		<>
			<Nav />
			<Tip />
			<Status />
			<Email />
			<Credits />
		</>
	);
}
