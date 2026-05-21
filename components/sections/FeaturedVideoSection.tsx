'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export function FeaturedVideoSection() {
    const { ref, isVisible } = useIntersectionObserver();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <section ref={ref} className="relative py-32 px-4 overflow-hidden bg-[#0B0B0C]">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#141517] via-[#0B0B0C] to-[#141517] z-0" />

            {/* Ambient Glows */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -right-96 top-1/3 w-96 h-96 bg-[radial-gradient(circle,rgba(255,87,34,0.1)_0%,transparent 70%)] rounded-full blur-3xl z-0"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 1 }}
                className="absolute -left-96 bottom-1/3 w-96 h-96 bg-[radial-gradient(circle,rgba(255,45,91,0.08)_0%,transparent 70%)] rounded-full blur-3xl z-0"
            />

            <div className="relative z-10 container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="font-bebas text-6xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white">
                        Featured Athlete
                    </h2>
                    <p className="font-montserrat text-[#C0C0C8] text-lg font-light">Elite performer profile and performance metrics</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                    className="grid lg:grid-cols-3 gap-8 items-center"
                >
                    {/* Featured Player Video */}
                    <motion.div variants={itemVariants} className="lg:col-span-2">
                        <div className="relative rounded-2xl overflow-hidden aspect-video glass bg-[#141517]/50 border border-[#242428] hover:border-[#FF5722]/50 transition-all duration-300 group cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF5722]/20 to-[#FF2D5B]/15" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-6xl text-[#FF5722]"
                                >
                                    ▶
                                </motion.div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                                className="absolute inset-0 bg-[#0B0B0C]/30 backdrop-blur-sm"
                            />
                        </div>
                    </motion.div>

                    {/* Player Info */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <div>
                            <motion.h3 className="font-bebas text-4xl font-black mb-2 uppercase tracking-tighter text-white">Arjun Sharma</motion.h3>
                            <p className="font-montserrat text-lg bg-gradient-to-r from-[#FF5722] to-[#FF7043] bg-clip-text text-transparent font-semibold mb-4">Guard | 6'2"</p>
                            <p className="font-montserrat text-[#C0C0C8] leading-relaxed font-light">
                                Elite guard with exceptional court vision and defensive prowess. State tournament champion and college prospect.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between text-sm font-bebas uppercase tracking-wider">
                                <span className="text-[#C0C0C8]">Scoring</span>
                                <span className="bg-gradient-to-r from-[#FF5722] to-[#FF7043] bg-clip-text text-transparent font-black">92%</span>
                            </div>
                            <div className="h-2 bg-[#141517] rounded-full overflow-hidden border border-[#242428]">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={isVisible ? { width: '92%' } : { width: 0 }}
                                    transition={{ duration: 1 }}
                                    className="h-full bg-gradient-to-r from-[#FF5722] to-[#FF7043]"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between text-sm font-bebas uppercase tracking-wider">
                                <span className="text-[#C0C0C8]">Defense</span>
                                <span className="bg-gradient-to-r from-[#FF5722] to-[#FF7043] bg-clip-text text-transparent font-black">88%</span>
                            </div>
                            <div className="h-2 bg-[#141517] rounded-full overflow-hidden border border-[#242428]">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={isVisible ? { width: '88%' } : { width: 0 }}
                                    transition={{ duration: 1.1 }}
                                    className="h-full bg-gradient-to-r from-[#FF5722] to-[#FF7043]"
                                />
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,87,34,0.4)' }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full py-3 rounded-xl font-bebas font-black uppercase tracking-wider bg-[#FF5722] hover:bg-[#FF7043] text-white transition-all duration-300"
                        >
                            View Full Profile
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
