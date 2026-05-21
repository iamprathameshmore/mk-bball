'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
    onCtaClick: () => void;
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
    const [count, setCount] = useState({ players: 0, tournaments: 0, achievements: 0, years: 0 });

    useEffect(() => {
        const duration: number = 2000;
        const targets = { players: 500, tournaments: 25, achievements: 100, years: 8 };
        const start = Date.now();

        const timer = setInterval(() => {
            const progress = Math.min((Date.now() - start) / duration, 1);
            setCount({
                players: Math.floor(targets.players * progress),
                tournaments: Math.floor(targets.tournaments * progress),
                achievements: Math.floor(targets.achievements * progress),
                years: Math.floor(targets.years * progress),
            });
            if (progress === 1) clearInterval(timer);
        }, 16);

        return () => clearInterval(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' as any },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0C]">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0C] via-[#141517] to-[#0B0B0C] z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,87,34,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,87,34,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            {/* Ambient Glows */}
            <motion.div
                animate={{ y: [-96, 0, -96] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-[#FF5722]/20 to-transparent rounded-full blur-3xl z-0 opacity-60"
            />
            <motion.div
                animate={{ y: [0, -96, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-[#FF2D5B]/20 to-transparent rounded-full blur-3xl z-0 opacity-60"
            />

            {/* Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 container mx-auto px-4 py-20 text-center max-w-5xl"
            >
                {/* Badge */}
                <motion.div variants={itemVariants} className="mb-8">
                    <span className="inline-block px-6 py-2 rounded-full bg-white/5 border border-[#FF5722]/30 text-sm font-montserrat font-semibold uppercase tracking-wider text-[#FF5722] backdrop-blur-md">
                        Elite Basketball Training Ecosystem
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    variants={itemVariants}
                    className="font-bebas text-7xl md:text-8xl lg:text-9xl mb-6 leading-none uppercase tracking-tighter text-white"
                >
                    <span className="bg-gradient-to-r from-[#FF5722] via-[#FF7043] to-[#FF5722] bg-clip-text text-transparent">
                        MK BASKETBALL
                    </span>
                </motion.h1>

                {/* Tagline */}
                <motion.p variants={itemVariants} className="font-montserrat text-lg md:text-xl text-[#C0C0C8] mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                    Where elite athletes are forged. Premium biomechanical training, elite tournaments, and a championship community united by basketball excellence in Amravati.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,87,34,0.5)' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onCtaClick}
                        className="px-10 py-4 rounded-lg font-bebas font-black uppercase tracking-wider text-lg bg-[#FF5722] hover:bg-[#FF7043] text-white transition-all duration-300 shadow-lg"
                    >
                        Join The Ecosystem
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05, borderColor: '#FF5722', boxShadow: '0 0 20px rgba(255,87,34,0.3)' }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 rounded-lg font-bebas font-black uppercase tracking-wider text-lg border-2 border-[#FF5722] text-[#FF5722] hover:bg-[#FF5722]/10 transition-all duration-300"
                    >
                        Watch Experience
                    </motion.button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl glass bg-[#141517]/50 border border-[#242428]"
                >
                    {[
                        { value: count.players, label: 'Active Athletes', suffix: '+' },
                        { value: count.tournaments, label: 'Tournaments Hosted', suffix: '+' },
                        { value: count.achievements, label: 'State Rankings', suffix: '+' },
                        { value: count.years, label: 'Years Excellence', suffix: '+' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            className="text-center hover:border-b-2 hover:border-[#FF5722]/30 pb-4 transition-all"
                            whileHover={{ y: -4 }}
                        >
                            <motion.p
                                className="font-bebas text-4xl md:text-5xl font-black text-[#FF5722] mb-2 tracking-tight"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                {stat.value}
                                {stat.suffix}
                            </motion.p>
                            <p className="font-montserrat text-xs md:text-sm text-[#888892] uppercase tracking-wide font-semibold">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <ChevronDown className="text-[#FF5722]" size={32} />
            </motion.div>
        </section>
    );
}
