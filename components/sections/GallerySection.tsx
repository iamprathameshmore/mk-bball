'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useState } from 'react';

export function GallerySection() {
    const { ref, isVisible } = useIntersectionObserver();
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const images = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        title: `Gallery Image ${i + 1}`,
        size: i % 3 === 0 ? 'col-span-2' : 'col-span-1',
    }));

    return (
        <section ref={ref} className="relative py-24 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-slate-950 z-0" />

            <div className="relative z-10 container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Gallery
                    </h2>
                    <p className="text-gray-400 text-lg">Moments from our training sessions and tournaments</p>
                </motion.div>

                {/* Masonry Gallery */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {images.map((image, i) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: i * 0.05 }}
                            whileHover={{ y: -8 }}
                            onClick={() => setSelectedImage(image.id)}
                            className={`group cursor-pointer rounded-2xl overflow-hidden aspect-square ${image.size}`}
                        >
                            <div className="relative h-full w-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 hover:border-white/30 transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/10 group-hover:from-blue-600/40 group-hover:to-cyan-600/20 transition-all duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-6xl opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                                        📸
                                    </span>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
                                >
                                    <p className="text-lg font-semibold">{image.title}</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedImage(null)}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        className="rounded-2xl overflow-hidden aspect-square max-w-2xl w-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/20 flex items-center justify-center cursor-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className="text-9xl">📸</span>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
