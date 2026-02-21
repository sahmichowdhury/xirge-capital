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
    role: "Fund Manager",
    photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663361696775/eKcPzaNoSxBPDvac.jpg",
    linkedin: "https://www.linkedin.com/in/sahmi-chowdhury/",
    bio: "Sahmi has deep expertise in investment analysis and evaluating opportunities across multiple asset classes, with comprehensive exposure to capital markets infrastructure, digital payments, and financial technology platforms. Sahmi also owns and operates a global media and marketing agency headquartered in New York City. His analytical skills and strategic insight provide Xirge Capital with a critical edge in identifying investment opportunities, structuring deals, and building strong investor relationships. Sahmi leads deal sourcing and investor relations at Xirge Capital, leveraging his experience across the finance and technology sectors and bringing a global perspective to every deal, shaped by his international upbringing.",
    specialties: ["Deal Sourcing", "Investor Relations", "Capital Markets"],
  },
  {
    name: "Fraily Ventura",
    role: "Fund Manager",
    photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663361696775/MFANmDlcYunGRnIZ.jpeg",
    linkedin: "https://www.linkedin.com/in/fraily-ventura-53722b132/",
    bio: "Fraily is a tax accountant with extensive experience in the Wealth and Asset Management space, with deep expertise in tax compliance for complex structures and investment funds, fund structuring, and regulatory requirements. He is a licensed Certified Public Accountant (CPA) in the state of New York and is highly knowledgeable in financial instruments, securities, and the applicable laws and compliance frameworks. His technical expertise and analytical skills provide Xirge Capital with a critical edge in evaluating investment opportunities and identifying tax efficiencies across various investment vehicles.",
    specialties: ["Tax & Compliance", "Investment Management", "Fund Structuring"],
  },
  {
    name: "James Chowdhury",
    role: "Fund Manager",
    photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663361696775/MbHNSJyNjrXGimNC.jpeg",
    linkedin: "https://www.linkedin.com/in/james-disanto-267224132/",
    bio: "James brings hands-on operational leadership to Xirge Capital, shaped by years of experience in factory management, logistics, lean six sigma, and supply chain operations. His track record overseeing production systems, improving process efficiency, and strong facilitation skills, combined with his ability to perform operational due diligence, strengthens the durable operational foundation of Xirge Capital's portfolio companies and provides the fund with a practical understanding of how profitable businesses function on the ground.",
    specialties: ["Operations & Logistics", "Factory Management", "Due Diligence"],
  },
];

export default function Team() {
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
              Our Team
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-[1.1] text-foreground">
              The people behind <span className="text-gradient-green italic">Xirge.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Our team of fund managers brings together diverse expertise in finance, tax,
              and operations — united by a shared commitment to ethical investing
              and building generational wealth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col lg:flex-row gap-8 justify-center"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                className="group relative flex-1 rounded-xl bg-white border border-border hover:border-xgreen/30 hover:shadow-lg transition-all duration-500 overflow-hidden"
              >
                {/* Photo area */}
                <div className="relative p-8 pb-6 text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-3 border-xgreen/20 mx-auto mb-5 group-hover:border-xgreen/40 transition-colors aspect-square">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">{member.name}</h3>
                  <p className="text-xgreen text-sm font-medium mt-1">{member.role}</p>
                </div>

                {/* Bio */}
                <div className="px-8 pb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>

                {/* Specialties */}
                <div className="px-8 pb-6">
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-xgreen/20 text-xgreen/80 bg-xgreen/5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social links */}
                <div className="px-8 pb-8 flex gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-xgreen hover:border-xgreen/30 transition-colors"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-xgreen-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeUp} className="w-16 h-16 rounded-full bg-xgreen/10 flex items-center justify-center mx-auto mb-6">
              <Users className="w-7 h-7 text-xgreen" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">
              A team built on <span className="text-gradient-green italic">trust.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Xirge Capital, our fund managers work collaboratively to evaluate every
              opportunity through multiple lenses — financial performance, ethical compliance,
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
      <section className="py-20 bg-background">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">
              Want to work with <span className="text-gradient-green italic">us?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Reach out to our team to discuss investment opportunities or learn more about
              how Xirge Capital can help you achieve your financial goals.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact">
                <Button size="lg" className="bg-xgreen hover:bg-xgreen-dark text-white font-semibold gap-2 px-8">
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
