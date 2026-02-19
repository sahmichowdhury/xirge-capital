import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  TrendingUp,
  Target,
  Eye,
  Heart,
  ArrowRight,
  CheckCircle2,
  Building2,
  Landmark,
  DollarSign,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden bg-xgreen-50">
        <div className="container relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} className="text-xgreen text-xs uppercase tracking-[0.3em] mb-3 font-medium">
              About Us
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-[1.1] text-foreground">
              Investing with <span className="text-gradient-green italic">purpose.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Xirge Capital is an industry-agnostic, cash flow focused investment fund.
              We invest in cash-flowing businesses, real estate, and pre-IPO deals — making
              high-return, ethical investing accessible to everyone.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeUp} className="p-8 rounded-xl bg-white border border-border shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-xgreen/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-xgreen" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted name in ethical investing — a platform where
                individuals and institutions alike can confidently grow their wealth while staying
                true to their values. We envision a world where responsible investing is the standard,
                not the exception.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="p-8 rounded-xl bg-white border border-border shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-xgreen/10 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-xgreen" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible, transparent, and high-performing investment opportunities
                that meet the highest ethical standards. We aim to empower our investors with the
                knowledge and tools they need to build generational wealth — starting with
                cash-flowing businesses and real estate.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-20 bg-xgreen-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <p className="text-xgreen text-xs uppercase tracking-[0.3em] mb-3 font-medium">Investment Philosophy</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">
                How we <span className="text-gradient-green italic">invest.</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                Our approach is built on three pillars: cash flow generation, rigorous due diligence,
                and ethical compliance. Every investment must pass through all three filters.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: DollarSign,
                  title: "Cash-Flowing Businesses",
                  points: [
                    "Proven recurring revenue streams",
                    "Industry-agnostic opportunity sourcing",
                    "Focus on sustainable, long-term returns",
                    "Active management and value creation",
                  ],
                },
                {
                  icon: Building2,
                  title: "Real Estate",
                  points: [
                    "Commercial and residential properties",
                    "Strong cash flow potential",
                    "Long-term asset appreciation",
                    "Portfolio diversification benefits",
                  ],
                },
                {
                  icon: Landmark,
                  title: "Pre-IPO Deals",
                  points: [
                    "Early access to high-growth companies",
                    "Institutional-level due diligence",
                    "Strategic sector positioning",
                    "Significant upside potential",
                  ],
                },
              ].map((pillar) => (
                <motion.div
                  key={pillar.title}
                  variants={fadeUp}
                  className="p-6 rounded-xl bg-white border border-border shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-xgreen/10 flex items-center justify-center mb-5">
                    <pillar.icon className="w-5 h-5 text-xgreen" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold mb-4 text-foreground">{pillar.title}</h3>
                  <ul className="space-y-3">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-xgreen shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ethical & Shariah Compliance — positioned as differentiator */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-xgreen/30 bg-xgreen/5 text-xgreen text-xs font-medium uppercase tracking-widest mb-6">
                <Leaf className="w-3.5 h-3.5" />
                Our Differentiator
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">
                Ethical investing for <span className="text-gradient-green italic">everyone.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                Xirge Capital is a Shariah-compliant fund, which means we adhere to the principles
                of Islamic finance. But Shariah compliance is more than a religious framework — it's
                a commitment to ethical, transparent, and socially responsible investing that benefits
                all communities and all investors.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "No Harmful Industries", desc: "Investments are screened to exclude industries that cause social harm." },
                { title: "Transparent Structures", desc: "Clear, transparent deal structures with no hidden fees or excessive uncertainty." },
                { title: "Ethical Screening", desc: "Every investment is vetted against strict ethical and compliance standards." },
                { title: "Real Economic Activity", desc: "Returns are based on actual business performance, tied to real assets." },
                { title: "Inclusive by Design", desc: "Our ethical approach makes us attractive to all investors, regardless of background." },
                { title: "Regular Compliance Audits", desc: "Ongoing monitoring and periodic audits ensure continued adherence to standards." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 p-5 rounded-lg bg-white border border-border shadow-sm"
                >
                  <ShieldCheck className="w-5 h-5 text-xgreen shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-xgreen-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xgreen text-xs uppercase tracking-[0.3em] mb-3 font-medium">Our Values</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                What drives <span className="text-gradient-green italic">us.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: ShieldCheck, title: "Integrity", desc: "Transparency and honesty in every transaction and relationship." },
                { icon: Target, title: "Excellence", desc: "Relentless pursuit of the best opportunities for our investors." },
                { icon: TrendingUp, title: "Growth", desc: "Sustainable, long-term wealth creation over short-term gains." },
                { icon: Heart, title: "Community", desc: "Empowering individuals with financial access and opportunity." },
              ].map((value) => (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  className="text-center p-6 rounded-xl bg-white border border-border shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-xgreen/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-5 h-5 text-xgreen" />
                  </div>
                  <h4 className="font-serif font-semibold mb-2 text-foreground">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">
              Ready to invest with <span className="text-gradient-green italic">purpose?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mb-8">
              Connect with our team to learn how Xirge Capital can help you build sustainable,
              ethically-managed wealth.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-xgreen hover:bg-xgreen-dark text-white font-semibold gap-2 px-8">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/team">
                <Button variant="outline" size="lg" className="border-xgreen/40 text-xgreen hover:bg-xgreen/10 gap-2 px-8">
                  Meet Our Team
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
