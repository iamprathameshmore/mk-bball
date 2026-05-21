'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface FinalCTASectionProps {
    onCtaClick: () => void;
}

export function FinalCTASection({ onCtaClick }: FinalCTASectionProps) {
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
        <section ref={ref} className="relative py-32 px-4 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black z-0" />
            <motion.div
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-full blur-3xl z-0"
            />

            {/* Content */}
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                className="relative z-10 container mx-auto max-w-4xl text-center"
            >
                <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                    Ready to <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Become a Champion?</span>
                </motion.h2>

                <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Join hundreds of athletes who have transformed their game at MK Basketball Club. Your journey to excellence starts today.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onCtaClick}
                        className="px-12 py-5 rounded-lg font-bold text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                    >
                        Start Your Journey
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-5 rounded-lg font-bold text-lg border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-200"
                    >
                        Schedule a Demo
                    </motion.button>
                </motion.div>

                {/* Social Proof */}
                <motion.div
                    variants={itemVariants}
                    className="inline-block px-6 py-4 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-center"
                >
                    <p className="text-sm text-gray-300">
                        <span className="text-xl font-bold text-blue-400">500+</span> active players • <span className="text-xl font-bold text-blue-400">25+</span> tournaments won • <span className="text-xl font-bold text-blue-400">8+</span> years of excellence
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
