import styles from './About.module.scss';
import DataContext from '@/store/dataContext';
import Link from 'next/link';
import { useContext } from 'react';
export default function About() {
	const { aboutMeData } = useContext(DataContext);
	const { about, contact } = aboutMeData;

	return (
		<div className={styles.about}>
			<div className={styles.about_panel}>
				<div className={styles.about_panel_content}>
					<h2>{about.title}</h2>
					<p>{about.description}</p>
				</div>
			</div>
			<div className={styles.about_panel}>
				<div className={styles.about_panel_content}>
					<h2>{contact.title}</h2>
				</div>
			</div>
		</div>
	);
}
