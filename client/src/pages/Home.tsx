import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Leaf,
  TrendingUp,
  Building2,
  Landmark,
  ChevronRight,
  BarChart3,
  DollarSign,
  Target,
  ShieldCheck,
  Users,
  BookOpen,
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
      {/* Hero Section — Dark green background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-dark">
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Soft glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 rounded-full blur-[150px]" />

        <div className="relative container pt-32 pb-20 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-xs font-medium uppercase tracking-widest">
                <Leaf className="w-3.5 h-3.5" />
                Ethical &amp; Shariah-Compliant Investing
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-6"
            >
              <span className="text-white">Your wealth, </span>
              <span className="text-xgreen-50 italic">your future.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Xirge Capital is an industry-agnostic, cash flow focused investment fund.
              We invest in cash-flowing businesses, real estate, and pre-IPO opportunities —
              building sustainable wealth for all investors.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/holdings">
                <Button size="lg" className="bg-white text-xgreen-dark font-semibold gap-2 px-8 hover:bg-white/90">
                  View Our Holdings
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 gap-2 px-8">
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
                { icon: TrendingUp, label: "Cash Flow Focused", desc: "Targeting sustainable, recurring returns" },
                { icon: Target, label: "Industry Agnostic", desc: "Opportunities across all sectors" },
                { icon: ShieldCheck, label: "Ethically Invested", desc: "Shariah-compliant and socially responsible" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/8 border border-white/15"
                >
                  <item.icon className="w-5 h-5 text-white/90" />
                  <span className="text-sm font-semibold text-white">{item.label}</span>
                  <span className="text-xs text-white/60 text-center">{item.desc}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-xgreen text-xs uppercase tracking-[0.3em] mb-3 font-medium">
              What We Do
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-foreground">
              Investing with <span className="text-gradient-green italic">purpose.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Xirge Capital was founded to make high-return, ethical investing accessible to everyone —
              from first-time investors to seasoned professionals. We are for all investors, and our
              Shariah-compliant approach means we practice ethical investing that benefits communities.
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
                className="group relative p-8 rounded-xl bg-white border border-border hover:border-xgreen/30 hover:shadow-lg transition-all duration-500"
              >
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] uppercase tracking-widest text-xgreen/60 font-medium">{card.tag}</span>
                </div>
                <div className="w-12 h-12 rounded-lg bg-xgreen/10 flex items-center justify-center mb-6 group-hover:bg-xgreen/15 transition-colors">
                  <card.icon className="w-6 h-6 text-xgreen" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Xirge Section */}
      <section className="py-24 relative overflow-hidden bg-xgreen-50">
        <div className="container relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.p variants={fadeUp} className="text-xgreen text-xs uppercase tracking-[0.3em] mb-3 font-medium">
                  Why Xirge Capital
                </motion.p>
                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">
                  Your path to the <span className="text-gradient-green italic">next level.</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-6">
                  Investing is a time-demanding activity, and picking the best options often requires the
                  full-time attention of professionals. Without proper methods and expertise, your funds
                  will struggle to reach their potential return on investment.
                </motion.p>
                <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-8">
                  At Xirge Capital, we offer everything you need to make the best of your capital.
                  Our team of experienced fund managers conducts rigorous due diligence on every
                  opportunity, ensuring both strong returns and ethical standards.
                </motion.p>
                <motion.div variants={fadeUp}>
                  <Link href="/about">
                    <Button variant="outline" className="border-xgreen/40 text-xgreen hover:bg-xgreen/10 gap-2">
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
                    desc: "Every investment undergoes comprehensive analysis to ensure it meets our strict qualification criteria and ethical compliance standards.",
                  },
                  {
                    icon: Leaf,
                    title: "Ethical Investing",
                    desc: "Our Shariah-compliant approach means we invest ethically — no harmful industries, no excessive risk, and full transparency. This makes us inclusive of all communities.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Cash Flow First",
                    desc: "We prioritize investments that generate consistent, sustainable cash flows — building wealth you can rely on.",
                  },
                  {
                    icon: Users,
                    title: "For All Investors",
                    desc: "Whether you're just starting out or a seasoned investor, Xirge Capital is built to serve you with accessible, high-quality investment opportunities.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-5 rounded-lg bg-white border border-border hover:border-xgreen/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-xgreen/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-xgreen" />
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
      <section className="py-20 bg-hero-dark">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
              The best time to invest was yesterday.
              <br />
              <span className="text-xgreen-50 italic">The second best time is now.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 max-w-2xl mx-auto">
              At Xirge Capital, we're building a financial future for you — one that allows you to
              experience true financial freedom through ethical, responsible investing.
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
              { value: "100%", label: "Ethically Invested" },
              { value: "3", label: "Fund Managers" },
              { value: "∞", label: "Growth Potential" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="text-center p-6 rounded-lg bg-white/8 border border-white/15"
              >
                <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Insights Teaser */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.p variants={fadeUp} className="text-xgreen text-xs uppercase tracking-[0.3em] mb-3 font-medium">
              News &amp; Insights
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">
              Stay <span className="text-gradient-green italic">informed.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-8">
              Explore our latest insights on investing, market trends, and financial strategies.
              Knowledge is the foundation of smart investing.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/news">
                <Button size="lg" className="bg-xgreen hover:bg-xgreen-dark text-white font-semibold gap-2 px-8">
                  <BookOpen className="w-4 h-4" />
                  Explore Our Insights
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-xgreen/40 text-xgreen hover:bg-xgreen/10 gap-2 px-8">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-xgreen-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col lg:flex-row items-center justify-between gap-8 p-10 rounded-2xl bg-white border border-xgreen/15 shadow-sm"
          >
            <div>
              <motion.h3 variants={fadeUp} className="text-2xl md:text-3xl font-serif font-bold mb-2 text-foreground">
                Ready to start your <span className="text-gradient-green">journey?</span>
              </motion.h3>
              <motion.p variants={fadeUp} className="text-muted-foreground max-w-lg">
                Connect with our team to learn how Xirge Capital can help you build
                sustainable, ethically-managed wealth.
              </motion.p>
            </div>
            <motion.div variants={fadeUp}>
              <Link href="/contact">
                <Button size="lg" className="bg-xgreen hover:bg-xgreen-dark text-white font-semibold gap-2 px-8 whitespace-nowrap">
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
