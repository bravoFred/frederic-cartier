import styles from './Ticker.module.scss';
import Link from 'next/link';
import InputContextProvider from '@/store/inputContext';
import { useContext, useEffect } from 'react';
export default function Credits() {
	const designer = `Frederic Cartier`;
	const currentYear = new Date().getFullYear();
	const regular = `${designer} ${currentYear}. All rights reserved. DESIGN`;
	const { films, about } = useContext(InputContextProvider);

	const developer = `Thomas Matlock`;
	const dev = `development ${developer}`;
	const divider = '|';
	const Child = () => {
		return (
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
		);
	};
	return (
		<div
			className={styles.credits}
			style={{
				filter: about || films ? 'blur(1rem)' : 'none',
			}}
		>
			<Child />
			{/* <Child /> */}
			{/* <Child /> */}
			{/* <Child /> */}
			{/* <Child /> */}
			<div className={styles.credit_overlay} />
		</div>
	);
}
