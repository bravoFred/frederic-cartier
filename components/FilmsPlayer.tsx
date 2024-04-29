import styles from './FilmsPlayer.module.scss';
// @ts-nocheck.
import React from 'react';
import MuxPlayer from '@mux/mux-player-react';
// import poster1 from '@/public/posterFilm1.png';
// const poster2 = 'https://pub-b939a725b21a4ff0aeb386a49caa581c.r2.dev/images%2Flab%2Fdesktop.png';
type props = {
	show: boolean;
	title?: string;
	description?: string;
	team?: { name: string; role: string }[];
};
export default function FilmsPlayer({ show, title, description, team }: props) {
	const poster1 =
		'https://image.mux.com/7xrhPwu5KDJWVUm1Jfnu977l98w002mwNzXGJ01vwDNdA/thumbnail.png?width=3840&height=2160&time=5';
	const playbackID1 = `7xrhPwu5KDJWVUm1Jfnu977l98w002mwNzXGJ01vwDNdA`;
	return (
		<div className={show ? styles.video : styles.video_hidden}>
			<div className={styles.player_wrapper}>
				<MuxPlayer
					className={styles.video_player}
					playbackId={playbackID1}
					thumbnailTime={80}
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
