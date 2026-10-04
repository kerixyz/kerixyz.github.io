// Deterministic pixel pattern seeded from a string, used as a fallback thumbnail.
function hash(str: string) {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function rng(seed: number) {
  return () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0
    return seed / 4294967296
  }
}

const COLS = 10
const ROWS = 5

export function Placeholder({ seed }: { seed: string }) {
  let rand = rng(hash(seed))
  let hue = Math.floor(rand() * 360)
  let palette = [
    `hsl(${hue} 70% 62%)`,
    `hsl(${(hue + 40) % 360} 75% 70%)`,
    `hsl(${(hue + 180) % 360} 60% 45%)`,
    `hsl(${hue} 30% 92%)`,
  ]

  let cells: { x: number; y: number; fill: string }[] = []
  // Build left half, mirror it for a symmetric, sprite-like look.
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS / 2; x++) {
      let fill = palette[Math.floor(rand() * palette.length)]
      cells.push({ x, y, fill })
      cells.push({ x: COLS - 1 - x, y, fill })
    }
  }

  return (
    <svg
      viewBox={`0 0 ${COLS} ${ROWS}`}
      className="block w-full h-full"
      preserveAspectRatio="none"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {cells.map((c) => (
        <rect key={`${c.x}-${c.y}`} x={c.x} y={c.y} width="1" height="1" fill={c.fill} />
      ))}
    </svg>
  )
}
