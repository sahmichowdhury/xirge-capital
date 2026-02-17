import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Landmark,
  DollarSign,
  TrendingUp,
  ArrowRight,
  Filter,
  Shield,
  MapPin,
  Calendar,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

type Category = "all" | "real-estate" | "pre-ipo" | "business";

interface Holding {
  id: string;
  name: string;
  category: "real-estate" | "pre-ipo" | "business";
  status: "active" | "fully-funded" | "exited";
  description: string;
  location?: string;
  sector: string;
  vintage: string;
  highlight: string;
}

const holdings: Holding[] = [
  {
    id: "1",
    name: "Meridian Commercial Complex",
    category: "real-estate",
    status: "active",
    description: "A Class-A commercial property generating consistent rental income from diversified tenants across retail and office spaces.",
    location: "Southeast US",
    sector: "Commercial Real Estate",
    vintage: "2024",
    highlight: "Stable Cash Flow",
  },
  {
    id: "2",
    name: "Greenfield Residential Portfolio",
    category: "real-estate",
    status: "active",
    description: "A portfolio of multi-family residential units in high-demand urban markets, providing steady monthly cash distributions.",
    location: "Mid-Atlantic",
    sector: "Residential Real Estate",
    vintage: "2024",
    highlight: "Monthly Distributions",
  },
  {
    id: "3",
    name: "NovaTech Solutions",
    category: "pre-ipo",
    status: "active",
    description: "A high-growth SaaS platform serving the healthcare sector with AI-driven analytics. Positioned for a public offering within 18-24 months.",
    sector: "Healthcare Technology",
    vintage: "2025",
    highlight: "Pre-IPO Opportunity",
  },
  {
    id: "4",
    name: "Atlas Logistics Group",
    category: "business",
    status: "active",
    description: "A last-mile delivery and logistics company with long-term contracts and predictable revenue streams across multiple metropolitan areas.",
    sector: "Logistics & Supply Chain",
    vintage: "2024",
    highlight: "Recurring Revenue",
  },
  {
    id: "5",
    name: "Halal Fresh Foods Co.",
    category: "business",
    status: "fully-funded",
    description: "A vertically integrated halal food production and distribution company serving growing demand in North American markets.",
    sector: "Food & Beverage",
    vintage: "2024",
    highlight: "Shariah Aligned",
  },
  {
    id: "6",
    name: "CleanGrid Energy",
    category: "pre-ipo",
    status: "fully-funded",
    description: "A renewable energy infrastructure company developing solar and wind projects with long-term power purchase agreements.",
    sector: "Clean Energy",
    vintage: "2025",
    highlight: "ESG Compliant",
  },
  {
    id: "7",
    name: "Oakwood Industrial Park",
    category: "real-estate",
    status: "fully-funded",
    description: "An industrial warehouse complex with 95%+ occupancy rates and triple-net lease structures providing predictable income.",
    location: "Midwest US",
    sector: "Industrial Real Estate",
    vintage: "2023",
    highlight: "Triple-Net Lease",
  },
  {
    id: "8",
    name: "Apex Digital Marketing",
    category: "business",
    status: "exited",
    description: "A digital marketing agency with a subscription-based revenue model serving mid-market B2B clients. Successfully exited in Q4 2024.",
    sector: "Digital Services",
    vintage: "2023",
    highlight: "Successful Exit",
  },
];

const categoryConfig = {
  "real-estate": { icon: Building2, label: "Real Estate", color: "text-emerald-400" },
  "pre-ipo": { icon: Landmark, label: "Pre-IPO", color: "text-blue-400" },
  business: { icon: DollarSign, label: "Cash-Flowing Business", color: "text-amber-400" },
};

const statusConfig = {
  active: { label: "Active", dotColor: "bg-emerald-400" },
  "fully-funded": { label: "Fully Funded", dotColor: "bg-gold" },
  exited: { label: "Exited", dotColor: "bg-muted-foreground" },
};

const filterOptions: { value: Category; label: string }[] = [
  { value: "all", label: "All Holdings" },
  { value: "real-estate", label: "Real Estate" },
  { value: "pre-ipo", label: "Pre-IPO" },
  { value: "business", label: "Businesses" },
];

export default function Holdings() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered = activeFilter === "all" ? holdings : holdings.filter((h) => h.category === activeFilter);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 to-transparent" />
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[120px]" />
        <div className="container relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} className="text-gold text-xs uppercase tracking-[0.3em] mb-3 font-medium">
              Our Portfolio
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-[1.1]">
              Xirge's <span className="text-gradient-gold italic">holdings.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Explore our diversified portfolio of Shariah-compliant investments across cash-flowing
              businesses, real estate, and pre-IPO opportunities. Each investment undergoes rigorous
              due diligence and Shariah screening.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border/30 sticky top-18 z-40 bg-background/80 backdrop-blur-xl">
        <div className="container">
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setActiveFilter(opt.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeFilter === opt.value
                    ? "bg-gold/15 text-gold border border-gold/30"
                    : "text-muted-foreground hover:text-foreground border border-border/30 hover:border-border/60"
                }`}
              >
                {opt.label}
              </button>
            ))}
            <div className="ml-auto flex items-center gap-2 text-xs text-muted-foreground shrink-0">
              <Shield className="w-3.5 h-3.5 text-gold" />
              All holdings are Shariah compliant
            </div>
          </div>
        </div>
      </section>

      {/* Holdings Grid */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filtered.map((holding) => {
              const cat = categoryConfig[holding.category];
              const stat = statusConfig[holding.status];
              const CatIcon = cat.icon;

              return (
                <motion.div
                  key={holding.id}
                  variants={fadeUp}
                  layout
                  className="group rounded-xl bg-gradient-card border border-border/40 hover:border-gold/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                          <CatIcon className={`w-5 h-5 ${cat.color}`} />
                        </div>
                        <div>
                          <span className={`text-[10px] uppercase tracking-widest font-medium ${cat.color}`}>
                            {cat.label}
                          </span>
                          <h3 className="text-lg font-serif font-semibold text-foreground">{holding.name}</h3>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className={`w-2 h-2 rounded-full ${stat.dotColor}`} />
                        <span className="text-xs text-muted-foreground">{stat.label}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{holding.description}</p>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <BarChart3 className="w-3.5 h-3.5" />
                        <span>{holding.sector}</span>
                      </div>
                      {holding.location && (
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{holding.location}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Vintage {holding.vintage}</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-4 bg-background/30 border-t border-border/20 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {holding.highlight}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-gold/60">
                      <Shield className="w-3 h-3" />
                      Shariah Compliant
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No holdings found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Disclaimer + CTA */}
      <section className="py-20 bg-gradient-card border-t border-border/30">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Interested in <span className="text-gradient-gold italic">investing?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mb-8">
              Our team is ready to discuss current and upcoming investment opportunities.
              Contact us to learn more about how you can participate in Xirge Capital's portfolio.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-navy-dark font-semibold gap-2 px-8">
                  Contact Our Team
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.p variants={fadeUp} className="mt-8 text-xs text-muted-foreground/60 leading-relaxed max-w-xl mx-auto">
              Past performance is not indicative of future results. All investments carry risk.
              Investment opportunities are subject to availability and qualification criteria.
              All holdings are screened for Shariah compliance.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
