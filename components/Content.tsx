import Image from 'next/image';
// import HeroImg from '@/public/hero.webp';
import HeroImg from '@/public/hero2.webp';
import styles from './Content.module.scss';
import InputContextProvider from '@/store/inputContext';
import FilmsPlayer from './FilmsPlayer';
import { useContext } from 'react';
import MuxPlayer from '@mux/mux-player-react';

export default function Content() {
	const { about, films } = useContext(InputContextProvider);
	return (
		<div className={styles.content}>
			<Image
				src={HeroImg}
				alt="Hero"
				className={styles.content_hero}
				style={{
					filter: about || films ? 'blur(1rem)' : 'none',
				}}
			/>
			{/* <MuxPlayer
				className={styles.video_player}
				playbackId="Mi5p7ncpuEh6BT6epoEd026jOxyOKmebgategcY54nb4"
				thumbnailTime={80}
				poster="https://image.mux.com/PlOtKFblHHPcnEo014WY8K35eBsp3cFGK44daYCepOPQ/thumbnail.webp?width=3840&height=1634&time=80"
				accent-color="#1a1a1a"
				style={{
					filter: about || films ? 'blur(1rem)' : 'none',

					height: '100%',
					width: 'calc(100% - 8rem)',
					transform: 'translateX(4rem)',
				}}
			/> */}
		</div>
	);
}
