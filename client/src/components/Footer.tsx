import { Link } from "wouter";
import { Mail, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-border/40">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <span className="text-navy-dark font-bold text-base font-serif">X</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-gold font-serif text-base font-semibold tracking-wide">Xirge</span>
                <span className="text-gold-light/70 text-[9px] uppercase tracking-[0.25em]">Capital</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Industry agnostic, cash flow focused. Building generational wealth through Shariah-compliant investments.
            </p>
            <div className="flex items-center gap-2 text-gold/80 text-xs">
              <Shield className="w-3.5 h-3.5" />
              <span>Shariah Compliant</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-serif text-sm font-semibold mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Team", href: "/team" },
                { label: "Holdings", href: "/holdings" },
                { label: "News & Insights", href: "/news" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Investment Focus */}
          <div>
            <h4 className="text-gold font-serif text-sm font-semibold mb-4 tracking-wide">Investment Focus</h4>
            <ul className="space-y-2.5">
              {["Cash-Flowing Businesses", "Real Estate", "Pre-IPO Deals", "Financial Literacy"].map((item) => (
                <li key={item} className="text-muted-foreground text-sm">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-serif text-sm font-semibold mb-4 tracking-wide">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@xirgecapital.com"
                className="flex items-center gap-2 text-muted-foreground text-sm hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@xirgecapital.com
              </a>
              <Link
                href="/contact"
                className="inline-block mt-3 text-sm text-gold border border-gold/30 rounded-md px-4 py-2 hover:bg-gold/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} Xirge Capital. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 text-xs">
            Shariah-Compliant Investment Fund
          </p>
        </div>
      </div>
    </footer>
  );
}
