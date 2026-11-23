export default function manifest() {
  return {
    name: 'SureNext',
    short_name: 'SureNext',
    description: 'SureNext — a small, senior software and product studio.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0E',
    theme_color: '#3B5BFF',
    icons: [
      {
        src: '/img/surenext-icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/img/surenext-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
