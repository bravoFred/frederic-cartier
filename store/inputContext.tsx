import { createContext, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const InputContext = createContext({
	about: true as any,
	films: true as any,
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

	function goToFilms() {
		// router.push('/');
		if (films || about) return;
		setAbout(false);
		setFilms(!films);
	}
	function goToHome() {
		// router.push('/');
		setAbout(false);
		setFilms(false);
	}
	function goToAbout() {
		if (films) goToHome();
		if (!films) setAbout(!about);
	}
	useEffect(() => {
		function handleEscape(event) {
			if (event.key === 'Escape') {
				goToHome();
			}
		}
		function handleKey1(event) {
			if (event.key === '1') {
				console.log('1');
				goToFilms();
			}
		}
		function handleKey2(event) {
			if (event.key === '2') {
				console.log('2');

				goToAbout();
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
