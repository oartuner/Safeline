import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Plane, Truck, Package, Container, MapPin } from 'lucide-react';

const LogisticsVisual = () => {
    // Definining flow paths for icons
    const flows = [
        { Icon: Ship, color: '#5aaeee', delay: 0, duration: 25, y: '20%' },
        { Icon: Plane, color: '#2d87c2', delay: 5, duration: 20, y: '40%' },
        { Icon: Truck, color: '#5aaeee', delay: 10, duration: 22, y: '60%' },
        { Icon: Container, color: 'white', delay: 15, duration: 28, y: '80%' }
    ];

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Pulsing Core */}
            <div className="relative">
                <motion.div
                    className="absolute inset-0 bg-secondary/30 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative z-10 w-24 h-24 bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/20 flex items-center justify-center shadow-2xl">
                    <Package size={40} className="text-secondary animate-bounce" />
                </div>
            </div>

            {/* Orbiting Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {flows.map((flow, i) => (
                    <motion.div
                        key={i}
                        className="absolute left-0 flex items-center gap-2 whitespace-nowrap"
                        style={{ top: flow.y }}
                        initial={{ x: '-100%' }}
                        animate={{ x: '200%' }}
                        transition={{
                            duration: flow.duration,
                            repeat: Infinity,
                            delay: flow.delay,
                            ease: "linear"
                        }}
                    >
                        <div className="flex items-center gap-4 opacity-20">
                            {[...Array(5)].map((_, j) => (
                                <div key={j} className="flex items-center gap-8">
                                    <flow.Icon size={24} style={{ color: flow.color }} />
                                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Floating Data Nodes */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={`node-${i}`}
                    className="absolute w-1.5 h-1.5 bg-secondary rounded-full shadow-[0_0_10px_#2d87c2]"
                    initial={{
                        x: Math.random() * 200 - 100,
                        y: Math.random() * 200 - 100,
                        opacity: 0
                    }}
                    animate={{
                        y: [0, -40, 0],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.8
                    }}
                />
            ))}

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
        </div>
    );
};

export default LogisticsVisual;
