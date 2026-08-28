interface DecoOrbit {
  size: number;
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
  duration: number;
  reverse?: boolean;
  balls: number[];
}

interface OrbitDecorationProps {
  orbits: DecoOrbit[];
}

export default function OrbitDecoration({ orbits }: OrbitDecorationProps) {
  return (
    <div className="bg-orbits" aria-hidden="true">
      {orbits.map((orbit, i) => (
        <div
          key={i}
          className={`orbit${orbit.reverse ? ' reverse' : ''}`}
          style={{
            width: orbit.size,
            height: orbit.size,
            top: orbit.top,
            bottom: orbit.bottom,
            left: orbit.left,
            right: orbit.right,
            animationDuration: `${orbit.duration}s`,
          }}
        >
          {orbit.balls.map((angle, j) => (
            <span key={j} className="ball-anchor" style={{ transform: `rotate(${angle}deg)` }}>
              <span className="ball" style={{ width: 8, height: 8 }} />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}