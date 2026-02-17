import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail, Users } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const teamMembers = [
  {
    name: "Sahmi Chowdhury",
    role: "Co-Fund Manager",
    initials: "SC",
    bio: "Sahmi brings a deep understanding of Shariah-compliant finance and a passion for making ethical investing accessible. With expertise in cash-flowing business analysis and portfolio strategy, he leads Xirge's investment screening process and ensures every opportunity aligns with both financial performance targets and Islamic principles.",
    specialties: ["Shariah Compliance", "Business Analysis", "Portfolio Strategy"],
  },
  {
    name: "Fraily Ventura",
    role: "Co-Fund Manager",
    initials: "FV",
    bio: "Fraily is a seasoned investor with a keen eye for real estate opportunities and pre-IPO deals. Her analytical approach to due diligence and market research has been instrumental in identifying high-potential investments across multiple sectors. She oversees Xirge's real estate portfolio and manages investor relations.",
    specialties: ["Real Estate", "Pre-IPO Deals", "Investor Relations"],
  },
  {
    name: "James DiSanto",
    role: "Co-Fund Manager",
    initials: "JD",
    bio: "James combines financial acumen with operational expertise to evaluate and manage Xirge's diverse portfolio of cash-flowing businesses. His background in business operations and financial modeling ensures that every investment undergoes rigorous analysis. He leads the fund's educational initiatives and financial literacy programs.",
    specialties: ["Operations", "Financial Modeling", "Education"],
  },
];

export default function Team() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 to-transparent" />
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[120px]" />
        <div className="container relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} className="text-gold text-xs uppercase tracking-[0.3em] mb-3 font-medium">
              Our Team
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-[1.1]">
              The people behind <span className="text-gradient-gold italic">Xirge.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Our team of co-fund managers brings together diverse expertise in finance, real estate,
              and business operations — united by a shared commitment to Shariah-compliant investing
              and building generational wealth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                className="group relative rounded-xl bg-gradient-card border border-border/40 hover:border-gold/30 transition-all duration-500 overflow-hidden"
              >
                {/* Avatar area */}
                <div className="relative p-8 pb-6 text-center">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold/30 flex items-center justify-center mx-auto mb-5 group-hover:border-gold/50 transition-colors">
                    <span className="text-3xl font-serif font-bold text-gold">{member.initials}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">{member.name}</h3>
                  <p className="text-gold text-sm font-medium mt-1">{member.role}</p>
                </div>

                {/* Bio */}
                <div className="px-8 pb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>

                {/* Specialties */}
                <div className="px-8 pb-8">
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-gold/20 text-gold/80 bg-gold/5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social links placeholder */}
                <div className="px-8 pb-8 flex gap-3">
                  <button
                    className="w-9 h-9 rounded-lg bg-card/80 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/30 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </button>
                  <button
                    className="w-9 h-9 rounded-lg bg-card/80 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/30 transition-colors"
                    aria-label={`LinkedIn ${member.name}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-gradient-card border-y border-border/30">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeUp} className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
              <Users className="w-7 h-7 text-gold" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold mb-4">
              A team built on <span className="text-gradient-gold italic">trust.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Xirge Capital, our co-fund managers work collaboratively to evaluate every
              opportunity through multiple lenses — financial performance, Shariah compliance,
              and long-term sustainability. This multi-perspective approach ensures that our
              investors receive the most thoroughly vetted investment opportunities available.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
              We believe that the strength of our team lies in its diversity of expertise.
              From real estate to pre-IPO deals to cash-flowing businesses, each manager brings
              specialized knowledge that strengthens our collective investment thesis.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Want to work with <span className="text-gradient-gold italic">us?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Reach out to our team to discuss investment opportunities or learn more about
              how Xirge Capital can help you achieve your financial goals.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-navy-dark font-semibold gap-2 px-8">
                  Get in Touch
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
