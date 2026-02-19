import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  TrendingUp,
  Leaf,
  Building2,
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

type ArticleCategory = "all" | "investing-basics" | "ethical-finance" | "real-estate" | "market-insights";

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
    slug: "what-is-cash-flow-investing",
    title: "What Is Cash Flow Investing and Why It Matters",
    excerpt: "Cash flow investing focuses on assets that generate consistent, recurring income. Learn why this strategy is the foundation of sustainable wealth building.",
    category: "investing-basics",
    date: "Feb 15, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    slug: "understanding-pre-ipo-investments",
    title: "Understanding Pre-IPO Investments: Risks and Rewards",
    excerpt: "Pre-IPO investing offers significant upside potential but comes with unique risks. Here's what every investor should know before entering this space.",
    category: "market-insights",
    date: "Feb 10, 2026",
    readTime: "7 min read",
    featured: true,
  },
  {
    slug: "real-estate-portfolio-diversification",
    title: "How Real Estate Strengthens Your Investment Portfolio",
    excerpt: "Real estate has long been a cornerstone of wealth building. Discover how adding real estate to your portfolio can provide stability and consistent returns.",
    category: "real-estate",
    date: "Feb 5, 2026",
    readTime: "6 min read",
  },
  {
    slug: "ethical-investing-explained",
    title: "Ethical Investing: More Than Just a Trend",
    excerpt: "Ethical and Shariah-compliant investing is growing rapidly. Learn how investing with values can actually improve your financial outcomes.",
    category: "ethical-finance",
    date: "Jan 28, 2026",
    readTime: "5 min read",
  },
  {
    slug: "beginners-guide-to-investing",
    title: "A Beginner's Guide to Starting Your Investment Journey",
    excerpt: "New to investing? This comprehensive guide covers the fundamentals every first-time investor needs to know to make informed decisions.",
    category: "investing-basics",
    date: "Jan 20, 2026",
    readTime: "8 min read",
  },
  {
    slug: "commercial-real-estate-trends-2026",
    title: "Commercial Real Estate Trends to Watch in 2026",
    excerpt: "The commercial real estate landscape is evolving. From industrial warehouses to mixed-use developments, here are the trends shaping the market.",
    category: "real-estate",
    date: "Jan 15, 2026",
    readTime: "6 min read",
  },
  {
    slug: "what-makes-shariah-compliant-investing-different",
    title: "What Makes Shariah-Compliant Investing Different",
    excerpt: "Shariah-compliant investing follows principles that promote ethical, transparent, and socially responsible financial practices. Here's how it works.",
    category: "ethical-finance",
    date: "Jan 8, 2026",
    readTime: "5 min read",
  },
  {
    slug: "evaluating-business-cash-flow",
    title: "How to Evaluate a Business by Its Cash Flow",
    excerpt: "Cash flow analysis is one of the most important skills for any investor. Learn the key metrics and methods used to assess business viability.",
    category: "market-insights",
    date: "Jan 2, 2026",
    readTime: "7 min read",
  },
];

const categoryConfig: Record<string, { icon: typeof BookOpen; label: string; color: string }> = {
  "investing-basics": { icon: GraduationCap, label: "Investing Basics", color: "text-xgreen" },
  "ethical-finance": { icon: Leaf, label: "Ethical Finance", color: "text-emerald-600" },
  "real-estate": { icon: Building2, label: "Real Estate", color: "text-amber-600" },
  "market-insights": { icon: TrendingUp, label: "Market Insights", color: "text-blue-600" },
};

const filterOptions: { value: ArticleCategory; label: string }[] = [
  { value: "all", label: "All Articles" },
  { value: "investing-basics", label: "Investing Basics" },
  { value: "market-insights", label: "Market Insights" },
  { value: "real-estate", label: "Real Estate" },
  { value: "ethical-finance", label: "Ethical Finance" },
];

export default function News() {
  const [activeFilter, setActiveFilter] = useState<ArticleCategory>("all");

  const filtered = activeFilter === "all" ? articles : articles.filter((a) => a.category === activeFilter);
  const featured = filtered.filter((a) => a.featured);
  const regular = filtered.filter((a) => !a.featured);

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
              News &amp; Insights
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-[1.1] text-foreground">
              Stay <span className="text-gradient-green italic">informed.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Explore our latest insights on investing, market trends, and financial strategies.
              Knowledge is the foundation of smart investing.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border sticky top-18 z-40 bg-background/95 backdrop-blur-xl">
        <div className="container">
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            <Tag className="w-4 h-4 text-muted-foreground shrink-0" />
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setActiveFilter(opt.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeFilter === opt.value
                    ? "bg-xgreen/10 text-xgreen border border-xgreen/30"
                    : "text-muted-foreground hover:text-foreground border border-border hover:border-border"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featured.length > 0 && (
        <section className="py-12 bg-background">
          <div className="container">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 font-medium">Featured</p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {featured.map((article) => {
                const cat = categoryConfig[article.category];
                const CatIcon = cat.icon;
                return (
                  <motion.div key={article.slug} variants={fadeUp}>
                    <Link href={`/news/${article.slug}`}>
                      <div className="group p-8 rounded-xl bg-white border border-border hover:border-xgreen/30 hover:shadow-lg transition-all duration-500 h-full">
                        <div className="flex items-center gap-2 mb-4">
                          <CatIcon className={`w-4 h-4 ${cat.color}`} />
                          <span className={`text-[10px] uppercase tracking-widest font-medium ${cat.color}`}>
                            {cat.label}
                          </span>
                        </div>
                        <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-xgreen transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{article.excerpt}</p>
                        <div className="flex items-center justify-between">
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
                          <ArrowRight className="w-4 h-4 text-xgreen opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-12 bg-background">
        <div className="container">
          {featured.length > 0 && (
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 font-medium">All Articles</p>
          )}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-4"
          >
            {(featured.length > 0 ? regular : filtered).map((article) => {
              const cat = categoryConfig[article.category];
              const CatIcon = cat.icon;
              return (
                <motion.div key={article.slug} variants={fadeUp}>
                  <Link href={`/news/${article.slug}`}>
                    <div className="group flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-xl bg-white border border-border hover:border-xgreen/30 hover:shadow-md transition-all duration-300">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CatIcon className={`w-3.5 h-3.5 ${cat.color}`} />
                          <span className={`text-[10px] uppercase tracking-widest font-medium ${cat.color}`}>
                            {cat.label}
                          </span>
                        </div>
                        <h3 className="text-base font-serif font-semibold text-foreground group-hover:text-xgreen transition-colors mb-1">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground shrink-0">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readTime}
                        </span>
                        <ArrowRight className="w-4 h-4 text-xgreen opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
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

      {/* CTA */}
      <section className="py-20 bg-xgreen-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">
              Want to learn <span className="text-gradient-green italic">more?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mb-8">
              Knowledge is the foundation of smart investing. Connect with our team to discuss
              your investment goals and learn about ethical investing with Xirge Capital.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact">
                <Button size="lg" className="bg-xgreen hover:bg-xgreen-dark text-white font-semibold gap-2 px-8">
                  Contact Us
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
