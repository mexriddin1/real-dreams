import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {protocol: 'https', hostname: 'api.realdreamsuz', port: '8080', pathname: '/**'},
        ],
        unoptimized: true,
    },
};

export default nextConfig;
