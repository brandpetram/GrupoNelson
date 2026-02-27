'use server'

import { client } from '@/sanity/lib/client'
import { Post, PostWithBody, Lang } from '@/types/post'

// Proyección reutilizable — extrae el valor del idioma solicitado del array internacionalizado
const postProjection = (lang: Lang) => `{
  _id,
  "title": coalesce(title[_key == "${lang}"][0].value, title[_key == "es"][0].value, "Sin título"),
  "description": coalesce(description[_key == "${lang}"][0].value, description[_key == "es"][0].value, ""),
  "slug": slug.current,
  "href": slug.current,
  publishedAt,
  "date": publishedAt,
  "image": image.asset->url,
  category->{
    title,
    "slug": slug.current
  },
  authors[]->{
    name,
    "image": image.asset->url
  }
}`

const postWithBodyProjection = (lang: Lang) => `{
  _id,
  "title": coalesce(title[_key == "${lang}"][0].value, title[_key == "es"][0].value, "Sin título"),
  "description": coalesce(description[_key == "${lang}"][0].value, description[_key == "es"][0].value, ""),
  "slug": slug.current,
  publishedAt,
  "image": image.asset->url,
  category->{
    title,
    "slug": slug.current
  },
  authors[]->{
    name,
    "image": image.asset->url
  },
  "body": coalesce(body[_key == "${lang}"][0].value, body[_key == "es"][0].value)
}`

export async function getInitialPosts(limit: number = 9, lang: Lang = 'es'): Promise<Post[]> {
    const query = `*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...${limit}]${postProjection(lang)}`
    return client.fetch<Post[]>(query, {}, {next: {revalidate: 30}})
}

export async function loadMorePosts(offset: number, limit: number = 9, lang: Lang = 'es'): Promise<Post[]> {
    const end = offset + limit
    const query = `*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[$offset...$end]${postProjection(lang)}`
    return client.fetch<Post[]>(query, {offset, end}, {next: {revalidate: 30}})
}

export async function getTotalPostsCount(): Promise<number> {
    return client.fetch<number>(`count(*[_type == "post" && defined(slug.current)])`, {}, {next: {revalidate: 30}})
}

export async function getPostBySlug(slug: string, lang: Lang = 'es'): Promise<PostWithBody | null> {
    const query = `*[_type == "post" && slug.current == $slug][0]${postWithBodyProjection(lang)}`
    return client.fetch<PostWithBody>(query, {slug}, {next: {revalidate: 30}})
}

export async function getAllPostSlugs(): Promise<{slug: string}[]> {
    return client.fetch<{slug: string}[]>(
        `*[_type == "post" && defined(slug.current)]{"slug": slug.current}`,
        {},
        {next: {revalidate: 30}}
    )
}

export async function getCategoryPosts(category: string, limit: number = 9, lang: Lang = 'es'): Promise<Post[]> {
    const query = `*[_type == "post" && defined(slug.current) && category->slug.current == $category]|order(publishedAt desc)[0...${limit}]${postProjection(lang)}`
    return client.fetch<Post[]>(query, {category}, {next: {revalidate: 30}})
}

export async function loadMoreCategoryPosts(category: string, offset: number, limit: number = 9, lang: Lang = 'es'): Promise<Post[]> {
    const end = offset + limit
    const query = `*[_type == "post" && defined(slug.current) && category->slug.current == $category]|order(publishedAt desc)[$offset...$end]${postProjection(lang)}`
    return client.fetch<Post[]>(query, {category, offset, end}, {next: {revalidate: 30}})
}

export async function getCategoryPostsCount(category: string): Promise<number> {
    return client.fetch<number>(
        `count(*[_type == "post" && defined(slug.current) && category->slug.current == $category])`,
        {category},
        {next: {revalidate: 30}}
    )
}

export async function getAllPosts(lang: Lang = 'es'): Promise<Post[]> {
    const query = `*[_type == "post" && defined(slug.current)]|order(publishedAt desc)${postProjection(lang)}`
    return client.fetch<Post[]>(query, {}, {next: {revalidate: 30}})
}

export async function getAllCategories(): Promise<{title: string; slug: string}[]> {
    return client.fetch<{title: string; slug: string}[]>(
        `*[_type == "category"]{title, "slug": slug.current}`,
        {},
        {next: {revalidate: 30}}
    )
}
