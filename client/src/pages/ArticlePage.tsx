import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Shield,
  BookOpen,
  GraduationCap,
  Building2,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { articles } from "./News";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const categoryConfig: Record<string, { icon: typeof BookOpen; label: string; color: string }> = {
  "investing-101": { icon: GraduationCap, label: "Investing 101", color: "text-emerald-400" },
  "shariah-finance": { icon: Shield, label: "Shariah Finance", color: "text-gold" },
  "real-estate": { icon: Building2, label: "Real Estate", color: "text-blue-400" },
  "market-insights": { icon: TrendingUp, label: "Market Insights", color: "text-amber-400" },
};

const articleContent: Record<string, string[]> = {
  "what-is-shariah-compliant-investing": [
    "Shariah-compliant investing is an approach to finance that adheres to the principles of Islamic law (Shariah). At its core, it seeks to generate returns while avoiding activities and financial structures that are considered harmful or unethical under Islamic principles.",
    "The fundamental principles of Shariah-compliant investing include the prohibition of interest (riba), excessive uncertainty (gharar), and gambling (maysir). Instead, investments must be backed by real economic activity and involve genuine risk-sharing between parties.",
    "Shariah screening involves evaluating both the business activities and the financial ratios of potential investments. Companies involved in alcohol, tobacco, gambling, conventional financial services, pork-related products, and weapons manufacturing are typically excluded.",
    "Financial screening also plays a critical role. Companies with excessive debt levels, interest income, or cash holdings relative to their total assets may be excluded. These thresholds help ensure that the underlying business is not overly reliant on non-compliant financial practices.",
    "At Xirge Capital, we go beyond basic screening. Our team conducts thorough due diligence on every investment opportunity, examining not just Shariah compliance but also the fundamental business case, cash flow potential, and long-term sustainability of each opportunity.",
    "The growing demand for Shariah-compliant investments has led to the development of sophisticated financial products and structures that can deliver competitive returns while maintaining full compliance with Islamic principles. This includes equity investments, real estate, and private equity — all areas where Xirge Capital actively invests.",
  ],
  "understanding-cash-flow-investing": [
    "Cash flow investing is a strategy that focuses on generating regular income from investments rather than relying solely on capital appreciation. This approach prioritizes investments that produce consistent, predictable cash flows — such as rental income from real estate or profits from operating businesses.",
    "The importance of cash flow cannot be overstated. While capital gains are often uncertain and dependent on market conditions, cash flow provides a reliable income stream that can be reinvested, used to cover expenses, or distributed to investors.",
    "At Xirge Capital, our cash flow-focused approach means we evaluate every potential investment through the lens of its ability to generate sustainable, recurring revenue. We look for businesses with proven revenue models, strong customer retention, and predictable income streams.",
    "Real estate is one of the most natural vehicles for cash flow investing. Rental properties, commercial buildings, and industrial spaces all generate regular income through lease payments. When combined with proper management and strategic location selection, real estate can provide both steady cash flow and long-term appreciation.",
    "For business investments, we focus on companies with established revenue streams, low customer concentration risk, and strong operating margins. These characteristics indicate a business that can consistently generate cash flow regardless of broader market conditions.",
    "The beauty of cash flow investing is that it allows investors to build wealth gradually and sustainably. Rather than betting on market timing or speculative gains, cash flow investors benefit from the compounding effect of reinvested income over time.",
  ],
  "real-estate-investing-beginners": [
    "Real estate investing has long been recognized as one of the most reliable paths to building wealth. Unlike stocks or bonds, real estate is a tangible asset that provides both income potential and the possibility of appreciation over time.",
    "There are several types of real estate investments to consider. Residential properties include single-family homes, multi-family units, and apartment complexes. Commercial properties encompass office buildings, retail spaces, and industrial warehouses. Each type has its own risk-return profile and management requirements.",
    "When evaluating a real estate investment, several key metrics are essential. The capitalization rate (cap rate) measures the expected return based on the property's net operating income relative to its purchase price. Cash-on-cash return measures the annual cash flow relative to the total cash invested.",
    "Location is perhaps the most critical factor in real estate investing. Properties in areas with strong job growth, population growth, and limited housing supply tend to perform better over time. Understanding local market dynamics is essential for making informed investment decisions.",
    "At Xirge Capital, our real estate investments are carefully selected to meet both our financial performance criteria and Shariah compliance standards. We focus on properties with strong cash flow potential, favorable locations, and long-term appreciation prospects.",
    "For beginners, starting with real estate through a fund like Xirge Capital can be an excellent way to gain exposure to the asset class without the complexities of direct property management. Our team handles all aspects of due diligence, acquisition, and management.",
  ],
  "pre-ipo-investing-explained": [
    "Pre-IPO investing refers to the practice of investing in companies before they go public through an Initial Public Offering (IPO). This type of investing has traditionally been reserved for institutional investors and high-net-worth individuals, but access has been expanding in recent years.",
    "The primary appeal of pre-IPO investing is the potential for significant returns. Early investors in companies that go on to have successful IPOs can see substantial appreciation in their investment value. However, this potential comes with higher risk compared to investing in publicly traded companies.",
    "Due diligence is critical in pre-IPO investing. Unlike public companies, pre-IPO companies are not required to disclose the same level of financial information. Investors must carefully evaluate the company's business model, competitive position, management team, and growth trajectory.",
    "At Xirge Capital, our approach to pre-IPO investing combines institutional-level due diligence with Shariah compliance screening. We evaluate each opportunity through multiple lenses to ensure it meets our strict investment criteria.",
    "Key factors we consider include the company's revenue growth rate, path to profitability, market size, competitive advantages, and the quality of its management team. We also assess the company's capital structure and expected timeline to IPO.",
    "While pre-IPO investing carries higher risk, it also offers the potential for outsized returns that are difficult to achieve in public markets. By carefully selecting opportunities and maintaining a diversified portfolio, investors can manage this risk while positioning themselves for significant upside.",
  ],
  "diversification-shariah-portfolio": [
    "Diversification is a fundamental principle of sound investing, and it's equally important in Shariah-compliant portfolios. By spreading investments across different asset classes, sectors, and geographies, investors can reduce risk while maintaining the potential for attractive returns.",
    "A well-diversified Shariah-compliant portfolio might include equity investments in Shariah-screened companies, real estate holdings, private equity or venture capital positions, and sukuk (Islamic bonds). Each asset class responds differently to market conditions, providing natural risk mitigation.",
    "Sector diversification is another critical consideration. While Shariah screening excludes certain industries, there remains a vast universe of compliant sectors including technology, healthcare, manufacturing, real estate, and consumer goods.",
    "Geographic diversification can also enhance portfolio resilience. Different economies grow at different rates and face different challenges, so spreading investments across regions can help smooth overall portfolio performance.",
    "At Xirge Capital, our portfolio is designed with diversification at its core. We invest across cash-flowing businesses, real estate, and pre-IPO opportunities, spanning multiple sectors and geographies. This approach helps us manage risk while seeking attractive returns.",
    "The key to successful diversification is not just spreading investments widely, but doing so thoughtfully. Each position in the portfolio should serve a specific purpose and contribute to the overall risk-return profile in a meaningful way.",
  ],
  "power-of-compound-returns": [
    "Compound returns are often called the most powerful force in investing. The concept is simple: when your investment returns generate their own returns, your wealth grows exponentially rather than linearly over time.",
    "Consider this example: an investment of $10,000 growing at 10% annually would be worth approximately $25,937 after 10 years, $67,275 after 20 years, and $174,494 after 30 years. The longer you stay invested, the more dramatic the compounding effect becomes.",
    "This is why starting early is so important. Even small amounts invested consistently over long periods can grow into substantial wealth. The difference between starting at age 25 versus age 35 can be hundreds of thousands of dollars by retirement.",
    "Cash flow investing amplifies the power of compounding. When you receive regular distributions from your investments and reinvest them, you're effectively putting compound returns to work in real time. Each reinvested distribution generates its own returns, accelerating wealth accumulation.",
    "At Xirge Capital, we emphasize the importance of long-term thinking. Our investment strategy is designed to generate consistent cash flows that can be reinvested, allowing our investors to benefit from the full power of compounding over time.",
    "The key takeaway is this: time in the market matters more than timing the market. By starting your investment journey today and staying committed to a disciplined, long-term approach, you can harness the extraordinary power of compound returns.",
  ],
  "evaluating-commercial-real-estate": [
    "Commercial real estate (CRE) investing offers unique advantages including higher income potential, longer lease terms, and professional tenant relationships. However, evaluating CRE investments requires a different approach than residential real estate.",
    "The first step in evaluating any commercial property is understanding its Net Operating Income (NOI). NOI is calculated by subtracting all operating expenses from gross rental income. This figure is the foundation for most CRE valuation metrics.",
    "The capitalization rate, or cap rate, is perhaps the most widely used metric in CRE investing. It's calculated by dividing NOI by the property's purchase price. A higher cap rate generally indicates higher potential returns but may also signal higher risk.",
    "Lease structure analysis is crucial in CRE investing. Triple-net (NNN) leases, where tenants pay property taxes, insurance, and maintenance costs, provide the most predictable income streams. Understanding lease terms, escalation clauses, and tenant creditworthiness is essential.",
    "Location analysis for commercial properties focuses on different factors than residential. Key considerations include traffic patterns, accessibility, proximity to complementary businesses, local economic conditions, and zoning regulations.",
    "At Xirge Capital, our commercial real estate investments undergo comprehensive analysis covering all these factors and more. We also ensure that each property and its tenants meet our Shariah compliance standards, providing our investors with both financial performance and ethical alignment.",
  ],
  "market-outlook-2026": [
    "As we enter 2026, several key trends are shaping the investment landscape. Understanding these trends is essential for making informed investment decisions, particularly in the context of Shariah-compliant investing.",
    "The technology sector continues to present compelling opportunities, particularly in areas like artificial intelligence, healthcare technology, and clean energy. Many of these companies meet Shariah compliance criteria and offer strong growth potential.",
    "Real estate markets are showing signs of stabilization after a period of adjustment. Commercial real estate, particularly in the industrial and logistics sectors, continues to benefit from the growth of e-commerce and supply chain optimization.",
    "The pre-IPO market remains active, with several high-quality companies expected to go public in 2026. Our team is closely monitoring these opportunities and conducting preliminary due diligence on the most promising candidates.",
    "Inflation and interest rate dynamics continue to influence investment decisions. Cash-flowing investments that can adjust pricing in line with inflation offer natural protection against purchasing power erosion.",
    "At Xirge Capital, we remain committed to our disciplined, cash flow-focused approach. While market conditions will always fluctuate, our emphasis on fundamental value, Shariah compliance, and sustainable cash flows positions our portfolio to perform well across different market environments.",
  ],
};

export default function ArticlePage() {
  const params = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Article Not Found</h2>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
          <Link href="/news">
            <Button variant="outline" className="border-gold/40 text-gold hover:bg-gold/10 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const cat = categoryConfig[article.category];
  const CatIcon = cat.icon;
  const content = articleContent[article.slug] || [];

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 2);

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 to-transparent" />
        <div className="container relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeUp}>
              <Link href="/news" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors mb-6">
                <ArrowLeft className="w-4 h-4" />
                Back to News & Insights
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
              <CatIcon className={`w-4 h-4 ${cat.color}`} />
              <span className={`text-xs uppercase tracking-widest font-medium ${cat.color}`}>
                {cat.label}
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-[1.15]">
              {article.title}
            </motion.h1>

            <motion.div variants={fadeUp} className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <div className="space-y-6">
              {content.map((paragraph, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="text-foreground/85 leading-[1.8] text-base"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Shariah Note */}
            <motion.div
              variants={fadeUp}
              className="mt-12 p-6 rounded-xl bg-gold/5 border border-gold/20"
            >
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-semibold text-foreground mb-1">Shariah Compliance Note</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All investment strategies and opportunities discussed in this article are evaluated
                    through Xirge Capital's Shariah compliance framework. We are committed to ensuring
                    that every investment aligns with Islamic financial principles.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Disclaimer */}
            <motion.p variants={fadeUp} className="mt-8 text-xs text-muted-foreground/50 leading-relaxed">
              This article is for educational purposes only and does not constitute investment advice.
              Past performance is not indicative of future results. All investments carry risk.
              Please consult with a qualified financial advisor before making investment decisions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gradient-card border-t border-border/30">
          <div className="container">
            <h3 className="text-xl font-serif font-bold mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {relatedArticles.map((related) => {
                const rCat = categoryConfig[related.category];
                const RCatIcon = rCat.icon;
                return (
                  <Link
                    key={related.slug}
                    href={`/news/${related.slug}`}
                    className="group block p-6 rounded-xl bg-background/50 border border-border/30 hover:border-gold/30 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <RCatIcon className={`w-3.5 h-3.5 ${rCat.color}`} />
                      <span className={`text-[10px] uppercase tracking-widest font-medium ${rCat.color}`}>
                        {rCat.label}
                      </span>
                    </div>
                    <h4 className="font-serif font-semibold text-foreground group-hover:text-gold transition-colors text-sm leading-snug">
                      {related.title}
                    </h4>
                    <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                      <span>{related.date}</span>
                      <span>{related.readTime}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
