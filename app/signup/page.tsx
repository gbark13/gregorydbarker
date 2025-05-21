"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { ArrowLeft, Lasso } from "lucide-react"

const formSchema = z.object({
  childName: z.string().min(2, {
    message: "Please enter your child's name.",
  }),
  childAge: z.string().min(1, {
    message: "Please enter your child's age.",
  }),
  parentName: z.string().min(2, {
    message: "Please enter your name.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  attendance: z.enum(["yes", "no"], {
    required_error: "Please select if your child will attend.",
  }),
  dietaryRestrictions: z.string().optional(),
  additionalInfo: z.string().optional(),
})

export default function SignupPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      childName: "",
      childAge: "",
      parentName: "",
      email: "",
      phone: "",
      attendance: "yes",
      dietaryRestrictions: "",
      additionalInfo: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)

      toast({
        title: "Role Accepted!",
        description: `${values.childName} is now part of the cast! We'll send details to ${values.email}`,
      })

      // Redirect to thank you page or show success message
      router.push("/thank-you")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link href="/" className="inline-flex items-center text-amber-800 hover:text-amber-900 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Movie Details
        </Link>

        <Card className="border-amber-200 bg-white shadow-lg">
          <CardHeader className="bg-amber-800 text-amber-50 rounded-t-lg">
            <div className="flex items-center justify-center mb-2">
              <Lasso className="h-8 w-8 mr-2" />
            </div>
            <CardTitle className="text-2xl md:text-3xl text-center">Accept Your Role</CardTitle>
            <CardDescription className="text-amber-100 text-center">
              Join Bella's 7th Birthday Movie: "The Great Birthday Gold Rush"
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-amber-900">Young Star Details</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="childName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Child's Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter child's name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="childAge"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Child's Age</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter child's age" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="attendance"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Will your child accept this starring role?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yes" />
                              </FormControl>
                              <FormLabel className="font-normal">Yes! We're ready for the adventure!</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="no" />
                              </FormControl>
                              <FormLabel className="font-normal">Unfortunately, we can't make it</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-4 pt-4 border-t border-amber-100">
                  <h3 className="text-lg font-semibold text-amber-900">Parent/Guardian Information</h3>

                  <FormField
                    control={form.control}
                    name="parentName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Parent/Guardian Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-amber-100">
                  <h3 className="text-lg font-semibold text-amber-900">Additional Information</h3>

                  <FormField
                    control={form.control}
                    name="dietaryRestrictions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dietary Restrictions or Allergies</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please list any dietary restrictions or allergies"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="additionalInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Information</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Anything else we should know?" className="resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Accept Role in The Great Birthday Gold Rush"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
