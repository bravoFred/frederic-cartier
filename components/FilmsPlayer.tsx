import styles from './FilmsPlayer.module.scss';
// @ts-nocheck.
import React, { useState } from 'react';
import MuxPlayer from '@mux/mux-player-react';
import InputContext from '@/store/inputContext';
import { useContext, useEffect } from 'react';
type props = {
	show: boolean;
	poster?: string;
	playbackID: string;
	title: string;
	description: string;
	team: { name: string; role: string }[];
};
export default function FilmsPlayer({ show, title, description, team, playbackID, poster }: props) {
	const { showFilm1, showFilm2 } = useContext(InputContext);
	const [showPlayer, setShowPlayer] = useState(false);
	useEffect(() => {
		if (showFilm1 || showFilm2) {
			setShowPlayer(true);
		} else {
			setTimeout(() => {
				setShowPlayer(false);
				setTimeout(() => {
					setShowPlayer(true);
				}, 100);
			}, 1000);
		}
	}, [showFilm1, showFilm2]);
	// const img = new Image();
	// img.src = poster;
	// const posterWidth = img.width;
	// const posterHeight = img.height;
	// const posterRatio = posterWidth / posterHeight;
	return (
		<div className={show ? styles.video : styles.video_hidden}>
			<div className={styles.player_wrapper}>
				{showPlayer && (
					<MuxPlayer
						className={styles.video_player}
						playbackId={playbackID}
						thumbnailTime={24}
						poster={poster}
						accent-color="#1a1a1a"
					/>
				)}
				<div className={styles.video_details}>
					<div className={styles.video_details_panel}>
						<p className={styles.films_list_item_title}>{title}</p>
						<p className={styles.films_list_item_description}>{description}</p>
					</div>
					<div className={styles.video_details_panel}>
						<p className={styles.films_list_item_title}>TEAM</p>
						{team?.map((member) => {
							return (
								<div className={styles.team_member} key={member.name}>
									<p className={styles.films_list_item_team_name}>
										{member.name}
									</p>
									<p className={styles.films_list_item_team_role}>
										{`- ${member.role}`}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
