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
			{
				protocol: 'https',
				hostname: 'pub-b939a725b21a4ff0aeb386a49caa581c.r2.dev',
				// port: '*',
				// pathname: '/**',
			},
		],
	},
};

export default withNextVideo(nextConfig);
