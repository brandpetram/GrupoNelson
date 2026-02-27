import { BlogFilter } from '@/app/blog/category-filter'
import { getInitialPosts, getTotalPostsCount, getAllCategories } from '@/lib/actions'
import { Category } from '@/types/post'
import Link from 'next/link'
import { Container } from '@/components/container'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { formatDate } from '@/lib/format-date'

const PAGE_SIZE = 12

export default async function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const [posts, categories] = await Promise.all([getInitialPosts(PAGE_SIZE), getAllCategories()])
    const articles = posts.slice(-2)

    return (
        <>
            <Container className="relative pb-6 pt-12 lg:py-12">
                <div className="relative max-w-xl px-6 lg:px-12">
                    <h1 className="text-foreground text-balance text-5xl font-semibold sm:text-6xl lg:tracking-tight">Blog</h1>
                </div>
            </Container>
            <Container
                asGrid
                className="md:grid-cols-2">
                {articles.map((article) => (
                    <article
                        key={article.slug}
                        className="group relative">
                        <div
                            data-grid-content
                            className="group-hover:bg-card! grid grid-rows-[auto_1fr] gap-4 p-6 shadow-2xl shadow-transparent group-hover:shadow-indigo-900/10 lg:p-12">
                            <div className="before:border-foreground/10 before:inset-ring-1 before:inset-ring-background/10 relative aspect-video overflow-hidden rounded-[10px] shadow shadow-black/5 before:absolute before:inset-0 before:rounded-[10px] before:border">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    width={6394}
                                    height={4500}
                                    className="h-full w-full object-cover"
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                />
                            </div>

                            <div className="flex flex-col space-y-4">
                                <time
                                    className="text-muted-foreground block text-sm"
                                    dateTime={new Date(article.date).toISOString()}>
                                    {formatDate(article.date)}
                                </time>
                                <h2 className="text-foreground text-balance text-lg font-semibold md:text-xl">
                                    <Link
                                        href={`/blog/${article.slug}`}
                                        className="before:absolute before:inset-0">
                                        {article.title}
                                    </Link>
                                </h2>
                                <p className="text-muted-foreground">{article.description}</p>

                                <div className="mt-auto grid grid-cols-[1fr_auto] items-end gap-2 pt-4">
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
                        </div>
                    </article>
                ))}
            </Container>

            <BlogFilter
                categories={categories}
                posts={posts}
            />
            {children}
        </>
    )
}
