"use server"

export async function submitRSVP(formData: FormData) {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const adults = formData.get("adults") as string
  const children = formData.get("children") as string
  const dietary = formData.get("dietary") as string
  const message = formData.get("message") as string

  // In a real app, you would save this to a database
  console.log("RSVP Submission:", {
    name,
    email,
    phone,
    adults,
    children,
    dietary,
    message,
  })

  return {
    success: true,
    message: `Thank you ${name}! Your RSVP has been received. We can't wait to celebrate our new ranch home and upcoming baby with you at Balsamic Ranch! 🐴🏡`,
  }
}
