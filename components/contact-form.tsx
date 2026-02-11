"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, Loader2, ArrowRight } from "lucide-react"
import { StarBurst } from "./desert-scene"

interface FormData {
  name: string
  email: string
  phone: string
  eventType: string
  eventDate: string
  location: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    location: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border p-12 text-center">
        <StarBurst className="w-10 h-10 text-primary mx-auto mb-6" />
        <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
          Thank You!
        </h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          {"We've received your inquiry and will get back to you within 24-48 hours to discuss your event."}
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false)
            setFormData({
              name: "",
              email: "",
              phone: "",
              eventType: "",
              eventDate: "",
              location: "",
              message: "",
            })
          }}
          variant="outline"
          className="rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background text-xs uppercase tracking-[0.15em] px-6 bg-transparent"
        >
          Send Another Inquiry
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground text-xs uppercase tracking-wider">
            Your Name <span className="text-primary">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="bg-input border-border text-foreground placeholder:text-muted-foreground/50 rounded-none"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground text-xs uppercase tracking-wider">
            Email Address <span className="text-primary">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="bg-input border-border text-foreground placeholder:text-muted-foreground/50 rounded-none"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground text-xs uppercase tracking-wider">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            className="bg-input border-border text-foreground placeholder:text-muted-foreground/50 rounded-none"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="eventType" className="text-foreground text-xs uppercase tracking-wider">
            Event Type <span className="text-primary">*</span>
          </Label>
          <select
            id="eventType"
            name="eventType"
            required
            value={formData.eventType}
            onChange={handleChange}
            className="w-full h-10 px-3 bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded-none text-sm"
          >
            <option value="">Select event type</option>
            <option value="parade">Parade</option>
            <option value="festival">Festival</option>
            <option value="fair">County Fair</option>
            <option value="rodeo">Rodeo</option>
            <option value="celebration">Community Celebration</option>
            <option value="private">Private Event</option>
            <option value="holiday">Holiday Event</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="eventDate" className="text-foreground text-xs uppercase tracking-wider">
            Event Date <span className="text-primary">*</span>
          </Label>
          <Input
            id="eventDate"
            name="eventDate"
            type="date"
            required
            value={formData.eventDate}
            onChange={handleChange}
            className="bg-input border-border text-foreground rounded-none"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location" className="text-foreground text-xs uppercase tracking-wider">
            Event Location <span className="text-primary">*</span>
          </Label>
          <Input
            id="location"
            name="location"
            type="text"
            required
            value={formData.location}
            onChange={handleChange}
            placeholder="City, Arizona"
            className="bg-input border-border text-foreground placeholder:text-muted-foreground/50 rounded-none"
          />
        </div>
      </div>

      <div className="space-y-2 mt-6">
        <Label htmlFor="message" className="text-foreground text-xs uppercase tracking-wider">
          Tell Us About Your Event
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Share details about your event, expected audience size, specific songs you'd like, or any other information..."
          rows={5}
          className="bg-input border-border text-foreground placeholder:text-muted-foreground/50 resize-none rounded-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-sm uppercase tracking-[0.15em] rounded-none"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Inquiry
            <ArrowRight className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>

      <p className="text-muted-foreground text-xs text-center mt-4 uppercase tracking-wider">
        {"We typically respond within 24-48 hours"}
      </p>
    </form>
  )
}
