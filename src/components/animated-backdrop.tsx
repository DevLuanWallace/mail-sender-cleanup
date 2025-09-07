// src/components/AnimatedBackdrop.tsx
import * as React from 'react'
import { cn } from '../lib/utils'

// ---------- Utils de cor (hex <-> hsl) ----------
function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}
function hexToRgb(hex: string) {
  const s = hex.replace('#', '')
  const norm =
    s.length === 3
      ? s
          .split('')
          .map((c) => c + c)
          .join('')
      : s
  const bigint = parseInt(norm, 16)
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 }
}
function rgbToHsl(r: number, g: number, b: number) {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  let h = 0,
    s = 0,
    l = (max + min) / 2
  const d = max - min
  if (d !== 0) {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }
  return { h: h * 360, s: s * 100, l: l * 100 }
}
function hslToHex(h: number, s: number, l: number) {
  h /= 360
  s /= 100
  l /= 100
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }
  let r: number, g: number, b: number
  if (s === 0) {
    r = g = b = l
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }
  const toHex = (x: number) =>
    Math.round(x * 255)
      .toString(16)
      .padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}
function derivePalette(primaryHex: string, satFactor = 1) {
  const { r, g, b } = hexToRgb(primaryHex)
  const base = rgbToHsl(r, g, b)
  const s = (x: number) => clamp(x * satFactor, 15, 100)

  const a0 = hslToHex(base.h, s(base.s * 0.6), clamp(base.l + 20, 10, 95))
  const a1 = hslToHex(base.h, s(base.s * 0.85), clamp(base.l + 10, 10, 90))
  const a2 = hslToHex(base.h, s(base.s), clamp(base.l, 5, 85))
  const a3 = hslToHex(base.h, s(base.s * 1.05), clamp(base.l - 8, 5, 80))

  const b0 = hslToHex(base.h, s(base.s * 0.8), clamp(base.l + 12, 10, 92))
  const b1 = hslToHex(base.h, s(base.s * 0.95), clamp(base.l, 5, 85))
  const b2 = hslToHex(base.h, s(base.s * 1.1), clamp(base.l - 12, 5, 75))

  return { a0, a1, a2, a3, b0, b1, b2 }
}

// ---------- Random util (seeded) ----------
function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
function randInt(rng: () => number, min: number, max: number) {
  return Math.floor(rng() * (max - min + 1)) + min
}
function randFloat(rng: () => number, min: number, max: number) {
  return rng() * (max - min) + min
}
function pick<T>(rng: () => number, arr: T[]) {
  return arr[Math.floor(rng() * arr.length)]
}

// ---------- Types ----------
type ShapeKind = 'circle' | 'heart'
type ShapeSpec = {
  kind: ShapeKind
  topPct: number
  leftPct: number
  sizePx: number
  blurPx: number
  opacity: number
  anim: string
  gradient: string
  z?: number
  duration?: number
}

type Density = 'subtle' | 'low' | 'medium' | 'high'

type AnimatedBackdropProps = {
  className?: string
  children?: React.ReactNode
  density?: Density
  /** cor primária (ex: "#ff7a00") para gerar tons automaticamente */
  primary?: string
  /** quantidade base de shapes (pode ser multiplicado pela densidade) */
  count?: number
  /** quanto os shapes “vazam” além da viewport (0 a 0.5) */
  bleed?: number
  /** semente p/ random estável */
  seed?: number
}

const densityParams = {
  subtle: {
    overlayA: 'backdrop-blur-[50px]',
    overlayB: 'backdrop-blur-[24px]',
    veil1: 'bg-white/45 dark:bg-black/50',
    veil2: 'from-white/70 via-white/45 to-white/55 dark:from-black/70 dark:via-black/50 dark:to-black/55',
    veil3: 'bg-white/15 dark:bg-black/20',
    opacityMin: 0.18,
    opacityMax: 0.35,
    sizeMin: 160,
    sizeMax: 520,
    blurMin: 3,
    blurMax: 6,
    speedMin: 35,
    speedMax: 75,
    satFactor: 0.85,
    countMult: 1.3
  },
  low: {
    overlayA: 'backdrop-blur-[40px]',
    overlayB: 'backdrop-blur-[20px]',
    veil1: 'bg-white/35 dark:bg-black/40',
    veil2: 'from-white/60 via-white/40 to-white/50 dark:from-black/60 dark:via-black/40 dark:to-black/50',
    veil3: 'bg-white/10 dark:bg-black/15',
    opacityMin: 0.35,
    opacityMax: 0.55,
    sizeMin: 140,
    sizeMax: 460,
    blurMin: 2,
    blurMax: 4,
    speedMin: 25,
    speedMax: 55,
    satFactor: 0.95,
    countMult: 1.0
  },
  medium: {
    overlayA: 'backdrop-blur-[20px]',
    overlayB: 'backdrop-blur-[12px]',
    veil1: 'bg-white/30 dark:bg-black/40',
    veil2: 'from-white/60 via-white/40 to-white/50 dark:from-black/60 dark:via-black/40 dark:to-black/50',
    veil3: 'bg-white/10 dark:bg-black/15',
    opacityMin: 0.55,
    opacityMax: 0.9,
    sizeMin: 120,
    sizeMax: 480,
    blurMin: 1,
    blurMax: 4,
    speedMin: 15,
    speedMax: 40,
    satFactor: 1.0,
    countMult: 1.0
  },
  high: {
    overlayA: 'backdrop-blur-[10px]',
    overlayB: 'backdrop-blur-[6px]',
    veil1: 'bg-white/25 dark:bg-black/30',
    veil2: 'from-white/50 via-white/35 to-white/45 dark:from-black/55 dark:via-black/40 dark:to-black/50',
    veil3: 'bg-white/5 dark:bg-black/10',
    opacityMin: 0.7,
    opacityMax: 1,
    sizeMin: 100,
    sizeMax: 520,
    blurMin: 0,
    blurMax: 2,
    speedMin: 10,
    speedMax: 25,
    satFactor: 1.05,
    countMult: 1.1
  }
} as const

export function AnimatedBackdrop({
  className,
  children,
  density = 'medium',
  primary = '#ff7a00',
  count = 18,
  bleed = 0.12,
  seed = 1337
}: AnimatedBackdropProps) {
  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const p = densityParams[density]
  const blurA = p.overlayA
  const blurB = p.overlayB

  const palette = React.useMemo(() => derivePalette(primary, p.satFactor), [primary, p.satFactor])

  const shapes = React.useMemo<ShapeSpec[]>(() => {
    const rng = mulberry32(seed)
    const anims = [
      'animate-circular1',
      'animate-circular2',
      'animate-circular3',
      'animate-circular4',
      'animate-circular5',
      'animate-circular6',
      'animate-circular7',
      'animate-circular8'
    ]
    const kinds: ShapeKind[] = ['circle', 'heart']

    const targetCount = Math.round(count * p.countMult)
    const list: ShapeSpec[] = []
    for (let i = 0; i < targetCount; i++) {
      const kind = pick(rng, kinds)
      const sizePx = randInt(rng, p.sizeMin, p.sizeMax)
      const blurPx = randInt(rng, p.blurMin, p.blurMax)
      const opacity = randFloat(rng, p.opacityMin, p.opacityMax)
      const anim = pick(rng, anims)
      const topPct = randFloat(rng, -bleed * 100, 100 + bleed * 100)
      const leftPct = randFloat(rng, -bleed * 100, 100 + bleed * 100)
      const z = randInt(rng, 0, 1)
      const duration = randFloat(rng, p.speedMin, p.speedMax)

      const gcases = [
        `linear-gradient(135deg, ${palette.a0} 0%, ${palette.a1} 50%, ${palette.a2} 100%)`,
        `linear-gradient(45deg, ${palette.b0} 0%, ${palette.b1} 50%, ${palette.b2} 100%)`,
        `linear-gradient(225deg, ${palette.a0} 0%, ${palette.a1} 50%, ${palette.a2} 100%)`,
        `linear-gradient(315deg, ${palette.a1} 0%, ${palette.a2} 50%, ${palette.a3} 100%)`,
        `linear-gradient(90deg, ${palette.a0} 0%, ${palette.a1} 100%)`,
        `linear-gradient(180deg, ${palette.b0} 0%, ${palette.b1} 50%, ${palette.a2} 100%)`,
        `linear-gradient(60deg, ${palette.a0} 0%, ${palette.a1} 100%)`,
        `linear-gradient(120deg, ${palette.a1} 0%, ${palette.b1} 100%)`
      ]
      const gradient = pick(rng, gcases)

      list.push({ kind, topPct, leftPct, sizePx, blurPx, opacity, anim, gradient, z, duration })
    }
    return list
  }, [count, bleed, palette, seed, p])

  return (
    <div className={cn('relative min-h-screen overflow-hidden', className)}>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800" />

      {/* Shapes aleatórios */}
      <div className="absolute inset-0 pointer-events-none will-change-transform">
        {shapes.map((s, idx) => {
          const common = {
            className: cn('absolute', !prefersReduced && s.anim, s.kind === 'circle' && 'rounded-full'),
            style: {
              top: `${s.topPct}%`,
              left: `${s.leftPct}%`,
              width: `${s.sizePx}px`,
              height: `${s.sizePx}px`,
              opacity: s.opacity,
              background: s.gradient,
              filter: `blur(${s.blurPx}px)`,
              zIndex: s.z,
              animationDuration: prefersReduced ? undefined : `${s.duration ?? 30}s`
            } as React.CSSProperties
          }
          return s.kind === 'heart' ? (
            <div key={idx} {...(common as any)}>
              <HeartMask radius={`${Math.round(s.sizePx / 6)}px`} />
            </div>
          ) : (
            <div key={idx} {...(common as any)} />
          )
        })}
      </div>

      {/* Overlays de contraste e profundidade */}
      <div className={cn('absolute inset-0', blurA, p.veil1)} />
      <div className={cn('absolute inset-0', 'bg-gradient-to-br', p.veil2)} />
      <div className={cn('absolute inset-0', blurB, p.veil3)} />

      {/* Conteúdo */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

function HeartMask({ radius = '75px' }: { radius?: string }) {
  return (
    <div
      className="w-full h-full relative"
      style={{
        background: 'inherit',
        transform: 'rotate(-45deg)',
        borderRadius: `${radius} ${radius} 0 0`
      }}
    >
      <div className="absolute w-1/2 h-1/2 rounded-full" style={{ background: 'inherit', top: '-25%', left: '25%' }} />
      <div className="absolute w-1/2 h-1/2 rounded-full" style={{ background: 'inherit', top: '-25%', right: '25%' }} />
    </div>
  )
}
