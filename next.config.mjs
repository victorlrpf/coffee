/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname: "utfs.io"}],
        domains: ['raw.githubusercontent.com'],
    },
};

export default nextConfig;
