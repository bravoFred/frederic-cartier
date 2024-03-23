import styles from '@/styles/App.module.css';
import { Inter } from 'next/font/google';
import ScrollNavButtons from '@/components/ScrollNavButtons';
// const inter = Inter({ subsets: ['latin'] });
import React, { Suspense, useRef, useState, useContext, useEffect, use } from 'react';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import {
	ScrollControls,
	Billboard,
	ScreenSpace,
	ScreenSizer,
	Environment,
} from '@react-three/drei';
import Camera from '@/components/Camera';
import PortalsMain from './portals/PortalsMain';
import AboutMe from './aboutMe/AboutMe';
import Floor from './Floor';
import Nav from './Nav';
import Lighting from './Lighting';
import Performance from './Performance';
import GridGround from './GridGround';
import ScrollController from './ScrollController';
import Raycaster from './Raycaster';
import BackgroundColor from './BackgroundColor';
import Fog from './Fog';
import UserContextProvider from '../store/userContext';
import Mouse from './Mouse';
import dynamic from 'next/dynamic';
import Tip from './Tip';
import Status from './Status';
import Credits from './Credits';
import Email from './Email';
const SmallRoom = dynamic(
	() => import('../models/4096/PortalInteriorJoined').then((mod) => mod.Model),
	{
		ssr: false,
	}
);
import * as THREE from 'three';
export default function Main() {
	const { theme, setTheme, frameloop, mobile } = useContext(UserContextProvider);
	const [play, setPlay] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setPlay(true);
		}, 100);
	}, []);
	return (
		<>
			<Nav />
			<Tip />
			<Status />
			<Email />
			{/* <Credits /> */}
			<ScrollNavButtons />
			<Suspense fallback={null}>
				<Canvas
					style={{ position: 'absolute' }}
					flat
					shadows
					frameloop={frameloop}
					dpr={[1, mobile ? 1.5 : 2]}
					gl={{
						powerPreference: 'high-performance',
						antialias: false,
						logarithmicDepthBuffer: true,
						alpha: false,
					}}
					camera={{
						// fov: mobile ? 45 : 30, // my fov
						fov: mobile ? 45 : 70, // fov from codesandbox
						near: 0.1,
						far: 45,
						zoom: 1,
						position: new THREE.Vector3(mobile ? 0 : 0, 0, 5),
					}}
				>
					<color args={[theme === 'light' ? '#fff' : '#000']} attach="background" />
					<fog attach="fog" args={[theme === 'light' ? '#fff' : '#000', 0, 15]} />
					<ScrollControls pages={2}>
						<GridGround theme={theme} />
						{/* {play && <AboutMe />} */}
						<AboutMe />
						<PortalsMain />
						<ScrollController />
						<Camera />
						<Raycaster />
						<Lighting />
						{/* <Mouse /> */}
						{/* <BackgroundColor /> */}
						{/* <Fog /> */}
					</ScrollControls>
					<Performance />
				</Canvas>
			</Suspense>
		</>
	);
}
