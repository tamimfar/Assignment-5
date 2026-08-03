import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //  experimental:{
  //   turbopackFileSystemCacheForDev:true
  // }
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a0.muscache.com",
      },
      {
        protocol:"https",
        hostname:"i.pinimg.com"
      }
    ],
  },
};

export default nextConfig;
