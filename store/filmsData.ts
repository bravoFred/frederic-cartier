// import poster from '@/public/ig.png';
import poster from '@/public/hero.webp';
const poster1 =
	'https://raw.githubusercontent.com/thomasmatlock/public-fred/main/images/posterFilm1.webp';
const poster2 =
	'https://raw.githubusercontent.com/thomasmatlock/public-fred/main/images/posterFilm2.webp';
// import poster2 from '@/public/poster2.webp';
// import poster3 from '@/public/poster3.webp';
function convertTitleToId(title: string) {
	return title.toLowerCase().replace(' ', '');
}
const data = [
	{
		title: 'Zoe: Hard To The Bone',
		id: 'film1',
		description: `Coming soon.`,
		url: 'https://www.youtube.com/@tomtacular',
		// playbackId: 'Mi5p7ncpuEh6BT6epoEd026jOxyOKmebgategcY54nb4',
		playbackId: '7xrhPwu5KDJWVUm1Jfnu977l98w002mwNzXGJ01vwDNdA',
		poster: poster1,
		team: [
			{
				name: 'Frederic Cartier',
				role: 'Director',
			},
		],
	},
	{
		title: 'Untitled',
		id: 'film2',
		description: `Coming soon.`,
		url: 'https://www.youtube.com/@tomtacular',
		playbackId: '7xrhPwu5KDJWVUm1Jfnu977l98w002mwNzXGJ01vwDNdA',
		poster: poster2,
		team: [
			{
				name: 'Frederic Cartier',
				role: 'Director',
			},
		],
	},
];
export default data;
