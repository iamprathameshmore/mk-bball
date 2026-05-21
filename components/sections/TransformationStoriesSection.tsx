'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export function TransformationStoriesSection() {
    const { ref, isVisible } = useIntersectionObserver();

    const stories = [
        {
            name: 'Arjun Singh',
            before: 'Beginner',
            after: 'District Champion',
            duration: '18 months',
            image: '🏀',
        },
        {
            name: 'Priya Verma',
            before: 'Recreational',
            after: 'State Tournament',
            duration: '12 months',
            image: '⭐',
        },
        {
            name: 'Rahul Patel',
            before: 'High School',
            after: 'College Prospect',
            duration: '24 months',
            image: '🔥',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.2 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section ref={ref} className="relative py-24 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-slate-950 z-0" />
            <motion.div
                animate={{ y: [0, 50, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute left-1/2 -bottom-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl z-0"
            />

            <div className="relative z-10 container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Player Transformations
                    </h2>
                    <p className="text-gray-400 text-lg">Inspiring stories from our academy</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {stories.map((story, i) => (
                        <motion.div key={i} variants={cardVariants} whileHover={{ y: -10 }} className="group">
                            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-white/40 transition-all duration-300 p-8">
                                {/* Before/After */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ delay: 0.1 }}
                                        className="text-center p-4 rounded-lg bg-red-600/20 border border-red-500/30"
                                    >
                                        <p className="text-xs text-gray-400 uppercase mb-1">Before</p>
                                        <p className="font-semibold text-sm text-red-300">{story.before}</p>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-center p-4 rounded-lg bg-green-600/20 border border-green-500/30"
                                    >
                                        <p className="text-xs text-gray-400 uppercase mb-1">After</p>
                                        <p className="font-semibold text-sm text-green-300">{story.after}</p>
                                    </motion.div>
                                </div>

                                {/* Player Icon */}
                                <motion.div
                                    animate={isVisible ? { y: 0, rotate: 0 } : { y: 10, rotate: -5 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-5xl mb-4 text-center"
                                >
                                    {story.image}
                                </motion.div>

                                {/* Name */}
                                <h3 className="text-xl font-bold text-center mb-2">{story.name}</h3>

                                {/* Duration */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-center text-sm text-blue-400 font-semibold"
                                >
                                    Transformation in {story.duration}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
