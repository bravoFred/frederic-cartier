import Header from '@/components/Header';
import React from 'react';
// import ReactPlayer from 'react-player';
import ReactPlayer from 'react-player/lazy';
import styles from './MainVideo.module.scss';
import dynamic from 'next/dynamic';
export default function MainVideo() {
	// const ytURL = 'https://www.youtube.com/watch?v=XPm7zy-X_fI';
	const ytURL = 'https://www.youtube.com/watch?v=qEVUtrk8_B4';
	const vimeoURL = 'https://vimeo.com/channels/bestofstaffpicks/915744407';
	const customURL =
		'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4';
	// const muxURL = 'https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7';
	const muxURL = 'https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7k';
	// const muxURL = 'https://stream.mux.com/Sc89iWAyNkhJ3P1rQ02nrEdCFTnfT01CZ2KmaEcxXfB008';
	const DynamicPlayer = dynamic(() => import('react-player/lazy'), {
		loading: () => <p>loading...</p>,
	});
	return (
		<div className={styles.main}>
			<Header />
			<p className={styles.title}>Mux</p>
			<p className={styles.subtitle}>
				Recommended, seamless, customizable, lots of playback controls, will fit nicely with
				your theme
			</p>
			<DynamicPlayer controls url={muxURL} />
			<p className={styles.title}>Vimeo</p>
			<p className={styles.subtitle}>For Vimeo functionality down the road if desired</p>
			<DynamicPlayer controls url={vimeoURL} />
			<p className={styles.title}>Youtube</p>
			<p className={styles.subtitle}>For Youtube functionality down the road if desired</p>
			<DynamicPlayer controls url={ytURL} />
			<div className={styles.footer}></div>
		</div>
	);
}
