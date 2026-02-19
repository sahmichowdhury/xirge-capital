import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Leaf,
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
  "investing-basics": { icon: GraduationCap, label: "Investing Basics", color: "text-xgreen" },
  "ethical-finance": { icon: Leaf, label: "Ethical Finance", color: "text-emerald-600" },
  "real-estate": { icon: Building2, label: "Real Estate", color: "text-amber-600" },
  "market-insights": { icon: TrendingUp, label: "Market Insights", color: "text-blue-600" },
};

const articleContent: Record<string, string[]> = {
  "what-is-cash-flow-investing": [
    "Cash flow investing is a strategy that focuses on generating regular income from investments rather than relying solely on capital appreciation. This approach prioritizes investments that produce consistent, predictable cash flows — such as rental income from real estate or profits from operating businesses.",
    "The importance of cash flow cannot be overstated. While capital gains are often uncertain and dependent on market conditions, cash flow provides a reliable income stream that can be reinvested, used to cover expenses, or distributed to investors.",
    "At Xirge Capital, our cash flow-focused approach means we evaluate every potential investment through the lens of its ability to generate sustainable, recurring revenue. We look for businesses with proven revenue models, strong customer retention, and predictable income streams.",
    "Real estate is one of the most natural vehicles for cash flow investing. Rental properties, commercial buildings, and industrial spaces all generate regular income through lease payments. When combined with proper management and strategic location selection, real estate can provide both steady cash flow and long-term appreciation.",
    "For business investments, we focus on companies with established revenue streams, low customer concentration risk, and strong operating margins. These characteristics indicate a business that can consistently generate cash flow regardless of broader market conditions.",
    "The beauty of cash flow investing is that it allows investors to build wealth gradually and sustainably. Rather than betting on market timing or speculative gains, cash flow investors benefit from the compounding effect of reinvested income over time.",
  ],
  "understanding-pre-ipo-investments": [
    "Pre-IPO investing refers to the practice of investing in companies before they go public through an Initial Public Offering (IPO). This type of investing has traditionally been reserved for institutional investors and high-net-worth individuals, but access has been expanding in recent years.",
    "The primary appeal of pre-IPO investing is the potential for significant returns. Early investors in companies that go on to have successful IPOs can see substantial appreciation in their investment value. However, this potential comes with higher risk compared to investing in publicly traded companies.",
    "Due diligence is critical in pre-IPO investing. Unlike public companies, pre-IPO companies are not required to disclose the same level of financial information. Investors must carefully evaluate the company's business model, competitive position, management team, and growth trajectory.",
    "At Xirge Capital, our approach to pre-IPO investing combines institutional-level due diligence with ethical compliance screening. We evaluate each opportunity through multiple lenses to ensure it meets our strict investment criteria.",
    "Key factors we consider include the company's revenue growth rate, path to profitability, market size, competitive advantages, and the quality of its management team. We also assess the company's capital structure and expected timeline to IPO.",
    "While pre-IPO investing carries higher risk, it also offers the potential for outsized returns that are difficult to achieve in public markets. By carefully selecting opportunities and maintaining a diversified portfolio, investors can manage this risk while positioning themselves for significant upside.",
  ],
  "real-estate-portfolio-diversification": [
    "Real estate has long been recognized as one of the most reliable paths to building wealth. Unlike stocks or bonds, real estate is a tangible asset that provides both income potential and the possibility of appreciation over time.",
    "There are several types of real estate investments to consider. Residential properties include single-family homes, multi-family units, and apartment complexes. Commercial properties encompass office buildings, retail spaces, and industrial warehouses. Each type has its own risk-return profile and management requirements.",
    "When evaluating a real estate investment, several key metrics are essential. The capitalization rate (cap rate) measures the expected return based on the property's net operating income relative to its purchase price. Cash-on-cash return measures the annual cash flow relative to the total cash invested.",
    "Location is perhaps the most critical factor in real estate investing. Properties in areas with strong job growth, population growth, and limited housing supply tend to perform better over time. Understanding local market dynamics is essential for making informed investment decisions.",
    "At Xirge Capital, our real estate investments are carefully selected to meet both our financial performance criteria and ethical compliance standards. We focus on properties with strong cash flow potential, favorable locations, and long-term appreciation prospects.",
    "For investors looking to diversify, adding real estate to a portfolio can provide stability and consistent returns that complement other asset classes. Our team handles all aspects of due diligence, acquisition, and management.",
  ],
  "ethical-investing-explained": [
    "Ethical investing has evolved from a niche strategy to a mainstream approach embraced by investors worldwide. At its core, ethical investing seeks to generate returns while avoiding activities and industries that cause social or environmental harm.",
    "Shariah-compliant investing is one of the most well-established forms of ethical investing. It follows principles that include the prohibition of interest (riba), excessive uncertainty (gharar), and investments in harmful industries. Instead, investments must be backed by real economic activity and involve genuine risk-sharing.",
    "What makes ethical investing particularly compelling is that it doesn't require sacrificing returns. Numerous studies have shown that ethically-screened portfolios can perform on par with, or even outperform, conventional portfolios over the long term.",
    "At Xirge Capital, we believe that ethical investing makes us more inclusive. Our Shariah-compliant approach means we invest in businesses that create real value, avoid excessive leverage, and operate transparently. These are principles that resonate with investors of all backgrounds.",
    "The screening process involves evaluating both business activities and financial structures. Companies involved in harmful industries are excluded, and financial ratios are assessed to ensure the business is not overly reliant on debt or non-compliant financial practices.",
    "As the demand for responsible investing continues to grow, ethical and Shariah-compliant strategies are becoming increasingly sophisticated. Xirge Capital is at the forefront of this movement, offering investors access to high-quality, ethically-screened opportunities across multiple asset classes.",
  ],
  "beginners-guide-to-investing": [
    "Starting your investment journey can feel overwhelming, but understanding a few fundamental concepts can set you on the right path. Investing is simply the act of putting your money to work in assets that have the potential to grow in value or generate income over time.",
    "The first step is understanding your financial goals. Are you investing for retirement, building an emergency fund, or looking to generate passive income? Your goals will determine your investment timeline, risk tolerance, and the types of investments that are most appropriate for you.",
    "Diversification is one of the most important principles in investing. By spreading your money across different types of investments — such as businesses, real estate, and other assets — you reduce the risk that any single investment will significantly impact your overall portfolio.",
    "Understanding risk is essential. Every investment carries some degree of risk, and generally, higher potential returns come with higher risk. The key is finding the right balance between risk and reward that aligns with your personal financial situation and goals.",
    "At Xirge Capital, we believe that everyone deserves access to quality investment opportunities. Our fund is designed to make ethical, cash flow-focused investing accessible to both first-time investors and seasoned professionals.",
    "The most important step is simply to start. Time is one of the most powerful tools in investing, thanks to the power of compound returns. The sooner you begin, the more time your money has to grow. Consider speaking with our team to learn how Xirge Capital can help you take that first step.",
  ],
  "commercial-real-estate-trends-2026": [
    "The commercial real estate landscape is undergoing significant transformation as we move through 2026. Several key trends are reshaping how investors approach this asset class, creating both challenges and opportunities.",
    "Industrial and logistics properties continue to be among the strongest performers in commercial real estate. The ongoing growth of e-commerce and the need for efficient supply chain infrastructure are driving demand for warehouse and distribution facilities.",
    "Mixed-use developments are gaining popularity as communities seek to create walkable, live-work-play environments. These properties combine residential, commercial, and retail spaces, offering diversified income streams and reduced vacancy risk.",
    "Sustainability and energy efficiency are becoming increasingly important factors in commercial real estate investment decisions. Properties with green certifications and energy-efficient features often command premium rents and attract higher-quality tenants.",
    "The office sector is adapting to new work patterns, with flexible and hybrid workspace solutions gaining traction. Properties that can accommodate these evolving needs are better positioned for long-term success.",
    "At Xirge Capital, we closely monitor these trends to identify the most promising commercial real estate opportunities. Our focus on cash flow and ethical compliance ensures that our real estate investments deliver both financial performance and alignment with our investors' values.",
  ],
  "what-makes-shariah-compliant-investing-different": [
    "Shariah-compliant investing follows a set of principles rooted in Islamic finance that promote ethical, transparent, and socially responsible financial practices. While it originates from Islamic law, the principles it upholds resonate with investors of all backgrounds who value responsible investing.",
    "The core principles include the prohibition of interest (riba), which means investments must generate returns through actual business activity rather than lending at interest. This encourages investment in real, productive economic activity.",
    "Shariah screening excludes companies involved in industries considered harmful — such as alcohol, tobacco, gambling, and weapons manufacturing. This screening process naturally aligns with broader ESG (Environmental, Social, and Governance) investing principles.",
    "Financial screening is equally important. Companies with excessive debt levels or significant interest income relative to their total revenue may be excluded. This focus on financial health means Shariah-compliant portfolios tend to favor well-managed, financially stable companies.",
    "At Xirge Capital, we view Shariah compliance not as a limitation but as a differentiator. Our ethical framework ensures that every investment creates real value, operates transparently, and contributes positively to the communities it serves.",
    "The growing global interest in ethical investing has made Shariah-compliant strategies increasingly relevant. By combining rigorous financial analysis with ethical screening, Xirge Capital offers investors a compelling approach to building wealth responsibly.",
  ],
  "evaluating-business-cash-flow": [
    "Cash flow analysis is one of the most critical skills for any investor evaluating a business. Understanding how money flows through a company provides insight into its financial health, sustainability, and growth potential.",
    "The three main types of cash flow are operating cash flow, investing cash flow, and financing cash flow. Operating cash flow — the cash generated from a company's core business operations — is typically the most important indicator of business health.",
    "Free cash flow (FCF) is a key metric that represents the cash available after a company has paid for its operating expenses and capital expenditures. A consistently positive and growing FCF is a strong indicator of a healthy, well-managed business.",
    "When evaluating a business for investment, look for consistent cash flow patterns over multiple years. Seasonal variations are normal, but the overall trend should be positive. Be cautious of businesses with volatile or declining cash flows.",
    "At Xirge Capital, cash flow analysis is at the heart of our investment process. We look for businesses with proven, recurring revenue streams, strong operating margins, and predictable cash flow patterns that can support sustainable distributions to investors.",
    "Understanding cash flow is not just for professional investors. Whether you're evaluating a potential investment or assessing your own business, the ability to analyze cash flow is a fundamental skill that can help you make better financial decisions.",
  ],
};

export default function ArticlePage() {
  const params = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">Article Not Found</h2>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
          <Link href="/news">
            <Button variant="outline" className="border-xgreen/40 text-xgreen hover:bg-xgreen/10 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const cat = categoryConfig[article.category];
  const CatIcon = cat?.icon || BookOpen;
  const content = articleContent[article.slug] || [];

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 2);

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 relative overflow-hidden bg-xgreen-50">
        <div className="container relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeUp}>
              <Link href="/news" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-xgreen transition-colors mb-6">
                <ArrowLeft className="w-4 h-4" />
                Back to News &amp; Insights
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
              <CatIcon className={`w-4 h-4 ${cat?.color || "text-xgreen"}`} />
              <span className={`text-xs uppercase tracking-widest font-medium ${cat?.color || "text-xgreen"}`}>
                {cat?.label || article.category}
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-[1.15] text-foreground">
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
      <section className="py-12 bg-background">
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

            {/* Ethical Note */}
            <motion.div
              variants={fadeUp}
              className="mt-12 p-6 rounded-xl bg-xgreen/5 border border-xgreen/20"
            >
              <div className="flex items-start gap-3">
                <Leaf className="w-5 h-5 text-xgreen shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-semibold text-foreground mb-1">Ethical Compliance Note</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All investment strategies and opportunities discussed in this article are evaluated
                    through Xirge Capital's ethical and Shariah-compliant framework. We are committed to ensuring
                    that every investment aligns with responsible, transparent financial principles.
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
        <section className="py-16 bg-xgreen-50 border-t border-border">
          <div className="container">
            <h3 className="text-xl font-serif font-bold mb-8 text-foreground">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {relatedArticles.map((related) => {
                const rCat = categoryConfig[related.category];
                const RCatIcon = rCat?.icon || BookOpen;
                return (
                  <Link
                    key={related.slug}
                    href={`/news/${related.slug}`}
                    className="group block p-6 rounded-xl bg-white border border-border hover:border-xgreen/30 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <RCatIcon className={`w-3.5 h-3.5 ${rCat?.color || "text-xgreen"}`} />
                      <span className={`text-[10px] uppercase tracking-widest font-medium ${rCat?.color || "text-xgreen"}`}>
                        {rCat?.label || related.category}
                      </span>
                    </div>
                    <h4 className="font-serif font-semibold text-foreground group-hover:text-xgreen transition-colors text-sm leading-snug">
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
