'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Image from 'next/image';

export function FounderSection() {
    const { ref, isVisible } = useIntersectionObserver();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    return (
        <section ref={ref} className="relative py-24 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black z-0" />

            <div className="relative z-10 container mx-auto max-w-6xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Founder Portrait */}
                    <motion.div variants={itemVariants} className="relative">
                        <motion.div
                            animate={isVisible ? { y: [0, 20, 0] } : { y: 0 }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-blue-600/30 to-cyan-600/20 border border-white/20 p-1"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl" />
                            <div className="absolute inset-1 flex items-center justify-center rounded-lg">
                                <Image src='https://instagram.fpnq2-1.fna.fbcdn.net/v/t51.82787-15/527459213_18363400468199851_2732736908485169601_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzY5MDgyNTk2NDQ1NzYwODA2Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTM1MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=gNW8y9X7OboQ7kNvwHjgkd7&_nc_oc=AdqFlNQp3rVIgj-rSDxAfYdcqEIDQI7qrT0llPNh59pOHFdnvpXO2MynFqr9yqUACJk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fpnq2-1.fna&_nc_gid=Vhq152o9UAtpzCdhycuH6Q&_nc_ss=7a22e&oh=00_Af5e8rBDIYwakw3HCPE0_KkYKMvpBSAyiA9X92FsGjSWrg&oe=6A14CD57' alt="Founder" layout="fill" objectFit="cover" />
                            </div>
                        </motion.div>

                        {/* Decorative Elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity }}
                            className="absolute -inset-4 rounded-2xl border-2 border-blue-500/20"
                        />
                    </motion.div>

                    {/* Founder Info */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl font-bold mb-2"
                            >
                                Meet Our Founder
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-lg text-blue-400 font-semibold"
                            >
                                Founder & Head Coach
                            </motion.p>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-400 leading-relaxed text-lg"
                        >
                            With over 15 years of professional basketball experience and a passion for developing young talent, our founder established MK Basketball Club with a vision to transform basketball culture in Amravati. From humble beginnings to now nurturing champions, the journey has been remarkable.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.5 }}
                            className="space-y-3"
                        >
                            <div className="flex gap-4">
                                <span className="text-2xl">🏆</span>
                                <div>
                                    <p className="font-semibold">Multiple National Championships</p>
                                    <p className="text-sm text-gray-400">As a player and coach</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">👥</span>
                                <div>
                                    <p className="font-semibold">500+ Players Trained</p>
                                    <p className="text-sm text-gray-400">From beginner to professional</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">🌍</span>
                                <div>
                                    <p className="font-semibold">International Recognition</p>
                                    <p className="text-sm text-gray-400">Award-winning coaching methods</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0 }}
                            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.6 }}
                            className="px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg"
                        >
                            Read Full Story
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
