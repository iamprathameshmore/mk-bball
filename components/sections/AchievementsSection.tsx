'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export function AchievementsSection() {
    const { ref, isVisible } = useIntersectionObserver();

    const timeline = [
        { year: '2016', event: 'MK Basketball Club Founded' },
        { year: '2017', event: 'First State Tournament Win' },
        { year: '2018', event: 'Academy Expansion to 200+ Players' },
        { year: '2019', event: 'Multiple National Championship Participations' },
        { year: '2021', event: 'Premier League Player Debut' },
        { year: '2023', event: 'Training Center Upgraded' },
        { year: '2024', event: 'International Youth Tournament Champion' },
        { year: '2026', event: 'Top Academy in Central India' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    return (
        <section ref={ref} className="relative py-32 px-4 overflow-hidden bg-[#050505]">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#050505] to-[#050505] z-0" />

            {/* Ambient Glows */}
            <motion.div
                animate={{ x: [0, 50, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-96 top-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(0,183,255,0.1)_0%,transparent 70%)] rounded-full blur-3xl z-0"
            />

            <div className="relative z-10 container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="font-oswald text-5xl md:text-6xl font-bold mb-6 uppercase tracking-tight">
                        Our Journey
                    </h2>
                    <p className="text-[#B4B4C7] text-lg font-light">Milestones and achievements through the years</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                    className="relative"
                >
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C000FF]/50 via-[#00B7FF]/30 to-transparent" />

                    {/* Timeline Items */}
                    <div className="space-y-10">
                        {timeline.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={`flex ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                {/* Content */}
                                <div className="w-1/2 px-8">
                                    <motion.div
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="glass bg-gradient-to-br from-[#111118]/60 to-[#0A0A0F]/40 border border-[#1D1D28] hover:border-[#C000FF]/40 rounded-xl p-5 transition-all duration-300"
                                    >
                                        <p className="font-oswald uppercase tracking-widest font-bold text-lg bg-gradient-to-r from-[#C000FF] to-[#00B7FF] bg-clip-text text-transparent mb-2">
                                            {item.year}
                                        </p>
                                        <p className="text-[#B4B4C7] font-light">{item.event}</p>
                                    </motion.div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="w-0 flex justify-center">
                                    <motion.div
                                        animate={isVisible ? { scale: [1, 1.4, 1] } : { scale: 1 }}
                                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.15 }}
                                        className="w-5 h-5 bg-gradient-to-r from-[#C000FF] to-[#00B7FF] rounded-full border-4 border-[#050505] shadow-lg shadow-[#C000FF]/50"
                                    />
                                </div>

                                {/* Empty Space */}
                                <div className="w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
