'use client'

import { ChevronRight, Rss } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import { useMedia } from '@/hooks/use-media'
import { Post, Category } from '@/types/post'
import { formatDate } from '@/lib/format-date'

interface BlogListingProps {
    posts: Post[]
    categories: Category[]
}

export function BlogListing({ posts, categories }: BlogListingProps) {
    const [activeFilter, setActiveFilter] = useState<string>('all')

    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { all: posts.length }
        for (const p of posts) {
            const slug = p.category?.slug
            if (slug) counts[slug] = (counts[slug] || 0) + 1
        }
        return counts
    }, [posts])

    const articles = useMemo(
        () => (activeFilter === 'all' ? posts : posts.filter((p) => p.category?.slug === activeFilter)),
        [posts, activeFilter]
    )

    const topArticles = useMemo(() => articles.slice(0, 3), [articles])
    const moreArticles = useMemo(() => articles.slice(3), [articles])

    const isMobile = useMedia('(max-width: 640px)')
    const isMedium = useMedia('(min-width: 641px) and (max-width: 1024px)')
    const lastArticles = isMobile ? 1 : isMedium ? 2 : 3

    return (
        <section className="bg-background py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-md">
                    <span className="text-muted-foreground">Blog</span>
                    <h1 className="text-muted-foreground mt-4 text-balance text-4xl font-semibold">
                        Noticias, artículos y más de <strong className="text-foreground font-semibold">Grupo Nelson</strong>
                    </h1>
                </div>
            </div>

            {/* 2-column layout: posts + sticky sidebar */}
            <div className="mx-auto mt-12 max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_260px]">
                    {/* Main content */}
                    <div>
                        {/* Top articles with images */}
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {topArticles.map((article, index) => (
                                <Card
                                    key={`${article.slug}-${index}`}
                                    asChild
                                    className="bg-linear-to-b from-card shadow-black/6.5 group relative row-span-5 grid grid-rows-subgrid gap-3 from-65% to-transparent p-6 shadow-xl">
                                    <article>
                                        <div className="-mx-6 -mt-6 aspect-video overflow-hidden rounded-xl">
                                            {article.image && (
                                                <Image
                                                    src={article.image}
                                                    alt={article.title}
                                                    width={800}
                                                    height={450}
                                                    className="h-full w-full object-cover"
                                                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                                                    loading={index < 3 ? 'eager' : 'lazy'}
                                                    priority={index === 0}
                                                />
                                            )}
                                        </div>

                                        <time className="text-muted-foreground text-sm" dateTime={new Date(article.date).toISOString()}>
                                            {formatDate(article.date)}
                                        </time>
                                        <h2 className="text-foreground text-lg font-semibold">
                                            <Link href={`/blog/${article.slug}`} className="before:absolute before:inset-0">
                                                {article.title}
                                            </Link>
                                        </h2>
                                        <p className="text-muted-foreground">{article.description}</p>

                                        <div className="grid grid-cols-[1fr_auto] items-end gap-2 pt-4">
                                            <div className="space-y-2">
                                                {article.authors.map((author, i) => (
                                                    <div key={i} className="grid grid-cols-[auto_1fr] items-center gap-2">
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
                                                    Leer
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

                        {/* More articles without images */}
                        {moreArticles.length > 0 && (
                            <div className="mt-24">
                                <div className="relative">
                                    <div aria-hidden className="pointer-events-none absolute -inset-x-px -inset-y-6 border-x" />
                                    <div aria-hidden className="pointer-events-none absolute -inset-y-6 inset-x-0 left-1/2 w-6 -translate-x-3 border-x max-sm:hidden lg:left-1/3 lg:-translate-x-4" />
                                    <div aria-hidden className="pointer-events-none absolute -inset-y-6 inset-x-0 right-1/3 ml-auto w-6 translate-x-4 border-x max-lg:hidden" />
                                    <div aria-hidden className="pointer-events-none absolute -inset-x-6 -inset-y-px border-y" />
                                    <div className="grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                                        {moreArticles.map((article, index) => (
                                            <article
                                                key={`${article.slug}-more-${index}`}
                                                className={cn(
                                                    'hover:bg-foreground/2 focus-within:bg-foreground/2 group relative row-span-4 grid grid-rows-subgrid gap-3 p-6 duration-200',
                                                    index < moreArticles.length - lastArticles && 'border-b'
                                                )}>
                                                <time className="text-muted-foreground text-sm" dateTime={new Date(article.date).toISOString()}>
                                                    {formatDate(article.date)}
                                                </time>
                                                <h2 className="text-foreground text-lg font-semibold">
                                                    <Link href={`/blog/${article.slug}`} className="before:absolute before:inset-0">
                                                        {article.title}
                                                    </Link>
                                                </h2>
                                                <p className="text-muted-foreground">{article.description}</p>

                                                <div className="grid grid-cols-[1fr_auto] items-end gap-2 pt-4">
                                                    <div className="space-y-2">
                                                        {article.authors.map((author, i) => (
                                                            <div key={i} className="grid grid-cols-[auto_1fr] items-center gap-2">
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
                                                            Leer
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

                    {/* Sticky sidebar */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-24 space-y-8">
                            {/* Categories */}
                            <div>
                                <h3 className="text-foreground mb-4 text-sm font-semibold">Categorías</h3>
                                <ul className="space-y-1">
                                    {categories.filter((cat) => (categoryCounts[cat.slug] ?? 0) > 0).map((cat) => (
                                        <li key={cat.slug}>
                                            <button
                                                onClick={() => setActiveFilter(cat.slug)}
                                                className={cn(
                                                    'flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors',
                                                    activeFilter === cat.slug
                                                        ? 'bg-card ring-border text-primary font-medium shadow-sm ring-1'
                                                        : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
                                                )}>
                                                <span>{cat.title}</span>
                                                <span className="text-muted-foreground text-xs">{categoryCounts[cat.slug] ?? 0}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* RSS */}
                            <div className="border-t pt-6">
                                <Link
                                    href="/rss.xml"
                                    className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors">
                                    <Rss className="size-4" />
                                    RSS Feed
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}
