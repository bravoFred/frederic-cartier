import { withNextVideo } from 'next-video/process';
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'image.mux.com',
				// port: '',
				// pathname: '/account123/**',
			},
		],
	},
};

export default withNextVideo(nextConfig);
