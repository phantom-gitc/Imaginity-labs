export default function manifest() {
  return {
    name: 'Imaginity Labs',
    short_name: 'iLabs',
    description: 'Imaginity Labs (iLabs) | Software, Agentic AI, and Automation Studio.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0E',
    theme_color: '#3B5BFF',
    icons: [
      {
        src: '/img/imaginity-icon-trimmed.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/img/imaginity-icon-trimmed.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
