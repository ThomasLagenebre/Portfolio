// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

module.exports = {
  output: "export",
  images: {
    domains: [
      "images.unsplash.com",
      "boostacarriere.com",
      "firebasestorage.googleapis.com",
    ],
  },
};
