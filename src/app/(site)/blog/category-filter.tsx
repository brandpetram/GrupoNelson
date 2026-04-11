'use client'

import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { BlogCommandDialog } from '@/components/blog-command'
import { Post } from '@/types/post'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Rss } from 'lucide-react'
import { Container } from '@/components/container'

export type Category = {
    slug: string
    title: string
}

export type BlogFilterProps = {
    categories: Category[]
    posts: Post[]
}

export const BlogFilter = ({ categories, posts }: BlogFilterProps) => {
    const pathname = usePathname()
    const router = useRouter()

    const activeCategory = pathname === '/blog' ? 'all' : pathname.split('/blog/category/')[1]?.split('/')[0] || 'all'

    const handleClick = (slug: string) => {
        if (slug === 'all') router.push('/blog')
        else router.push(`/blog/category/${slug}`)
    }

    return (
        <Container className="py-4 md:px-6 lg:px-12">
            <div className="grid grid-cols-[1fr_auto] items-center">
                <div
                    className="max-lg:mask-r-from-85% -ml-0.5 flex snap-x snap-mandatory overflow-x-auto py-3 max-md:pl-6"
                    role="tablist"
                    aria-label="Blog categories">
                    <FilterButton
                        key="all"
                        category={{ slug: 'all', title: 'All' }}
                        activeCategory={activeCategory}
                        handleClick={handleClick}
                    />

                    {categories.map((category) => (
                        <FilterButton
                            key={category.slug}
                            category={category}
                            activeCategory={activeCategory}
                            handleClick={handleClick}
                        />
                    ))}
                </div>

                <div className="flex shrink-0 gap-1 max-md:pr-3">
                    <BlogCommandDialog
                        categories={categories}
                        posts={posts}
                    />
                    <Button
                        size="sm"
                        variant="ghost"
                        aria-label="RSS Feed">
                        <Link href="/rss.xml">
                            <Rss />
                        </Link>
                    </Button>
                </div>
            </div>
        </Container>
    )
}

const FilterButton = ({ category, activeCategory, handleClick }: { category: Category; activeCategory: string; handleClick: (slug: string) => void }) => {
    return (
        <button
            onClick={() => handleClick(category.slug)}
            role="tab"
            aria-selected={activeCategory === category.slug}
            className="text-muted-foreground group snap-center px-1 disabled:pointer-events-none disabled:opacity-50">
            <span className={cn('flex w-fit items-center gap-2 rounded-full px-3 py-1 text-sm transition-colors [&>svg]:size-4', activeCategory === category.slug ? 'bg-card ring-foreground/5 text-primary font-medium shadow-sm ring-1' : 'hover:text-foreground group-hover:bg-foreground/5')}>
                <span className="capitalize">{category.title}</span>
            </span>
        </button>
    )
}
