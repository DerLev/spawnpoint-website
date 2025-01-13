import type { NextConfig } from "next";

const nextAuthUrlEnv = () => {
  if(process.env.NODE_ENV !== "production") return "http://localhost:3000"
  return "https://vmm.spawnpoint.win"
}

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  env: {
    NEXTAUTH_URL: nextAuthUrlEnv()
  }
};

export default nextConfig;
