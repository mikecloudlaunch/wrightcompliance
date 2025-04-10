"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Eye, EyeOff } from "lucide-react"

import { CustomButton } from "@/components/ui/custom-button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const { toast } = useToast()
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // In a real implementation, you would call your API to authenticate the user
    // For demo purposes, we'll simulate a delay and success
    setTimeout(() => {
      console.log("Login submitted:", formState)

      toast({
        title: "Login successful!",
        description: "Redirecting you to the dashboard...",
      })

      // Redirect to dashboard after successful login
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
            <h1 className="text-4xl font-bold text-white mb-6">Welcome Back</h1>
            <p className="text-xl text-white/70 mb-8">
              Log in to access your membership and continue your compliance training journey.
            </p>
            <div className="relative mt-12">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0085FF] to-[#0177E3] rounded-2xl blur opacity-30"></div>
              <div className="card-glass p-8">
                <div className="card-glass-content">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=48&width=48"
                        alt="Member testimonial"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-white font-medium">Sarah Johnson</p>
                      <p className="text-white/60 text-sm">Compliance Officer</p>
                    </div>
                  </div>
                  <p className="text-white/80 italic">
                    "The training videos have been invaluable for keeping our team updated on regulatory changes. The
                    quality of content is exceptional."
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
            <CardTitle className="text-2xl text-white">Log In</CardTitle>
            <CardDescription className="text-slate-300">Access your membership account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <Link href="/membership/forgot-password" className="text-sm text-blue-400 hover:underline">
                    Forgot password?
                  </Link>
                </div>
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

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formState.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-slate-600 bg-slate-700 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-900"
                />
                <Label htmlFor="rememberMe" className="text-white text-sm">
                  Remember me
                </Label>
              </div>

              <div className="pt-2">
                <CustomButton variant="primary" className="w-full" type="submit" disabled={isLoading}>
                  <span className="btn-content">
                    {isLoading ? "Logging in..." : "Log In"}
                    {!isLoading && <ArrowRight className="ml-2 h-4 w-4 btn-icon" />}
                  </span>
                </CustomButton>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-sm text-slate-400">
              Don't have an account?{" "}
              <Link href="/membership/signup" className="text-blue-400 hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
