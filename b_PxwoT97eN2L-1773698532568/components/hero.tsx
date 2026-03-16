import { Phone, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-primary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="flex items-center justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-2 text-sm text-primary-foreground/80">5.0 Rating · 32 Reviews</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight text-balance">
          Professional Window Tinting
          <span className="block mt-2 text-primary-foreground/80">in Sioux Falls, SD</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-primary-foreground/70 leading-relaxed text-pretty">
          We specialize in professional automotive, residential, and commercial window tinting 
          along with paint protection film installation. Offering both in-shop and mobile services 
          for your convenience.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" variant="secondary" asChild className="text-base px-8">
            <a href="tel:+16052157921" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-base px-8 border-primary-foreground/30 bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:text-primary">
            <a href="#contact">
              Get a Free Quote
            </a>
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-primary-foreground/60 text-sm">
          <MapPin className="h-4 w-4" />
          <span>601 S Lyons Ave STE 300, Sioux Falls, SD 57106</span>
        </div>
      </div>
    </section>
  )
}
