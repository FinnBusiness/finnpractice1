"use client"

import { useState } from "react"
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "601 S Lyons Ave STE 300",
    subValue: "Sioux Falls, SD 57106",
    href: "https://maps.google.com/?q=601+S+Lyons+Ave+STE+300+Sioux+Falls+SD+57106",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(605) 215-7921",
    href: "tel:+16052157921",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sat: 8AM - 6PM",
    subValue: "Sunday: Closed",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@gomeztint.com",
    href: "mailto:info@gomeztint.com",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Contact</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Ready to enhance your vehicle, home, or business? Contact us today for a free quote.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => (
                <Card key={item.label} className="border border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-foreground hover:underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{item.value}</p>
                        )}
                        {item.subValue && (
                          <p className="text-sm text-muted-foreground">{item.subValue}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Embed */}
            <div className="mt-8 rounded-xl overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.8!2d-96.7523!3d43.5460!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDMyJzQ1LjYiTiA5NsKwNDUnOC4zIlc!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gomez Tint LLC Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border border-border">
              <CardHeader>
                <CardTitle>Request a Free Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="py-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Thank You!</h3>
                    <p className="mt-2 text-muted-foreground">
                      We've received your message and will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="name">Name</FieldLabel>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                        />
                      </Field>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field>
                          <FieldLabel htmlFor="email">Email</FieldLabel>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your@email.com"
                          />
                        </Field>

                        <Field>
                          <FieldLabel htmlFor="phone">Phone</FieldLabel>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(555) 555-5555"
                          />
                        </Field>
                      </div>

                      <Field>
                        <FieldLabel htmlFor="service">Service Interested In</FieldLabel>
                        <select
                          id="service"
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        >
                          <option value="">Select a service</option>
                          <option value="automotive">Automotive Tinting</option>
                          <option value="residential">Residential Tinting</option>
                          <option value="commercial">Commercial Tinting</option>
                          <option value="ppf">Paint Protection Film</option>
                          <option value="mobile">Mobile Service</option>
                          <option value="other">Other</option>
                        </select>
                      </Field>

                      <Field>
                        <FieldLabel htmlFor="message">Message</FieldLabel>
                        <Textarea
                          id="message"
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your project..."
                        />
                      </Field>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </FieldGroup>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
