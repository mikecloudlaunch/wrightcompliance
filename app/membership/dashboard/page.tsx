"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, BookOpen, Clock, Filter, Play, Search, Star } from "lucide-react"

import { CustomButton } from "@/components/ui/custom-button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Dashboard Header */}
      <header className="border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Training Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="search"
                placeholder="Search videos..."
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-slate-400 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white/70">Welcome, John</span>
              <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="text-blue-400 font-bold">JS</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">Your Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-white/70">AFSL Compliance Essentials</span>
                    <span className="text-sm text-white/70">75%</span>
                  </div>
                  <Progress value={75} className="h-2 bg-slate-700" indicatorClassName="bg-blue-500" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-white/70">Risk Management Framework</span>
                    <span className="text-sm text-white/70">40%</span>
                  </div>
                  <Progress value={40} className="h-2 bg-slate-700" indicatorClassName="bg-blue-500" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-white/70">Regulatory Reporting</span>
                    <span className="text-sm text-white/70">10%</span>
                  </div>
                  <Progress value={10} className="h-2 bg-slate-700" indicatorClassName="bg-blue-500" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/membership/dashboard/progress" className="text-sm text-blue-400 hover:underline">
                View all courses
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">Membership Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Plan</span>
                  <Badge className="bg-blue-500 hover:bg-blue-600">Professional</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Renewal Date</span>
                  <span className="text-white">June 15, 2025</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Status</span>
                  <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/membership/dashboard/billing" className="text-sm text-blue-400 hover:underline">
                Manage subscription
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <Play className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm">Watched "AFSL Compliance Essentials"</p>
                    <p className="text-white/50 text-xs">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <BookOpen className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm">Downloaded "Compliance Checklist"</p>
                    <p className="text-white/50 text-xs">Yesterday</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <Star className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm">Completed "Regulatory Basics"</p>
                    <p className="text-white/50 text-xs">3 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/membership/dashboard/activity" className="text-sm text-blue-400 hover:underline">
                View all activity
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* Continue Watching */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Continue Watching</h2>
            <Link href="/membership/dashboard/in-progress" className="text-blue-400 hover:underline text-sm">
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ContinueWatchingCard
              title="AFSL Compliance Essentials"
              progress={75}
              thumbnail="/placeholder.svg?height=200&width=350"
              duration="45 min"
              remainingTime="11 min left"
            />
            <ContinueWatchingCard
              title="Risk Management Framework"
              progress={40}
              thumbnail="/placeholder.svg?height=200&width=350"
              duration="52 min"
              remainingTime="31 min left"
            />
            <ContinueWatchingCard
              title="Regulatory Reporting Best Practices"
              progress={10}
              thumbnail="/placeholder.svg?height=200&width=350"
              duration="38 min"
              remainingTime="34 min left"
            />
          </div>
        </div>

        {/* Video Library */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Video Library</h2>
            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-1 text-white/70 hover:text-white text-sm">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="bg-slate-800 w-full md:w-auto inline-flex">
              <TabsTrigger value="all" className="data-[state=active]:bg-blue-900 data-[state=active]:text-white">
                All Videos
              </TabsTrigger>
              <TabsTrigger
                value="fundamentals"
                className="data-[state=active]:bg-blue-900 data-[state=active]:text-white"
              >
                Fundamentals
              </TabsTrigger>
              <TabsTrigger value="advanced" className="data-[state=active]:bg-blue-900 data-[state=active]:text-white">
                Advanced
              </TabsTrigger>
              <TabsTrigger value="resources" className="data-[state=active]:bg-blue-900 data-[state=active]:text-white">
                Resources
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <VideoCard
                  title="AFSL Compliance Essentials"
                  duration="45 min"
                  thumbnail="/placeholder.svg?height=200&width=350"
                  instructor="Belinda Wright"
                  category="Fundamentals"
                />
                <VideoCard
                  title="Regulatory Reporting Best Practices"
                  duration="38 min"
                  thumbnail="/placeholder.svg?height=200&width=350"
                  instructor="Michael Chen"
                  category="Reporting"
                />
                <VideoCard
                  title="Risk Management Framework"
                  duration="52 min"
                  thumbnail="/placeholder.svg?height=200&width=350"
                  instructor="Sarah Johnson"
                  category="Risk Management"
                />
                <VideoCard
                  title="Breach Reporting Procedures"
                  duration="41 min"
                  thumbnail="/placeholder.svg?height=200&width=350"
                  instructor="Belinda Wright"
                  category="Advanced"
                />
                <VideoCard
                  title="Compliance Documentation"
                  duration="35 min"
                  thumbnail="/placeholder.svg?height=200&width=350"
                  instructor="Emma Thompson"
                  category="Fundamentals"
                />
                <VideoCard
                  title="Regulatory Change Management"
                  duration="48 min"
                  thumbnail="/placeholder.svg?height=200&width=350"
                  instructor="Michael Chen"
                  category="Advanced"
                />
              </div>

              <div className="flex justify-center mt-8">
                <CustomButton variant="secondary">
                  <span className="btn-content">Load More Videos</span>
                </CustomButton>
              </div>
            </TabsContent>

            <TabsContent value="fundamentals" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <VideoCard
                  title="AFSL Compliance Essentials"
                  duration="45 min"
                  thumbnail="/placeholder.svg?height=200&width=350"
                  instructor="Belinda Wright"
                  category="Fundamentals"
                />
                <VideoCard
                  title="Compliance Documentation"
                  duration="35 min"
                  thumbnail="/placeholder.svg?height=200&width=350"
                  instructor="Emma Thompson"
                  category="Fundamentals"
                />
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <VideoCard
                  title="Breach Reporting Procedures"
                  duration="41 min"
                  thumbnail="/placeholder.svg?height=200&width=350"
                  instructor="Belinda Wright"
                  category="Advanced"
                />
                <VideoCard
                  title="Regulatory Change Management"
                  duration="48 min"
                  thumbnail="/placeholder.svg?height=200&width=350"
                  instructor="Michael Chen"
                  category="Advanced"
                />
              </div>
            </TabsContent>

            <TabsContent value="resources" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ResourceCard
                  title="Compliance Checklist Template"
                  type="PDF"
                  thumbnail="/placeholder.svg?height=200&width=350"
                  author="Belinda Wright"
                  category="Templates"
                />
                <ResourceCard
                  title="Regulatory Reference Guide"
                  type="PDF"
                  thumbnail="/placeholder.svg?height=200&width=350"
                  author="Michael Chen"
                  category="Guides"
                />
                <ResourceCard
                  title="Risk Assessment Worksheet"
                  type="Excel"
                  thumbnail="/placeholder.svg?height=200&width=350"
                  author="Sarah Johnson"
                  category="Templates"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

function ContinueWatchingCard({ title, progress, thumbnail, duration, remainingTime }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0085FF] to-[#0177E3] rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      <Card className="h-full bg-slate-800/50 border-slate-700 transition-all duration-300 group-hover:translate-y-[-5px] overflow-hidden">
        <div className="relative">
          <img src={thumbnail || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-[#0085FF]/80 flex items-center justify-center">
              <Play className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">{duration}</div>
          <div className="absolute bottom-0 left-0 right-0">
            <Progress value={progress} className="h-1 bg-slate-700" indicatorClassName="bg-blue-500" />
          </div>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-blue-400 mr-1" />
              <span className="text-sm text-white/70">{remainingTime}</span>
            </div>
            <span className="text-sm text-white/70">{progress}% complete</span>
          </div>
        </CardContent>
        <CardFooter>
          <CustomButton variant="primary" size="sm" className="w-full" asChild>
            <Link href={`/membership/dashboard/watch?video=${encodeURIComponent(title)}`}>
              <span className="btn-content">Continue Watching</span>
            </Link>
          </CustomButton>
        </CardFooter>
      </Card>
    </div>
  )
}

function VideoCard({ title, duration, thumbnail, instructor, category }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0085FF] to-[#0177E3] rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      <Card className="h-full bg-slate-800/50 border-slate-700 transition-all duration-300 group-hover:translate-y-[-5px] overflow-hidden">
        <div className="relative">
          <img src={thumbnail || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-[#0085FF]/80 flex items-center justify-center">
              <Play className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">{duration}</div>
        </div>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">
              {category}
            </span>
          </div>
          <CardTitle className="text-lg text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-sm text-slate-400">Instructor: {instructor}</p>
        </CardContent>
        <CardFooter>
          <CustomButton variant="primary" size="sm" className="w-full" asChild>
            <Link href={`/membership/dashboard/watch?video=${encodeURIComponent(title)}`}>
              <span className="btn-content">
                <Play className="h-4 w-4 mr-2" /> Watch Now
              </span>
            </Link>
          </CustomButton>
        </CardFooter>
      </Card>
    </div>
  )
}

function ResourceCard({ title, type, thumbnail, author, category }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0085FF] to-[#0177E3] rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      <Card className="h-full bg-slate-800/50 border-slate-700 transition-all duration-300 group-hover:translate-y-[-5px] overflow-hidden">
        <div className="relative">
          <img src={thumbnail || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
          <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">{type}</div>
        </div>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">
              {category}
            </span>
          </div>
          <CardTitle className="text-lg text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-sm text-slate-400">By: {author}</p>
        </CardContent>
        <CardFooter>
          <CustomButton variant="secondary" size="sm" className="w-full" asChild>
            <Link href="#">
              <span className="btn-content">
                <ArrowRight className="h-4 w-4 mr-2" /> Download
              </span>
            </Link>
          </CustomButton>
        </CardFooter>
      </Card>
    </div>
  )
}
