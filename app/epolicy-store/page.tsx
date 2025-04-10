import Link from "next/link"
import { ArrowRight, FileText, Search, ShoppingCart, Star, Filter } from "lucide-react"

import { CustomButton } from "@/components/ui/custom-button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DecorativeShapes, FloatingShapes } from "@/components/ui/decorative_shapes"

export default function EPolicyStorePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 bg-gradient-to-br from-slate-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <FloatingShapes />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-sm font-medium bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
                Digital Compliance Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">ePolicy Store</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
              Professional compliance templates, policies, and guides created by industry expert Belinda Wright.
            </p>

            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <Input
                type="search"
                placeholder="Search for policies, templates, guides..."
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-slate-400 h-12 rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="relative w-full py-16 md:py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
        <DecorativeShapes />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <span className="text-sm font-medium bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
                  Featured Products
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Best Selling Policies</h2>
            </div>
            <div className="mt-4 md:mt-0">
              <CustomButton variant="secondary" asChild>
                <Link href="#all-products">
                  <span className="btn-content">
                    View All Products <ArrowRight className="ml-2 h-4 w-4 btn-icon" />
                  </span>
                </Link>
              </CustomButton>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeaturedProductCard
              title="AFSL Compliance Framework"
              description="A comprehensive compliance framework template for Australian Financial Services License holders."
              price="$499"
              rating={5}
              category="Framework"
              featured={true}
            />
            <FeaturedProductCard
              title="Breach Reporting Policy"
              description="Complete policy and procedure for identifying, managing, and reporting regulatory breaches."
              price="$299"
              rating={4.8}
              category="Policy"
            />
            <FeaturedProductCard
              title="Risk Management Toolkit"
              description="Essential templates and guides for implementing a robust risk management system."
              price="$399"
              rating={4.9}
              category="Toolkit"
            />
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section id="all-products" className="relative w-full py-16 md:py-24 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <FloatingShapes />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 lg:w-72">
              <div className="sticky top-24">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Filters</h3>
                    <Filter className="h-5 w-5 text-teal-400" />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium text-white mb-3">Categories</h4>
                      <div className="space-y-2">
                        <FilterCheckbox label="Policies" count={12} />
                        <FilterCheckbox label="Templates" count={8} />
                        <FilterCheckbox label="Frameworks" count={5} />
                        <FilterCheckbox label="Guides" count={7} />
                        <FilterCheckbox label="Toolkits" count={4} />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-white mb-3">Price Range</h4>
                      <div className="space-y-2">
                        <FilterCheckbox label="Under $100" count={6} />
                        <FilterCheckbox label="$100 - $299" count={14} />
                        <FilterCheckbox label="$300 - $499" count={10} />
                        <FilterCheckbox label="$500+" count={6} />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-white mb-3">Compliance Area</h4>
                      <div className="space-y-2">
                        <FilterCheckbox label="AFSL" count={15} />
                        <FilterCheckbox label="Risk Management" count={12} />
                        <FilterCheckbox label="Regulatory Reporting" count={8} />
                        <FilterCheckbox label="Training" count={5} />
                        <FilterCheckbox label="Documentation" count={9} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-white">All Products</h2>
                <div className="flex items-center mt-4 md:mt-0 space-x-2">
                  <span className="text-sm text-slate-400">Sort by:</span>
                  <select className="bg-slate-800 border border-slate-700 text-white rounded-md text-sm py-1 px-2">
                    <option>Most Popular</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>

              <Tabs defaultValue="all" className="w-full mb-8">
                <TabsList className="bg-slate-800 w-full md:w-auto inline-flex">
                  <TabsTrigger value="all" className="data-[state=active]:bg-teal-900 data-[state=active]:text-white">
                    All
                  </TabsTrigger>
                  <TabsTrigger
                    value="policies"
                    className="data-[state=active]:bg-teal-900 data-[state=active]:text-white"
                  >
                    Policies
                  </TabsTrigger>
                  <TabsTrigger
                    value="templates"
                    className="data-[state=active]:bg-teal-900 data-[state=active]:text-white"
                  >
                    Templates
                  </TabsTrigger>
                  <TabsTrigger
                    value="guides"
                    className="data-[state=active]:bg-teal-900 data-[state=active]:text-white"
                  >
                    Guides
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ProductCard
                      title="AFSL Compliance Framework"
                      description="A comprehensive compliance framework template for Australian Financial Services License holders."
                      price="$499"
                      category="Framework"
                    />
                    <ProductCard
                      title="Breach Reporting Policy"
                      description="Complete policy and procedure for identifying, managing, and reporting regulatory breaches."
                      price="$299"
                      category="Policy"
                    />
                    <ProductCard
                      title="Risk Management Toolkit"
                      description="Essential templates and guides for implementing a robust risk management system."
                      price="$399"
                      category="Toolkit"
                    />
                    <ProductCard
                      title="Conflicts of Interest Policy"
                      description="Policy template for managing and disclosing conflicts of interest in financial services."
                      price="$249"
                      category="Policy"
                    />
                    <ProductCard
                      title="Compliance Monitoring Program"
                      description="Structured program for ongoing monitoring of compliance obligations."
                      price="$349"
                      category="Template"
                    />
                    <ProductCard
                      title="AML/CTF Procedures Guide"
                      description="Comprehensive guide to Anti-Money Laundering and Counter-Terrorism Financing procedures."
                      price="$399"
                      category="Guide"
                    />
                    <ProductCard
                      title="Board Reporting Templates"
                      description="Templates for effective compliance reporting to boards and committees."
                      price="$199"
                      category="Template"
                    />
                    <ProductCard
                      title="Compliance Training Materials"
                      description="Ready-to-use training materials for staff compliance education."
                      price="$299"
                      category="Toolkit"
                    />
                    <ProductCard
                      title="Regulatory Change Framework"
                      description="Framework for identifying, assessing and implementing regulatory changes."
                      price="$349"
                      category="Framework"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="policies" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ProductCard
                      title="Breach Reporting Policy"
                      description="Complete policy and procedure for identifying, managing, and reporting regulatory breaches."
                      price="$299"
                      category="Policy"
                    />
                    <ProductCard
                      title="Conflicts of Interest Policy"
                      description="Policy template for managing and disclosing conflicts of interest in financial services."
                      price="$249"
                      category="Policy"
                    />
                    <ProductCard
                      title="Privacy Policy for AFSL Holders"
                      description="Comprehensive privacy policy tailored for financial services providers."
                      price="$199"
                      category="Policy"
                    />
                    <ProductCard
                      title="Complaints Handling Policy"
                      description="Policy and procedures for effective management of customer complaints."
                      price="$249"
                      category="Policy"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="templates" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ProductCard
                      title="Compliance Monitoring Program"
                      description="Structured program for ongoing monitoring of compliance obligations."
                      price="$349"
                      category="Template"
                    />
                    <ProductCard
                      title="Board Reporting Templates"
                      description="Templates for effective compliance reporting to boards and committees."
                      price="$199"
                      category="Template"
                    />
                    <ProductCard
                      title="Risk Register Template"
                      description="Comprehensive risk register template with assessment methodology."
                      price="$149"
                      category="Template"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="guides" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ProductCard
                      title="AML/CTF Procedures Guide"
                      description="Comprehensive guide to Anti-Money Laundering and Counter-Terrorism Financing procedures."
                      price="$399"
                      category="Guide"
                    />
                    <ProductCard
                      title="AFSL Compliance Guide"
                      description="Step-by-step guide to maintaining AFSL compliance."
                      price="$299"
                      category="Guide"
                    />
                    <ProductCard
                      title="Regulatory Reporting Guide"
                      description="Detailed guide to regulatory reporting requirements and best practices."
                      price="$249"
                      category="Guide"
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex justify-center mt-12">
                <CustomButton variant="secondary">
                  <span className="btn-content">Load More Products</span>
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative w-full py-16 md:py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
        <DecorativeShapes />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-sm font-medium bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
                Client Feedback
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-lg text-white/70">
              Hear from compliance professionals who have used our digital products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The AFSL Compliance Framework saved us countless hours of work. It's comprehensive and easy to customize to our specific needs."
              author="Michael Chen"
              role="Compliance Manager, Wealth Advisors"
              rating={5}
            />
            <TestimonialCard
              quote="Belinda's Risk Management Toolkit has become our go-to resource. The templates are professional and the guidance is practical."
              author="Sarah Johnson"
              role="Risk Officer, Financial Partners Ltd"
              rating={5}
            />
            <TestimonialCard
              quote="The Breach Reporting Policy was exactly what we needed to ensure we're meeting our regulatory obligations. Excellent value."
              author="Emma Thompson"
              role="Director of Compliance, Pacific Investments"
              rating={4.5}
            />
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Need a Custom Solution?</h2>
                <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                  Can't find exactly what you need? Contact us for custom compliance solutions tailored to your specific
                  requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CustomButton variant="primary" size="lg" asChild>
                    <Link href="/contact">
                      <span className="btn-content">
                        Request Custom Solution <ArrowRight className="ml-2 h-5 w-5 btn-icon" />
                      </span>
                    </Link>
                  </CustomButton>
                  <CustomButton variant="secondary" size="lg" asChild>
                    <Link href="/services">
                      <span className="btn-content">Explore Our Services</span>
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

function FeaturedProductCard({ title, description, price, rating, category, featured = false }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-teal-300 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      <Card className="h-full bg-slate-800/50 border-slate-700 transition-all duration-300 group-hover:translate-y-[-5px] overflow-hidden">
        {featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-blue-600 hover:bg-blue-700 text-white">Featured</Badge>
          </div>
        )}
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-teal-400 border-teal-400/30">
              {category}
            </Badge>
            <div className="flex items-center ml-auto">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm text-white ml-1">{rating}</span>
            </div>
          </div>
          <CardTitle className="text-xl text-white">{title}</CardTitle>
          <CardDescription className="text-slate-300">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-white">{price}</span>
            <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">Digital Download</Badge>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <CustomButton variant="primary" className="w-full">
            <span className="btn-content">
              <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
            </span>
          </CustomButton>
          <CustomButton variant="secondary" className="w-full">
            <span className="btn-content">
              <FileText className="h-4 w-4 mr-2" /> Preview
            </span>
          </CustomButton>
        </CardFooter>
      </Card>
    </div>
  )
}

function ProductCard({ title, description, price, category }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-teal-300 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      <Card className="h-full bg-slate-800/50 border-slate-700 transition-all duration-300 group-hover:translate-y-[-5px]">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-teal-400 border-teal-400/30">
              {category}
            </Badge>
          </div>
          <CardTitle className="text-lg text-white">{title}</CardTitle>
          <CardDescription className="text-slate-300 text-sm">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <span className="text-xl font-bold text-white">{price}</span>
        </CardContent>
        <CardFooter className="flex justify-between">
          <CustomButton variant="secondary" size="sm">
            <span className="btn-content">
              <FileText className="h-4 w-4 mr-2" /> Details
            </span>
          </CustomButton>
          <CustomButton variant="primary" size="sm">
            <span className="btn-content">
              <ShoppingCart className="h-4 w-4 mr-2" /> Buy Now
            </span>
          </CustomButton>
        </CardFooter>
      </Card>
    </div>
  )
}

function TestimonialCard({ quote, author, role, rating }) {
  return (
    <div className="relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-teal-300 rounded-2xl blur opacity-10"></div>
      <Card className="h-full bg-slate-800/50 border-slate-700">
        <CardHeader>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-slate-600"}`}
              />
            ))}
            {rating % 1 !== 0 && (
              <div className="relative">
                <Star className="h-4 w-4 text-slate-600" />
                <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${(rating % 1) * 100}%` }}>
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                </div>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-white/80 italic mb-6">"{quote}"</p>
          <div>
            <p className="font-semibold text-white">{author}</p>
            <p className="text-white/60 text-sm">{role}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function FilterCheckbox({ label, count }) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={label}
        className="h-4 w-4 rounded border-slate-600 bg-slate-700 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-900"
      />
      <label htmlFor={label} className="ml-2 text-sm text-slate-300 flex-1">
        {label}
      </label>
      <span className="text-xs text-slate-500">({count})</span>
    </div>
  )
}
