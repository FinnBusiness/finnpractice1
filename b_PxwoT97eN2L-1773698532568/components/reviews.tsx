import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  {
    name: "Michael T.",
    rating: 5,
    text: "Excellent work on my truck! The tint looks perfect and they were very professional. Highly recommend Gomez Tint for anyone looking for quality work.",
    date: "2 weeks ago",
  },
  {
    name: "Sarah K.",
    rating: 5,
    text: "Had my home windows tinted and the difference is amazing. Much cooler inside and the privacy is great. The team was punctual and very clean.",
    date: "1 month ago",
  },
  {
    name: "David R.",
    rating: 5,
    text: "Got PPF installed on my new car. The quality is outstanding and you can't even tell it's there. Great protection and peace of mind.",
    date: "1 month ago",
  },
  {
    name: "Jennifer M.",
    rating: 5,
    text: "Love the mobile service option! They came to my office and tinted my car while I worked. So convenient and the results are flawless.",
    date: "2 months ago",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Testimonials</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="border border-border">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-muted-foreground/30 mb-4" />
                <p className="text-foreground leading-relaxed">{review.text}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://www.google.com/maps?q=Gomez+Tint+LLC+Sioux+Falls" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
          >
            View all 32 reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
