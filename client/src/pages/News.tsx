import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Filter,
  TrendingUp,
  Shield,
  Building2,
  DollarSign,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

type ArticleCategory = "all" | "investing-101" | "shariah-finance" | "real-estate" | "market-insights";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<ArticleCategory, "all">;
  date: string;
  readTime: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    slug: "what-is-shariah-compliant-investing",
    title: "What Is Shariah-Compliant Investing? A Beginner's Guide",
    excerpt: "Understanding the principles of Islamic finance and how Shariah-compliant investing works. Learn about the screening criteria, prohibited activities, and how ethical investing can deliver strong returns.",
    category: "shariah-finance",
    date: "Feb 10, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "understanding-cash-flow-investing",
    title: "Understanding Cash Flow Investing: Why It Matters",
    excerpt: "Cash flow is the lifeblood of any investment. Learn why cash-flowing businesses and real estate are the foundation of sustainable wealth building and how to evaluate cash flow potential.",
    category: "investing-101",
    date: "Feb 5, 2026",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "real-estate-investing-beginners",
    title: "Real Estate Investing for Beginners: Getting Started",
    excerpt: "A comprehensive guide to getting started with real estate investing. From understanding different property types to evaluating deals, this guide covers everything you need to know.",
    category: "real-estate",
    date: "Jan 28, 2026",
    readTime: "10 min read",
  },
  {
    slug: "pre-ipo-investing-explained",
    title: "Pre-IPO Investing Explained: Opportunities and Risks",
    excerpt: "Pre-IPO investing offers the potential for significant returns, but it comes with unique risks. Learn how to evaluate pre-IPO opportunities and what to look for in early-stage companies.",
    category: "market-insights",
    date: "Jan 20, 2026",
    readTime: "7 min read",
  },
  {
    slug: "diversification-shariah-portfolio",
    title: "Building a Diversified Shariah-Compliant Portfolio",
    excerpt: "Diversification is key to managing risk in any portfolio. Discover how to build a well-balanced, Shariah-compliant investment portfolio across multiple asset classes.",
    category: "shariah-finance",
    date: "Jan 15, 2026",
    readTime: "9 min read",
  },
  {
    slug: "power-of-compound-returns",
    title: "The Power of Compound Returns: Start Early, Grow Big",
    excerpt: "Albert Einstein called compound interest the eighth wonder of the world. Learn how compound returns work and why starting your investment journey early can make a dramatic difference.",
    category: "investing-101",
    date: "Jan 8, 2026",
    readTime: "5 min read",
  },
  {
    slug: "evaluating-commercial-real-estate",
    title: "How to Evaluate Commercial Real Estate Investments",
    excerpt: "Commercial real estate can be a powerful wealth-building tool. Learn the key metrics and due diligence steps for evaluating commercial property investments.",
    category: "real-estate",
    date: "Dec 30, 2025",
    readTime: "8 min read",
  },
  {
    slug: "market-outlook-2026",
    title: "Market Outlook 2026: Trends and Opportunities",
    excerpt: "Our team's analysis of key market trends heading into 2026, including sectors poised for growth, potential risks, and where we see the best Shariah-compliant investment opportunities.",
    category: "market-insights",
    date: "Dec 20, 2025",
    readTime: "12 min read",
  },
];

const categoryConfig: Record<string, { icon: typeof BookOpen; label: string; color: string }> = {
  "investing-101": { icon: GraduationCap, label: "Investing 101", color: "text-emerald-400" },
  "shariah-finance": { icon: Shield, label: "Shariah Finance", color: "text-gold" },
  "real-estate": { icon: Building2, label: "Real Estate", color: "text-blue-400" },
  "market-insights": { icon: TrendingUp, label: "Market Insights", color: "text-amber-400" },
};

const filterOptions: { value: ArticleCategory; label: string }[] = [
  { value: "all", label: "All Articles" },
  { value: "investing-101", label: "Investing 101" },
  { value: "shariah-finance", label: "Shariah Finance" },
  { value: "real-estate", label: "Real Estate" },
  { value: "market-insights", label: "Market Insights" },
];

export default function News() {
  const [activeFilter, setActiveFilter] = useState<ArticleCategory>("all");

  const filtered = activeFilter === "all" ? articles : articles.filter((a) => a.category === activeFilter);
  const featuredArticles = articles.filter((a) => a.featured);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 to-transparent" />
        <div className="absolute top-20 right-1/3 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[120px]" />
        <div className="container relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} className="text-gold text-xs uppercase tracking-[0.3em] mb-3 font-medium">
              News & Insights
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-[1.1]">
              Financial <span className="text-gradient-gold italic">literacy.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Empowering you with the knowledge to make informed investment decisions.
              Explore our articles on investing fundamentals, Shariah finance, real estate,
              and market insights.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      {activeFilter === "all" && (
        <section className="py-12">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="text-gold text-xs uppercase tracking-[0.3em] mb-6 font-medium">
                Featured
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredArticles.map((article) => {
                  const cat = categoryConfig[article.category];
                  const CatIcon = cat.icon;
                  return (
                    <motion.div key={article.slug} variants={fadeUp}>
                      <Link
                        href={`/news/${article.slug}`}
                        className="group block p-8 rounded-xl bg-gradient-card border border-gold/20 hover:border-gold/40 transition-all duration-500"
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <CatIcon className={`w-4 h-4 ${cat.color}`} />
                          <span className={`text-[10px] uppercase tracking-widest font-medium ${cat.color}`}>
                            {cat.label}
                          </span>
                        </div>
                        <h3 className="text-xl font-serif font-bold mb-3 text-foreground group-hover:text-gold transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{article.excerpt}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {article.readTime}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

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
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((article) => {
              const cat = categoryConfig[article.category];
              const CatIcon = cat.icon;
              return (
                <motion.div key={article.slug} variants={fadeUp} layout>
                  <Link
                    href={`/news/${article.slug}`}
                    className="group block h-full p-6 rounded-xl bg-gradient-card border border-border/40 hover:border-gold/30 transition-all duration-500"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <CatIcon className={`w-3.5 h-3.5 ${cat.color}`} />
                      <span className={`text-[10px] uppercase tracking-widest font-medium ${cat.color}`}>
                        {cat.label}
                      </span>
                    </div>
                    <h3 className="text-base font-serif font-semibold mb-2 text-foreground group-hover:text-gold transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="w-10 h-10 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-card border-t border-border/30">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div variants={fadeUp} className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
              <DollarSign className="w-6 h-6 text-gold" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Stay <span className="text-gradient-gold italic">informed.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mb-8">
              Knowledge is the foundation of smart investing. Continue exploring our articles
              to deepen your understanding of Shariah-compliant finance and investment strategies.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-navy-dark font-semibold gap-2 px-8">
                  Contact Us for More
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
