// @ts-nocheck
import Header from '@/components/Header';
import React from 'react';
// import Video from 'next-video';
// import ReactPlayer from 'react-player';
import ReactPlayer from 'react-player/lazy';
import styles from './MainVideo.module.scss';
import dynamic from 'next/dynamic';
import MuxPlayer from '@mux/mux-player-react';
// import MuxPlayer from '@mux/mux-player-react/dist/lazy.mjs';

export default function MainVideo() {
	// const ytURL = 'https://www.youtube.com/watch?v=XPm7zy-X_fI';
	const ytURL = 'https://www.youtube.com/watch?v=qEVUtrk8_B4';
	const vimeoURL = 'https://vimeo.com/channels/bestofstaffpicks/915744407';
	const customURL =
		'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4';
	// const muxURL = 'https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7';
	// const muxURL = 'https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7k';
	// const muxURL = 'https://stream.mux.com/kUjFo8Hy8ltPPFich9n5eob6wI007e028ILU8ie9502RB8.m3u8';
	const muxURL = 'https://stream.mux.com/PlOtKFblHHPcnEo014WY8K35eBsp3cFGK44daYCepOPQ.m3u8';
	const DynamicPlayer = dynamic(() => import('react-player/lazy'), {
		loading: () => <p>loading...</p>,
	});
	const DynamicMuxPlayer = dynamic(() => import('@mux/mux-player-react'), {
		loading: () => <p>loading...</p>,
	});
	// console.log(MuxPlayer);

	return (
		<div className={styles.main}>
			<Header />
			{/* <MuxPlayer
				playbackId="EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs"
				// playbackId="https://stream.mux.com/kUjFo8Hy8ltPPFich9n5eob6wI007e028ILU8ie9502RB8.m3u8"
				accent-color="#000"
				metadata={{
					video_id: 'video-id-54321',
					video_title: 'Test video title',
					viewer_user_id: 'user-id-007',
				}}
			/> */}
			{/* <MuxPlayer
				streamType="on-demand"
				playbackId="https://stream.mux.com/PlOtKFblHHPcnEo014WY8K35eBsp3cFGK44daYCepOPQ.m3u8"
				// playbackId="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
				metadataVideoTitle="Placeholder (optional)"
				metadataViewerUserId="Placeholder (optional)"
				primaryColor="#00"
				secondaryColor="#000000"
				accent-color="#ffffff"
				thumbnailTime={80}
				poster="https://image.mux.com/PlOtKFblHHPcnEo014WY8K35eBsp3cFGK44daYCepOPQ/thumbnail.png?width=1280&height=720&time=80"
			/> */}
			{/* use playback id not asset id */}
			<MuxPlayer
				className={styles.mux_player}
				playbackId="Mi5p7ncpuEh6BT6epoEd026jOxyOKmebgategcY54nb4"
				thumbnailTime={80}
				poster="https://image.mux.com/PlOtKFblHHPcnEo014WY8K35eBsp3cFGK44daYCepOPQ/thumbnail.webp?width=3840&height=1634&time=80"
				accent-color="#1a1a1a"
			/>
			{/* <p className={styles.title}>Mux</p>
			<p className={styles.subtitle}>
				Recommended, seamless, customizable, lots of playback controls, fits nicely with
				your theme
			</p> */}
			{/* <div className={styles.player_wrapper}>
				<DynamicPlayer controls url={muxURL} />
			</div> */}
			{/* <p className={styles.title}>Vimeo</p>
			<p className={styles.subtitle}>For Vimeo functionality down the road if desired</p>
			<div className={styles.player_wrapper}>
				<DynamicPlayer controls url={vimeoURL} />
			</div> */}
			{/* <p className={styles.title}>Youtube</p>
			<p className={styles.subtitle}>For Youtube functionality down the road if desired</p>
			<div className={styles.player_wrapper}>
				<DynamicPlayer controls url={ytURL} />
			</div> */}
			{/* <div className={styles.footer}></div> */}
		</div>
	);
}
