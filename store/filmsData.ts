// import poster from '@/public/ig.png';
import poster from '@/public/hero.webp';
import poster2 from '@/public/poster1440.webp';
import poster3 from '@/public/ig.png';

function convertTitleToId(title: string) {
	return title.toLowerCase().replace(' ', '');
}
const data = [
	{
		title: 'Zoe: Hard To The Bone',
		id: 'film1',
		description: 'Description of the film',
		url: 'https://www.youtube.com/@tomtacular',
		playbackId: 'Mi5p7ncpuEh6BT6epoEd026jOxyOKmebgategcY54nb4',
		poster: poster,
		team: [
			{
				name: 'Frederic Cartier',
				role: 'Director',
			},
		],
	},
	{
		title: 'Film 2',
		id: 'film2',
		description: 'Description of the film',
		url: 'https://www.youtube.com/@tomtacular',
		muxId: '123456',
		playbackId: 'Mi5p7ncpuEh6BT6epoEd026jOxyOKmebgategcY54nb4',
		poster: poster,
		team: [
			{
				name: 'Frederic Cartier',
				role: 'Director',
			},
		],
	},
	{
		title: 'Film 3',
		id: 'film3',
		description: 'Description of the film',
		url: 'https://www.youtube.com/@tomtacular',
		playbackId: 'Mi5p7ncpuEh6BT6epoEd026jOxyOKmebgategcY54nb4',
		poster: poster,
		team: [
			{
				name: 'Frederic Cartier',
				role: 'Director',
			},
		],
	},
	{
		title: 'Film 4',
		id: 'film4',
		description: 'Description of the film',
		url: 'https://www.youtube.com/@tomtacular',
		playbackId: 'Mi5p7ncpuEh6BT6epoEd026jOxyOKmebgategcY54nb4',
		poster: poster,
		team: [
			{
				name: 'Frederic Cartier',
				role: 'Director',
			},
		],
	},
	{
		title: 'Film 5',
		id: 'film5',
		description: 'Description of the film',
		url: 'https://www.youtube.com/@tomtacular',
		playbackId: 'Mi5p7ncpuEh6BT6epoEd026jOxyOKmebgategcY54nb4',
		poster: poster,
		team: [
			{
				name: 'Frederic Cartier',
				role: 'Director',
			},
		],
	},
];
export default data;
