import { Link } from "wouter";
import { Mail, Leaf } from "lucide-react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663361696775/EFLjvkiRpJFRpsqb.png";

export default function Footer() {
  return (
    <footer className="bg-xgreen-dark text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={LOGO_URL} alt="Xirge Capital" className="h-10 w-10 rounded-md object-contain" />
              <div className="flex flex-col leading-tight">
                <span className="text-white font-serif text-base font-semibold tracking-wide">Xirge</span>
                <span className="text-white/60 text-[9px] uppercase tracking-[0.25em]">Capital</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Industry agnostic, cash flow focused. Building generational wealth through ethical, Shariah-compliant investments.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-xs">
              <Leaf className="w-3.5 h-3.5" />
              <span>Ethical &amp; Shariah Compliant</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-sm font-semibold mb-4 tracking-wide">Quick Links</h4>
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
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Investment Focus */}
          <div>
            <h4 className="text-white font-serif text-sm font-semibold mb-4 tracking-wide">Investment Focus</h4>
            <ul className="space-y-2.5">
              {["Cash-Flowing Businesses", "Real Estate", "Pre-IPO Deals", "Ethical Investing"].map((item) => (
                <li key={item} className="text-white/70 text-sm">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-sm font-semibold mb-4 tracking-wide">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@xirgecapital.com"
                className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@xirgecapital.com
              </a>
              <Link
                href="/contact"
                className="inline-block mt-3 text-sm text-white border border-white/30 rounded-md px-4 py-2 hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Xirge Capital. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Ethical &amp; Shariah-Compliant Investment Fund
          </p>
        </div>
      </div>
    </footer>
  );
}
