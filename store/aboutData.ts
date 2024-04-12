// import youtubeIcon from 'public/icons/social/youtube4.svg';
const email = 'fc@frederic-cartier.com';
const emailURL = `mailto:${email}`;
const data = {
	about: {
		id: 'about',
		title: 'About',
		description: `Frederic Cartier (he/him) is a director currently based in Atlanta, GA. His films aim to delve into the complexities of the human psyche and explore the intersections of culture and society.`,
	},
	contact: {
		id: 'contact',
		title: 'Contact',
		links: [
			{
				title: 'Email',
				urlLabel: email,
				url: emailURL,
			},
			// {
			// 	title: 'Instagram',
			// 	urlLabel: '@bravoFred_',
			// 	url: 'https://www.instagram.com/bravoFred_',
			// },
		],
	},
};
export default data;
