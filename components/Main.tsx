import styles from '@/styles/App.module.css';
// const inter = Inter({ subsets: ['latin'] });
import React, { Suspense, useRef, useState, useContext, useEffect, use } from 'react';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import Camera from '@/components/Camera';
import PortalsMain from './portals/PortalsMain';
import AboutMe from './aboutMe/AboutMe';
import Floor from './Floor';
import Nav from './Nav';
import UserContextProvider from '../store/userContext';
import Mouse from './Mouse';
import dynamic from 'next/dynamic';
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
