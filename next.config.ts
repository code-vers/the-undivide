import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: 'export',
  async rewrites() {
    return [
      {
        source: '/projects/ai-resilience/:path*',
        destination: '/projects/ai-resilience/index.html',
      },
    ]
  },
}

export default nextConfig
