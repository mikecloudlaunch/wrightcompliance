import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Facebook, Linkedin } from "lucide-react"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { CustomButton } from "@/components/ui/custom-button"
import { Badge } from "@/components/ui/badge"

export function BlogPostLayout({ title, date, readTime, author, categories, children, relatedPosts = [] }) {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <ScrollProgress />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/blog" className="flex items-center text-blue-400 hover:text-blue-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((category, index) => (
                <Badge key={index} variant="outline" className="text-blue-400 border-blue-400/30">
                  {category}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">{title}</h1>
            <div className="flex flex-wrap items-center text-white/60 text-sm mb-8">
              <div className="flex items-center mr-6 mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{date}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <Clock className="h-4 w-4 mr-1" />
                <span>{readTime} min read</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                  <span className="text-blue-400 font-bold text-xs">BW</span>
                </div>
                <span>{author}</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-invert max-w-none mb-12">{children}</div>

          <div className="border-t border-white/10 pt-8 mb-12">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-medium mb-2">Share this article</h3>
                <div className="flex space-x-3">
                  <button className="h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors">
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button className="h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors">
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button className="h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button className="h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div>
                <CustomButton variant="secondary" asChild>
                  <Link href="/contact">
                    <span className="btn-content">Contact the Author</span>
                  </Link>
                </CustomButton>
              </div>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((post, index) => (
                  <RelatedPostCard
                    key={index}
                    title={post.title}
                    excerpt={post.excerpt}
                    slug={post.slug}
                    date={post.date}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-white/70 mb-6">
              Stay updated with the latest compliance insights and regulatory updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-white/10 border border-white/10 rounded-md text-white placeholder:text-slate-400 w-full sm:w-auto"
              />
              <CustomButton variant="primary">
                <span className="btn-content">Subscribe</span>
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RelatedPostCard({ title, excerpt, slug, date }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0085FF] to-[#0177E3] rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 transition-all duration-300 group-hover:translate-y-[-5px] h-full">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{title}</h3>
        <p className="text-white/70 text-sm mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-white/60 text-xs">{date}</span>
          <Link href={`/blog/${slug}`} className="text-blue-400 hover:text-blue-300 text-sm">
            Read more
          </Link>
        </div>
      </div>
    </div>
  )
}
