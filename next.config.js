module.exports = {
  async rewrites() {
    return [
      {
        source: '/api1/:path*',
        destination: 'http://localhost:9300/api/:path*' // Proxy to Backend
      }
    ];
  }
};
