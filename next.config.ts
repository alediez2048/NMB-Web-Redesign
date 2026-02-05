"use strict";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure the base path matches your GitHub repository name if it's not a custom domain
  // basePath: '/NMB-Web-Redesign', 
};

export default nextConfig;
