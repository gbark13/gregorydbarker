"use server"

import { Resend } from "resend"
import { EmailTemplate } from "@/components/email-template"

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

// Define the response type for better type safety
type SubmissionResponse = {
  success: boolean
  message: string
}

export async function sendFormSubmission(formData: FormData): Promise<SubmissionResponse> {
  // Extract form data
  const childName = formData.get("childName") as string
  const childAge = formData.get("childAge") as string
  const attendance = formData.get("attendance") as string
  const parentName = formData.get("parentName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const siblingsData = formData.get("siblings") as string
  const dietaryRestrictions = formData.get("dietaryRestrictions") as string
  const additionalInfo = formData.get("additionalInfo") as string

  // Parse siblings data
  let siblings = []
  try {
    siblings = siblingsData ? JSON.parse(siblingsData) : []
  } catch (error) {
    console.error("Error parsing siblings data:", error)
    siblings = []
  }

  // Validate required fields
  if (!childName || !childAge || !attendance || !parentName || !email || !phone) {
    return {
      success: false,
      message: "Missing required fields. Please fill out all required fields.",
    }
  }

  try {
    // Calculate total children attending
    const totalChildren = attendance === "yes" ? 1 + siblings.length : siblings.length
    const childrenText = totalChildren === 1 ? "1 child" : `${totalChildren} children`

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Birthday Party <birthday@resend.dev>", // Update this with your verified domain
      to: ["gbark1204@gmail.com"], // Replace with your email
      reply_to: email, // Set reply-to as the parent's email
      subject: `New RSVP: ${childName}${siblings.length > 0 ? ` + ${siblings.length} sibling${siblings.length > 1 ? "s" : ""}` : ""} for Bella's Birthday Movie`,
      react: EmailTemplate({
        childName,
        childAge,
        attendance,
        parentName,
        email,
        phone,
        siblings,
        dietaryRestrictions: dietaryRestrictions || "None specified",
        additionalInfo: additionalInfo || "None provided",
      }),
    })

    // Handle Resend API errors
    if (error) {
      console.error("Resend API error:", error)
      return {
        success: false,
        message: "Failed to send RSVP. Please try again or contact us directly.",
      }
    }

    // Log success for debugging
    console.log("Email sent successfully:", data)

    // Return success response
    return {
      success: true,
      message: `${childName}${siblings.length > 0 ? ` and ${siblings.length} sibling${siblings.length > 1 ? "s" : ""}` : ""} confirmed for the movie! We'll send details to ${email}`,
    }
  } catch (error) {
    // Log any unexpected errors
    console.error("Unexpected error sending email:", error)

    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
