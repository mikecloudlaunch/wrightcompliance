import Link from "next/link"
import { ArrowRight, Shield, BookOpen, BarChart4, FileCheck, Users, Briefcase, CheckCircle } from "lucide-react"

import { CustomButton } from "@/components/ui/custom-button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Our Services
              </h1>
              <p className="max-w-[600px] mx-auto text-slate-300 md:text-xl">
                Comprehensive financial compliance solutions tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="afsl" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-slate-800">
              <TabsTrigger value="afsl" className="data-[state=active]:bg-teal-900 data-[state=active]:text-white">
                AFSL Compliance
              </TabsTrigger>
              <TabsTrigger
                value="regulatory"
                className="data-[state=active]:bg-teal-900 data-[state=active]:text-white"
              >
                Regulatory Advice
              </TabsTrigger>
              <TabsTrigger value="risk" className="data-[state=active]:bg-teal-900 data-[state=active]:text-white">
                Risk Management
              </TabsTrigger>
            </TabsList>
            <TabsContent value="afsl" className="mt-6 border rounded-lg border-slate-800 bg-slate-800/20 p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4">AFSL Compliance Services</h2>
                  <p className="text-slate-300 mb-4">
                    Our AFSL compliance services ensure your business meets all regulatory requirements while
                    maintaining operational efficiency.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <ServiceListItem text="AFSL application assistance and support" />
                    <ServiceListItem text="Compliance framework development" />
                    <ServiceListItem text="Compliance audits and reviews" />
                    <ServiceListItem text="Breach reporting and remediation" />
                    <ServiceListItem text="Compliance training for staff" />
                  </ul>
                  <CustomButton variant="primary" asChild>
                    <Link href="/contact">
                      <span className="btn-content">
                        Inquire About AFSL Services <ArrowRight className="ml-2 h-4 w-4 btn-icon" />
                      </span>
                    </Link>
                  </CustomButton>
                </div>
                <div className="md:w-1/3 w-full">
                  <div className="aspect-square rounded-lg bg-slate-800 flex items-center justify-center p-8">
                    <Shield className="h-24 w-24 text-teal-500/60" />
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="regulatory" className="mt-6 border rounded-lg border-slate-800 bg-slate-800/20 p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4">Regulatory Advice</h2>
                  <p className="text-slate-300 mb-4">
                    Stay ahead of regulatory changes with our expert guidance and practical advice.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <ServiceListItem text="Regulatory change management" />
                    <ServiceListItem text="Policy and procedure development" />
                    <ServiceListItem text="Regulatory interpretation and guidance" />
                    <ServiceListItem text="Compliance documentation" />
                    <ServiceListItem text="Regulatory engagement strategies" />
                  </ul>
                  <CustomButton variant="primary" asChild>
                    <Link href="/contact">
                      <span className="btn-content">
                        Get Regulatory Advice <ArrowRight className="ml-2 h-4 w-4 btn-icon" />
                      </span>
                    </Link>
                  </CustomButton>
                </div>
                <div className="md:w-1/3 w-full">
                  <div className="aspect-square rounded-lg bg-slate-800 flex items-center justify-center p-8">
                    <BookOpen className="h-24 w-24 text-teal-500/60" />
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="risk" className="mt-6 border rounded-lg border-slate-800 bg-slate-800/20 p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4">Risk Management</h2>
                  <p className="text-slate-300 mb-4">
                    Identify, assess, and mitigate compliance risks before they impact your business.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <ServiceListItem text="Compliance risk assessments" />
                    <ServiceListItem text="Risk management frameworks" />
                    <ServiceListItem text="Monitoring and testing programs" />
                    <ServiceListItem text="Incident management" />
                    <ServiceListItem text="Remediation planning" />
                  </ul>
                  <CustomButton variant="primary" asChild>
                    <Link href="/contact">
                      <span className="btn-content">
                        Explore Risk Management <ArrowRight className="ml-2 h-4 w-4 btn-icon" />
                      </span>
                    </Link>
                  </CustomButton>
                </div>
                <div className="md:w-1/3 w-full">
                  <div className="aspect-square rounded-lg bg-slate-800 flex items-center justify-center p-8">
                    <BarChart4 className="h-24 w-24 text-teal-500/60" />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-teal-900/20 px-3 py-1 text-sm text-teal-400">
                Additional Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Specialized Compliance Solutions
              </h2>
              <p className="max-w-[900px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Beyond our core services, we offer specialized solutions to address specific compliance needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
            <ServiceCard
              icon={<FileCheck className="h-10 w-10 text-teal-500" />}
              title="Compliance Reviews"
              description="Comprehensive assessment of your compliance framework against regulatory requirements."
            />
            <ServiceCard
              icon={<Users className="h-10 w-10 text-teal-500" />}
              title="Staff Training"
              description="Customized compliance training programs for your team members."
            />
            <ServiceCard
              icon={<Briefcase className="h-10 w-10 text-teal-500" />}
              title="Project Support"
              description="Specialized compliance support for specific projects or initiatives."
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
                Ready to Enhance Your Compliance?
              </h2>
              <p className="max-w-[900px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact Wright Compliance today to discuss your specific needs and how we can help.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <CustomButton variant="shine" size="lg" asChild>
                <Link href="/contact">
                  <span className="btn-content">
                    Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4 btn-icon" />
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

function ServiceCard({ icon, title, description }) {
  return (
    <Card className="group relative overflow-hidden bg-slate-800/50 border-slate-700 transition-all duration-300 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/20 card-hover-effect">
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-slate-300">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <CustomButton variant="link" asChild>
          <Link href="/contact" className="flex items-center">
            Learn more <ArrowRight className="ml-1 h-4 w-4 link-icon" />
          </Link>
        </CustomButton>
      </CardFooter>
    </Card>
  )
}

function ServiceListItem({ text }) {
  return (
    <li className="flex items-center">
      <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
      <span className="text-slate-300">{text}</span>
    </li>
  )
}
