import styles from '../styles/App.module.scss';
import { UserContextProvider } from '../store/userContext';
import { InputContextProvider } from '../store/inputContext';
import Main from '@/video/MainVideo';

export default function Home() {
	return (
		<UserContextProvider>
			<InputContextProvider>
				{/* <div className={styles['app']}> */}
				<Main />
				{/* </div> */}
			</InputContextProvider>
		</UserContextProvider>
	);
}
