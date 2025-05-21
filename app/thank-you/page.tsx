import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, PartyPopper } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full border-amber-200 bg-white shadow-lg">
        <CardContent className="pt-12 pb-10 px-6 md:px-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-amber-100 p-4 rounded-full">
              <PartyPopper className="h-12 w-12 text-amber-700" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">You're In The Movie!</h1>

          <div className="flex justify-center my-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-amber-500 text-amber-500" />
              ))}
            </div>
          </div>

          <p className="text-lg text-amber-800 mb-6">
            Thank you for accepting your role in "The Great Birthday Gold Rush"! Director Gregory Spielberg will be in touch with more
            details about the production.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
            <h3 className="font-semibold text-amber-900 mb-2">Important Details:</h3>
            <ul className="text-amber-800 text-left space-y-2">
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Date: Saturday, June 15th, 2024</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Time: 2:00 PM - 5:00 PM</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Location: The Birthday Ranch (Bella's House)</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Costume: Western/cowboy attire encouraged (but not required)</span>
              </li>
            </ul>
          </div>

          <Link href="/">
            <Button className="bg-amber-700 hover:bg-amber-800 text-white">Return to Movie Homepage</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
