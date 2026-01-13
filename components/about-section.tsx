import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, GraduationCap, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-16 px-4 md:py-24 bg-background">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-2xl font-bold text-foreground md:text-3xl">Meet Mayrelia & Dayla</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground text-pretty leading-relaxed">
          We are siblings attending Carefree Christian Academy, where we're growing in faith, knowledge, and character.
          With your help through Arizona's tax credit program, we can continue receiving the education our family
          values.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-border bg-card transition-shadow hover:shadow-lg">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 font-bold text-card-foreground">Faith-Based Learning</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our curriculum integrates biblical principles with academic excellence, nurturing both mind and spirit.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card transition-shadow hover:shadow-lg">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 font-bold text-card-foreground">Academic Growth</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Small class sizes and dedicated teachers help us achieve our full potential and prepare for the future.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card transition-shadow hover:shadow-lg">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 font-bold text-card-foreground">Community Support</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our school family encourages us to serve others and build lasting friendships rooted in Christ.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 rounded-xl bg-primary/5 border border-primary/20 p-6 md:p-8">
          <blockquote className="text-center">
            <p className="mb-4 text-lg italic text-foreground leading-relaxed">
              "Thank you for considering a donation to our scholarship fund. Your generosity means the world to our
              family and helps us stay at the school we love. God bless you!"
            </p>
            <footer className="text-sm font-medium text-primary">— Mayrelia & Dayla, with love</footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
