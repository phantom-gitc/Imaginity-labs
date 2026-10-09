import { useEffect, useRef, useState } from 'react'
import { refreshScroll } from '../../lib/gsap'

/** Lazy image with fade-in (blur-up feel via tinted frame), explicit width/height, ScrollTrigger refresh on load. */
export function Img({ src, w, h, alt = '', className = '', eager = false, style }) {
  const ref = useRef(null)
  const [ok, setOk] = useState(false)
  useEffect(() => {
    if (ref.current?.complete && ref.current.naturalWidth) setOk(true)
  }, [])
  return (
    <img
      ref={ref}
      src={src}
      width={w}
      height={h}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : undefined}
      data-inner
      onLoad={() => {
        setOk(true)
        refreshScroll(250)
      }}
      className={`transition-opacity duration-700 ${ok ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={style}
    />
  )
}

/** Framed image: rounded, masked reveal, optional parallax, blue/violet grade, overlay children. */
export function Frame({ img, alt = '', ratio = '4/3', className = '', reveal = true, parallax = 0, grade = false, eager = false, bg = '#E9E4FF', radius = 24, children, pos = 'center' }) {
  return (
    <div
      data-reveal={reveal ? 'mask' : undefined}
      className={`card-media relative isolate ${grade ? 'grade' : ''} ${className}`}
      style={{ aspectRatio: ratio, background: bg, borderRadius: radius }}
    >
      {parallax ? (
        <div data-parallax={parallax} className="absolute inset-x-0" style={{ top: '-10%', bottom: '-10%' }}>
          <Img {...img} alt={alt} eager={eager} className="absolute inset-0 size-full object-cover" style={{ objectPosition: pos }} />
        </div>
      ) : (
        <Img {...img} alt={alt} eager={eager} className="absolute inset-0 size-full object-cover" style={{ objectPosition: pos }} />
      )}
      {children}
    </div>
  )
}

/** Glossy 3D object on white, blended into pastel surfaces with multiply. */
export function Obj({ img, className = '', alt = '', mult = false, style }) {
  return (
    <img
      src={img.src}
      width={img.w}
      height={img.h}
      alt={alt}
      aria-hidden={alt ? undefined : true}
      loading="lazy"
      decoding="async"
      className={`select-none pointer-events-none ${mult ? 'mult' : ''} ${className}`}
      style={style}
    />
  )
}

/** Portrait on a solid pastel background, arch crop. */
export function Portrait({ img, tint = '#E9E4FF', className = '', alt = '', arch = true, ratio = '4/5', pos = '50% 20%' }) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: ratio, background: tint, borderRadius: arch ? '999px 999px 24px 24px' : 24 }}
    >
      <img
        src={img.src}
        width={img.w}
        height={img.h}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover scale-[1.12] mult"
        style={{ objectPosition: pos }}
      />
    </div>
  )
}
