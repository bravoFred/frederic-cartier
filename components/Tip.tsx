import styles from './Tip.module.scss';
import UserContextProvider from '../store/userContext';
import InputContextProvider from '../store/inputContext';
import { useContext, useState, useEffect } from 'react';
export default function Tip() {
	const { mobile } = useContext(UserContextProvider);
	const {
		activeObject,
		portalsActive,
		aboutMeActive,
		goToHome,
		portal1active,
		portal2active,
		portal3active,
		gotoAboutMe,
		gotoPortals,
	} = useContext(InputContextProvider);
	const [msg, setMsg] = useState('Scroll down to explore more!');
	useEffect(() => {
		if (aboutMeActive) {
			setMsg(mobile ? '' : '');
		} else if (portalsActive) {
			setMsg(
				mobile
					? 'Double tap portal to enter project'
					: 'Double click portal to enter project'
			);
		}
		if (portal1active || portal2active || portal3active) setMsg('');
	}, [aboutMeActive, portalsActive, portal1active, portal2active, portal3active, mobile]);

	return (
		<div className={styles.tip}>
			<p className={styles.tip_text}>{msg}</p>
		</div>
	);
}
