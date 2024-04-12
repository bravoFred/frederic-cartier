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
	const instagramURL = 'https://www.instagram.com/bravoFred_';
	const linkedinURL = 'https://www.linkedin.com/in/frederic-cartier-bb2b8b111/';
	const vimeoURL = 'https://vimeo.com/bravofred';
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
				<p className={styles.divider}>{divider}</p>
				<Link
					href={instagramURL}
					target="_blank"
					className={styles.credit_social}
					style={{ cursor: 'pointer' }}
				>
					<p className={styles.credit_social_ig}>INSTAGRAM</p>
				</Link>
				<Link
					href={linkedinURL}
					target="_blank"
					className={styles.credit_social}
					style={{ cursor: 'pointer' }}
				>
					{/* <p className={styles.credit_social_linkedin}>•</p> */}
					<p className={styles.credit_social_linkedin}>LINKEDIN</p>
				</Link>
				<Link
					href={vimeoURL}
					target="_blank"
					className={styles.credit_social}
					style={{ cursor: 'pointer' }}
				>
					{/* <p className={styles.credit_social_vimeo}>•</p> */}
					<p className={styles.credit_social_vimeo}>VIMEO</p>
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
