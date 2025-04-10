"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, BookOpen, Download, List, MessageSquare, ThumbsUp } from "lucide-react"

import { CustomButton } from "@/components/ui/custom-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function WatchPage() {
  const searchParams = useSearchParams()
  const videoTitle = searchParams.get("video") || "AFSL Compliance Essentials"
  const { toast } = useToast()

  const [progress, setProgress] = useState(0)
  const [comment, setComment] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Simulate video progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    if (!comment.trim()) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Comment submitted",
        description: "Your comment has been posted successfully.",
      })

      setComment("")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/membership/dashboard" className="flex items-center text-blue-400 hover:text-blue-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=480&width=854"
                  alt={videoTitle}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <p className="text-white text-lg">Video Player Placeholder</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0">
                <Progress value={progress} className="h-1 bg-slate-700" indicatorClassName="bg-blue-500" />
              </div>
            </div>

            {/* Video Info */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">{videoTitle}</h1>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span className="text-white/70">Instructor: Belinda Wright</span>
                  <span className="text-white/70">Duration: 45 min</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-1 text-white/70 hover:text-white">
                    <ThumbsUp className="h-4 w-4" />
                    <span>Like</span>
                  </button>
                  <button className="flex items-center space-x-1 text-white/70 hover:text-white">
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
              <p className="text-white/70">
                This comprehensive training video covers the essential aspects of AFSL compliance. Learn about
                regulatory requirements, best practices, and how to implement effective compliance frameworks within
                your organization. This course is designed for compliance officers, risk managers, and financial
                services professionals.
              </p>
            </div>

            {/* Tabs for Content, Resources, Discussion */}
            <Tabs defaultValue="content" className="w-full">
              <TabsList className="bg-slate-800 w-full md:w-auto inline-flex">
                <TabsTrigger value="content" className="data-[state=active]:bg-blue-900 data-[state=active]:text-white">
                  Content
                </TabsTrigger>
                <TabsTrigger
                  value="resources"
                  className="data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                >
                  Resources
                </TabsTrigger>
                <TabsTrigger
                  value="discussion"
                  className="data-[state=active]:bg-blue-900 data-[state=active]:text-white"
                >
                  Discussion
                </TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="mt-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Course Content</CardTitle>
                    <CardDescription className="text-slate-300">Video chapters and sections</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                          <span className="text-blue-400 font-medium">1</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-medium">Introduction to AFSL Compliance</p>
                          <p className="text-white/50 text-sm">0:00 - 5:30</p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="text-green-400 text-sm">Completed</span>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                          <span className="text-blue-400 font-medium">2</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-medium">Regulatory Framework Overview</p>
                          <p className="text-white/50 text-sm">5:31 - 15:45</p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="text-green-400 text-sm">Completed</span>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                          <span className="text-blue-400 font-medium">3</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-medium">Compliance Documentation</p>
                          <p className="text-white/50 text-sm">15:46 - 25:20</p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="text-blue-400 text-sm">In progress</span>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                          <span className="text-blue-400 font-medium">4</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-medium">Monitoring and Reporting</p>
                          <p className="text-white/50 text-sm">25:21 - 35:10</p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="text-white/50 text-sm">Not started</span>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                          <span className="text-blue-400 font-medium">5</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-medium">Implementation Best Practices</p>
                          <p className="text-white/50 text-sm">35:11 - 45:00</p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="text-white/50 text-sm">Not started</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources" className="mt-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Course Resources</CardTitle>
                    <CardDescription className="text-slate-300">Downloadable materials and references</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                        <div className="flex items-center">
                          <BookOpen className="h-5 w-5 text-blue-400 mr-3" />
                          <span className="text-white">AFSL Compliance Checklist.pdf</span>
                        </div>
                        <CustomButton variant="secondary" size="sm">
                          <span className="btn-content">
                            <Download className="h-4 w-4 mr-2" /> Download
                          </span>
                        </CustomButton>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                        <div className="flex items-center">
                          <BookOpen className="h-5 w-5 text-blue-400 mr-3" />
                          <span className="text-white">Regulatory References Guide.pdf</span>
                        </div>
                        <CustomButton variant="secondary" size="sm">
                          <span className="btn-content">
                            <Download className="h-4 w-4 mr-2" /> Download
                          </span>
                        </CustomButton>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                        <div className="flex items-center">
                          <BookOpen className="h-5 w-5 text-blue-400 mr-3" />
                          <span className="text-white">Compliance Framework Template.xlsx</span>
                        </div>
                        <CustomButton variant="secondary" size="sm">
                          <span className="btn-content">
                            <Download className="h-4 w-4 mr-2" /> Download
                          </span>
                        </CustomButton>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="discussion" className="mt-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Discussion</CardTitle>
                    <CardDescription className="text-slate-300">Join the conversation about this video</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleCommentSubmit} className="mb-6">
                      <Textarea
                        placeholder="Add a comment..."
                        className="bg-slate-900 border-slate-700 text-white mb-3"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                      <div className="flex justify-end">
                        <CustomButton variant="primary" size="sm" type="submit" disabled={isLoading || !comment.trim()}>
                          <span className="btn-content">{isLoading ? "Posting..." : "Post Comment"}</span>
                        </CustomButton>
                      </div>
                    </form>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-3">
                        <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-400 font-bold">SJ</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-white font-medium">Sarah Johnson</p>
                            <p className="text-white/50 text-xs">2 days ago</p>
                          </div>
                          <p className="text-white/70 text-sm">
                            This video was incredibly helpful! The section on documentation requirements clarified a lot
                            of questions I had about our current processes.
                          </p>
                          <div className="flex items-center space-x-4 mt-2">
                            <button className="text-white/50 text-xs hover:text-white">Reply</button>
                            <button className="text-white/50 text-xs hover:text-white flex items-center">
                              <ThumbsUp className="h-3 w-3 mr-1" /> 5
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-400 font-bold">MC</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-white font-medium">Michael Chen</p>
                            <p className="text-white/50 text-xs">1 week ago</p>
                          </div>
                          <p className="text-white/70 text-sm">
                            Could you provide more information about how these compliance frameworks apply to smaller
                            financial services firms? Great content overall!
                          </p>
                          <div className="flex items-center space-x-4 mt-2">
                            <button className="text-white/50 text-xs hover:text-white">Reply</button>
                            <button className="text-white/50 text-xs hover:text-white flex items-center">
                              <ThumbsUp className="h-3 w-3 mr-1" /> 3
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Up Next</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-24 h-16 relative rounded overflow-hidden">
                        <img
                          src="/placeholder.svg?height=64&width=96"
                          alt="Regulatory Reporting Best Practices"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
                          <List className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Regulatory Reporting Best Practices</p>
                        <p className="text-white/50 text-xs">38 min</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-24 h-16 relative rounded overflow-hidden">
                        <img
                          src="/placeholder.svg?height=64&width=96"
                          alt="Risk Management Framework"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
                          <List className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Risk Management Framework</p>
                        <p className="text-white/50 text-xs">52 min</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-24 h-16 relative rounded overflow-hidden">
                        <img
                          src="/placeholder.svg?height=64&width=96"
                          alt="Breach Reporting Procedures"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
                          <List className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Breach Reporting Procedures</p>
                        <p className="text-white/50 text-xs">41 min</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">About the Instructor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-bold">BW</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Belinda Wright</p>
                      <p className="text-white/60 text-sm">Compliance Expert</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">
                    Belinda Wright is a leading expert in financial compliance with over 15 years of experience. She has
                    helped numerous organizations implement effective compliance frameworks and navigate complex
                    regulatory requirements.
                  </p>
                  <div className="mt-4">
                    <Link href="/about" className="text-blue-400 hover:underline text-sm">
                      View full profile
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 text-sm mb-4">
                    Have questions about this course or technical issues? Our support team is here to help.
                  </p>
                  <CustomButton variant="secondary" size="sm" className="w-full" asChild>
                    <Link href="/contact">
                      <span className="btn-content">
                        <MessageSquare className="h-4 w-4 mr-2" /> Contact Support
                      </span>
                    </Link>
                  </CustomButton>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
