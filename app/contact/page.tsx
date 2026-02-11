import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { StarBurst } from "@/components/desert-scene"
import { Music2, MapPin, Mail } from "lucide-react"

export const metadata = {
  title: "Contact | The Barker Family Band",
  description: "Book The Barker Family Band for your Arizona community event. We play at parades, festivals, rodeos, and celebrations.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <StarBurst className="w-8 h-8 text-primary mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-background mb-6 leading-[0.95]">
              Book Our<br />Band
            </h1>
            <p className="text-background/50 text-lg leading-relaxed max-w-xl">
              {"Ready to bring some good ol' family music to your Arizona event? We'd love to hear from you!"}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <p className="text-primary uppercase tracking-[0.3em] text-xs font-medium mb-4">Get in Touch</p>
                <p className="text-muted-foreground leading-relaxed">
                  {"We're available for community events of all kinds across Arizona! Whether it's a parade, rodeo, county fair, or private celebration, we bring the music and the fun."}
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6 border-t border-border pt-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
                    <Music2 className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">Events We Play</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Parades, Festivals, County Fairs, Rodeos, Holiday Events, Private Parties
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">Service Area</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We travel throughout Arizona. From Phoenix to Tucson, Flagstaff to Yuma.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-foreground flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">Response Time</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We typically respond within 24-48 hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Band Stats */}
              <div className="bg-card border border-border p-6">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">Our Ensemble</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    7 talented family members
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    12 instruments including brass, woodwinds, and strings
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                    Available for events year-round
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-accent uppercase tracking-[0.3em] text-xs font-medium mb-4">FAQ</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Common Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How far in advance should we book?",
                  a: "We recommend booking at least 4-6 weeks in advance. For major holidays or peak season, reach out 2-3 months ahead to ensure availability.",
                },
                {
                  q: "What type of music do you play?",
                  a: "Patriotic favorites, classic Americana, country standards, marches, holiday tunes, and popular songs arranged for our brass and woodwind ensemble.",
                },
                {
                  q: "Do you require a stage or specific setup?",
                  a: "We're flexible! For parades, we march. For stationary performances, we adapt to stages, gazebos, or open areas. We'll work with you to find the best setup.",
                },
                {
                  q: "How long are your performances?",
                  a: "Typical sets range from 30 minutes to 2 hours with breaks as needed. We customize to suit your event.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-background border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">
                    {item.q}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
