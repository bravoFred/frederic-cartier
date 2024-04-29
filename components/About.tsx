import styles from './About.module.scss';
import DataContext from '@/store/dataContext';
import InputContextProvider from '@/store/inputContext';
import Link from 'next/link';
import { useContext } from 'react';
export default function About() {
	const { aboutData } = useContext(DataContext);
	const { about } = useContext(InputContextProvider);
	const linkTitle = `Email`;
	const email = `fcartier@srgestudios.com`;
	const linkUrl = `mailto:${email}`;

	return (
		<div className={about ? styles.about : styles.about_hidden}>
			<div className={styles.about_panel}>
				<div className={styles.about_panel_content}>
					<h2>{aboutData.about.title}</h2>
					<p>{aboutData.about.description}</p>
				</div>
			</div>
			<div className={styles.about_panel}>
				<div className={styles.about_panel_content}>
					<h2>Contact</h2>
					<Link href={linkUrl} target="_blank">
						<p>
							{linkTitle}: {email}
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
}
