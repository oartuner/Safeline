import React from 'react';
import { motion } from 'framer-motion';

const WorldMapAnimation = () => {
    // Coordinate system matches standard 1440x810 world map projection
    // Logistics hub points (Calibrated to be strictly on landmasses)
    const hubs = [
        { x: 735, y: 200, name: 'Europe' },       // Germany/Central Europe
        { x: 1080, y: 300, name: 'Asia' },        // China (Inland)
        { x: 320, y: 260, name: 'North America' }, // USA (Central)
        { x: 470, y: 560, name: 'South America' }, // Brazil (Inland)
        { x: 760, y: 460, name: 'Africa' },       // Central Africa
        { x: 1260, y: 620, name: 'Australia' },   // Australia (Central)
        { x: 1240, y: 350, name: 'India' }        // India
    ];

    // Shipping routes between hubs
    const routes = [
        { from: 0, to: 2 }, // Europe -> N. America
        { from: 0, to: 1 }, // Europe -> Asia
        { from: 2, to: 1 }, // N. America -> Asia (Pacific route visual)
        { from: 0, to: 4 }, // Europe -> Africa
        { from: 1, to: 5 }, // Asia -> Australia
        { from: 3, to: 0 }, // S. America -> Europe
        { from: 1, to: 3 }, // Asia -> S. America
    ];

    return (
        <div className="w-full h-full relative overflow-hidden">
            <svg
                viewBox="0 0 1440 810"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid slice"
                style={{ opacity: 1 }}
            >
                {/* 1. Underlying World Map Image (User Provided) */}
                {/* Using <image> inside SVG ensures perfect alignment with vector overlay */}
                <image
                    href="/dünya.svg"
                    x="0"
                    y="0"
                    width="1440"
                    height="810"
                    opacity="0.35"
                    style={{ filter: 'grayscale(100%) brightness(0.8) sepia(0.5) hue-rotate(190deg) saturate(1)' }}
                />

                <defs>
                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2d87c2" stopOpacity="0.4" />
                        <stop offset="50%" stopColor="#4facfe" stopOpacity="1" />
                        <stop offset="100%" stopColor="#2d87c2" stopOpacity="0.4" />
                    </linearGradient>
                </defs>

                {/* 2. Animated shipping routes */}
                {routes.map((route, index) => {
                    const fromHub = hubs[route.from];
                    const toHub = hubs[route.to];

                    // Add curve to lines for realistic flight/ship paths
                    const midX = (fromHub.x + toHub.x) / 2;
                    // Curve up or down depending on distance/location
                    const curveFactor = Math.abs(fromHub.x - toHub.x) * 0.2;
                    const midY = (fromHub.y + toHub.y) / 2 - curveFactor;

                    return (
                        <motion.path
                            key={`route-${index}`}
                            d={`M ${fromHub.x} ${fromHub.y} Q ${midX} ${midY} ${toHub.x} ${toHub.y}`}
                            stroke="url(#routeGradient)"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [0, 0.7, 0.7, 0]
                            }}
                            transition={{
                                duration: 8 + (index * 0.5), // Deterministic duration based on index
                                delay: index * 0.8,
                                repeat: Infinity,
                                repeatDelay: 1,
                                ease: "easeInOut"
                            }}
                        />
                    );
                })}

                {/* 3. Logistics hubs - pulsing dots */}
                {hubs.map((hub, index) => (
                    <g key={`hub-${index}`}>
                        {/* Outer pulse ring */}
                        <motion.circle
                            cx={hub.x}
                            cy={hub.y}
                            r="6"
                            fill="none"
                            stroke="#4facfe"
                            strokeWidth="2"
                            initial={{ scale: 0.5, opacity: 0.7 }}
                            animate={{
                                scale: [0.5, 1.5, 0.5],
                                opacity: [0.7, 0, 0.7]
                            }}
                            transition={{
                                duration: 3,
                                delay: index * 0.3,
                                repeat: Infinity,
                                ease: "easeOut"
                            }}
                        />
                        {/* Hub dot */}
                        <circle
                            cx={hub.x}
                            cy={hub.y}
                            r="3"
                            fill="#4facfe"
                            opacity="0.9"
                        />
                    </g>
                ))}

                {/* 4. Floating cargo particles */}
                {routes.map((route, index) => {
                    const fromHub = hubs[route.from];
                    const toHub = hubs[route.to];
                    const curveFactor = Math.abs(fromHub.x - toHub.x) * 0.2;
                    const midX = (fromHub.x + toHub.x) / 2;
                    const midY = (fromHub.y + toHub.y) / 2 - curveFactor;

                    // Only show particles on some routes to avoid clutter
                    if (index % 2 !== 0) return null;

                    return (
                        <motion.circle
                            key={`cargo-${index}`}
                            r="3"
                            fill="#ffffff"
                            initial={{ opacity: 0, cx: fromHub.x, cy: fromHub.y }}
                            animate={{
                                cx: [fromHub.x, midX, toHub.x],
                                cy: [fromHub.y, midY, toHub.y],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 8 + (index * 0.5), // Match line duration logic
                                delay: index * 0.8 + 0.5,
                                repeat: Infinity,
                                repeatDelay: 1,
                                ease: "easeInOut"
                            }}
                        />
                    );
                })}
            </svg>
        </div>
    );
};

export default WorldMapAnimation;
