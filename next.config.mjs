/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bytegrad.com'
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com'
            },
        ]
    }
};

export default nextConfig;
