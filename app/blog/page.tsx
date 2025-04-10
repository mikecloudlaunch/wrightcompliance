import Link from "next/link"
import { ArrowRight, Calendar, Clock, Search } from "lucide-react"

import { CustomButton } from "@/components/ui/custom-button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DecorativeShapes, FloatingShapes } from "@/components/ui/decorative_shapes"

// Blog posts data - in a real implementation, this would come from a CMS or database
import { blogPosts } from "@/lib/blog-data"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 bg-gradient-to-br from-[#212A37] via-[#1a2230] to-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <FloatingShapes />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                Insights & Expertise
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Compliance Blog</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
              Expert insights, regulatory updates, and best practices in financial compliance from Belinda Wright.
            </p>

            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-slate-400 h-12 rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="relative w-full py-16 md:py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
        <DecorativeShapes />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                  Featured Article
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Latest Insights</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <FeaturedPostCard
              title={blogPosts[0].title}
              excerpt={blogPosts[0].excerpt}
              date={blogPosts[0].date}
              readTime={blogPosts[0].readTime}
              author={blogPosts[0].author}
              slug={blogPosts[0].slug}
              categories={blogPosts[0].categories}
            />
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="relative w-full py-16 md:py-24 bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <FloatingShapes />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                  All Articles
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Browse Our Blog</h2>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <span className="text-white/70">Filter by:</span>
              <select className="bg-slate-800 border border-slate-700 text-white rounded-md text-sm py-1 px-2">
                <option>All Categories</option>
                <option>AFSL Compliance</option>
                <option>Regulatory Updates</option>
                <option>Risk Management</option>
                <option>Best Practices</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <BlogPostCard
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                author={post.author}
                slug={post.slug}
                categories={post.categories}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <CustomButton variant="secondary">
              <span className="btn-content">Load More Articles</span>
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-[#212A37] to-[#0f172a] overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0085FF] to-[#0177E3] rounded-2xl blur opacity-30"></div>
            <div className="card-glass p-8 md:p-12 text-center">
              <div className="card-glass-content">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Stay Updated</h2>
                <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                  Subscribe to our newsletter for the latest compliance insights and regulatory updates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-white/10 border-white/10 text-white placeholder:text-slate-400 h-12"
                  />
                  <CustomButton variant="primary">
                    <span className="btn-content">
                      Subscribe <ArrowRight className="ml-2 h-5 w-5 btn-icon" />
                    </span>
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeaturedPostCard({ title, excerpt, date, readTime, author, slug, categories }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-slate-700/50 rounded-2xl blur opacity-10"></div>
      <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-64 md:h-auto">
            <div className="absolute inset-0 bg-slate-800/80 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt={title}
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col">
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((category, index) => (
                <Badge key={index} variant="outline" className="text-blue-400 border-blue-400/30">
                  {category}
                </Badge>
              ))}
            </div>
            <CardTitle className="text-2xl text-white mb-2">{title}</CardTitle>
            <CardDescription className="text-slate-300 mb-4">{excerpt}</CardDescription>
            <div className="flex items-center text-white/60 text-sm mb-6 mt-auto">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="mr-4">{date}</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>{readTime} min read</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                  <span className="text-blue-400 font-bold">BW</span>
                </div>
                <span className="text-white/70 text-sm">{author}</span>
              </div>
              <CustomButton variant="primary" size="sm" asChild>
                <Link href={`/blog/${slug}`}>
                  <span className="btn-content">
                    Read Article <ArrowRight className="ml-2 h-4 w-4 btn-icon" />
                  </span>
                </Link>
              </CustomButton>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

function BlogPostCard({ title, excerpt, date, readTime, author, slug, categories }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0085FF] to-[#0177E3] rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      <Card className="h-full bg-slate-800/50 border-slate-700 transition-all duration-300 group-hover:translate-y-[-5px] overflow-hidden">
        <div className="relative h-48">
          <div className="absolute inset-0 bg-slate-800/80 flex items-center justify-center">
            <img
              src="/placeholder.svg?height=200&width=400"
              alt={title}
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
        <CardHeader className="pb-2">
          <div className="flex flex-wrap gap-2 mb-2">
            {categories.map((category, index) => (
              <Badge key={index} variant="outline" className="text-blue-400 border-blue-400/30">
                {category}
              </Badge>
            ))}
          </div>
          <CardTitle className="text-xl text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-slate-300 mb-4">{excerpt}</CardDescription>
          <div className="flex items-center text-white/60 text-sm">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="mr-4">{date}</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{readTime} min read</span>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
              <span className="text-blue-400 font-bold text-xs">BW</span>
            </div>
            <span className="text-white/70 text-sm">{author}</span>
          </div>
          <CustomButton variant="secondary" size="sm" asChild>
            <Link href={`/blog/${slug}`}>
              <span className="btn-content">Read More</span>
            </Link>
          </CustomButton>
        </CardFooter>
      </Card>
    </div>
  )
}
