import Link from "next/link"
import { ArrowRight, Award, Clock, Users } from "lucide-react"

import { CustomButton } from "@/components/ui/custom-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  About Wright Compliance
                </h1>
                <p className="max-w-[600px] text-slate-300 md:text-xl">
                  Led by Belinda Wright, we provide expert financial compliance consulting to businesses across
                  Australia.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md overflow-hidden rounded-lg border border-slate-800 bg-slate-950/50 p-2 shadow-xl">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]" />
                <div className="relative flex h-80 flex-col items-center justify-center space-y-6 p-6 text-center">
                  <Award className="h-16 w-16 text-teal-500" />
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-white">Our Mission</h2>
                    <p className="text-slate-300">
                      To provide exceptional compliance solutions that protect our clients and enable their business
                      growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Belinda Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex items-center justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-md overflow-hidden rounded-lg border border-slate-800 bg-slate-950/50 p-2 shadow-xl">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]" />
                <div className="relative h-80 bg-slate-800 rounded-md">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="h-24 w-24 text-blue-500/20" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-6">
                    <p className="text-lg font-medium text-white">Belinda Wright</p>
                    <p className="text-sm text-slate-300">Director & Principal Consultant</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-900/20 px-3 py-1 text-sm text-teal-400">
                  Our Leadership
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Meet Belinda Wright</h2>
                <p className="text-slate-300 md:text-lg">
                  With over 15 years of experience in financial compliance, Belinda Wright has established herself as a
                  leading expert in AFSL compliance consulting.
                </p>
                <p className="text-slate-300 md:text-lg">
                  Prior to founding Wright Compliance, Belinda held senior compliance roles at major financial
                  institutions, where she developed a deep understanding of regulatory frameworks and best practices.
                </p>
                <p className="text-slate-300 md:text-lg">
                  Her approach combines technical expertise with practical solutions, helping businesses navigate
                  complex regulatory requirements while achieving their strategic objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-900/20 px-3 py-1 text-sm text-blue-400">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Our Approach to Compliance
              </h2>
              <p className="max-w-[900px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                What sets Wright Compliance apart from other consulting firms.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
            <FeatureCard
              icon={<Award className="h-10 w-10 text-teal-500" />}
              title="Expertise"
              description="Specialized knowledge in AFSL compliance and financial regulations."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-teal-500" />}
              title="Client-Focused"
              description="Tailored solutions that address your specific business needs and challenges."
            />
            <FeatureCard
              icon={<Clock className="h-10 w-10 text-teal-500" />}
              title="Responsive"
              description="Timely advice and support when you need it most, especially during regulatory changes."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-teal-950 to-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Partner with Wright Compliance
              </h2>
              <p className="max-w-[900px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let us help you navigate the complex world of financial compliance.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <CustomButton variant="primary" size="lg" asChild>
                <Link href="/contact">
                  <span className="btn-content">
                    Contact Us Today <ArrowRight className="ml-2 h-4 w-4 btn-icon" />
                  </span>
                </Link>
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="group relative overflow-hidden bg-slate-800/50 border-slate-700 transition-all duration-300 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/20 card-hover-effect">
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-slate-300">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
