import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Building2,
  Landmark,
  BookOpen,
  ChevronRight,
  BarChart3,
  DollarSign,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-background" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, oklch(0.78 0.12 85) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gold glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />

        <div className="relative container pt-32 pb-20 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-medium uppercase tracking-widest">
                <Shield className="w-3.5 h-3.5" />
                Shariah-Compliant Investment Fund
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-6"
            >
              <span className="text-foreground">Generational </span>
              <span className="text-gradient-gold">wealth</span>
              <br />
              <span className="text-foreground">is within </span>
              <span className="text-gradient-gold italic">reach.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Xirge Capital provides tailored, Shariah-compliant investment opportunities
              across cash-flowing businesses, real estate, and pre-IPO deals — building
              sustainable wealth for the next generation.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/holdings">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-navy-dark font-semibold gap-2 px-8">
                  View Our Holdings
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-gold/40 text-gold hover:bg-gold/10 gap-2 px-8">
                  Learn More
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeUp}
              className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              {[
                { icon: Shield, label: "Shariah Compliant", desc: "Ethical investing aligned with Islamic principles" },
                { icon: TrendingUp, label: "Cash Flow Focused", desc: "Targeting sustainable, recurring returns" },
                { icon: Target, label: "Industry Agnostic", desc: "Opportunities across all sectors" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/30 border border-border/30"
                >
                  <item.icon className="w-5 h-5 text-gold" />
                  <span className="text-sm font-semibold text-foreground">{item.label}</span>
                  <span className="text-xs text-muted-foreground text-center">{item.desc}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent" />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-gradient-navy">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-gold text-xs uppercase tracking-[0.3em] mb-3 font-medium">
              What We Do
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              Where faith meets <span className="text-gradient-gold italic">finance.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Xirge Capital was founded on a core vision of making ethical, high-return investing
              accessible to everyone — from first-time investors to seasoned professionals.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: DollarSign,
                title: "Cash-Flowing Businesses",
                desc: "We invest in businesses with proven, recurring revenue streams. Our industry-agnostic approach means we find the best cash flow opportunities regardless of sector.",
                tag: "Core Focus",
              },
              {
                icon: Building2,
                title: "Real Estate Investing",
                desc: "Gain access to one of the most historically well-performing asset classes. Our real estate portfolio targets properties with strong cash flow potential and long-term appreciation.",
                tag: "Tangible Assets",
              },
              {
                icon: Landmark,
                title: "Pre-IPO Deals",
                desc: "Access exclusive pre-IPO investment opportunities in high-growth companies before they go public. Early-stage investing with institutional-level due diligence.",
                tag: "Early Access",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="group relative p-8 rounded-xl bg-gradient-card border border-border/40 hover:border-gold/30 transition-all duration-500"
              >
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] uppercase tracking-widest text-gold/60 font-medium">{card.tag}</span>
                </div>
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <card.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Xirge Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[100px]" />
        <div className="container relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.p variants={fadeUp} className="text-gold text-xs uppercase tracking-[0.3em] mb-3 font-medium">
                  Why Xirge Capital
                </motion.p>
                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Your path to the <span className="text-gradient-gold italic">next level.</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-6">
                  Investing is a time-demanding activity, and picking the best options often requires the
                  full-time attention of professionals. Without proper methods and expertise, your funds
                  will struggle to reach their potential return on investment.
                </motion.p>
                <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-8">
                  At Xirge Capital, we offer everything you need to make the best of your capital — all
                  while maintaining strict adherence to Shariah principles. Our team of experienced fund
                  managers conducts rigorous due diligence on every opportunity.
                </motion.p>
                <motion.div variants={fadeUp}>
                  <Link href="/about">
                    <Button variant="outline" className="border-gold/40 text-gold hover:bg-gold/10 gap-2">
                      Learn About Our Approach
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </motion.div>
              </div>

              <motion.div variants={fadeUp} className="space-y-4">
                {[
                  {
                    icon: BarChart3,
                    title: "Rigorous Due Diligence",
                    desc: "Every investment undergoes comprehensive analysis to ensure it meets our strict qualification criteria and Shariah compliance standards.",
                  },
                  {
                    icon: Shield,
                    title: "Shariah-First Approach",
                    desc: "We don't just check a box — Shariah compliance is woven into every decision we make, from screening to portfolio management.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Cash Flow Priority",
                    desc: "We prioritize investments that generate consistent, sustainable cash flows — building wealth you can rely on.",
                  },
                  {
                    icon: BookOpen,
                    title: "Investor Education",
                    desc: "We believe in empowering our investors with knowledge. Our educational resources help you understand every aspect of your investments.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-5 rounded-lg bg-card/50 border border-border/30 hover:border-gold/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-serif font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOMO / Stats Section */}
      <section className="py-20 bg-gradient-card border-y border-border/30">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold mb-4">
              The best time to invest was yesterday.
              <br />
              <span className="text-gradient-gold italic">The second best time is now.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
              At Xirge Capital, we're focused on creating a financial future for you, to allow you to
              experience true financial freedom through ethical, Shariah-compliant investing.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "3", label: "Investment Verticals" },
              { value: "100%", label: "Shariah Compliant" },
              { value: "3", label: "Fund Managers" },
              { value: "∞", label: "Growth Potential" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="text-center p-6 rounded-lg bg-background/50 border border-border/30"
              >
                <div className="text-3xl md:text-4xl font-serif font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Teaser */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.p variants={fadeUp} className="text-gold text-xs uppercase tracking-[0.3em] mb-3 font-medium">
              Financial Literacy
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Invest in your <span className="text-gradient-gold italic">knowledge.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-8">
              We believe that informed investors make better decisions. Our educational resources
              cover everything from the basics of investing to advanced portfolio strategies —
              all through a Shariah-compliant lens.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/news">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-navy-dark font-semibold gap-2 px-8">
                  <BookOpen className="w-4 h-4" />
                  Explore Our Insights
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-gold/40 text-gold hover:bg-gold/10 gap-2 px-8">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent" />
        <div className="container relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col lg:flex-row items-center justify-between gap-8 p-10 rounded-2xl bg-card/60 border border-gold/20"
          >
            <div>
              <motion.h3 variants={fadeUp} className="text-2xl md:text-3xl font-serif font-bold mb-2">
                Ready to start your <span className="text-gradient-gold">journey?</span>
              </motion.h3>
              <motion.p variants={fadeUp} className="text-muted-foreground max-w-lg">
                Connect with our team to learn how Xirge Capital can help you build
                sustainable, Shariah-compliant wealth.
              </motion.p>
            </div>
            <motion.div variants={fadeUp}>
              <Link href="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-navy-dark font-semibold gap-2 px-8 whitespace-nowrap">
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
