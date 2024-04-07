import Image from 'next/image';
import HeroImg from '@/public/hero.webp';
import styles from './Content.module.scss';
export default function Content() {
	return (
		<div className={styles.content}>
			<Image src={HeroImg} alt="Hero" className={styles.content_hero} />
		</div>
	);
}
