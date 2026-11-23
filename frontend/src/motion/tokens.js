/**
 * SURENEXT — Motion Tokens
 * Centralized durations, eases, staggers, and responsive media queries.
 */

export const DURATIONS = {
  instant: 0.15,
  fast: 0.3,
  base: 0.7,
  slow: 1.2,
  epic: 1.6,
  ambient: 14,
}

export const EASES = {
  expo: 'expo.out',
  expoInOut: 'expo.inOut',
  power3: 'power3.out',
  power3InOut: 'power3.inOut',
  power2: 'power2.out',
  power2InOut: 'power2.inOut',
  smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
  elastic: 'elastic.out(1, 0.6)',
  elasticPunchy: 'elastic.out(1.2, 0.4)',
  bounce: 'back.out(1.7)',
}

export const STAGGERS = {
  quick: 0.04,
  base: 0.08,
  slow: 0.12,
}

export const DISTANCES = {
  xs: 8,
  sm: 16,
  md: 32,
  lg: 48,
  xl: 80,
}

export const MQ = {
  desktop: '(min-width: 1024px)',
  mobile: '(max-width: 1023px)',
  motion: '(min-width: 0px)',
  reduce: 'not all',
  pinned: '(min-width: 768px)',
  fine: '(min-width: 0px)',
}
