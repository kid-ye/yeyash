/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lastfm.freetls.fastly.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/(gh|github|git)/:slug*",
        destination: "https://github.com/kid-ye",
        permanent: true,
      },
      {
        source: "/(twitter|x)",
        destination: "https://twitter.com/KidyeYash",
        permanent: true,
      },
      {
        source: "/(linkedin|ln)",
        destination: "https://www.linkedin.com/in/ye-yash/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
