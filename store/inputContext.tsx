import { createContext, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const InputContext = createContext({
	about: true as any,
	films: true as any,
	showFilm1: false as any,
	showFilm2: false as any,
	showFilm3: false as any,
	showFilm4: false as any,
	showFilm5: false as any,
	showFilm6: false as any,
	setShowFilm1: (value: boolean) => {},
	setShowFilm2: (value: boolean) => {},
	toggleFilm1: () => {},
	toggleFilm2: () => {},
	toggleFilm3: () => {},
	toggleFilm4: () => {},
	toggleFilm5: () => {},
	toggleFilm6: () => {},

	setAbout: (value: boolean) => {},
	setFilms: (value: boolean) => {},
	goToHome: () => {},
	goToFilms: () => {},
	goToAbout: () => {},
});
export function InputContextProvider(props) {
	const router = useRouter();
	const [dev, setDev] = useState(process.env.NODE_ENV === 'development');

	const [testFilms, setTestFilms] = useState(false);
	const [testAbout, setTestAbout] = useState(false);
	const [films, setFilms] = useState(testFilms);
	const [about, setAbout] = useState(testAbout);
	const [showFilm1, setShowFilm1] = useState(false);
	const [showFilm2, setShowFilm2] = useState(false);
	const [showFilm3, setShowFilm3] = useState(false);
	const [showFilm4, setShowFilm4] = useState(false);
	const [showFilm5, setShowFilm5] = useState(false);
	const [showFilm6, setShowFilm6] = useState(false);
	const toggleFilm1 = () => setShowFilm1(!showFilm1);
	const toggleFilm2 = () => setShowFilm2(!showFilm2);
	const toggleFilm3 = () => setShowFilm3(!showFilm3);
	const toggleFilm4 = () => setShowFilm4(!showFilm4);
	const toggleFilm5 = () => setShowFilm5(!showFilm5);
	const toggleFilm6 = () => setShowFilm6(!showFilm6);

	function disableShowFilms() {
		setShowFilm1(false);
		setShowFilm2(false);
		setShowFilm3(false);
		setShowFilm4(false);
		setShowFilm5(false);
		setShowFilm6(false);
	}
	function goToFilms() {
		disableShowFilms();
		if (films || about) return;
		setAbout(false);
		setFilms(!films);
	}
	function goToHome() {
		router.push('/');
		disableShowFilms();
		setAbout(false);
		setFilms(false);
	}
	function goToAbout() {
		disableShowFilms();

		if (films) goToHome();
		if (!films) setAbout(!about);
	}
	useEffect(() => {
		function handleEscape(event) {
			if (event.key === 'Escape') goToHome();
		}
		function handleKey1(event) {
			if (event.key === '1') {
				setAbout(false);
				setFilms(true);
			}
		}
		function handleKey2(event) {
			if (event.key === '2') {
				setFilms(false);
				setAbout(true);
			}
		}
		document.addEventListener('keydown', handleEscape);
		document.addEventListener('keydown', handleKey1);
		document.addEventListener('keydown', handleKey2);
		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.removeEventListener('keydown', handleKey1);
			document.removeEventListener('keydown', handleKey2);
		};
	}, []);
	return (
		<InputContext.Provider
			value={{
				about,
				films,
				showFilm1,
				showFilm2,
				showFilm3,
				showFilm4,
				showFilm5,
				showFilm6,
				setShowFilm1,
				setShowFilm2,
				toggleFilm1,
				toggleFilm2,
				toggleFilm3,
				toggleFilm4,
				toggleFilm5,
				toggleFilm6,
				setAbout,
				setFilms,
				goToHome,
				goToFilms,
				goToAbout,
			}}
		>
			{props.children}
		</InputContext.Provider>
	);
}

export default InputContext;
