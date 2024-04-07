import styles from './Ticker.module.scss';
import Link from 'next/link';
import InputContextProvider from '@/store/inputContext';
import { useContext } from 'react';
export default function Credits() {
	const designer = `Frederic Cartier`;
	const currentYear = new Date().getFullYear();
	const regular = `${designer} ${currentYear}. All rights reserved. DESIGN`;

	const developer = `Thomas Matlock`;
	const dev = `development ${developer}`;
	const divider = '|';
	return (
		<div className={styles.credits}>
			<div className={styles.credit}>
				<p className={styles.divider}>{divider}</p>
				<p className={styles.credit_text}>{regular}</p>
				<p className={styles.credit_text_bold}>{designer}</p>
				<Link
					href="https://www.thomasmatlock.com"
					target="_blank"
					className={styles.credit_text}
					style={{ cursor: 'pointer' }}
				>
					{dev}
				</Link>
			</div>
			<div className={styles.credit_overlay}></div>
		</div>
	);
}
