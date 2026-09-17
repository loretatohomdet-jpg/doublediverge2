import React, { useState, useRef, useEffect } from 'react';

export const DivergenceVisual: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0.5, y: 0.5 });
    setActiveNode(null);
  };

  // Subtle deflection based on mouse position
  const dx = (mousePos.x - 0.5) * 20;
  const dy = (mousePos.y - 0.5) * 15;

  const nodes = [
    { id: 0, x: 70, y: 220, label: 'Problem Space', phase: 'Inception', color: '#064BAE' },
    { id: 1, x: 210, y: 130, label: 'Algorithmic R&D', phase: 'Diverge A', color: '#3C54BE' },
    { id: 2, x: 210, y: 310, label: 'Systems Strategy', phase: 'Diverge B', color: '#765ECE' },
    { id: 3, x: 370, y: 80, label: 'Speculative Prototyping', phase: 'Explore', color: '#9B63D9' },
    { id: 4, x: 370, y: 220, label: 'Synthesized Architecture', phase: 'Synthesis', color: '#064BAE' },
    { id: 5, x: 370, y: 360, label: 'Decoupled Infrastructure', phase: 'Resilience', color: '#765ECE' },
    { id: 6, x: 520, y: 120, label: 'Deterministic AI Ops', phase: 'Scale A', color: '#B168DF' },
    { id: 7, x: 520, y: 320, label: 'Global Deployment', phase: 'Scale B', color: '#064BAE' },
  ];

  return (
    <div
      ref={containerRef}
      id="abstract-divergence-visual-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[4/3] max-w-xl mx-auto flex items-center justify-center p-4 select-none cursor-crosshair rounded-2xl bg-white/60 border border-[#111318]/6 shadow-[0_12px_40px_-16px_rgba(6,75,174,0.06)]"
      aria-label="Abstract Divergence and Systems Conceptual Visualizer"
    >
      <svg
        viewBox="0 0 600 440"
        className="w-full h-full overflow-visible transition-transform duration-500 ease-out"
        style={{
          transform: `perspective(800px) rotateY(${dx * 0.25}deg) rotateX(${-dy * 0.25}deg)`,
        }}
      >
        <defs>
          <linearGradient id="main-diverge-grad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#064BAE" />
            <stop offset="25%" stopColor="#3C54BE" />
            <stop offset="50%" stopColor="#765ECE" />
            <stop offset="75%" stopColor="#9B63D9" />
            <stop offset="100%" stopColor="#B168DF" />
          </linearGradient>

          <linearGradient id="upper-branch-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#064BAE" />
            <stop offset="50%" stopColor="#765ECE" />
            <stop offset="100%" stopColor="#B168DF" />
          </linearGradient>

          <linearGradient id="lower-branch-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#064BAE" />
            <stop offset="50%" stopColor="#3C54BE" />
            <stop offset="100%" stopColor="#765ECE" />
          </linearGradient>

          <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Precision coordinate grid lines - subtle mathematical framing */}
        <g stroke="#111318" strokeOpacity="0.04" strokeWidth="1">
          <line x1="70" y1="40" x2="70" y2="400" strokeDasharray="3 4" />
          <line x1="210" y1="40" x2="210" y2="400" strokeDasharray="3 4" />
          <line x1="370" y1="40" x2="370" y2="400" strokeDasharray="3 4" />
          <line x1="520" y1="40" x2="520" y2="400" strokeDasharray="3 4" />
          <line x1="40" y1="220" x2="560" y2="220" strokeDasharray="3 4" />
        </g>

        {/* Divergence Vectors & Splines */}
        {/* Upper Divergent Trajectory */}
        <path
          d={`M 70 220 C ${140 + dx * 0.5} ${170 + dy * 0.5}, ${170 + dx * 0.4} 130, 210 130 C 270 130, ${310 + dx * 0.4} 80, 370 80 C 440 80, ${470 + dx * 0.3} 120, 520 120`}
          fill="none"
          stroke="url(#upper-branch-grad)"
          strokeWidth="2.75"
          strokeLinecap="round"
          className="transition-all duration-300"
        />

        {/* Lower Divergent Trajectory */}
        <path
          d={`M 70 220 C ${140 + dx * 0.5} ${270 + dy * 0.5}, ${170 + dx * 0.4} 310, 210 310 C 270 310, ${310 + dx * 0.4} 360, 370 360 C 440 360, ${470 + dx * 0.3} 320, 520 320`}
          fill="none"
          stroke="url(#lower-branch-grad)"
          strokeWidth="2.75"
          strokeLinecap="round"
          className="transition-all duration-300"
        />

        {/* Central Convergence & Re-synthesis Spine */}
        <path
          d={`M 210 130 C 280 ${130 + dy * 0.3}, 310 220, 370 220 C 430 220, 480 ${270 + dy * 0.2}, 520 320`}
          fill="none"
          stroke="#765ECE"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeOpacity="0.45"
        />

        <path
          d={`M 210 310 C 280 ${310 + dy * 0.3}, 310 220, 370 220 C 430 220, 480 ${170 + dy * 0.2}, 520 120`}
          fill="none"
          stroke="#3C54BE"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeOpacity="0.45"
        />

        {/* Cross-system harmonic lines */}
        <line
          x1="210"
          y1="130"
          x2="210"
          y2="310"
          stroke="#064BAE"
          strokeWidth="1"
          strokeOpacity="0.25"
          strokeDasharray="2 3"
        />
        <line
          x1="370"
          y1="80"
          x2="370"
          y2="360"
          stroke="#9B63D9"
          strokeWidth="1"
          strokeOpacity="0.2"
          strokeDasharray="2 3"
        />
        <line
          x1="520"
          y1="120"
          x2="520"
          y2="320"
          stroke="#B168DF"
          strokeWidth="1"
          strokeOpacity="0.25"
          strokeDasharray="2 3"
        />

        {/* Interactive System Nodes */}
        {nodes.map((node) => {
          const isHovered = activeNode === node.id;
          return (
            <g
              key={node.id}
              className="cursor-pointer transition-transform duration-200"
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Outer pulse circle when hovered */}
              {isHovered && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="14"
                  fill={node.color}
                  fillOpacity="0.15"
                  className="animate-pulse"
                />
              )}

              {/* Node core */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isHovered ? 6.5 : 5}
                fill={node.color}
                stroke="#FFFFFF"
                strokeWidth="2"
                className="transition-all duration-200 shadow-sm"
              />

              {/* Node Label */}
              <text
                x={node.x}
                y={node.y > 220 ? node.y + 22 : node.y - 14}
                textAnchor="middle"
                className="text-[11px] font-medium fill-[#111318]/80 select-none tracking-tight"
                style={{
                  fontWeight: isHovered ? 600 : 500,
                  fill: isHovered ? '#064BAE' : '#111318',
                }}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Subtle indicator pill at bottom right */}
      <div className="absolute bottom-3 right-4 flex items-center space-x-2 text-[11px] text-[#111318]/50 font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-[#064BAE] animate-pulse" />
        <span>Double Divergence Model</span>
      </div>
    </div>
  );
};
