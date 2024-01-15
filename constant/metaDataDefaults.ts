import type { Metadata } from 'next';

export const MetaDataDefaults: Metadata = {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_ROOT}`),
    description: 'Koshka Website & eCommerce platform',
    generator: 'Next.js',
    category: 'e-commerce',
    applicationName: 'Koshka e-commerce website',
    referrer: 'origin-when-cross-origin',
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_ROOT,
        languages: {
            'en': `${process.env.NEXT_PUBLIC_ROOT}en`,
            'fr': `${process.env.NEXT_PUBLIC_ROOT}fr`,
            'es': `${process.env.NEXT_PUBLIC_ROOT}es`,
        },
        media: {
            'only screen and (max-width: 600px)': `${process.env.NEXT_PUBLIC_ROOT}amp`,
        },
    },
    keywords: [
        'Koshka',
        'Pet Products',
        'cats',
        'felines'
    ],
    authors: [
        { name: 'Koshka Pet Products dev', url: `${process.env.NEXT_PUBLIC_ROOT}aboutus` },
        { name: 'dev', url: `${process.env.NEXT_PUBLIC_ROOT}aboutus` }
    ],
    twitter: {
        card: 'summary_large_image',
        title: 'Koshka Pet Products',
        description: 'E-commerce site for Koshka Pet Products',
        creator: 'Koshka Pet Products',
        images: ['https://nextjs.org/og.png'],
    },
    openGraph: {
        title: 'Koshka Pet Products',
        description: 'E-commerce site for Koshka Pet Products',
        url: `${process.env.NEXT_PUBLIC_ROOT}`,
        siteName: 'Koshka Pet Products',
        images: [
            {
                url: 'https://nextjs.org/og.png'
            },
            {
                url: 'https://nextjs.org/og-alt.png'
            },
        ],
        locale: 'en',
        type: 'website',
    },
    creator: 'KOSHKA Pet Product',
    publisher: 'KOSHKA Pet Product',
    title: {
        template: '%s | Koshka Pet Product',
        default: 'Koshka Pet Product'
    },
}