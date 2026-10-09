import React, { useState, useEffect, useMemo } from 'react';
import { InsightsHero } from '../components/insights/InsightsHero';
import { FeaturedInsight } from '../components/insights/FeaturedInsight';
import { CategoryFilter } from '../components/insights/CategoryFilter';
import { LatestInsightsGrid } from '../components/insights/LatestInsightsGrid';
import { InsightTypes } from '../components/insights/InsightTypes';
import { NewsletterSection } from '../components/insights/NewsletterSection';
import { InsightsCTA } from '../components/insights/InsightsCTA';
import { ArticleModal } from '../components/insights/ArticleModal';
import { ARTICLES, INSIGHTS_CATEGORIES } from '../data/insightsData';

export function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Filtered articles list
  const filteredArticles = useMemo(() => {
    if (activeCategory === 'All') return ARTICLES;
    return ARTICLES.filter((article) => {
      if (article.category === activeCategory) return true;
      if (activeCategory === 'AI' && article.category.includes('AI')) return true;
      if (
        activeCategory === 'Software Engineering' &&
        (article.category.includes('Engineering') || article.category === 'Software Engineering')
      )
        return true;
      return false;
    });
  }, [activeCategory]);

  // Counts per category
  const articleCounts = useMemo(() => {
    const counts = { All: ARTICLES.length };
    INSIGHTS_CATEGORIES.forEach((cat) => {
      if (cat === 'All') return;
      counts[cat] = ARTICLES.filter((a) => {
        if (a.category === cat) return true;
        if (cat === 'AI' && a.category.includes('AI')) return true;
        if (
          cat === 'Software Engineering' &&
          (a.category.includes('Engineering') || a.category === 'Software Engineering')
        )
          return true;
        return false;
      }).length;
    });
    return counts;
  }, []);

  const featuredArticle = ARTICLES.find((a) => a.isFeatured) || ARTICLES[0];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <InsightsHero />

      {/* 2. FEATURED ARTICLE (Top Flagship Issue) */}
      <FeaturedInsight
        article={featuredArticle}
        onSelectArticle={(art) => setSelectedArticle(art)}
      />

      {/* 3. CATEGORY FILTERS & LATEST INSIGHTS */}
      <div className="bg-white pt-12">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12 mb-4">
          <CategoryFilter
            categories={INSIGHTS_CATEGORIES}
            activeCategory={activeCategory}
            onSelectCategory={(cat) => setActiveCategory(cat)}
            articleCounts={articleCounts}
          />
        </div>

        <LatestInsightsGrid
          articles={filteredArticles}
          onSelectArticle={(art) => setSelectedArticle(art)}
        />
      </div>

      {/* 4. INSIGHT TYPES (Section 17 Formats) */}
      <InsightTypes
        onSelectFilter={(typeTitle) => {
          setActiveCategory('All');
          const el = document.getElementById('articles');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 5. NEWSLETTER / UPDATE SECTION */}
      <NewsletterSection />

      {/* 6. FINAL CTA */}
      <InsightsCTA />

      {/* 7. FULL INTERACTIVE ARTICLE MODAL / READER */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          onSelectRelated={(relatedArt) => setSelectedArticle(relatedArt)}
        />
      )}
    </div>
  );
}
