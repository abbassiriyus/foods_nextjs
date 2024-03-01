/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

export default  {
  webpack: (config) => {
    config.resolve.alias['ymaps'] = 'ymaps';
    return config;
  }
};
