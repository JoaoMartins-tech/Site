import type { OrbitConfig } from '../../types';

const orbits: OrbitConfig[] = [
  { size: 130, duration: 9, balls: [{ angleDeg: 40, ballSize: 9 }] },
  {
    size: 190,
    duration: 16,
    reverse: true,
    balls: [
      { angleDeg: 10, ballSize: 8 },
      { angleDeg: 140, ballSize: 8 },
      { angleDeg: 255, ballSize: 8 },
    ],
  },
  {
    size: 250,
    duration: 22,
    balls: [
      { angleDeg: 70, ballSize: 11 },
      { angleDeg: 250, ballSize: 11 },
    ],
  },
  {
    size: 310,
    duration: 30,
    reverse: true,
    balls: [
      { angleDeg: 20, ballSize: 7 },
      { angleDeg: 110, ballSize: 7 },
      { angleDeg: 200, ballSize: 7 },
      { angleDeg: 300, ballSize: 7 },
    ],
  },
  {
    size: 380,
    duration: 42,
    balls: [
      { angleDeg: 0, ballSize: 6 },
      { angleDeg: 60, ballSize: 6 },
      { angleDeg: 120, ballSize: 6 },
      { angleDeg: 180, ballSize: 6 },
      { angleDeg: 240, ballSize: 6 },
      { angleDeg: 300, ballSize: 6 },
    ],
  },
];

interface SolarSystemProps {
  centerLabel?: string;
  centerImageSrc?: string;
}

export default function SolarSystem({
  centerLabel = 'JM',
  centerImageSrc,
}: SolarSystemProps) {
  return (
    <div className="solar-system" aria-hidden="true">
      {orbits.map((orbit, i) => (
        <div
          key={i}
          className={`orbit${orbit.reverse ? ' reverse' : ''}`}
          style={{
            width: orbit.size,
            height: orbit.size * 0.68,
            margin: `${-(orbit.size * 0.34)}px 0 0 ${-(orbit.size / 2)}px`,
            animationDuration: `${orbit.duration}s`,
          }}
        >
          {orbit.balls.map((ball, j) => (
            <span
              key={j}
              className="ball-anchor"
              style={{ transform: `rotate(${ball.angleDeg}deg)` }}
            >
              <span
                className="ball"
                style={{ width: ball.ballSize, height: ball.ballSize }}
              />
            </span>
          ))}
        </div>
      ))}

      {centerImageSrc ? (
        <img className="solar-center" src={centerImageSrc} alt="Foto de perfil de João Martins" />
      ) : (
        <div className="solar-center solar-center--label">{centerLabel}</div>
      )}
    </div>
  );
}