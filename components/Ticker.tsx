import styles from './Ticker.module.scss';
import Link from 'next/link';
import InputContextProvider from '@/store/inputContext';
import { useContext } from 'react';
export default function Credits() {
	const designer = ` Frederic Cartier`;
	const developer = `Thomas Matlock`;
	const currentYear = new Date().getFullYear();
	const regular = `${designer} ${currentYear}. All rights reserved. DESIGN`;
	const bold = `${designer}`;
	const dev = `${developer}`;
	const divider = '|';
	return (
		// <div id={styles.maindiv}>
		// 	<div id={styles.div1}>
		// 		&nbsp;Test-1 Test-2 Test-3 Test-4 Test-5 Test-6 Test-7 Test-8 Test-9 Test-10 Test-11
		// 	</div>
		// 	<div id={styles.div2}>
		// 		&nbsp;Test-1 Test-2 Test-3 Test-4 Test-5 Test-6 Test-7 Test-8 Test-9 Test-10 Test-11
		// 	</div>
		// </div>
		<div className={styles.credits}>
			{/* <div className={styles.credit}>
				<p className={styles.divider}>{divider}</p>
				<p className={styles.credit_text}>{regular}</p>
				<p className={styles.credit_text_bold}>{bold}</p>
				<p className={styles.credit_text}>development</p>
				<Link
					href="https://www.thomasmatlock.com"
					target="_blank"
					className={styles.credit_text}
					style={{ cursor: 'pointer', marginLeft: '-0.25rem' }}
				>
					{dev}
				</Link>
			</div> */}
			<div className={styles.credit}>
				<p className={styles.divider}>{divider}</p>
				<p className={styles.credit_text}>{regular}</p>
				<p className={styles.credit_text_bold}>{bold}</p>
				<p className={styles.credit_text}>development</p>
				<Link
					href="https://www.thomasmatlock.com"
					target="_blank"
					className={styles.credit_text}
					style={{ cursor: 'pointer' }}
				>
					{dev}
				</Link>
			</div>
			{/* <div className={styles.credit}>
				<p className={styles.divider}>{divider}</p>
				<p className={styles.credit_text}>{regular}</p>
				<p className={styles.credit_text_bold}>{bold}</p>
				<p className={styles.credit_text} style={{ marginLeft: '0.25rem' }}>
					development
				</p>
				<Link
					href="https://www.thomasmatlock.com"
					target="_blank"
					className={styles.credit_text}
					style={{ cursor: 'pointer', marginLeft: '-0.25rem' }}
				>
					{dev}
				</Link>
			</div> */}
			{/* <div className={styles.credit}>
				<p className={styles.divider}>{divider}</p>
				<p className={styles.credit_text}>{regular}</p>
				<p className={styles.credit_text_bold}>{bold}</p>
				<p className={styles.credit_text} style={{ marginLeft: '0.25rem' }}>
					development
				</p>
				<Link
					href="https://www.thomasmatlock.com"
					target="_blank"
					className={styles.credit_text}
					style={{ cursor: 'pointer', marginLeft: '-0.25rem' }}
				>
					{dev}
				</Link>
			</div> */}
			{/* <div className={styles.credit}>
		 	<p className={styles.divider}>{divider}</p>
		 	<p className={styles.credit_text}>{regular}</p>
		 	<p className={styles.credit_text_bold}>{bold}</p>
		 	<p className={styles.credit_text}>development</p>
		 	<Link
		 		href="https://www.thomasmatlock.com"
		 		target="_blank"
		 		className={styles.credit_text}
		 		style={{ cursor: 'pointer', marginLeft: '-0.25rem' }}
		 	>
		 		{dev}
		 	</Link>
		 </div> */}
			{/* <div className={styles.credit}>
		 	<p className={styles.divider}>{divider}</p>
		 	<p className={styles.credit_text}>{regular}</p>
		 	<p className={styles.credit_text_bold}>{bold}</p>
		 	<p className={styles.credit_text}>development</p>
		 	<Link
		 		href="https://www.thomasmatlock.com"
		 		target="_blank"
		 		className={styles.credit_text}
		 		style={{ cursor: 'pointer', marginLeft: '-0.25rem' }}
		 	>
		 		{dev}
		 	</Link>
		 </div> */}
			{/* <div className={styles.credit_overlay}></div> */}
		</div>
	);
}
