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
	const [about, setAbout] = useState(false);
	const [films, setFilms] = useState(false);

	function goToFilms() {
		// router.push('/');
		setAbout(false);
		setFilms(!films);
	}
	function goToHome() {
		// router.push('/');
		setAbout(false);
		setFilms(false);
	}
	function goToAbout() {
		// router.push('/');
		if (films) {
			goToHome();
		} else {
			setAbout(!about);
			setFilms(false);
		}
	}

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
