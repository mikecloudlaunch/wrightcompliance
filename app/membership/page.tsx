import Link from "next/link"
import { ArrowRight, CheckCircle, Play, Shield, Users } from "lucide-react"
import { CustomButton } from "@/components/ui/custom-button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DecorativeShapes, FloatingShapes } from "@/components/ui/decorative_shapes"

export default function MembershipPage() {
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
                Exclusive Member Access
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Compliance Training Hub</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
              Access premium training videos and resources to enhance your compliance knowledge and stay ahead of
              regulatory changes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CustomButton variant="primary" size="lg" asChild>
                <Link href="/membership/signup">
                  <span className="btn-content">
                    Join Membership <ArrowRight className="ml-2 h-5 w-5 btn-icon" />
                  </span>
                </Link>
              </CustomButton>
              <CustomButton variant="secondary" size="lg" asChild>
                <Link href="/membership/login">
                  <span className="btn-content">
                    Member Login <ArrowRight className="ml-2 h-5 w-5 btn-icon" />
                  </span>
                </Link>
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="relative w-full py-16 md:py-24 bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
        <DecorativeShapes />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                Membership Benefits
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Join Our Training Hub?</h2>
            <p className="text-lg text-white/70">
              Gain access to expert-led training videos and resources designed to enhance your compliance knowledge and
              skills.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<Play className="h-10 w-10 text-[#0085FF]" />}
              title="Premium Training Videos"
              description="Access our library of high-quality training videos covering all aspects of financial compliance."
            />
            <BenefitCard
              icon={<Shield className="h-10 w-10 text-[#0085FF]" />}
              title="Regulatory Updates"
              description="Stay informed with the latest regulatory changes and compliance requirements."
            />
            <BenefitCard
              icon={<Users className="h-10 w-10 text-[#0085FF]" />}
              title="Expert Community"
              description="Connect with compliance professionals and learn from industry experts."
            />
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="relative w-full py-16 md:py-24 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <FloatingShapes />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                Membership Plans
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Membership</h2>
            <p className="text-lg text-white/70">Select the plan that best suits your compliance training needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Basic"
              price="$49"
              period="per month"
              description="Essential compliance training for individuals."
              features={[
                "Access to core training videos",
                "Monthly regulatory updates",
                "Basic compliance templates",
                "Email support",
              ]}
              buttonText="Get Started"
              buttonLink="/membership/signup?plan=basic"
              highlighted={false}
            />
            <PricingCard
              title="Professional"
              price="$99"
              period="per month"
              description="Comprehensive training for compliance professionals."
              features={[
                "Full access to all training videos",
                "Weekly regulatory updates",
                "Advanced compliance templates",
                "Priority email support",
                "Monthly Q&A sessions",
              ]}
              buttonText="Join Pro"
              buttonLink="/membership/signup?plan=professional"
              highlighted={true}
            />
            <PricingCard
              title="Enterprise"
              price="$299"
              period="per month"
              description="Complete solution for compliance teams."
              features={[
                "Unlimited access for up to 10 team members",
                "Custom training modules",
                "Real-time regulatory alerts",
                "Dedicated account manager",
                "Quarterly compliance reviews",
              ]}
              buttonText="Contact Sales"
              buttonLink="/contact?inquiry=enterprise"
              highlighted={false}
            />
          </div>
        </div>
      </section>

      {/* Featured Videos Preview Section */}
      <section className="relative w-full py-16 md:py-24 bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
        <DecorativeShapes />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                Featured Content
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Preview Our Training Videos</h2>
            <p className="text-lg text-white/70">
              Get a glimpse of the high-quality training content available to our members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VideoPreviewCard
              title="AFSL Compliance Essentials"
              duration="45 min"
              thumbnail="/placeholder.svg?height=200&width=350"
              instructor="Belinda Wright"
              category="Fundamentals"
            />
            <VideoPreviewCard
              title="Regulatory Reporting Best Practices"
              duration="38 min"
              thumbnail="/placeholder.svg?height=200&width=350"
              instructor="Michael Chen"
              category="Reporting"
            />
            <VideoPreviewCard
              title="Risk Management Framework"
              duration="52 min"
              thumbnail="/placeholder.svg?height=200&width=350"
              instructor="Sarah Johnson"
              category="Risk Management"
            />
          </div>

          <div className="mt-12 text-center">
            <CustomButton variant="primary" asChild>
              <Link href="/membership/signup">
                <span className="btn-content">
                  Unlock Full Library <ArrowRight className="ml-2 h-5 w-5 btn-icon" />
                </span>
              </Link>
            </CustomButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-[#212A37] to-[#0f172a] overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0085FF] to-[#0177E3] rounded-2xl blur opacity-30"></div>
            <div className="card-glass p-8 md:p-12 text-center">
              <div className="card-glass-content">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Ready to Enhance Your Compliance Knowledge?
                </h2>
                <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                  Join our membership today and gain access to premium training videos and resources.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CustomButton variant="primary" size="lg" asChild>
                    <Link href="/membership/signup">
                      <span className="btn-content">
                        Join Now <ArrowRight className="ml-2 h-5 w-5 btn-icon" />
                      </span>
                    </Link>
                  </CustomButton>
                  <CustomButton variant="secondary" size="lg" asChild>
                    <Link href="/contact">
                      <span className="btn-content">Contact Us</span>
                    </Link>
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

function BenefitCard({ icon, title, description }) {
  return (
    <Card className="group relative overflow-hidden bg-slate-800/50 border-slate-700 transition-all duration-300 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/20 card-hover-effect">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-slate-300">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function PricingCard({ title, price, period, description, features, buttonText, buttonLink, highlighted }) {
  return (
    <div className="group relative">
      {highlighted && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0085FF] to-[#0177E3] rounded-2xl blur opacity-30"></div>
      )}
      <Card
        className={`h-full ${highlighted ? "border-blue-500 bg-slate-800/70" : "bg-slate-800/50 border-slate-700"} transition-all duration-300 group-hover:translate-y-[-5px]`}
      >
        <CardHeader>
          <CardTitle className="text-xl text-white">{title}</CardTitle>
          <div className="mt-4">
            <span className="text-3xl font-bold text-white">{price}</span>
            <span className="text-slate-400 ml-1">{period}</span>
          </div>
          <CardDescription className="text-slate-300 mt-2">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#0085FF] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <CustomButton variant={highlighted ? "primary" : "secondary"} className="w-full" asChild>
            <Link href={buttonLink}>
              <span className="btn-content">{buttonText}</span>
            </Link>
          </CustomButton>
        </CardFooter>
      </Card>
    </div>
  )
}

function VideoPreviewCard({ title, duration, thumbnail, instructor, category }) {
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
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">
              {category}
            </span>
          </div>
          <CardTitle className="text-lg text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-400">Instructor: {instructor}</p>
        </CardContent>
        <CardFooter>
          <CustomButton variant="secondary" size="sm" className="w-full" asChild>
            <Link href="/membership/signup">
              <span className="btn-content">
                <Play className="h-4 w-4 mr-2" /> Preview
              </span>
            </Link>
          </CustomButton>
        </CardFooter>
      </Card>
    </div>
  )
}
