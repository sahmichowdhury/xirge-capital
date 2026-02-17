import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Holdings", href: "/holdings" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  const handleLPLogin = () => {
    toast("Coming Soon", {
      description: "The LP Portal is currently under development. Stay tuned for updates.",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/80 backdrop-blur-xl border-b border-border/40">
      <div className="container flex items-center justify-between h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
            <span className="text-navy-dark font-bold text-lg font-serif">X</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-gold font-serif text-lg font-semibold tracking-wide">Xirge</span>
            <span className="text-gold-light/70 text-[10px] uppercase tracking-[0.25em] font-sans">Capital</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                location === link.href
                  ? "text-gold bg-gold/10"
                  : "text-foreground/70 hover:text-gold hover:bg-gold/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* LP Login Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={handleLPLogin}
            className="border-gold/40 text-gold hover:bg-gold/10 hover:border-gold/60 gap-2"
          >
            <LogIn className="w-4 h-4" />
            LP Login
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground/70 hover:text-gold transition-colors p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-dark/95 backdrop-blur-xl border-t border-border/40">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  location === link.href
                    ? "text-gold bg-gold/10"
                    : "text-foreground/70 hover:text-gold hover:bg-gold/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border/40 mt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  handleLPLogin();
                  setMobileOpen(false);
                }}
                className="border-gold/40 text-gold hover:bg-gold/10 hover:border-gold/60 gap-2 w-full"
              >
                <LogIn className="w-4 h-4" />
                LP Login
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
