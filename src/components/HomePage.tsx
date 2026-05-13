import { useRef, useEffect } from 'react'

interface HomePageProps {
  onBegin: () => void
}

function drawCoverArt(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#F0EEE6'
  ctx.fillRect(0, 0, w, h)

  const cx = w / 2
  const cy = h / 2

  const circles = [
    { x: cx - 20, y: cy - 30, r: 80 + Math.sin(t * 0.3) * 3 },
    { x: cx + 25, y: cy + 20, r: 60 + Math.sin(t * 0.4 + 1) * 2 },
    { x: cx - 10, y: cy + 40, r: 45 + Math.sin(t * 0.5 + 2) * 2 },
  ]

  for (const c of circles) {
    ctx.beginPath()
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(31, 30, 29, 0.6)'
    ctx.lineWidth = 1.2
    ctx.stroke()
  }

  const eyeX = cx + 15
  const eyeY = cy + 5
  const eyeW = 25 + Math.sin(t * 0.6) * 2
  const eyeH = 12
  ctx.beginPath()
  ctx.ellipse(eyeX, eyeY, eyeW, eyeH, 0, 0, Math.PI * 2)
  ctx.strokeStyle = 'rgba(31, 30, 29, 0.5)'
  ctx.lineWidth = 1
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(eyeX + 5, eyeY, 3, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(31, 30, 29, 0.7)'
  ctx.fill()
}

export default function HomePage({ onBegin }: HomePageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const size = 260
    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    canvas.style.width = `${size}px`
    canvas.style.height = `${size}px`
    ctx.scale(dpr, dpr)

    const start = performance.now()
    const animate = () => {
      const elapsed = (performance.now() - start) / 1000
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      drawCoverArt(ctx, size, size, elapsed)
      animRef.current = requestAnimationFrame(animate)
    }
    animRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  return (
    <div
      className="h-full w-full flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden"
      style={{ backgroundColor: '#2C2A25' }}
      onClick={onBegin}
    >
      <div className="flex flex-col items-center max-w-xl px-8">
        <h1
          className="text-[#FAF9F5] text-center leading-[1.6] font-light"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            letterSpacing: '0.5em',
          }}
        >
          <span className="block">THE WAY</span>
          <span className="block">OF DATA</span>
        </h1>

        <p
          className="text-xl md:text-2xl text-[#FAF9F5]/80 italic text-center mt-6"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          The Timeless Art of Understanding
        </p>

        <div className="mt-10">
          <canvas ref={canvasRef} />
        </div>

        <div className="mt-10 text-center space-y-1">
          <p className="text-[#FAF9F5]/60 text-base" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            Inspired by the Tao Te Ching
          </p>
          <p className="text-[#FAF9F5]/60 text-base" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            Written for the age of intelligence
          </p>
        </div>

        <p className="mt-10 text-xs text-[#FAF9F5]/30 tracking-widest uppercase animate-pulse">
          Click anywhere to begin
        </p>
      </div>
    </div>
  )
}
