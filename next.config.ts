import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "console.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "asset.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ]
  }
};

export default nextConfig;
