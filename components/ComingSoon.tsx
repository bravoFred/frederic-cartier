import styles from './ComingSoon.module.scss';
export default function ComingSoon() {
	const release = new Date('2024-01-01');
	return (
		<div className={styles.container}>
			<p>Coming</p>
			<h1>May 2024</h1>
		</div>
	);
}
