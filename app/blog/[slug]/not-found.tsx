import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { CustomButton } from "@/components/ui/custom-button"

export default function BlogPostNotFound() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
      <div className="container px-4 md:px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Article Not Found</h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
          The blog post you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CustomButton variant="primary" asChild>
            <Link href="/blog">
              <span className="btn-content">
                <ArrowLeft className="mr-2 h-5 w-5" /> Back to Blog
              </span>
            </Link>
          </CustomButton>
          <CustomButton variant="secondary" asChild>
            <Link href="/">
              <span className="btn-content">Go to Homepage</span>
            </Link>
          </CustomButton>
        </div>
      </div>
    </div>
  )
}
