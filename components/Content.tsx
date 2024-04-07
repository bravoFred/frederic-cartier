import Image from 'next/image';
import HeroImg from '@/public/hero.webp';
import styles from './Content.module.scss';
import InputContextProvider from '@/store/inputContext';
import { useContext } from 'react';
export default function Content() {
	const { about, films } = useContext(InputContextProvider);
	return (
		<div
			className={styles.content}
			style={{
				filter: about || films ? 'blur(1rem)' : 'none',
				// height: about || films ? 'calc(100vh - 8rem)' : 'calc(100vh - 8rem)',
			}}
		>
			<Image src={HeroImg} alt="Hero" className={styles.content_hero} />
		</div>
	);
}
