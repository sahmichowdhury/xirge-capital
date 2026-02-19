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
    photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663361696775/eKcPzaNoSxBPDvac.jpg",
    linkedin: "https://www.linkedin.com/in/sahmi-chowdhury/",
    bio: "Sahmi leads deal sourcing and investor relations at Xirge Capital, drawing on a career built across names in finance and technology. At Mastercard, he drives Global Bill Pay as a Product Manager within New Payment Platforms. He holds a BSBA in Finance and Marketing from Northeastern University where he graduated as Cum Laude in his dual major. Previously, he served as an Investment Analyst at True Capital Management, where he evaluated opportunities across asset classes, gaining deep exposure to capital markets infrastructure. He also is the founder of an international media agency, innerLens Media. Growing up in the Middle East as a Bangladeshi-American, he brings a global perspective to every deal.",
    specialties: ["Deal Sourcing", "Investor Relations", "Capital Markets"],
  },
  {
    name: "Fraily Ventura",
    role: "Co-Fund Manager",
    photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663361696775/MFANmDlcYunGRnIZ.jpeg",
    linkedin: "https://www.linkedin.com/in/fraily-ventura-53722b132/",
    bio: "Fraily is a Tax Manager at Deloitte in the Investment Management group, where he advises on complex tax structures for investment funds and financial institutions. He is a licensed Certified Public Accountant (CPA) and holds a BBA in Accounting from the University of Rhode Island. His deep expertise in investment management tax compliance, fund structuring, and regulatory frameworks gives Xirge Capital a critical edge in evaluating the financial and tax efficiency of every investment opportunity. Fraily is also an active member of MetroScholars, a New Jersey-based non-profit focused on professional development.",
    specialties: ["Tax & Compliance", "Investment Management", "Fund Structuring"],
  },
  {
    name: "James DiSanto",
    role: "Co-Fund Manager",
    photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663361696775/MbHNSJyNjrXGimNC.jpeg",
    linkedin: "https://www.linkedin.com/in/james-disanto-267224132/",
    bio: "James brings hands-on operational expertise to Xirge Capital, grounded in years of factory management, logistics, and supply chain operations. His background in managing production workflows, optimizing operational efficiency, and overseeing end-to-end logistics gives the fund a practical, ground-level understanding of how cash-flowing businesses actually run. James evaluates every potential investment through an operations-first lens — assessing not just the financials, but the operational infrastructure, scalability, and day-to-day execution capability of each business. His disciplined, systems-driven approach to due diligence ensures that Xirge's portfolio companies are built on strong operational foundations, complementing the team's financial and tax expertise.",
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
              Our team of co-fund managers brings together diverse expertise in finance, tax,
              and product strategy — united by a shared commitment to ethical investing
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
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                className="group relative rounded-xl bg-white border border-border hover:border-xgreen/30 hover:shadow-lg transition-all duration-500 overflow-hidden"
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
              At Xirge Capital, our co-fund managers work collaboratively to evaluate every
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
