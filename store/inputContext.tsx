import { createContext, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const InputContext = createContext({
	aboutMe: true as any,
});
export function InputContextProvider(props) {
	const router = useRouter();
	const [aboutMe, setAboutMe] = useState(false);

	function goToHome() {
		router.push('/');
	}
	function gotoAboutMe() {
		router.push('/');
		setAboutMe(true);
	}

	return (
		<InputContext.Provider
			value={{
				aboutMe,
			}}
		>
			{props.children}
		</InputContext.Provider>
	);
}

export default InputContext;
