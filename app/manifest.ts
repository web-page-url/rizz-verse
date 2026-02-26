import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'RizzVerse | Personal AI Rizz Guru',
        short_name: 'RizzVerse',
        description: 'AI-powered attraction engineering and pickup line generator.',
        start_url: '/',
        display: 'standalone',
        background_color: '#05010a',
        theme_color: '#FF69B4',
        icons: [
            {
                src: '/favicons/favicon-96x96.png',
                sizes: '96x96',
                type: 'image/png',
            },
            {
                src: '/favicons/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/favicons/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/favicons/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
    };
}
