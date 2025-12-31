import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gebetsanliegen',
    short_name: 'Gebetsanliegen',
    description: 'Eine Web-App zum Teilen und Verwalten von Gebetsanliegen',
    start_url: '/',
    display: 'standalone',
    background_color: '#f9fafb',
    theme_color: '#14B8A6',
    icons: [
      {
        src: '/icon-180.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}

