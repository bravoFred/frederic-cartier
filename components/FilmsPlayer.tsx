import styles from './FilmsPlayer.module.scss';
// @ts-nocheck.
import React from 'react';
import MuxPlayer from '@mux/mux-player-react';
type props = {
	show: boolean;
	title?: string;
	description?: string;
	team?: { name: string; role: string }[];
};
export default function MainVideo({ show, title, description, team }: props) {
	const poster1 =
		'https://image.mux.com/7xrhPwu5KDJWVUm1Jfnu977l98w002mwNzXGJ01vwDNdA/thumbnail.png?width=3840&height=1634&time=5';
	return (
		<div className={show ? styles.video : styles.video_hidden}>
			<div className={styles.player_wrapper}>
				<MuxPlayer
					className={styles.video_player}
					// playbackId="Mi5p7ncpuEh6BT6epoEd026jOxyOKmebgategcY54nb4"
					playbackId="7xrhPwu5KDJWVUm1Jfnu977l98w002mwNzXGJ01vwDNdA"
					thumbnailTime={80}
					// poster="https://image.mux.com/PlOtKFblHHPcnEo014WY8K35eBsp3cFGK44daYCepOPQ/thumbnail.webp?width=3840&height=1634&time=80"
					poster={poster1}
					accent-color="#1a1a1a"
				/>
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
