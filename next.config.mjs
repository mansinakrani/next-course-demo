/** @type {import('next').NextConfig} */

// Resolved this Error: Invalid src prop (https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNofGVufDB8fDB8fHww) on `next/image`, hostname "images.unsplash.com" is not configured under images in your `next.config.js`
const nextConfig = {
  images: {
    domains: ['images.unsplash.com']
  }
};

export default nextConfig;
