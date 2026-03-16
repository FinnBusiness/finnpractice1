import Link from "next/link"
import { Phone, MapPin, Clock } from "lucide-react"

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold">
              Gomez Tint<span className="font-normal opacity-70">LLC</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              Professional window tinting services for automotive, residential, and commercial 
              applications in Sioux Falls, SD and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-primary-foreground/70 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  601 S Lyons Ave STE 300<br />Sioux Falls, SD 57106
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-primary-foreground/70 flex-shrink-0" />
                <a href="tel:+16052157921" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  (605) 215-7921
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="h-5 w-5 text-primary-foreground/70 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  Mon - Sat: 8AM - 6PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Gomez Tint LLC. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/50">
              Serving Sioux Falls and nearby areas
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
