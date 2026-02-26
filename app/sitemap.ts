import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://rizz-verse.vercel.app';

    // Base routes
    const routes = [
        '',
        '/ai',
        '/lab',
        '/categories',
        '/pricing',
        '/testimonials',
        '/about',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Potential dynamic categories could be fetched here and added
    // For now, we stick to the main structural pages

    return [...routes];
}
