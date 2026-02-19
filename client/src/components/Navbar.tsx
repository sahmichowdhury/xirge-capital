import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const LOGO_WHITE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663361696775/NtCbWwLDTHrrEjNo.png";
const LOGO_GREEN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663361696775/WszKWNrSYCbZYHfn.png";

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
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLPLogin = () => {
    toast("Coming Soon", {
      description: "The LP Portal is currently under development. Stay tuned for updates.",
    });
  };

  // Determine if we're on the home page hero (dark background)
  const isHome = location === "/";
  const useLightLogo = !scrolled && isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-border/50"
          : isHome
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-xl border-b border-border/50"
      }`}
    >
      <div className="container flex items-center justify-between h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <img
            src={useLightLogo ? LOGO_WHITE : LOGO_GREEN}
            alt="Xirge Capital"
            className="h-9 md:h-10 object-contain transition-opacity duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                location === link.href
                  ? !scrolled && isHome
                    ? "text-white bg-white/15"
                    : "text-xgreen bg-xgreen/8"
                  : !scrolled && isHome
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-foreground/70 hover:text-xgreen hover:bg-xgreen/5"
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
            className={`gap-2 transition-all ${
              !scrolled && isHome
                ? "border-white/40 text-white hover:bg-white/10 hover:border-white/60"
                : "border-xgreen/40 text-xgreen hover:bg-xgreen/10 hover:border-xgreen/60"
            }`}
          >
            <LogIn className="w-4 h-4" />
            LP Login
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 transition-colors ${
            !scrolled && isHome
              ? "text-white/80 hover:text-white"
              : "text-foreground/70 hover:text-xgreen"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-border/50">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  location === link.href
                    ? "text-xgreen bg-xgreen/8"
                    : "text-foreground/70 hover:text-xgreen hover:bg-xgreen/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border/50 mt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  handleLPLogin();
                  setMobileOpen(false);
                }}
                className="border-xgreen/40 text-xgreen hover:bg-xgreen/10 hover:border-xgreen/60 gap-2 w-full"
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
