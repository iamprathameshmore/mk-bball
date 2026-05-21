'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Calendar, MapPin } from 'lucide-react';

interface EventsSectionProps {
    onCtaClick: (type: string) => void;
}

export function EventsSection({ onCtaClick }: EventsSectionProps) {
    const { ref, isVisible } = useIntersectionObserver();

    const events = [
        {
            title: 'Spring Tournament',
            date: 'March 15-17, 2026',
            location: 'Amravati Sports Complex',
            type: 'Tournament',
            status: 'Upcoming',
        },
        {
            title: 'Summer Camp',
            date: 'June 1-30, 2026',
            location: 'MK Academy',
            type: 'Training',
            status: 'Registration Open',
        },
        {
            title: 'Championship Finals',
            date: 'August 10-12, 2026',
            location: 'State Arena',
            type: 'Championship',
            status: 'Upcoming',
        },
        {
            title: 'Winter League',
            date: 'November-January',
            location: 'MK Academy',
            type: 'League',
            status: 'Coming Soon',
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
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section ref={ref} className="relative py-24 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-slate-950 z-0" />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity }}
                className="absolute -right-32 top-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl z-0"
            />

            <div className="relative z-10 container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Upcoming Events
                    </h2>
                    <p className="text-gray-400 text-lg">Don't miss out on our tournaments and training sessions</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {events.map((event, i) => (
                        <motion.div key={i} variants={cardVariants} whileHover={{ y: -10 }} className="group">
                            <div className="rounded-2xl p-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-white/40 transition-all duration-300 relative overflow-hidden h-full">
                                {/* Status Badge */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-green-600 to-green-700"
                                >
                                    {event.status}
                                </motion.div>

                                {/* Type Badge */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/30 border border-blue-500/50 mb-4"
                                >
                                    {event.type}
                                </motion.div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-4">{event.title}</h3>

                                {/* Details */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <Calendar size={18} className="text-blue-400" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-300">
                                        <MapPin size={18} className="text-blue-400" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => onCtaClick('tournaments')}
                                    className="w-full py-2.5 rounded-lg font-semibold border border-white/30 hover:bg-white/10 transition-all duration-200"
                                >
                                    Register Now
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
