import Link from "next/link"
import { ArrowRight, CheckCircle, Shield, BookOpen, BarChart4, ArrowUpRight, Users } from "lucide-react"
import { CustomButton } from "@/components/ui/custom-button"
import { DecorativeShapes, FloatingShapes } from "@/components/ui/decorative_shapes"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#212A37] via-[#1a2230] to-[#0f172a]">
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <FloatingShapes />

        <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center justify-center min-h-screen py-20">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                Financial Compliance Reimagined
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Elevate Your <span className="font-bold">Compliance</span> Strategy
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-8">
              Expert AFSL compliance consulting with an innovative approach to navigate regulatory challenges and
              transform your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CustomButton variant="primary" size="lg" asChild>
                <Link href="/contact">
                  <span className="btn-content">
                    Start Your Journey <ArrowRight className="ml-2 h-5 w-5 btn-icon" />
                  </span>
                </Link>
              </CustomButton>
              <CustomButton variant="secondary" size="lg" asChild>
                <Link href="/services">
                  <span className="btn-content">
                    Explore Services <ArrowUpRight className="ml-2 h-5 w-5 btn-icon" />
                  </span>
                </Link>
              </CustomButton>
            </div>
          </div>

          <div className="relative mt-16 w-full max-w-4xl mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0085FF] to-[#0177E3] rounded-2xl blur opacity-30"></div>
            <div className="card-glass p-8 md:p-12">
              <div className="card-glass-content grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-[#0085FF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">AFSL Compliance</h3>
                  <p className="text-white/70">Comprehensive solutions tailored to your business needs</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-[#0085FF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Regulatory Advice</h3>
                  <p className="text-white/70">Expert guidance through complex financial regulations</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 flex items-center justify-center">
                    <BarChart4 className="h-8 w-8 text-[#0085FF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Risk Management</h3>
                  <p className="text-white/70">Identify and mitigate compliance risks proactively</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <div className="animate-bounce">
              <ArrowRight className="h-6 w-6 text-white/50 rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative w-full py-24 md:py-32 bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
        <DecorativeShapes />

        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0085FF] to-[#0177E3] rounded-2xl blur opacity-20"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-3/4 h-3/4">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full animate-float blur-xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-3xl font-bold text-white mb-2">Wright Compliance</h3>
                        <p className="text-white/70">Est. 2010</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>
            </div>

            <div>
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                  Our Story
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Redefining Financial Compliance</h2>
              <p className="text-lg text-white/70 mb-6">
                Led by Belinda Wright, we've been transforming how businesses approach compliance since 2010. Our
                innovative methodology combines deep regulatory expertise with forward-thinking solutions.
              </p>
              <p className="text-lg text-white/70 mb-8">
                We believe compliance shouldn't be a burden, but a strategic advantage that propels your business
                forward while protecting what matters most.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 flex items-center justify-center mr-4">
                    <CheckCircle className="h-6 w-6 text-[#0085FF]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">15+ Years</h4>
                    <p className="text-white/70">Industry Experience</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-[#0085FF]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">200+</h4>
                    <p className="text-white/70">Satisfied Clients</p>
                  </div>
                </div>
              </div>

              <CustomButton variant="primary" asChild>
                <Link href="/about">
                  <span className="btn-content">
                    Learn More About Us <ArrowRight className="ml-2 h-5 w-5 btn-icon" />
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
