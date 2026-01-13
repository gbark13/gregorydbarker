import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Heart, School, Mail, FileText } from "lucide-react"

export function LinksSection() {
  return (
    <section className="bg-secondary py-16 px-4 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-2xl font-bold text-foreground md:text-3xl">How You Can Help</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground text-pretty leading-relaxed">
          Arizona's tax credit program allows you to redirect your state taxes to support students like us. It costs you
          nothing extra—your tax dollars simply go to education instead of the state general fund.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Donate Card - Uses burgundy for the donate button */}
          <Card className="border-border bg-card">
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <CardTitle className="text-card-foreground">Make a Tax Credit Donation</CardTitle>
              <CardDescription className="leading-relaxed">
                Donate through the Arizona Christian School Tuition Organization (ACSTO) and receive a dollar-for-dollar Arizona state tax
                credit*.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="https://pages.acsto.org/dpc3vd" target="_blank" rel="noopener noreferrer">
                  Donate Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* School Info Card - Uses green accent */}
          <Card className="border-border bg-card">
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                <School className="h-5 w-5 text-accent" />
              </div>
              <CardTitle className="text-card-foreground">Learn About Our School</CardTitle>
              <CardDescription className="leading-relaxed">
                Visit Carefree Christian Academy's website to learn more about our mission, values, and academic programs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                asChild
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent/10 bg-transparent"
              >
                <a href="https://carefreechristianacademy.com/" target="_blank" rel="noopener noreferrer">
                  Visit CCA Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Tax Credit Info Card */}
          <Card className="border-border bg-card">
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                <FileText className="h-5 w-5 text-accent" />
              </div>
              <CardTitle className="text-card-foreground">Tax Credit Information</CardTitle>
              <CardDescription className="leading-relaxed">
                Learn how Arizona's Christian School Tuition Tax Credit works and how it can benefit you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                asChild
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent/10 bg-transparent"
              >
                <a
                  href="https://acsto.org/donors/what-is-a-tax-credit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Contact Card */}
          <Card className="border-border bg-card">
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <CardTitle className="text-card-foreground">Contact Us</CardTitle>
              <CardDescription className="leading-relaxed">
                Have questions about donating or want to learn more about our family's story? We'd love to hear from
                you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                asChild
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent/10 bg-transparent"
              >
                <a href="mailto:family@example.com">
                  Send Email
                  <Mail className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 rounded-xl bg-card p-6 text-center border border-border">
          <h3 className="mb-4 text-lg font-bold text-card-foreground">2025 Arizona Tax Credit Limits</h3>
          <div className="flex flex-col gap-4 md:flex-row md:justify-center md:gap-12">
            <div>
              <p className="text-3xl font-bold text-primary">$1,459</p>
              <p className="text-sm text-muted-foreground">Single/Head of Household</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">$2,917</p>
              <p className="text-sm text-muted-foreground">Married Filing Jointly</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            *Depending on your tax situation, credit might be reduced due to other applicable tax credits. Check with your tax advisor for current limits and eligibility.
          </p>
        </div>
      </div>
    </section>
  )
}
