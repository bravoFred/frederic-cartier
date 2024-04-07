import { createContext, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const InputContext = createContext({
	aboutMe: true as any,
	films: true as any,
	setAboutMe: (value: boolean) => {},
	setFilms: (value: boolean) => {},
	goToHome: () => {},
	gotoFilms: () => {},
	gotoAboutMe: () => {},
});
export function InputContextProvider(props) {
	const router = useRouter();
	const [aboutMe, setAboutMe] = useState(false);
	const [films, setFilms] = useState(false);

	function goToHome() {
		// router.push('/');
		setAboutMe(false);
		setFilms(false);
		console.log('goToHome');
	}
	function gotoFilms() {
		// router.push('/');
		setAboutMe(false);
		setFilms(!films);
		console.log('gotoFilms');
	}
	function gotoAboutMe() {
		// router.push('/');
		console.log('gotoAboutMe');

		setAboutMe(!aboutMe);
		setFilms(false);
	}

	return (
		<InputContext.Provider
			value={{
				aboutMe,
				films,
				setAboutMe,
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
