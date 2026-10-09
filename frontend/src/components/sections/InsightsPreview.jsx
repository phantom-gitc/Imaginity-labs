import { ARTICLES } from '../../data/articles'
import { BlogCard } from '../ui/Cards'
import { Eyebrow, H, It, Section } from '../ui/Type'
import { ArrowLink } from '../ui/Button'

/** Insights preview on Home: 3 blog cards with image overlay and category tags. */
export function InsightsPreview() {
  const featured = ARTICLES.slice(0, 3)

  return (
    <Section bg="light">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <Eyebrow dot="#3B5BFF">Studio Insights</Eyebrow>
          <H size="lg" className="mt-4">
            Field notes on <It>craft.</It>
          </H>
        </div>
        <div className="flex flex-col items-start md:items-end gap-3">
          <p className="lede">
            Hard-won engineering lessons, system architectures, and product strategy.
          </p>
          <ArrowLink to="/insights">Read all articles</ArrowLink>
        </div>
      </div>

      <div data-reveal="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {featured.map((article) => (
          <BlogCard key={article.slug} a={article} ratio="4/5" />
        ))}
      </div>
    </Section>
  )
}
