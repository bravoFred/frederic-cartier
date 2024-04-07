import { createContext, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const InputContext = createContext({
	about: true as any,
	films: true as any,
	setAbout: (value: boolean) => {},
	setFilms: (value: boolean) => {},
	goToHome: () => {},
	gotoFilms: () => {},
	gotoAboutMe: () => {},
});
export function InputContextProvider(props) {
	const router = useRouter();
	const [about, setAbout] = useState(false);
	const [films, setFilms] = useState(false);

	function goToHome() {
		// router.push('/');
		setAbout(false);
		setFilms(false);
		console.log('goToHome');
	}
	function gotoFilms() {
		// router.push('/');
		setAbout(false);
		setFilms(!films);
		console.log('gotoFilms');
	}
	function gotoAboutMe() {
		// router.push('/');
		console.log('gotoAboutMe');

		setAbout(!about);
		setFilms(false);
	}

	return (
		<InputContext.Provider
			value={{
				about,
				films,
				setAbout,
				setFilms,
				goToHome,
				gotoFilms,
				gotoAboutMe,
			}}
		>
			{props.children}
		</InputContext.Provider>
	);
}

export default InputContext;
