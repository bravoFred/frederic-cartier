import styles from './Modal.module.scss';
import InputContextProvider from '@/store/inputContext';
import { useContext } from 'react';
export default function Modal(props: React.PropsWithChildren<{}>) {
	const { films, about } = useContext(InputContextProvider);
	return <div className={styles.modal}>{props.children}</div>;
}
