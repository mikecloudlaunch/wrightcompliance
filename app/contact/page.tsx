"use client"

import { useState } from "react"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

import { CustomButton } from "@/components/ui/custom-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormState((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, you would send this data to your backend
    console.log("Form submitted:", formState)

    toast({
      title: "Form submitted",
      description: "Thank you for contacting Wright Compliance. We'll be in touch soon.",
    })

    // Reset form
    setFormState({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Contact Us
              </h1>
              <p className="max-w-[600px] mx-auto text-slate-300 md:text-xl">
                Get in touch with our team to discuss your compliance needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="flex flex-col space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Get in Touch</h2>
                <p className="text-slate-300 md:text-lg">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Contact Information</CardTitle>
                  <CardDescription className="text-slate-300">
                    Reach out to us directly using the information below.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-teal-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-white">Office Location</h3>
                      <p className="text-slate-300">123 Financial District, Sydney NSW 2000, Australia</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-teal-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-white">Phone</h3>
                      <p className="text-slate-300">+61 2 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-teal-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-white">Email</h3>
                      <p className="text-slate-300">info@wrightcompliance.com.au</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Business Hours</h3>
                <p className="text-slate-300">Monday - Friday: 9:00 AM - 5:00 PM AEST</p>
                <p className="text-slate-300">Saturday - Sunday: Closed</p>
              </div>
            </div>

            <div>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Send Us a Message</CardTitle>
                  <CardDescription className="text-slate-300">
                    Complete the form below to start the conversation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name" className="text-white">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Smith"
                          value={formState.name}
                          onChange={handleChange}
                          className="bg-slate-900 border-slate-700 text-white"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email" className="text-white">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formState.email}
                          onChange={handleChange}
                          className="bg-slate-900 border-slate-700 text-white"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="company" className="text-white">
                          Company
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your Company Ltd"
                          value={formState.company}
                          onChange={handleChange}
                          className="bg-slate-900 border-slate-700 text-white"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="service" className="text-white">
                          Service of Interest
                        </Label>
                        <Select value={formState.service} onValueChange={handleSelectChange}>
                          <SelectTrigger id="service" className="bg-slate-900 border-slate-700 text-white">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-900 border-slate-700">
                            <SelectItem value="afsl">AFSL Compliance</SelectItem>
                            <SelectItem value="regulatory">Regulatory Advice</SelectItem>
                            <SelectItem value="risk">Risk Management</SelectItem>
                            <SelectItem value="training">Staff Training</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="message" className="text-white">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Please describe your compliance needs..."
                          value={formState.message}
                          onChange={handleChange}
                          className="min-h-[120px] bg-slate-900 border-slate-700 text-white"
                          required
                        />
                      </div>
                    </div>
                    <CustomButton variant="pulse" type="submit" className="w-full">
                      <span className="btn-content">
                        Send Message <ArrowRight className="ml-2 h-4 w-4 btn-icon" />
                      </span>
                    </CustomButton>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Visit Our Office</h2>
              <p className="max-w-[600px] mx-auto text-slate-300 md:text-lg">
                Located in the heart of Sydney's financial district.
              </p>
            </div>
          </div>
          <div className="w-full h-[400px] rounded-lg overflow-hidden border border-slate-800">
            <div className="w-full h-full bg-slate-800 flex items-center justify-center">
              <MapPin className="h-16 w-16 text-teal-500/30" />
              <p className="text-slate-400 ml-2">Map placeholder - Sydney CBD location</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
