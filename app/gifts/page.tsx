import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

interface GiftItem {
  id: string
  title: string
  description: string
  image: string
  link: string
  category: string
}

const giftSuggestions: GiftItem[] = [
  {
    id: "1",
    title: "Organic Cotton Baby Onesies Set",
    description: "Soft, breathable organic cotton onesies in neutral colors. Perfect for sensitive baby skin.",
    image: "/placeholder.svg?height=150&width=150",
    link: "https://example.com/organic-onesies",
    category: "Clothing",
  },
  {
    id: "2",
    title: "Wooden Baby Mobile",
    description: "Handcrafted wooden mobile with natural elements. Stimulates baby's visual development.",
    image: "/placeholder.svg?height=150&width=150",
    link: "https://example.com/wooden-mobile",
    category: "Nursery",
  },
  {
    id: "3",
    title: "Baby Carrier - Ergonomic Design",
    description: "Comfortable, ergonomic baby carrier for hands-free bonding and outdoor adventures.",
    image: "/placeholder.svg?height=150&width=150",
    link: "https://example.com/baby-carrier",
    category: "Gear",
  },
  {
    id: "4",
    title: "Organic Baby Food Maker",
    description: "Steam and blend fresh, organic baby food at home. BPA-free and easy to clean.",
    image: "/placeholder.svg?height=150&width=150",
    link: "https://example.com/food-maker",
    category: "Feeding",
  },
  {
    id: "5",
    title: "Bamboo Baby Dinnerware Set",
    description: "Eco-friendly bamboo plates, bowls, and utensils designed for little hands.",
    image: "/placeholder.svg?height=150&width=150",
    link: "https://example.com/bamboo-dinnerware",
    category: "Feeding",
  },
  {
    id: "6",
    title: "Soft Sensory Play Mat",
    description: "Organic cotton play mat with different textures and patterns for sensory development.",
    image: "/placeholder.svg?height=150&width=150",
    link: "https://example.com/play-mat",
    category: "Toys",
  },
  {
    id: "7",
    title: "Natural Rubber Teething Toys",
    description: "Safe, non-toxic rubber teething toys in fun shapes. Perfect for soothing sore gums.",
    image: "/placeholder.svg?height=150&width=150",
    link: "https://example.com/teething-toys",
    category: "Toys",
  },
  {
    id: "8",
    title: "Organic Cotton Swaddle Blankets",
    description: "Ultra-soft muslin swaddle blankets in beautiful, gender-neutral patterns.",
    image: "/placeholder.svg?height=150&width=150",
    link: "https://example.com/swaddle-blankets",
    category: "Sleep",
  },
  {
    id: "9",
    title: "Baby Memory Book",
    description: "Beautiful keepsake book to record baby's first year milestones and precious moments.",
    image: "/placeholder.svg?height=150&width=150",
    link: "https://example.com/memory-book",
    category: "Keepsakes",
  },
  {
    id: "10",
    title: "Organic Baby Skincare Set",
    description: "Gentle, organic lotions and wash for baby's delicate skin. Fragrance-free and hypoallergenic.",
    image: "/placeholder.svg?height=150&width=150",
    link: "https://example.com/skincare-set",
    category: "Care",
  },
  {
    id: "11",
    title: "White Noise Sound Machine",
    description: "Portable sound machine with nature sounds to help baby sleep peacefully.",
    image: "/placeholder.svg?height=150&width=150",
    link: "https://example.com/sound-machine",
    category: "Sleep",
  },
  {
    id: "12",
    title: "Diaper Bag - Convertible Backpack",
    description: "Stylish, functional diaper bag that converts from tote to backpack. Multiple compartments.",
    image: "/placeholder.svg?height=150&width=150",
    link: "https://example.com/diaper-bag",
    category: "Gear",
  },
  {
    id: "13",
    title: "Organic Herb Garden Starter Kit",
    description: "Everything needed to start an organic herb garden at home. Perfect for the ranch lifestyle.",
    image: "/placeholder.svg?height=150&width=150",
    link: "https://example.com/herb-garden",
    category: "Home",
  },
  {
    id: "14",
    title: "Cozy Throw Blankets Set",
    description: "Soft, organic cotton throw blankets perfect for family movie nights and baby snuggles.",
    image: "/placeholder.svg?height=150&width=150",
    link: "https://example.com/throw-blankets",
    category: "Home",
  },
  {
    id: "15",
    title: "Essential Oil Diffuser",
    description: "Create a calming atmosphere for both relaxation and baby's sleep routine.",
    image: "/placeholder.svg?height=150&width=150",
    link: "https://example.com/diffuser",
    category: "Home",
  },
  {
    id: "16",
    title: "Wooden Farm Animal Set",
    description: "Handcrafted wooden farm animals perfect for imaginative play. Includes horses, pigs, and goats.",
    image: "/placeholder.svg?height=150&width=150",
    link: "https://example.com/farm-animals",
    category: "Toys",
  },
  {
    id: "17",
    title: "Ranch-Style Welcome Mat",
    description: "Durable outdoor welcome mat with ranch-themed design. Perfect for the front porch.",
    image: "/placeholder.svg?height=150&width=150",
    link: "https://example.com/welcome-mat",
    category: "Home",
  },
  {
    id: "18",
    title: "Farm Fresh Eggs Basket",
    description: "Beautiful wicker basket for collecting fresh eggs from the ranch chickens.",
    image: "/placeholder.svg?height=150&width=150",
    link: "https://example.com/egg-basket",
    category: "Home",
  },
]

const categories = ["All", "Clothing", "Nursery", "Gear", "Feeding", "Toys", "Sleep", "Keepsakes", "Care", "Home"]

export default function GiftsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amazonia-orange/5 via-white to-amazonia-teal/10">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Creative Header */}
        <div className="text-center mb-12 relative">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl transform rotate-1 border-4 border-amazonia-teal/20 max-w-3xl mx-auto">
            <div className="text-4xl mb-3">🎁🏡</div>
            <h1 className="text-3xl font-bold font-fun text-amazonia-blue mb-3 transform -rotate-1">
              Gift Suggestions for Our Celebration
            </h1>
            <p className="text-gray-700">
              Here are some thoughtful gift ideas for our new home and little one! These suggestions include both
              housewarming and baby items, focusing on organic, sustainable, and ranch-friendly options.
            </p>
          </div>
        </div>

        {/* Creative Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium font-fun transition-all duration-300 border-2 border-amazonia-teal text-amazonia-blue hover:bg-amazonia-teal hover:text-white transform hover:scale-110 ${
                index % 2 === 0 ? "hover:rotate-2" : "hover:-rotate-2"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Creative Gift Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {giftSuggestions.map((gift, index) => (
            <Link key={gift.id} href={gift.link} target="_blank" rel="noopener noreferrer" className="group">
              <Card
                className={`border-gray-200 hover:border-amazonia-teal hover:shadow-2xl transition-all duration-300 h-full transform hover:scale-105 ${
                  index % 3 === 0 ? "hover:rotate-2" : index % 3 === 1 ? "hover:-rotate-1" : "hover:rotate-1"
                }`}
              >
                <CardContent className="p-4">
                  {/* Category Badge */}
                  <div className="flex justify-between items-start mb-3">
                    <span
                      className={`inline-block px-2 py-1 text-xs font-medium text-white rounded-full transform rotate-3 ${
                        gift.category === "Home"
                          ? "bg-amazonia-orange"
                          : gift.category === "Toys"
                            ? "bg-amazonia-blue"
                            : "bg-amazonia-teal"
                      }`}
                    >
                      {gift.category}
                    </span>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-amazonia-orange transition-colors" />
                  </div>

                  {/* Product Image */}
                  <div className="aspect-square mb-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-inner">
                    <img
                      src={gift.image || "/placeholder.svg"}
                      alt={gift.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="space-y-2">
                    <h3 className="font-semibold font-fun text-amazonia-blue group-hover:text-amazonia-orange transition-colors line-clamp-2 text-sm">
                      {gift.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-3">{gift.description}</p>
                  </div>

                  {/* View Product Link */}
                  <div className="mt-3 pt-2 border-t border-gray-100">
                    <span className="text-xs font-medium font-fun text-amazonia-orange group-hover:underline transform group-hover:scale-105 inline-block transition-all">
                      View Product →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Creative Info Sections */}
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <Card className="border-amazonia-teal bg-gradient-to-br from-blue-50 to-teal-50 shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-3 transform rotate-12">💝</div>
              <h3 className="text-lg font-semibold font-fun text-amazonia-blue mb-3">Gift Giving Notes</h3>
              <div className="space-y-2 text-gray-700 text-left text-sm">
                <p>
                  <strong>No pressure!</strong> Your presence at our celebration is the greatest gift of all.
                </p>
                <p>
                  We appreciate organic, sustainable, and non-toxic items when possible. Whether it's something for our
                  new ranch home or our upcoming little one, gender-neutral baby options are perfect!
                </p>
                <p>
                  If you prefer to contribute to larger items, we're happy to coordinate group gifts. Just reach out to
                  Greg or Olga.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 bg-gradient-to-bl from-white to-orange-50 shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold font-fun text-amazonia-blue mb-3 text-lg">Prefer a Traditional Registry?</h3>
              <p className="text-gray-700 text-sm mb-4">
                While we love the suggestions above, we understand some prefer traditional registries. Feel free to
                reach out if you'd like specific store recommendations!
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-gradient-to-r from-amazonia-teal to-amazonia-blue text-white rounded-full text-xs font-fun transform hover:scale-110 transition-transform">
                  Target
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-amazonia-orange to-amazonia-teal text-white rounded-full text-xs font-fun transform hover:scale-110 transition-transform">
                  Buy Buy Baby
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-amazonia-blue to-amazonia-orange text-white rounded-full text-xs font-fun transform hover:scale-110 transition-transform">
                  Amazon
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-amazonia-teal to-amazonia-blue text-white rounded-full text-xs font-fun transform hover:scale-110 transition-transform">
                  Local Boutiques
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
