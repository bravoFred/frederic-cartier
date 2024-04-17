import styles from './About.module.scss';
import DataContext from '@/store/dataContext';
import InputContextProvider from '@/store/inputContext';
import Link from 'next/link';
import { useContext } from 'react';
export default function About() {
	const { aboutData } = useContext(DataContext);
	const { contact } = aboutData;
	const { about } = useContext(InputContextProvider);

	const ContactLinks = () => {
		return (
			<ul>
				{contact.links.map((link) => (
					<li
						key={link.title}
						style={{
							cursor: 'pointer',
							listStyleType: 'none',
							display: 'flex',
							flexDirection: 'row',
							width: '100%',
						}}
					>
						<Link href={link.url} target="_blank">
							<p>
								{link.title}: {link.urlLabel}
							</p>
						</Link>
					</li>
				))}
			</ul>
		);
	};
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
					<h2>{contact.title}</h2>
					<ContactLinks />
				</div>
			</div>
		</div>
	);
}
