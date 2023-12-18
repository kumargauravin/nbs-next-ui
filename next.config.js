/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !! To Remove later
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
      distDir: 'dist',
      compress: false,
      eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
}

module.exports = nextConfig;
