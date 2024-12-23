/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  trailingSlash: true, // Optional: Adds trailing slashes to URLs
  images: {
    domains: ["localhost"], // Add any local development image domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Allow images from Sanity's CDN
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
