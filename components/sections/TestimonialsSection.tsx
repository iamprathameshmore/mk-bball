'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export function TestimonialsSection() {
    const { ref, isVisible } = useIntersectionObserver();

    const testimonials = [
        {
            name: 'Rajesh Kumar',
            role: 'Parent',
            text: 'My son has transformed as a player and person. The coaching is exceptional and the community is welcoming.',
            rating: 5,
        },
        {
            name: 'Priya Sharma',
            role: 'Player',
            text: 'The training programs are world-class. I feel confident competing at national levels now.',
            rating: 5,
        },
        {
            name: 'Amit Patel',
            role: 'Parent',
            text: 'Best academy in the region. Professional coaches, modern facilities, and real results.',
            rating: 5,
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
            <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black z-0" />
            <motion.div
                animate={{ x: [0, -50, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute left-1/4 bottom-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl z-0"
            />

            <div className="relative z-10 container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        What People Say
                    </h2>
                    <p className="text-gray-400 text-lg">Testimonials from our players and parents</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {testimonials.map((testimonial, i) => (
                        <motion.div key={i} variants={cardVariants} whileHover={{ y: -8 }} className="group">
                            <div className="rounded-2xl p-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <motion.span
                                            key={i}
                                            animate={isVisible ? { y: 0, opacity: 1 } : { y: 5, opacity: 0 }}
                                            transition={{ delay: i * 0.1, duration: 0.4 }}
                                            className="text-yellow-400"
                                        >
                                            ⭐
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                                    "{testimonial.text}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-semibold">
                                        {testimonial.name[0]}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">{testimonial.name}</p>
                                        <p className="text-xs text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
