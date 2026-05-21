'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export function PhilosophySection() {
    const { ref, isVisible } = useIntersectionObserver();

    const philosophies = [
        {
            title: 'Excellence',
            description: 'We pursue excellence in every aspect of our training, coaching, and athlete development.',
            icon: '🎯',
        },
        {
            title: 'Discipline',
            description: 'Discipline is the foundation of success. We instill strong values and work ethic in every player.',
            icon: '💪',
        },
        {
            title: 'Community',
            description: 'Basketball brings us together. We build a supportive community where everyone can thrive.',
            icon: '🤝',
        },
        {
            title: 'Innovation',
            description: 'We stay ahead with modern training techniques, technology, and strategic coaching methods.',
            icon: '⚡',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section ref={ref} className="relative py-24 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-slate-950 z-0" />
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-orange-600/10 to-red-600/10 rounded-full blur-3xl z-0"
            />

            <div className="relative z-10 container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Basketball Philosophy
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl">
                        At MK Basketball Club, we believe basketball is more than just a game. It's a platform for personal growth, character development, and community impact.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {philosophies.map((item, i) => (
                        <motion.div key={i} variants={cardVariants} whileHover={{ y: -8 }} className="group">
                            <div className="rounded-2xl p-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-white/40 transition-all duration-300">
                                <motion.div
                                    animate={isVisible ? { y: 0, scale: 1 } : { y: 10, scale: 0.9 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-5xl mb-4"
                                >
                                    {item.icon}
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
