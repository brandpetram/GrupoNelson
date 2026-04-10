import { BlogListing } from '@/app/blog/blog-listing'
import { getAllPosts, getAllCategories } from '@/lib/actions'

export default async function BlogPage() {
    const [posts, categories] = await Promise.all([getAllPosts(), getAllCategories()])

    return (
        <BlogListing
            posts={posts}
            categories={categories}
        />
    )
}
