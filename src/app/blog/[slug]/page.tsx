import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { formatDate } from '@/lib/format-date'
import { portableTextComponents } from '@/components/content-components'
import { getPostBySlug, getAllPostSlugs } from '@/lib/actions'
import { Container } from '@/components/container'
import { extractHeadings } from '@/lib/extract-headings'

export async function generateStaticParams() {
    const posts = await getAllPostSlugs()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
        return { title: 'Post Not Found' }
    }

    return {
        title: `${post.title} - Blog`,
        description: post.description,
        openGraph: {
            title: `${post.title} - Blog`,
            description: post.description,
            images: [{ url: post.image, width: 1200, height: 675 }],
        },
        alternates: {
            canonical: `/blog/${slug}`,
        },
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    const headings = extractHeadings(post.body)

    return (
        <article>
            <Container className="p-6 lg:p-12">
                <header className="max-w-2xl">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    className="text-foreground"
                                    href={`/blog/category/${post.category.slug}`}>
                                    {post.category.title}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <h1 className="text-foreground mt-6 text-balance text-3xl font-bold md:text-4xl">{post.title}</h1>
                </header>
            </Container>

            <Container
                className="grid-cols-[auto_1fr]"
                asGrid>
                <div>
                    <div
                        data-grid-content
                        className="max-w-3xl p-6 lg:p-12">
                        <div className="relative overflow-hidden rounded-xl border shadow shadow-black/5">
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={1200}
                                height={675}
                                className="aspect-video w-full object-cover"
                                priority
                            />
                        </div>

                        <div>
                            <p className="text-foreground my-12 text-xl md:text-2xl">{post.description}</p>

                            <div className="prose prose-slate dark:prose-invert max-w-none">
                                <PortableText
                                    value={post.body}
                                    components={portableTextComponents}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-lg:hidden">
                    <div data-grid-content>
                        <div className="h-fit p-6 lg:sticky lg:top-20 lg:p-12">
                            {headings.length > 0 && (
                                <nav>
                                    <h4 className="text-foreground mb-4 text-sm font-semibold">On this page</h4>
                                    <ul className="space-y-3 text-sm">
                                        {headings.map((heading) => (
                                            <li key={heading.slug}>
                                                <a
                                                    href={`#${heading.slug}`}
                                                    className={`text-muted-foreground hover:text-foreground block transition-colors ${heading.level === 3 ? 'pl-4' : ''}`}>
                                                    {heading.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            )}
                            <div className="mt-6">
                                <h4 className="text-foreground mb-4 text-sm font-semibold">Written by</h4>
                                <div className="flex flex-col gap-4">
                                    {post.authors.map((author, index) => (
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
                                            <span className="text-foreground line-clamp-1 text-sm">{author.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6">
                                <h4 className="text-foreground mb-4 text-sm font-semibold">Last updated</h4>
                                <time
                                    className="text-muted-foreground text-sm"
                                    dateTime={new Date(post.publishedAt).toISOString()}>
                                    {formatDate(post.publishedAt)}
                                </time>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </article>
    )
}
