import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { WesternBorder } from "@/components/western-border"

// Gift item interface with optional link
interface GiftItem {
  id: string
  name: string
  image: string
  description: string
  link?: string // Made link optional
}

// Sample gift items without prices
const giftItems: GiftItem[] = [
  {
    id: "1",
    name: "Summer Pajamas",
    image: "/images/jammies.png",
    description: "100% Cotton (preferably organic) summer pajamas size 7/8",
    link: "https://paradeorganics.com/collections/4-10-years/products/my-jammies-organic-kids-summer-pajamas?variant=40911777038359",
  },
  {
    id: "2",
    name: "Summer Night Gown",
    image: "/images/nightgown.jpg",
    description: "100% Cotton (preferably organic) summer night gown size 7/8",
    link: "https://a.co/d/bM1LhBQ",
  },
  {
    id: "3",
    name: "Gift Card to As You Wish Pottery",
    image: "/images/pottery.png",
    description: "",
    link: "https://www.asyouwishpottery.com/product/egift-card/",
  },
  {
    id: "4",
    name: "Gift Card to North Valley Room Escape",
    image: "/images/nvescape.png",
    description: "Bella likes escape room games.",
    link: "https://northvalleyescaperoom.com/",
  },
  {
    id: "5",
    name: "Full size bedsheet set",
    image: "/images/bedsheet.jpg",
    description: "100% cotton (preferably organic) Full size bedsheet set - grey or beige color",
    link: "https://a.co/d/bM1LhBQ",
  },
  {
    id: "6",
    name: "Gift Card for RiverRanch Water Park",
    image: "/images/riverranch.jpg",
    description: "Gift Card for RiverRanch Water Park day pass (currently offered on Groupon)",
    link: "https://www.hiltonphoenixresortatthepeak.com/river-ranch-water-park",
  },
  {
    id: "7",
    name: "Butterfly Wonderworld General Admission",
    image: "/images/butterfly.png",
    description: "",
    link: "https://butterflywonderland.com/",
  }
]

export default function GiftsPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      <header className="bg-amber-900 text-amber-50 py-4 px-6 md:px-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold">The Great Birthday Gold Rush</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto py-12 px-4">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-amber-800 hover:text-amber-900 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Movie Details
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-amber-900">Gift Suggestions for Bella</h1>
            <WesternBorder />
            <p className="text-amber-800 mt-4 max-w-2xl mx-auto">
              Looking for the perfect gift for our birthday star? Here are some suggestions that Bella would love!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {giftItems.map((gift) => {
            // Create the card content
            const cardContent = (
              <Card className="h-full overflow-hidden border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all">
                <div className="flex items-center">
                  <div className="w-1/4 h-24 relative overflow-hidden bg-amber-100 flex-shrink-0">
                    <img
                      src={gift.image || "/placeholder.svg"}
                      alt={gift.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4 flex-grow">
                    <h3 className="text-lg font-bold text-amber-900 mb-2">{gift.name}</h3>
                    <p className="text-amber-700">{gift.description}</p>
                  </div>
                </div>
              </Card>
            )

            // If there's a link, wrap the card in an anchor tag
            if (gift.link) {
              return (
                <a
                  key={gift.id}
                  href={gift.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg"
                >
                  {cardContent}
                </a>
              )
            }

            // If there's no link, just return the card
            return (
              <div key={gift.id} className="transition-transform hover:scale-105">
                {cardContent}
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-amber-100 border border-amber-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-amber-900 mb-3">A Note About Gifts</h2>
            <p className="text-amber-800 mb-4">
              While gifts are appreciated, your presence at Bella's birthday celebration is the greatest gift of all!
              These are just suggestions - please don't feel obligated to bring a gift.
            </p>
            <Link href="/signup">
              <Button className="bg-amber-700 hover:bg-amber-800 text-white">RSVP for the Party</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
