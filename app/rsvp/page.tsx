"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { submitRSVP } from "@/app/actions/rsvp"
import { Mail, Phone, MessageSquare } from "lucide-react"
import { useState } from "react"
import { useFormStatus } from "react-dom"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      disabled={pending}
      className="bg-gradient-to-r from-amazonia-orange to-amazonia-teal hover:from-amazonia-teal hover:to-amazonia-orange text-white py-3 px-8 font-fun rounded-full transform hover:scale-110 transition-all duration-300 shadow-xl"
    >
      {pending ? "Submitting..." : "Submit RSVP"}
    </Button>
  )
}

export default function RSVPPage() {
  const [formState, setFormState] = useState<{ success?: boolean; message?: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    const result = await submitRSVP(formData)
    setFormState(result)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amazonia-teal/10 via-white to-amazonia-orange/10">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Creative Header */}
          <div className="text-center mb-8 relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl transform -rotate-1 border-4 border-amazonia-teal/20">
              <div className="text-4xl mb-3">🏡📝</div>
              <h1 className="text-3xl font-bold font-fun text-amazonia-blue mb-3 transform rotate-1">
                RSVP for Our Ranch Celebration
              </h1>
              <p className="text-gray-700">
                We can't wait to celebrate with you! Please let us know if you'll be joining us for our housewarming
                baby shower.
              </p>
            </div>
          </div>

          {/* Success Message */}
          {formState?.success && (
            <div className="mb-6 flex justify-center">
              <Card className="border-amazonia-teal bg-gradient-to-r from-blue-50 to-teal-50 shadow-xl transform rotate-1 max-w-2xl">
                <CardContent className="p-4">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="text-2xl">🎉</div>
                    <p className="text-amazonia-blue font-medium font-fun text-center">{formState.message}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Creative Form Layout */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Decorative Side Panel */}
            <div className="hidden lg:block space-y-4">
              <Card className="bg-gradient-to-br from-amazonia-teal/10 to-amazonia-blue/10 border-amazonia-teal/30 transform rotate-2">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">🐴</div>
                  <h3 className="font-fun text-amazonia-blue text-sm">Meet Our Animals!</h3>
                  <p className="text-xs text-gray-600 mt-1">Can't wait to introduce you to our ranch family</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amazonia-orange/10 to-amazonia-teal/10 border-amazonia-orange/30 transform -rotate-2">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">🏡</div>
                  <h3 className="font-fun text-amazonia-blue text-sm">Tour Our Home!</h3>
                  <p className="text-xs text-gray-600 mt-1">See where baby will grow up</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amazonia-blue/10 to-amazonia-orange/10 border-amazonia-blue/30 transform rotate-1">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">👶</div>
                  <h3 className="font-fun text-amazonia-blue text-sm">Baby Surprise!</h3>
                  <p className="text-xs text-gray-600 mt-1">Gender reveal coming in July</p>
                </CardContent>
              </Card>
            </div>

            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="border-amazonia-teal shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <CardHeader className="bg-gradient-to-r from-amazonia-orange to-amazonia-teal text-white rounded-t-lg">
                  <CardTitle className="flex items-center justify-center space-x-2 font-fun">
                    <span>Your RSVP Details</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50">
                  <form action={handleSubmit} className="space-y-6">
                    {/* Contact Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold font-fun text-amazonia-blue border-b-2 border-amazonia-teal/30 pb-1 transform -rotate-1 inline-block">
                        Contact Information
                      </h3>

                      <div className="bg-white/50 rounded-xl p-4 shadow-inner">
                        <Label htmlFor="name" className="text-gray-700 font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          className="mt-1 border-2 border-amazonia-teal/30 focus:border-amazonia-teal rounded-lg"
                          placeholder="Your full name"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/50 rounded-xl p-4 shadow-inner">
                          <Label htmlFor="email" className="text-gray-700 font-medium">
                            Email Address *
                          </Label>
                          <div className="relative mt-1">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-amazonia-teal" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              className="pl-10 border-2 border-amazonia-teal/30 focus:border-amazonia-teal rounded-lg"
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>

                        <div className="bg-white/50 rounded-xl p-4 shadow-inner">
                          <Label htmlFor="phone" className="text-gray-700 font-medium">
                            Phone Number
                          </Label>
                          <div className="relative mt-1">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-amazonia-teal" />
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              className="pl-10 border-2 border-amazonia-teal/30 focus:border-amazonia-teal rounded-lg"
                              placeholder="(555) 123-4567"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Party Size */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold font-fun text-amazonia-blue border-b-2 border-amazonia-orange/30 pb-1 transform rotate-1 inline-block">
                        Party Size
                      </h3>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/50 rounded-xl p-4 shadow-inner">
                          <Label htmlFor="adults" className="text-gray-700 font-medium">
                            Number of Adults
                          </Label>
                          <Input
                            id="adults"
                            name="adults"
                            type="number"
                            min="0"
                            defaultValue="1"
                            className="mt-1 border-2 border-amazonia-orange/30 focus:border-amazonia-orange rounded-lg"
                          />
                        </div>

                        <div className="bg-white/50 rounded-xl p-4 shadow-inner">
                          <Label htmlFor="children" className="text-gray-700 font-medium">
                            Number of Children
                          </Label>
                          <Input
                            id="children"
                            name="children"
                            type="number"
                            min="0"
                            defaultValue="0"
                            className="mt-1 border-2 border-amazonia-orange/30 focus:border-amazonia-orange rounded-lg"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="space-y-4">
                      <div className="bg-white/50 rounded-xl p-4 shadow-inner">
                        <Label htmlFor="dietary" className="text-gray-700 font-medium">
                          Dietary Restrictions or Allergies
                        </Label>
                        <Input
                          id="dietary"
                          name="dietary"
                          className="mt-1 border-2 border-amazonia-blue/30 focus:border-amazonia-blue rounded-lg"
                          placeholder="Please let us know of any dietary needs"
                        />
                      </div>

                      <div className="bg-white/50 rounded-xl p-4 shadow-inner">
                        <Label htmlFor="message" className="text-gray-700 font-medium">
                          Special Message (Optional)
                        </Label>
                        <div className="relative mt-1">
                          <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-amazonia-blue" />
                          <Textarea
                            id="message"
                            name="message"
                            rows={3}
                            className="pl-10 border-2 border-amazonia-blue/30 focus:border-amazonia-blue rounded-lg"
                            placeholder="Any special message or questions for us..."
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                      <SubmitButton />
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 flex justify-center">
            <Card className="border-gray-200 bg-gradient-to-r from-gray-50 to-white shadow-xl transform -rotate-1 max-w-2xl">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold font-fun text-amazonia-blue mb-2">Questions or Need Directions?</h3>
                <p className="text-gray-700 text-sm">
                  Feel free to reach out to Greg or Olga if you have any questions about the event or need directions to
                  Balsamic Ranch. We're here to help make sure everyone can join in the celebration!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
