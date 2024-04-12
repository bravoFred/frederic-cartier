import styles from './Ticker.module.scss';
import Link from 'next/link';
import InputContextProvider from '@/store/inputContext';
import { useContext, useEffect } from 'react';
import Marquee from 'react-fast-marquee';

export default function Credits() {
	const designer = `Frederic Cartier`;
	const currentYear = new Date().getFullYear();
	const regular = `${designer} ${currentYear}. All rights reserved. DESIGN`;
	const { films, about } = useContext(InputContextProvider);

	const developer = `Thomas Matlock`;
	const dev = ` ${developer}`;
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
					className={styles.credit_text_me}
					style={{ cursor: 'pointer' }}
				>
					<p className={styles.credit_my_prefix}>DEVELOPMENT</p>
					<p className={styles.credit_my_name}>{dev}</p>
					{/* {dev} */}
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
			<Marquee
				direction="left"
				pauseOnHover
				speed={30}
				autoFill
				className={styles.credits}
				style={
					{
						// filter: about || films ? 'blur(1rem)' : 'none',
					}
				}
			>
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
				<Child />
			</Marquee>
			<div className={styles.credit_overlay} />
		</div>
	);
}
