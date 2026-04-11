'use client'

import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import { useMedia } from '@/hooks/use-media'

const SHADCN_AVATAR = 'https://avatars.githubusercontent.com/u/124599?v=4'
const MESCHAC_AVATAR = 'https://avatars.githubusercontent.com/u/47919550?v=4'
const THEO_AVATAR = 'https://avatars.githubusercontent.com/u/68236786?v=4'
const BERNARD_AVATAR = 'https://avatars.githubusercontent.com/u/31113941?v=4'
const GLODIE_AVATAR = 'https://avatars.githubusercontent.com/u/99137927?v=4'

type Category = 'company' | 'marketing' | 'newsroom' | 'partners' | 'engineering' | 'press'

type Filter = 'all' | Category

interface Article {
    title: string
    description: string
    category: Category
    image: string
    date: string
    href: string
    authors: Author[]
}

interface Author {
    name: string
    image: string
}

export default function Blog() {
    const [activeFilter, setActiveFilter] = useState<Filter>('all')
    const filters: Filter[] = ['all', 'company', 'marketing', 'newsroom', 'partners', 'engineering', 'press']

    const rawArticles: Article[] = useMemo(
        () => [
            {
                title: 'Embracing Remote Work Culture',
                description: 'Uncover the benefits and challenges of adopting a remote work culture in modern businesses.',
                category: 'company',
                image: 'https://res.cloudinary.com/dohqjvu9k/image/upload/v1755171590/time_djv8te.webp',
                date: 'Aug 18, 2025',
                href: '#',
                authors: [
                    {
                        name: 'Meschac Irung',
                        image: MESCHAC_AVATAR,
                    },
                ],
            },
            {
                title: 'The Transformative Future of AI in Digital Marketing',
                description: 'Explore the potential of AI to revolutionize marketing strategies and customer engagement.',
                category: 'marketing',
                image: 'https://res.cloudinary.com/dohqjvu9k/image/upload/v1755525575/article-2_rey9it.png',
                date: 'Sep 10, 2025',
                href: '#',
                authors: [
                    {
                        name: 'Theo Balick',
                        image: THEO_AVATAR,
                    },
                    {
                        name: 'Méschac Irung',
                        image: MESCHAC_AVATAR,
                    },
                ],
            },
            {
                title: 'Cutting-Edge Innovations in Data Analytics',
                description: 'Learn about the latest trends in data analytics and how they can drive business growth.',
                category: 'company',
                image: 'https://res.cloudinary.com/dohqjvu9k/image/upload/v1755171585/dots-pattern_yfnqcy.jpg',
                date: 'Oct 5, 2025',
                href: '#',
                authors: [
                    {
                        name: 'Shadcn',
                        image: SHADCN_AVATAR,
                    },
                    {
                        name: 'Meschac Irung',
                        image: MESCHAC_AVATAR,
                    },
                ],
            },
            {
                title: 'Advancements in Cybersecurity',
                description: 'Discover new technologies protecting businesses from digital threats.',
                category: 'company',
                image: 'https://res.cloudinary.com/dohqjvu9k/image/upload/v1755525575/article-2_rey9it.png',
                date: 'Oct 15, 2025',
                href: '#',
                authors: [
                    {
                        name: 'Meschac Irung',
                        image: MESCHAC_AVATAR,
                    },
                ],
            },
            {
                title: 'The Role of Blockchain in Modern Finance',
                description: 'Understand how blockchain is reshaping the financial landscape.',
                category: 'marketing',
                image: 'https://res.cloudinary.com/dohqjvu9k/image/upload/v1755171584/dots-2_kmiukp.webp',
                date: 'Nov 1, 2025',
                href: '#',
                authors: [
                    {
                        name: 'Theo Balick',
                        image: THEO_AVATAR,
                    },
                ],
            },
            {
                title: 'Sustainability in Tech: A Growing Focus',
                description: 'Explore efforts towards sustainable practices in technology.',
                category: 'marketing',
                image: 'https://res.cloudinary.com/dohqjvu9k/image/upload/v1755171585/dots-pattern_yfnqcy.jpg',
                date: 'Nov 10, 2025',
                href: '#',
                authors: [
                    {
                        name: 'Shadcn',
                        image: SHADCN_AVATAR,
                    },
                ],
            },
            {
                title: 'Leveraging Big Data for Business Success',
                description: 'See how big data analytics can unlock new opportunities.',
                category: 'newsroom',
                image: 'https://res.cloudinary.com/dohqjvu9k/image/upload/v1755171590/time_djv8te.webp',
                date: 'Dec 5, 2025',
                href: '#',
                authors: [
                    {
                        name: 'Bernard Ngandu',
                        image: BERNARD_AVATAR,
                    },
                ],
            },
            {
                title: 'Leveraging Big Data for Business Success',
                description: 'See how big data analytics can unlock new opportunities.',
                category: 'newsroom',
                image: 'https://res.cloudinary.com/dohqjvu9k/image/upload/v1755525573/article-3_tettwd.png',
                date: 'Dec 5, 2025',
                href: '#',
                authors: [
                    {
                        name: 'Glodie Lukose',
                        image: GLODIE_AVATAR,
                    },
                ],
            },
            {
                title: 'Leveraging Big Data for Business Success',
                description: 'See how big data analytics can unlock new opportunities insights and more from.',
                category: 'newsroom',
                image: 'https://res.cloudinary.com/dohqjvu9k/image/upload/v1755525575/article-2_rey9it.png',
                date: 'Dec 5, 2025',
                href: '#',
                authors: [
                    {
                        name: 'Bernard Ngandu',
                        image: BERNARD_AVATAR,
                    },
                    {
                        name: 'Shadcn',
                        image: SHADCN_AVATAR,
                    },
                ],
            },
            {
                title: 'Embracing Remote Work Culture',
                description: 'Uncover the benefits and challenges of adopting a remote work culture in modern businesses.',
                category: 'company',
                image: 'https://res.cloudinary.com/dohqjvu9k/image/upload/v1755171590/time_djv8te.webp',
                date: 'Aug 18, 2025',
                href: '#',
                authors: [
                    {
                        name: 'Meschac Irung',
                        image: MESCHAC_AVATAR,
                    },
                ],
            },
            {
                title: 'The Transformative Future of AI in Digital Marketing',
                description: 'Explore the potential of AI to revolutionize marketing strategies and customer engagement.',
                category: 'marketing',
                image: 'https://res.cloudinary.com/dohqjvu9k/image/upload/v1755525575/article-2_rey9it.png',
                date: 'Sep 10, 2025',
                href: '#',
                authors: [
                    {
                        name: 'Theo Balick',
                        image: THEO_AVATAR,
                    },
                    {
                        name: 'Méschac Irung',
                        image: MESCHAC_AVATAR,
                    },
                ],
            },
            {
                title: 'Cutting-Edge Innovations in Data Analytics',
                description: 'Learn about the latest trends in data analytics and how they can drive business growth.',
                category: 'company',
                image: 'https://res.cloudinary.com/dohqjvu9k/image/upload/v1755171585/dots-pattern_yfnqcy.jpg',
                date: 'Oct 5, 2025',
                href: '#',
                authors: [
                    {
                        name: 'Shadcn',
                        image: SHADCN_AVATAR,
                    },
                    {
                        name: 'Meschac Irung',
                        image: MESCHAC_AVATAR,
                    },
                ],
            },
            {
                title: 'Advancements in Cybersecurity',
                description: 'Discover new technologies protecting businesses from digital threats.',
                category: 'company',
                image: 'https://res.cloudinary.com/dohqjvu9k/image/upload/v1755525575/article-2_rey9it.png',
                date: 'Oct 15, 2025',
                href: '#',
                authors: [
                    {
                        name: 'Meschac Irung',
                        image: MESCHAC_AVATAR,
                    },
                ],
            },
            {
                title: 'The Role of Blockchain in Modern Finance',
                description: 'Understand how blockchain is reshaping the financial landscape.',
                category: 'marketing',
                image: 'https://res.cloudinary.com/dohqjvu9k/image/upload/v1755171584/dots-2_kmiukp.webp',
                date: 'Nov 1, 2025',
                href: '#',
                authors: [
                    {
                        name: 'Theo Balick',
                        image: THEO_AVATAR,
                    },
                ],
            },
            {
                title: 'Sustainability in Tech: A Growing Focus',
                description: 'Explore efforts towards sustainable practices in technology.',
                category: 'marketing',
                image: 'https://res.cloudinary.com/dohqjvu9k/image/upload/v1755171585/dots-pattern_yfnqcy.jpg',
                date: 'Nov 10, 2025',
                href: '#',
                authors: [
                    {
                        name: 'Shadcn',
                        image: SHADCN_AVATAR,
                    },
                ],
            },
            {
                title: 'Leveraging Big Data for Business Success',
                description: 'See how big data analytics can unlock new opportunities.',
                category: 'newsroom',
                image: 'https://res.cloudinary.com/dohqjvu9k/image/upload/v1755171590/time_djv8te.webp',
                date: 'Dec 5, 2025',
                href: '#',
                authors: [
                    {
                        name: 'Bernard Ngandu',
                        image: BERNARD_AVATAR,
                    },
                ],
            },
            {
                title: 'Leveraging Big Data for Business Success',
                description: 'See how big data analytics can unlock new opportunities.',
                category: 'newsroom',
                image: 'https://res.cloudinary.com/dohqjvu9k/image/upload/v1755525573/article-3_tettwd.png',
                date: 'Dec 5, 2025',
                href: '#',
                authors: [
                    {
                        name: 'Glodie Lukose',
                        image: GLODIE_AVATAR,
                    },
                ],
            },
            {
                title: 'Leveraging Big Data for Business Success',
                description: 'See how big data analytics can unlock new opportunities insights and more from.',
                category: 'newsroom',
                image: 'https://res.cloudinary.com/dohqjvu9k/image/upload/v1755525575/article-2_rey9it.png',
                date: 'Dec 5, 2025',
                href: '#',
                authors: [
                    {
                        name: 'Bernard Ngandu',
                        image: BERNARD_AVATAR,
                    },
                    {
                        name: 'Shadcn',
                        image: SHADCN_AVATAR,
                    },
                ],
            },
        ],
        []
    )

    const categoryCounts = useMemo(() => {
        const counts: Record<Filter, number> = {
            all: 0,
            company: 0,
            marketing: 0,
            newsroom: 0,
            partners: 0,
            engineering: 0,
            press: 0,
        }
        for (const a of rawArticles) {
            counts.all++
            counts[a.category]++
        }
        return counts
    }, [rawArticles])

    const articles = useMemo(() => (activeFilter === 'all' ? rawArticles : rawArticles.filter((article) => article.category === activeFilter)), [rawArticles, activeFilter])
    const topArticles = useMemo(() => articles.slice(0, 3), [articles])
    const moreArticles = useMemo(() => {
        const topKeys = new Set(topArticles.map((a) => `${a.title}|${a.date}|${a.href}`))
        return articles.slice(3).filter((a) => !topKeys.has(`${a.title}|${a.date}|${a.href}`))
    }, [articles, topArticles])

    const isMobile = useMedia('(max-width: 640px)')
    const isMedium = useMedia('(min-width: 641px) and (max-width: 1024px)')

    const lastArticles = isMobile ? 1 : isMedium ? 2 : 3

    return (
        <section data-component="Blog" data-component-file="src/components/blog-1.tsx" data-component-props="false" className="bg-background @container py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="max-w-md">
                    <span className="text-muted-foreground">Blog</span>
                    <h1 className="text-muted-foreground mt-4 text-balance text-4xl font-semibold">
                        News, insights and more from <strong className="text-foreground font-semibold">Tailark Quartz</strong>
                    </h1>
                </div>
            </div>
            <div className="bg-background sticky top-0 z-10 my-12">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="flex justify-between gap-4 border-b max-md:-mx-6">
                        <div
                            className="-ml-0.5 flex snap-x snap-mandatory overflow-x-auto py-3 max-md:px-6"
                            role="tablist"
                            aria-label="Blog categories">
                            {filters.map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveFilter(category)}
                                    disabled={categoryCounts[category] === 0}
                                    role="tab"
                                    aria-selected={activeFilter === category}
                                    className="text-muted-foreground group snap-center px-1 disabled:pointer-events-none disabled:opacity-50">
                                    <span className={cn('flex w-fit items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors [&>svg]:size-4', activeFilter === category ? 'bg-card ring-border text-primary shadow-black/6.5 font-medium shadow-sm ring-1' : 'hover:text-foreground group-hover:bg-foreground/5')}>
                                        <span className="capitalize">{category}</span>
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {topArticles.map((article, index) => (
                        <Card
                            key={`${article.title}-${article.date}-${index}`}
                            asChild
                            className="bg-linear-to-b from-card shadow-black/6.5 group relative row-span-5 grid grid-rows-subgrid gap-3 from-65% to-transparent p-6 shadow-xl">
                            <article>
                                <div className="-mx-6 -mt-6 aspect-video overflow-hidden rounded-xl">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        width={6394}
                                        height={4500}
                                        className="h-full w-full object-cover"
                                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                        loading={index < 3 ? 'eager' : 'lazy'}
                                        priority={index === 0}
                                    />
                                </div>

                                <time
                                    className="text-muted-foreground text-sm"
                                    dateTime={new Date(article.date).toISOString()}>
                                    {article.date}
                                </time>
                                <h2 className="text-foreground text-lg font-semibold">
                                    <Link
                                        href={article.href}
                                        className="before:absolute before:inset-0">
                                        {article.title}
                                    </Link>
                                </h2>
                                <p className="text-muted-foreground">{article.description}</p>

                                <div className="grid grid-cols-[1fr_auto] items-end gap-2 pt-4">
                                    <div className="space-y-2">
                                        {article.authors.map((author, index) => (
                                            <div
                                                key={index}
                                                className="grid grid-cols-[auto_1fr] items-center gap-2">
                                                <div className="ring-border-illustration bg-card aspect-square size-6 overflow-hidden rounded-md border border-transparent shadow-md shadow-black/15 ring-1">
                                                    <Image
                                                        src={author.image}
                                                        alt={author.name}
                                                        width={46}
                                                        height={46}
                                                        className="size-full object-cover"
                                                    />
                                                </div>
                                                <span className="text-muted-foreground line-clamp-1 text-sm">{author.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex h-6 items-center">
                                        <span className="text-primary group-hover:text-foreground flex items-center gap-1 text-sm font-medium transition-colors duration-200">
                                            Read
                                            <ChevronRight
                                                strokeWidth={2.5}
                                                aria-hidden="true"
                                                className="size-3.5 translate-y-px duration-200 group-hover:translate-x-0.5"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Card>
                    ))}
                </div>
                {moreArticles.length > 0 && (
                    <div className="mt-24">
                        <div className="relative">
                            <div
                                aria-hidden
                                className="pointer-events-none absolute -inset-x-px -inset-y-6 border-x"
                            />
                            <div
                                aria-hidden
                                className="pointer-events-none absolute -inset-y-6 inset-x-0 left-1/2 w-6 -translate-x-3 border-x max-sm:hidden lg:left-1/3 lg:-translate-x-4"
                            />
                            <div
                                aria-hidden
                                className="pointer-events-none absolute -inset-y-6 inset-x-0 right-1/3 ml-auto w-6 translate-x-4 border-x max-lg:hidden"
                            />
                            <div
                                aria-hidden
                                className="pointer-events-none absolute -inset-x-6 -inset-y-px border-y"
                            />
                            <div className="grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                                {moreArticles.map((article, index) => (
                                    <article
                                        key={`${article.title}-${article.date}-${index}`}
                                        className={cn('hover:bg-foreground/2 focus-within:bg-foreground/2 group relative row-span-4 grid grid-rows-subgrid gap-3 p-6 duration-200', index < moreArticles.length - lastArticles && 'border-b')}>
                                        <time
                                            className="text-muted-foreground text-sm"
                                            dateTime={new Date(article.date).toISOString()}>
                                            {article.date}
                                        </time>
                                        <h2 className="text-foreground text-lg font-semibold">
                                            {' '}
                                            <Link
                                                href={article.href}
                                                className="before:absolute before:inset-0">
                                                {article.title}
                                            </Link>
                                        </h2>
                                        <p className="text-muted-foreground">{article.description}</p>

                                        <div className="grid grid-cols-[1fr_auto] items-end gap-2 pt-4">
                                            <div className="space-y-2">
                                                {article.authors.map((author, index) => (
                                                    <div
                                                        key={index}
                                                        className="grid grid-cols-[auto_1fr] items-center gap-2">
                                                        <div className="ring-border-illustration bg-card aspect-square size-6 overflow-hidden rounded-md border border-transparent shadow-md shadow-black/15 ring-1">
                                                            <Image
                                                                src={author.image}
                                                                alt={author.name}
                                                                width={46}
                                                                height={46}
                                                                className="size-full object-cover"
                                                            />
                                                        </div>
                                                        <span className="text-muted-foreground line-clamp-1 text-sm">{author.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex h-6 items-center">
                                                <span className="text-primary hover:text-foreground flex items-center gap-1 text-sm font-medium transition-colors duration-200">
                                                    Read
                                                    <ChevronRight
                                                        strokeWidth={2.5}
                                                        aria-hidden="true"
                                                        className="size-3.5 translate-y-px duration-200 group-hover:translate-x-0.5"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}