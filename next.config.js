module.exports = {
  webpack5: true,
  images: {
    domains: ['gravatar.com']
  },
  // TypeScript 配置
  typescript: {
    // 是否启用 type-checking，可以忽略不必要的 type-checking，加快编译速度
    ignoreBuildErrors: true
  },
  eslint: {
    dirs: ['components', 'layouts', 'lib', 'pages']
  },
  async headers() {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'interest-cohort=()'
          }
        ]
      }
    ]
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      })
    }
    return config
  }
}
