import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"
import { Poppins } from "next/font/google"

import { Button } from "@/components/ui/button"
import { CustomButton } from "@/components/ui/custom-button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

import "./globals.css"

// Load Poppins font with multiple weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata = {
  title: "Wright Compliance | Financial Compliance Consulting",
  description: "Expert AFSL compliance consulting services led by Belinda Wright",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <body className="min-h-screen bg-[#0f172a] text-slate-50 antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-md">
              <div className="container flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                    Wright Compliance
                  </span>
                </Link>
                <nav className="hidden md:flex gap-8">
                  <Link href="/" className="nav-link">
                    Home
                  </Link>
                  <Link href="/about" className="nav-link">
                    About
                  </Link>
                  <Link href="/services" className="nav-link">
                    Services
                  </Link>
                  <Link href="/epolicy-store" className="nav-link">
                    ePolicy Store
                  </Link>
                  <Link href="/contact" className="nav-link">
                    Contact
                  </Link>
                </nav>
                <div className="hidden md:flex">
                  <CustomButton variant="primary" asChild>
                    <Link href="/contact">
                      <span className="btn-content">
                        Get Started <ArrowRight className="ml-2 h-4 w-4 btn-icon" />
                      </span>
                    </Link>
                  </CustomButton>
                </div>
                <Sheet>
                  <SheetTrigger asChild className="md:hidden">
                    <Button variant="outline" size="icon" className="border-white/10 bg-white/5">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="bg-[#0f172a] border-white/10">
                    <div className="flex items-center justify-between">
                      <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                          Wright Compliance
                        </span>
                      </Link>
                      <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="border-white/10 bg-white/5">
                          <X className="h-5 w-5" />
                          <span className="sr-only">Close menu</span>
                        </Button>
                      </SheetTrigger>
                    </div>
                    <nav className="mt-12 flex flex-col gap-6">
                      <Link href="/" className="text-lg font-medium text-white/70 hover:text-white transition-colors">
                        Home
                      </Link>
                      <Link
                        href="/about"
                        className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                      >
                        About
                      </Link>
                      <Link
                        href="/services"
                        className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                      >
                        Services
                      </Link>
                      <Link
                        href="/epolicy-store"
                        className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                      >
                        ePolicy Store
                      </Link>
                      <Link
                        href="/contact"
                        className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                      >
                        Contact
                      </Link>
                      <CustomButton variant="primary" asChild className="mt-4">
                        <Link href="/contact">
                          <span className="btn-content">
                            Get Started <ArrowRight className="ml-2 h-4 w-4 btn-icon" />
                          </span>
                        </Link>
                      </CustomButton>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="relative border-t border-white/10 bg-[#0f172a]">
              <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
              <div className="container py-12 md:py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div>
                    <Link href="/" className="flex items-center space-x-2">
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                        Wright Compliance
                      </span>
                    </Link>
                    <p className="mt-4 text-white/60">
                      Innovative financial compliance consulting services led by Belinda Wright.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Pages</h3>
                      <ul className="space-y-3">
                        <li>
                          <Link href="/" className="text-white/60 hover:text-white transition-colors">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link href="/about" className="text-white/60 hover:text-white transition-colors">
                            About
                          </Link>
                        </li>
                        <li>
                          <Link href="/services" className="text-white/60 hover:text-white transition-colors">
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link href="/epolicy-store" className="text-white/60 hover:text-white transition-colors">
                            ePolicy Store
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact" className="text-white/60 hover:text-white transition-colors">
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">Services</h3>
                      <ul className="space-y-3">
                        <li>
                          <Link href="/services" className="text-white/60 hover:text-white transition-colors">
                            AFSL Compliance
                          </Link>
                        </li>
                        <li>
                          <Link href="/services" className="text-white/60 hover:text-white transition-colors">
                            Regulatory Advice
                          </Link>
                        </li>
                        <li>
                          <Link href="/services" className="text-white/60 hover:text-white transition-colors">
                            Risk Management
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-4">Contact</h3>
                    <address className="not-italic text-white/60 space-y-3">
                      <p>123 Financial District</p>
                      <p>Sydney NSW 2000, Australia</p>
                      <p>+61 2 1234 5678</p>
                      <p>info@wrightcompliance.com.au</p>
                    </address>
                  </div>
                </div>
                <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                  <p className="text-sm text-white/40">
                    © {new Date().getFullYear()} Wright Compliance. All rights reserved.
                  </p>
                  <div className="mt-4 md:mt-0 flex space-x-6">
                    <Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                    <Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">
                      Terms of Service
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'