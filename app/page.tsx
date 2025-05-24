import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, MapPin, Calendar, Clock, Gift } from "lucide-react"
import { WesternBorder } from "@/components/western-border"

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-amber-900 text-amber-50 py-4 px-6 md:px-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">The Great Birthday Gold Rush</h1>
          <div className="flex items-center space-x-2">
            <Link href="/signup">
              <Button variant="outline" className="bg-amber-800 text-amber-50 hover:bg-amber-700 border-amber-600">
                Join the Cast
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-6 container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block bg-amber-800 text-amber-50 px-4 py-1 rounded-full text-sm font-medium mb-2">
            CASTING CALL
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-amber-900 leading-tight">
            You're Invited to Join
            <br />
            Bella's 7th Birthday Movie!
          </h1>
          <p className="text-lg md:text-xl text-amber-800">
            Director Gregory Spielberg (Barker) is looking for talented young actors/actresses to star in this year's biggest western adventure!
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 text-lg w-full sm:w-auto"
              >
                Join the Cast
              </Button>
            </Link>
            <Link href="/gifts">
              <Button
                size="lg"
                variant="outline"
                className="bg-amber-800 text-amber-50 hover:bg-amber-700 border-amber-600 px-8 py-6 text-lg w-full sm:w-auto"
              >
                <Gift className="mr-2 h-5 w-5" />
                Gift Ideas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Movie Details */}
      <section className="py-12 bg-amber-100 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900">About The Movie</h2>
            <WesternBorder />
          </div>

          <Card className="border-amber-200 bg-amber-50 shadow-lg mb-8">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">The Great Birthday Gold Rush</h3>
              <p className="text-amber-800 text-lg mb-6">
                A gang of pint-sized cowpokes hears a rumor that there's buried treasure (birthday gold!) hidden
                somewhere on the ranch. But they're not the only ones searching - villains, bandits, and maybe even a
                mysterious ghost are on the trail too. Will they find the clues to find the treasure?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-6 w-6 text-amber-700 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-amber-900">Filming Date</h4>
                    <p className="text-amber-700">Saturday, June 21st, 2025</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-amber-700 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-amber-900">Call Time</h4>
                    <p className="text-amber-700">2:00 PM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-amber-700 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-amber-900">Location</h4>
                    <p className="text-amber-700">6226 E Seco Pl, Cave Creek (Bella's House)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-amber-700 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-amber-900">Starring</h4>
                    <p className="text-amber-700">Bella & Friends</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 container mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-amber-900">Ready to Join the Adventure?</h2>
          <WesternBorder />
          <p className="text-lg text-amber-800">
            Director Gregory Spielberg (Barker) is looking for brave cowpokes to join Bella on this exciting production!
          </p>
          <div className="pt-4">
            <Link href="/signup">
              <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white px-8">
                Join the Cast
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-50 py-8 px-6">
        <div className="container mx-auto text-center">
          <p>Directed & Produced by Bella's Dad & Mom</p>
          <p className="text-sm mt-2">© 2025 GO Productions</p>
        </div>
      </footer>
    </div>
  )
}
