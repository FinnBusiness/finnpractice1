import { Car, Home, Building2, Shield, Truck, Sun } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Car,
    title: "Automotive Tinting",
    description: "Professional window tinting for all vehicle types. Reduce heat, glare, and UV rays while enhancing your vehicle's appearance and privacy.",
  },
  {
    icon: Home,
    title: "Residential Tinting",
    description: "Improve your home's energy efficiency and privacy with our premium residential window films. Block harmful UV rays and reduce cooling costs.",
  },
  {
    icon: Building2,
    title: "Commercial Tinting",
    description: "Professional window tinting solutions for offices, storefronts, and commercial buildings. Create a comfortable environment for employees and customers.",
  },
  {
    icon: Shield,
    title: "Paint Protection Film",
    description: "Premium PPF installation to protect your vehicle's paint from rock chips, scratches, and environmental damage. Keep your car looking new.",
  },
  {
    icon: Truck,
    title: "Mobile Services",
    description: "Can't come to us? We'll come to you! Our mobile tinting service brings professional installation to your location for maximum convenience.",
  },
  {
    icon: Sun,
    title: "UV Protection",
    description: "All our films block up to 99% of harmful UV rays, protecting your skin and preventing interior fading in vehicles, homes, and businesses.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Our Services</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Professional Tinting Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            From vehicles to buildings, we offer comprehensive window tinting and protection services 
            tailored to your needs.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="border border-border hover:border-foreground/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
