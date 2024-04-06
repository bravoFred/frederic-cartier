import { useRef, useState, useContext } from 'react';
import Nav from './Nav';
import UserContextProvider from '../store/userContext';
import Status from './Status';
import Credits from './Credits';
import ComingSoon from './ComingSoon';
import Email from './Email';
export default function Main() {
	return (
		<>
			<Nav />
			{/* <Status /> */}
			{/* <Email /> */}
			{/* <ComingSoon /> */}
			<Credits />
		</>
	);
}
