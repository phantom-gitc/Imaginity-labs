import { ARTICLES as RAW, INSIGHTS_CATEGORIES } from './insightsData'
import { A } from './site'

/** Article pool images (original data referenced files that no longer exist, so we map by index). */
const POOL = [A.insights, A.ai, A.arch, A.cloud, A.enterprise, A.svcHero, A.about, A.case[3], A.case[0], A.case[2]]
const TINTS = ['lavender', 'sky', 'blush', 'mint', 'peach', 'butter']

export const ARTICLES = RAW.map((a, i) => ({ ...a, cover: POOL[i % POOL.length], tint: TINTS[i % TINTS.length] }))
export { INSIGHTS_CATEGORIES }
