import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />

      {/* Creative Hero Section with Diagonal Layout */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amazonia-teal/10 to-amazonia-orange/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <div className="text-6xl mb-4 transform rotate-12 inline-block">👶</div>
              <div className="text-5xl mb-3 transform -rotate-6 inline-block ml-6">🐴</div>
              <div className="text-6xl mb-4 transform rotate-3 inline-block">🏡</div>

              <h1 className="text-4xl md:text-5xl font-bold font-fun text-amazonia-blue mb-3 transform -rotate-1">
                Welcome to Balsamic Ranch,
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold font-fun text-amazonia-orange mb-4 transform rotate-1">
                Housewarming Baby Shower
              </h2>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl transform rotate-2 border-4 border-amazonia-teal/20">
              <p className="text-lg text-gray-700 mb-6">
                Join Greg and Olga as we celebrate our new home AND the upcoming arrival of our little one! Due in July,
                this precious baby will be a wonderful surprise.
              </p>

              <div className="flex flex-col gap-3">
                <Link href="/rsvp">
                  <Button
                    size="lg"
                    className="w-full bg-amazonia-orange hover:bg-red-600 text-white px-8 py-3 font-fun text-lg transform hover:scale-105 transition-transform"
                  >
                    RSVP Now
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-amazonia-blue text-amazonia-blue hover:bg-blue-50 px-8 py-3 font-fun text-lg transform hover:scale-105 transition-transform"
                >
                  Save the Date
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zigzag Event Details */}
      <section className="py-12 px-4 bg-gradient-to-l from-amazonia-teal/5 to-transparent">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold font-fun text-center text-amazonia-blue mb-12 transform -rotate-1">
            Event Details
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Date Card */}
            <Card className="border-amazonia-teal hover:shadow-2xl transition-all duration-300 transform hover:-rotate-2 bg-gradient-to-br from-white to-amazonia-teal/5">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">📅</div>
                <h4 className="text-lg font-semibold font-fun text-amazonia-blue mb-2">Date</h4>
                <p className="text-gray-700">Coming Soon</p>
                <p className="text-sm text-gray-600">Details to follow</p>
              </CardContent>
            </Card>

            {/* Open House */}
            <Card className="border-amazonia-orange hover:shadow-2xl transition-all duration-300 transform hover:rotate-2 bg-gradient-to-bl from-white to-amazonia-orange/5">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🚪</div>
                <h4 className="text-lg font-semibold font-fun text-amazonia-blue mb-2">Open House Style</h4>
                <p className="text-gray-700">Come & Go</p>
                <p className="text-sm text-gray-600">Stay as long as you'd like</p>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="border-amazonia-blue hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-t from-white to-amazonia-blue/5">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🏠🐴</div>
                <h4 className="text-lg font-semibold font-fun text-amazonia-blue mb-2">Our New Ranch Home</h4>
                <p className="text-gray-700">Welcome to Balsamic Ranch!</p>
                <p className="text-sm text-gray-600">Meet our animals too</p>
              </CardContent>
            </Card>

            {/* Family Friendly */}
            <Card className="border-amazonia-teal hover:shadow-2xl transition-all duration-300 transform hover:-rotate-1 bg-gradient-to-tr from-white to-amazonia-teal/5">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
                <h4 className="text-lg font-semibold font-fun text-amazonia-blue mb-2">All Welcome</h4>
                <p className="text-gray-700">Adults & Children</p>
                <p className="text-sm text-gray-600">Family-friendly event</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Overlapping Activities Section */}
      <section className="py-12 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amazonia-orange/5 via-transparent to-amazonia-teal/5"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-fun text-amazonia-blue transform rotate-1 inline-block">
              What to Expect
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-start">
            {/* Left Column */}
            <div className="space-y-6">
              <Card className="border-gray-200 bg-white/90 backdrop-blur-sm shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">🥗</div>
                  <h4 className="text-lg font-semibold font-fun text-amazonia-blue mb-2">Healthy Refreshments</h4>
                  <p className="text-gray-700 text-sm">
                    Enjoy delicious, organic hors d'oeuvres and refreshments throughout the event.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-white/90 backdrop-blur-sm shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300 ml-6">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">🏠</div>
                  <h4 className="text-lg font-semibold font-fun text-amazonia-blue mb-2">Home Tour</h4>
                  <p className="text-gray-700 text-sm">
                    Take a tour of our new home at Balsamic Ranch! See where we'll be raising our little one.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6 lg:mt-8">
              <Card className="border-gray-200 bg-white/90 backdrop-blur-sm shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">🎮</div>
                  <h4 className="text-lg font-semibold font-fun text-amazonia-blue mb-2">Fun Activities</h4>
                  <p className="text-gray-700 text-sm">
                    We've planned engaging activities throughout the party for guests of all ages.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-white/90 backdrop-blur-sm shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-300 mr-6">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">🐴</div>
                  <h4 className="text-lg font-semibold font-fun text-amazonia-blue mb-2">Meet the Animals</h4>
                  <p className="text-gray-700 text-sm">
                    Say hello to our ranch animals! Meet our horses, goats, pigs and other furry friends.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Circular About Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-amazonia-blue/5 to-amazonia-teal/5">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-full p-8 shadow-2xl border-8 border-amazonia-teal/20 transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">🏡👶🐴</div>
                <h3 className="text-2xl font-bold font-fun text-amazonia-blue mb-4">A Dual Celebration</h3>
                <p className="text-gray-700 mb-4">
                  We're excited to host our own housewarming baby shower at Balsamic Ranch! This celebration combines
                  two wonderful milestones - welcoming you to our new home and celebrating our growing family.
                </p>
                <p className="text-gray-700 mb-6">
                  Whether you can stay for a few minutes or the whole event, we'd love to see you and share this special
                  time as we prepare to welcome our little surprise in July.
                </p>

                <Link href="/rsvp">
                  <Button
                    size="lg"
                    className="bg-amazonia-teal hover:bg-cyan-600 text-white px-8 py-3 font-fun rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    Let Us Know You're Coming!
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Footer */}
      <footer className="relative py-8 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amazonia-blue via-amazonia-teal to-amazonia-blue"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="text-3xl mb-4 space-x-3">
            <span className="inline-block transform rotate-12">👶</span>
            <span className="inline-block transform -rotate-12">🐴</span>
            <span className="inline-block transform rotate-6">🏡</span>
          </div>
          <p className="text-white mb-1 font-fun text-lg transform -rotate-1 inline-block">
            Balsamic Ranch Housewarming Baby Shower
          </p>
          <p className="text-gray-300 text-sm transform rotate-1 inline-block">Hosted with love by Greg and Olga</p>
        </div>
      </footer>
    </div>
  )
}
