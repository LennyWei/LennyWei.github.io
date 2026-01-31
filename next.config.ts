import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/kennyis.me", // Uncomment this line if deploying to a subdirectory
  output: "export",
  reactStrictMode: true,
};

module.exports = nextConfig;
