'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export function SocialProofSection() {
    const { ref, isVisible } = useIntersectionObserver();

    const stats = [
        { icon: '👥', label: 'Active Players', value: '500+' },
        { icon: '🏆', label: 'Tournaments Won', value: '25+' },
        { icon: '⭐', label: 'Achievements', value: '100+' },
        { icon: '📅', label: 'Years of Excellence', value: '8+' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section ref={ref} className="relative py-32 px-4 overflow-hidden bg-[#0B0B0C]">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#141517] via-[#0B0B0C] to-[#0B0B0C] z-0" />

            {/* Ambient Glow */}
            <motion.div
                animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-0 top-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(255,87,34,0.12)_0%,transparent 70%)] rounded-full blur-3xl z-0"
            />
            <motion.div
                animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 bottom-0 w-96 h-96 bg-[radial-gradient(circle,rgba(255,45,91,0.10)_0%,transparent 70%)] rounded-full blur-3xl z-0"
            />

            {/* Content */}
            <div className="relative z-10 container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="font-bebas text-6xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white">
                        By The Numbers
                    </h2>
                    <p className="text-[#C0C0C8] text-lg max-w-2xl mx-auto font-montserrat font-light">
                        Our impact on the basketball community speaks for itself through measurable achievements and growth
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="relative group"
                        >
                            {/* Glow Effect on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF5722]/8 to-[#FF7043]/4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                            {/* Card */}
                            <div className="relative glass rounded-2xl p-8 backdrop-blur-sm text-center border border-[#242428] group-hover:border-[#FF5722]/50 transition-all duration-300 bg-[#141517]/50">
                                <motion.div
                                    animate={isVisible ? { y: 0, scale: 1 } : { y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-5xl mb-6"
                                >
                                    {stat.icon}
                                </motion.div>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                                    className="text-4xl md:text-5xl font-black text-[#FF5722] mb-3 font-bebas tracking-tight"
                                >
                                    {stat.value}
                                </motion.p>
                                <p className="text-[#888892] font-montserrat font-semibold uppercase tracking-wider text-sm">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
