// import poster from '@/public/ig.png';
import poster from '@/public/hero.webp';
import poster0 from '@/public/poster1.jpeg';
import poster2 from '@/public/poster2.webp';
import poster3 from '@/public/poster3.webp';
function convertTitleToId(title: string) {
	return title.toLowerCase().replace(' ', '');
}
const data = [
	{
		title: 'Zoe: Hard To The Bone',
		id: 'film1',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
		url: 'https://www.youtube.com/@tomtacular',
		playbackId: 'Mi5p7ncpuEh6BT6epoEd026jOxyOKmebgategcY54nb4',
		poster: poster0,
		team: [
			{
				name: 'Frederic Cartier',
				role: 'Director',
			},
			{
				name: 'Hans Zimmer',
				role: 'Composer',
			},
			{
				name: 'Steven Spielberg',
				role: 'Producer',
			},
		],
	},
	{
		title: 'Film 2',
		id: 'film2',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
		url: 'https://www.youtube.com/@tomtacular',
		muxId: '123456',
		playbackId: 'Mi5p7ncpuEh6BT6epoEd026jOxyOKmebgategcY54nb4',
		poster: poster2,
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
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
		url: 'https://www.youtube.com/@tomtacular',
		playbackId: 'Mi5p7ncpuEh6BT6epoEd026jOxyOKmebgategcY54nb4',
		poster: poster3,
		team: [
			{
				name: 'Frederic Cartier',
				role: 'Director',
			},
		],
	},
];
export default data;
