'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { Post } from '@/types/post'
import { formatDate } from '@/lib/format-date'
import { Container } from '@/components/container'

export function BlogPostGrid({ posts }: { posts: Post[] }) {
    return (
        <Container
            asGrid
            className="sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((article, index) => (
                <article
                    key={`${article.title}-${article.date}-${index}`}
                    className="group relative">
                    <div
                        data-grid-content
                        className="hover:bg-card! flex flex-col p-6 shadow-xl shadow-transparent hover:shadow-indigo-900/5 lg:p-12">
                        <div className="space-y-4">
                            <time
                                className="text-muted-foreground block text-sm"
                                dateTime={new Date(article.date).toISOString()}>
                                {formatDate(article.date)}
                            </time>

                            <h2 className="text-foreground font-semibold">
                                <Link
                                    href={`/blog/${article.slug}`}
                                    className="before:absolute before:inset-0">
                                    {article.title}
                                </Link>
                            </h2>
                            <p className="text-muted-foreground">{article.description}</p>
                        </div>
                        <div className="mt-auto grid grid-cols-[1fr_auto] items-end gap-2 pt-6">
                            <div className="space-y-2">
                                {article.authors.map((author, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-[auto_1fr] items-center gap-2">
                                        <div className="ring-border-illustration bg-card aspect-square size-6 overflow-hidden rounded-md border border-transparent shadow-md shadow-black/15 ring-1">
                                            <Image
                                                src={author.image}
                                                alt={author.name}
                                                width={460}
                                                height={460}
                                                className="size-full object-cover"
                                            />
                                        </div>
                                        <span className="text-muted-foreground line-clamp-1 text-sm">{author.name}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex h-6 items-center">
                                <span
                                    aria-label={`Read ${article.title}`}
                                    className="text-primary group-hover:text-foreground flex items-center gap-1 text-sm font-medium transition-colors duration-200">
                                    Read
                                    <ChevronRight
                                        strokeWidth={2.5}
                                        aria-hidden="true"
                                        className="size-3.5 translate-y-px duration-200 group-hover:translate-x-0.5"
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </Container>
    )
}
