'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export function YouTubeShortsSection() {
    const { ref, isVisible } = useIntersectionObserver();

    const shorts = [
        { id: 1, title: 'Quick Drills', views: '5.2K' },
        { id: 2, title: 'Tips & Tricks', views: '3.8K' },
        { id: 3, title: 'Player Spotlight', views: '6.1K' },
        { id: 4, title: 'Training Tips', views: '4.5K' },
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
            <motion.div
                animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/3 top-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(255,87,34,0.12)_0%,transparent 70%)] rounded-full blur-3xl z-0"
            />
            <motion.div
                animate={{ y: [0, -40, 0], x: [0, 40, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute right-0 bottom-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(255,45,91,0.10)_0%,transparent 70%)] rounded-full blur-3xl z-0"
            />

            <div className="relative z-10 container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="font-bebas text-6xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white">
                        Quick Plays
                    </h2>
                    <p className="font-montserrat text-[#C0C0C8] text-lg font-light">Training drills, tips, and elite player highlights in short form</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {shorts.map((short) => (
                        <motion.div
                            key={short.id}
                            variants={cardVariants}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative rounded-2xl overflow-hidden aspect-[9/16] glass bg-[#141517]/50 border border-[#242428] hover:border-[#FF5722]/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#FF5722]/20">
                                {/* Video Placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF5722]/15 to-[#FF2D5B]/10" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="text-5xl text-[#FF5722]"
                                    >
                                        ▶
                                    </motion.div>
                                </div>

                                {/* Info Overlay */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/90 via-transparent to-transparent flex flex-col justify-end p-4"
                                >
                                    <h3 className="font-bebas font-black mb-1 uppercase tracking-wide text-white">{short.title}</h3>
                                    <p className="font-montserrat text-sm text-[#C0C0C8]">👁️ {short.views}</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
