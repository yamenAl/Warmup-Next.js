/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    // ensure Turbopack resolves aliases from the project root
    root: process.cwd(),
  },
};

export default nextConfig;
