/**
 * SureNext logo slot. A single <img> is rendered; the browser picks exactly one
 * source, so only one logo can ever be visible at a time.
 * - < 768px: compact symbol (`surenextmobile.png`)
 * - >= 768px: symbol + wordmark (`surenextmain.png`)
 *
 * `dark` flips the black artwork to white for dark surfaces.
 */
export function Logo({ className = '', dark = false }) {
  const tone = dark ? 'brightness-0 invert' : ''

  return (
    <span
      role="img"
      aria-label="SureNext"
      className={`inline-flex select-none items-center ${className}`}
    >
      <picture>
        <source media="(min-width: 768px)" srcSet="/img/surenextmain.png" />
        <img
          src="/img/surenextmobile.png"
          alt=""
          aria-hidden="true"
          draggable="false"
          className={`h-10 w-auto object-contain md:h-7 ${tone}`}
        />
      </picture>
    </span>
  )
}
