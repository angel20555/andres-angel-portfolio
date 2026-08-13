import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: "export",
  basePath: "/andres-angel-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
