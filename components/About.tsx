import styles from './About.module.scss';
import DataContext from '@/store/dataContext';
import InputContextProvider from '@/store/inputContext';
import Link from 'next/link';
import { useContext } from 'react';
export default function About() {
	const { aboutMeData } = useContext(DataContext);
	const { contact } = aboutMeData;
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
							{/* <p>{link.title}</p> */}
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
					<h2>{aboutMeData.about.title}</h2>
					<p>{aboutMeData.about.description}</p>
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
