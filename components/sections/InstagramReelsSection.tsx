'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function InstagramReelsSection() {
    const { ref, isVisible } = useIntersectionObserver();
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScroll, setCanScroll] = useState(false);

    const reels = [
        { id: 1, title: 'Training Session', likes: '2.5K' },
        { id: 2, title: 'Game Highlights', likes: '3.1K' },
        { id: 3, title: 'Player Showcase', likes: '1.8K' },
        { id: 4, title: 'Behind The Scenes', likes: '2.2K' },
        { id: 5, title: 'Tournament Finals', likes: '4.5K' },
        { id: 6, title: 'Training Tips', likes: '1.9K' },
    ];

    useEffect(() => {
        setCanScroll(true);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 320;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    return (
        <section ref={ref} className="relative py-32 px-4 overflow-hidden bg-[#0B0B0C]">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#141517] via-[#0B0B0C] to-[#0B0B0C] z-0" />

            {/* Ambient Glows */}
            <motion.div
                animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-96 top-1/3 w-96 h-96 bg-[radial-gradient(circle,rgba(255,87,34,0.12)_0%,transparent 70%)] rounded-full blur-3xl z-0"
            />
            <motion.div
                animate={{ x: [0, 60, 0], y: [0, -60, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-96 bottom-1/3 w-96 h-96 bg-[radial-gradient(circle,rgba(255,45,91,0.10)_0%,transparent 70%)] rounded-full blur-3xl z-0"
            />

            <div className="relative z-10 container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="font-bebas text-6xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white">
                        Culture Hub
                    </h2>
                    <p className="font-montserrat text-[#C0C0C8] text-lg font-light">Behind-the-scenes moments, training highlights, and community stories</p>
                </motion.div>

                <div className="relative">
                    {/* Scroll Buttons */}
                    {canScroll && (
                        <>
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                onClick={() => scroll('left')}
                                className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-[#FF5722] hover:bg-[#FF7043] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,87,34,0.5)]"
                            >
                                <ChevronLeft size={24} className="text-white" />
                            </motion.button>
                            <motion.button
                                initial={{ opacity: 0, x: 20 }}
                                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                onClick={() => scroll('right')}
                                className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-[#FF5722] hover:bg-[#FF7043] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,87,34,0.5)]"
                            >
                                <ChevronRight size={24} className="text-white" />
                            </motion.button>
                        </>
                    )}

                    {/* Reels Container */}
                    <div
                        ref={scrollRef}
                        className="overflow-x-auto scrollbar-hide scroll-smooth -mx-4 px-4"
                    >
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={isVisible ? 'visible' : 'hidden'}
                            className="flex gap-6 pb-4"
                        >
                            {reels.map((reel) => (
                                <motion.div
                                    key={reel.id}
                                    variants={cardVariants}
                                    whileHover={{ y: -8 }}
                                    className="flex-shrink-0 w-80 group cursor-pointer"
                                >
                                    <div className="relative rounded-2xl overflow-hidden h-96 glass bg-[#141517]/50 border border-[#242428] hover:border-[#FF5722]/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#FF5722]/20">
                                        {/* Placeholder Video */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF5722]/15 to-[#FF2D5B]/10" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.div
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="text-5xl text-[#FF5722]"
                                            >
                                                ▶
                                            </motion.div>
                                        </div>

                                        {/* Hover Overlay */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/80 via-transparent to-transparent flex flex-col justify-end p-6"
                                        >
                                            <h3 className="font-bebas text-lg font-black mb-2 uppercase tracking-wide text-white">{reel.title}</h3>
                                            <p className="font-montserrat text-sm text-[#C0C0C8]">👁️ {reel.likes}</p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
