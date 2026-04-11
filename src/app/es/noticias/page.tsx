import type { Metadata } from 'next'
import { BlogFilter, Category } from '@/app/es/noticias/category-filter'

export const metadata: Metadata = {
  title: 'Noticias',
  description: 'Últimas noticias de Grupo Nelson: nuevos proyectos, expansiones en parques industriales y naves industriales built-to-suit en Mexicali.',
}
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@/components/ui/breadcrumb'
import { BlogListWithPagination } from '@/app/es/noticias/blog-list-with-pagination'
import { loadMoreNoticias, getInitialNoticias, getTotalNoticiasCount } from '@/lib/actions'

const PAGE_SIZE = 12

export default async function NoticiasPage() {
    const [posts, totalCount] = await Promise.all([getInitialNoticias(PAGE_SIZE), getTotalNoticiasCount()])

    const categories: Category[] = Array.from(new Map(posts.filter((post) => post.category).map((post) => [post.category.slug, post.category.title]))).map(([slug, title]) => ({ slug, title }))

    return (
        <>
            <div className="mx-auto max-w-6xl px-6 lg:px-12">
                <div className="max-w-md">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/noticias">Noticias</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <h1 className="text-muted-foreground mt-4 text-balance text-4xl font-semibold">
                        Noticias e información de <strong className="text-foreground font-semibold">Grupo Nelson</strong>
                    </h1>
                </div>
            </div>
            <BlogFilter
                categories={categories}
                posts={posts}
            />
            <BlogListWithPagination
                initialPosts={posts}
                totalCount={totalCount}
                loadMoreAction={loadMoreNoticias}
            />
        </>
    )
}
