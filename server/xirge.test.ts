import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

/**
 * Basic tests for the Xirge Capital app router.
 * Verifies that the auth procedures work correctly.
 */

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

function createAuthContext(): TrpcContext {
  return {
    user: {
      id: 1,
      openId: "test-user-123",
      email: "investor@xirgecapital.com",
      name: "Test Investor",
      loginMethod: "manus",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("Xirge Capital - Auth Router", () => {
  it("auth.me returns null for unauthenticated users", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.auth.me();
    expect(result).toBeNull();
  });

  it("auth.me returns user data for authenticated users", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.auth.me();
    expect(result).not.toBeNull();
    expect(result?.name).toBe("Test Investor");
    expect(result?.email).toBe("investor@xirgecapital.com");
    expect(result?.role).toBe("user");
  });

  it("auth.logout clears session and returns success", async () => {
    const clearedCookies: string[] = [];
    const ctx: TrpcContext = {
      ...createAuthContext(),
      res: {
        clearCookie: (name: string) => {
          clearedCookies.push(name);
        },
      } as TrpcContext["res"],
    };
    const caller = appRouter.createCaller(ctx);
    const result = await caller.auth.logout();
    expect(result).toEqual({ success: true });
    expect(clearedCookies.length).toBe(1);
  });
});

describe("Xirge Capital - Article Data Validation", () => {
  // Test that our static article data is well-formed
  it("all articles have required fields", async () => {
    // We import the articles data to validate its structure
    const { articles } = await import("../client/src/pages/News");
    
    expect(articles.length).toBeGreaterThan(0);
    
    for (const article of articles) {
      expect(article.slug).toBeTruthy();
      expect(article.title).toBeTruthy();
      expect(article.excerpt).toBeTruthy();
      expect(article.category).toBeTruthy();
      expect(article.date).toBeTruthy();
      expect(article.readTime).toBeTruthy();
      expect(["investing-101", "shariah-finance", "real-estate", "market-insights"]).toContain(article.category);
    }
  });

  it("all article slugs are unique", async () => {
    const { articles } = await import("../client/src/pages/News");
    const slugs = articles.map((a: { slug: string }) => a.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it("has at least one featured article", async () => {
    const { articles } = await import("../client/src/pages/News");
    const featured = articles.filter((a: { featured?: boolean }) => a.featured);
    expect(featured.length).toBeGreaterThan(0);
  });
});
