/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: [
    // {
    //   key: 'Cross-Origin-Opener-Policy',
    //   value: 'same-origin',
    // },
    {
      key: 'Cross-Origin-Embedder-Policy',
      value: 'require-corp',
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "nextjs-auth-97413.firebaseapp.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
