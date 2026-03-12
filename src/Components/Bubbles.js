import { useEffect, useRef } from 'react'

function Bubbles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    })

    const bubbles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.3,
      opacity: Math.random() * 0.4 + 0.1,
      wobble: Math.random() * 2 - 1
    }))

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      bubbles.forEach(bubble => {
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(6, 43, 34, ${bubble.opacity})`
        ctx.fill()

        // move bubble upward with slight wobble
        bubble.y -= bubble.speed
        bubble.x += Math.sin(bubble.y * 0.05) * bubble.wobble

        // reset bubble to bottom when it reaches the top
        if (bubble.y + bubble.radius < 0) {
         bubble.y = canvas.height + bubble.radius
            bubble.x = Math.random() * canvas.width
        }
    })

      requestAnimationFrame(draw)
    }

    draw()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  )
}

export default Bubbles