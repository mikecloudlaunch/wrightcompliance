"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowRight, Eye, EyeOff } from "lucide-react"

import { CustomButton } from "@/components/ui/custom-button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function SignupPage() {
  const { toast } = useToast()
  const searchParams = useSearchParams()
  const planParam = searchParams.get("plan")

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    plan: planParam || "professional",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic validation
    if (formState.password !== formState.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please ensure both passwords match.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // In a real implementation, you would call your API to create the user
    // For demo purposes, we'll simulate a delay and success
    setTimeout(() => {
      console.log("Form submitted:", formState)

      toast({
        title: "Account created successfully!",
        description: "Redirecting you to the dashboard...",
      })

      // Redirect to dashboard after successful signup
      // In a real implementation, this would happen after authentication
      window.location.href = "/membership/dashboard"

      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen bg-[#0f172a]">
      <div className="flex-1 hidden lg:block relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#212A37] to-[#0f172a]"></div>
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold text-white mb-6">Join Our Compliance Training Hub</h1>
            <p className="text-xl text-white/70 mb-8">
              Access premium training videos and resources to enhance your compliance knowledge and stay ahead of
              regulatory changes.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                  <span className="text-blue-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Create Your Account</h3>
                  <p className="text-white/70">Sign up with your email and create a secure password.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                  <span className="text-blue-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Choose Your Plan</h3>
                  <p className="text-white/70">Select the membership plan that suits your needs.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                  <span className="text-blue-400 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Access Premium Content</h3>
                  <p className="text-white/70">
                    Instantly gain access to our library of training videos and resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <Card className="w-full max-w-md bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Create Your Account</CardTitle>
            <CardDescription className="text-slate-300">
              Sign up to access premium compliance training videos.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                    className="bg-slate-900 border-slate-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                    placeholder="Smith"
                    required
                    className="bg-slate-900 border-slate-700 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-slate-900 border-slate-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-white">
                  Company (Optional)
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  placeholder="Your Company Ltd"
                  className="bg-slate-900 border-slate-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formState.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="bg-slate-900 border-slate-700 text-white pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-white">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formState.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="bg-slate-900 border-slate-700 text-white pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="plan" className="text-white">
                  Membership Plan
                </Label>
                <select
                  id="plan"
                  name="plan"
                  value={formState.plan}
                  onChange={handleChange}
                  className="w-full rounded-md border border-slate-700 bg-slate-900 text-white px-3 py-2"
                >
                  <option value="basic">Basic - $49/month</option>
                  <option value="professional">Professional - $99/month</option>
                  <option value="enterprise">Enterprise - $299/month</option>
                </select>
              </div>

              <div className="pt-2">
                <CustomButton variant="primary" className="w-full" type="submit" disabled={isLoading}>
                  <span className="btn-content">
                    {isLoading ? "Creating Account..." : "Create Account"}
                    {!isLoading && <ArrowRight className="ml-2 h-4 w-4 btn-icon" />}
                  </span>
                </CustomButton>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-slate-400 text-center">
              By creating an account, you agree to our{" "}
              <Link href="#" className="text-blue-400 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-blue-400 hover:underline">
                Privacy Policy
              </Link>
              .
            </div>
            <div className="text-sm text-slate-400 text-center">
              Already have an account?{" "}
              <Link href="/membership/login" className="text-blue-400 hover:underline">
                Log in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
