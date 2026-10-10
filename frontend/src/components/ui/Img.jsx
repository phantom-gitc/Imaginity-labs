'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { refreshScroll } from '../../lib/gsap'

/** Lazy image with fade-in (blur-up feel via tinted frame), explicit width/height, ScrollTrigger refresh on load. */
export function Img({
  src,
  w,
  h,
  alt = '',
  className = '',
  eager = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw',
  unoptimized = true,
  style,
}) {
  const ref = useRef(null)
  const [ok, setOk] = useState(eager)

  useEffect(() => {
    if (ref.current?.complete && ref.current.naturalWidth) setOk(true)
  }, [])

  return (
    <Image
      ref={ref}
      src={src}
      width={w}
      height={h}
      alt={alt}
      priority={eager}
      sizes={sizes}
      unoptimized={unoptimized}
      data-inner=""
      onLoad={() => {
        setOk(true)
        refreshScroll(250)
      }}
      className={`${eager ? 'opacity-100' : `transition-opacity duration-500 ${ok ? 'opacity-100' : 'opacity-0'}`} ${className}`}
      style={style}
    />
  )
}

/** Framed image: rounded, masked reveal, optional parallax, blue/violet grade, overlay children. */
export function Frame({
  img,
  alt = '',
  ratio = '4/3',
  className = '',
  reveal = true,
  parallax = 0,
  grade = false,
  eager = false,
  sizes,
  bg = '#E9E4FF',
  radius = 24,
  children,
  pos = 'center',
}) {
  return (
    <div
      data-reveal={reveal ? 'mask' : undefined}
      className={`card-media relative isolate ${grade ? 'grade' : ''} ${className}`}
      style={{ aspectRatio: ratio, background: bg, borderRadius: radius }}
    >
      {parallax ? (
        <div data-parallax={parallax} className="absolute inset-x-0" style={{ top: '-10%', bottom: '-10%' }}>
          <Img {...img} alt={alt} eager={eager} sizes={sizes} className="absolute inset-0 size-full object-cover" style={{ objectPosition: pos }} />
        </div>
      ) : (
        <Img {...img} alt={alt} eager={eager} sizes={sizes} className="absolute inset-0 size-full object-cover" style={{ objectPosition: pos }} />
      )}
      {children}
    </div>
  )
}

/** Glossy 3D object on white, blended into pastel surfaces with multiply. */
export function Obj({ img, className = '', alt = '', mult = false, style }) {
  return (
    <Image
      src={img.src}
      width={img.w}
      height={img.h}
      alt={alt}
      unoptimized
      aria-hidden={alt ? undefined : true}
      className={`select-none pointer-events-none ${mult ? 'mult' : ''} ${className}`}
      style={style}
    />
  )
}

/** Portrait on a solid pastel background, arch crop. */
export function Portrait({ img, tint = '#E9E4FF', className = '', alt = '', arch = true, ratio = '4/5', pos = 'center', mult = false }) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: ratio, background: tint, borderRadius: arch ? '999px 999px 24px 24px' : 24 }}
    >
      <Image
        src={img.src}
        width={img.w}
        height={img.h}
        alt={alt}
        unoptimized
        className={`absolute inset-0 size-full object-cover scale-[1.02] ${mult ? 'mult' : ''}`}
        style={{ objectPosition: pos }}
      />
    </div>
  )
}
