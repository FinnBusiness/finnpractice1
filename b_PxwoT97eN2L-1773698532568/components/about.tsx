import { CheckCircle2 } from "lucide-react"

const features = [
  "Licensed and insured professionals",
  "Premium quality tint films",
  "Lifetime warranty on select products",
  "Competitive pricing",
  "Fast turnaround times",
  "Mobile services available",
]

export function About() {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">About Us</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Trusted Window Tinting Experts in Sioux Falls
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              At Gomez Tint LLC, we take pride in delivering exceptional window tinting services 
              to the Sioux Falls community and surrounding areas. With years of experience and 
              a commitment to quality, we've built a reputation for excellence that our 32 
              five-star reviews reflect.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you're looking to enhance your vehicle's appearance, improve your home's 
              energy efficiency, or protect your business from harmful UV rays, our team of 
              skilled professionals is here to help.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-primary/5 border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-7xl font-bold text-primary">5.0</div>
                  <div className="mt-2 text-lg text-muted-foreground">Star Rating</div>
                  <div className="mt-1 text-sm text-muted-foreground">Based on 32 reviews</div>
                  <div className="mt-6 flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
