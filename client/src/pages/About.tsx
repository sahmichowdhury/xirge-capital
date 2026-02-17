import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Shield,
  TrendingUp,
  Target,
  Eye,
  Heart,
  ArrowRight,
  CheckCircle2,
  Building2,
  Landmark,
  DollarSign,
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
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 to-transparent" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[120px]" />
        <div className="container relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} className="text-gold text-xs uppercase tracking-[0.3em] mb-3 font-medium">
              About Us
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-[1.1]">
              Where faith meets <span className="text-gradient-gold italic">finance.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Xirge Capital is a Shariah-compliant, industry-agnostic investment fund focused on
              cash-flowing businesses and real estate. We exist to make ethical, high-return investing
              accessible to everyone.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeUp} className="p-8 rounded-xl bg-gradient-card border border-border/40">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted name in Shariah-compliant investing — a platform where
                individuals and institutions alike can confidently grow their wealth while staying
                true to their values. We envision a world where ethical investing is the standard,
                not the exception.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="p-8 rounded-xl bg-gradient-card border border-border/40">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible, transparent, and high-performing investment opportunities
                that adhere to Shariah principles. We aim to empower our investors with the
                knowledge and tools they need to build generational wealth — starting with
                cash-flowing businesses and real estate.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-20 bg-gradient-card border-y border-border/30">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <p className="text-gold text-xs uppercase tracking-[0.3em] mb-3 font-medium">Investment Philosophy</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                How we <span className="text-gradient-gold italic">invest.</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                Our approach is built on three pillars: Shariah compliance, cash flow generation,
                and rigorous due diligence. Every investment must pass through all three filters.
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
                  className="p-6 rounded-xl bg-background/50 border border-border/30"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                    <pillar.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold mb-4">{pillar.title}</h3>
                  <ul className="space-y-3">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
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

      {/* Shariah Compliance */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-medium uppercase tracking-widest mb-6">
                <Shield className="w-3.5 h-3.5" />
                Shariah Compliant
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Ethical investing at our <span className="text-gradient-gold italic">core.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                Shariah compliance isn't an afterthought at Xirge Capital — it's the foundation
                of everything we do. Every investment is screened against Islamic financial principles
                to ensure full compliance.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "No Interest (Riba)", desc: "All investments are structured to avoid interest-based returns." },
                { title: "No Excessive Uncertainty (Gharar)", desc: "Transparent deal structures with clearly defined terms." },
                { title: "Ethical Screening", desc: "Investments are screened to exclude prohibited industries." },
                { title: "Profit & Loss Sharing", desc: "Returns are based on actual business performance, not guaranteed interest." },
                { title: "Asset-Backed", desc: "Investments are tied to real, tangible economic activity." },
                { title: "Regular Auditing", desc: "Ongoing compliance monitoring and periodic Shariah audits." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 p-5 rounded-lg bg-card/50 border border-border/30"
                >
                  <Shield className="w-5 h-5 text-gold shrink-0 mt-0.5" />
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
      <section className="py-20 bg-gradient-navy">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-gold text-xs uppercase tracking-[0.3em] mb-3 font-medium">Our Values</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                Beyond capital <span className="text-gradient-gold italic">growth.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Integrity", desc: "Transparency and honesty in every transaction and relationship." },
                { icon: Target, title: "Excellence", desc: "Relentless pursuit of the best opportunities for our investors." },
                { icon: TrendingUp, title: "Growth", desc: "Sustainable, long-term wealth creation over short-term gains." },
                { icon: Heart, title: "Community", desc: "Empowering individuals with financial literacy and access." },
              ].map((value) => (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  className="text-center p-6 rounded-xl bg-card/30 border border-border/30"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h4 className="font-serif font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to invest with <span className="text-gradient-gold italic">purpose?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mb-8">
              Connect with our team to learn how Xirge Capital can help you build sustainable,
              Shariah-compliant wealth.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-navy-dark font-semibold gap-2 px-8">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/team">
                <Button variant="outline" size="lg" className="border-gold/40 text-gold hover:bg-gold/10 gap-2 px-8">
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
