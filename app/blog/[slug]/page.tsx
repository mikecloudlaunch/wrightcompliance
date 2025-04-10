import { notFound } from "next/navigation"
import { BlogPostLayout } from "@/components/ui/blog-post-layout"
import { blogPosts } from "@/lib/blog-data"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Find related posts (posts with at least one matching category)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.categories.some((category) => post.categories.includes(category)))
    .slice(0, 3)

  return (
    <BlogPostLayout
      title={post.title}
      date={post.date}
      readTime={post.readTime}
      author={post.author}
      categories={post.categories}
      relatedPosts={relatedPosts}
    >
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </BlogPostLayout>
  )
}
