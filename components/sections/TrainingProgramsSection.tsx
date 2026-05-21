'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface TrainingProgramsSectionProps {
    onCtaClick: (type: string) => void;
}

export function TrainingProgramsSection({ onCtaClick }: TrainingProgramsSectionProps) {
    const { ref, isVisible } = useIntersectionObserver();

    const programs = [
        {
            id: 'beginner',
            title: 'Beginner Program',
            description: 'Perfect for players starting their elite basketball journey',
            price: '₹5,000/month',
            features: ['Biomechanical Fundamentals', 'Foundation Development Framework', 'Team Synchronization', '3 sessions/week'],
            icon: '→',
        },
        {
            id: 'intermediate',
            title: 'Intermediate Program',
            description: 'For competitive players seeking skill advancement',
            price: '₹8,000/month',
            features: ['Advanced Biomechanics', 'Game Intelligence Systems', 'High-IQ Tactical Frameworks', '5 sessions/week'],
            icon: '★',
            featured: false,
        },
        {
            id: 'advanced',
            title: 'Advanced Program',
            description: 'Elite tier for serious tournament competitors',
            price: '₹12,000/month',
            features: ['Elite Biomechanical Training', 'Tournament Prep Blueprints', 'Nutrition & Strength Protocols', '6 sessions/week'],
            icon: '⚡',
            premium: true,
        },
        {
            id: 'kids',
            title: 'Kids Academy',
            description: 'Build elite foundations from an early age',
            price: '₹3,500/month',
            features: ['Foundational Skills', 'Basketball IQ Development', 'Team Dynamics', '2 sessions/week'],
            icon: '◆',
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
        <section ref={ref} className="relative py-32 px-4 overflow-hidden bg-[#0B0B0C]">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#141517] via-[#0B0B0C] to-[#0B0B0C] z-0" />

            {/* Ambient Glows */}
            <motion.div
                animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-1/4 top-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(255,87,34,0.15)_0%,transparent 70%)] rounded-full blur-3xl z-0"
            />
            <motion.div
                animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute left-0 bottom-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(255,45,91,0.12)_0%,transparent 70%)] rounded-full blur-3xl z-0"
            />

            <div className="relative z-10 container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="font-bebas text-6xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white">
                        Training Programs
                    </h2>
                    <p className="font-montserrat text-[#C0C0C8] text-lg max-w-2xl mx-auto font-light">
                        Choose your tier. Advanced biomechanical training tailored for elite athletes.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {programs.map((program) => (
                        <motion.div
                            key={program.id}
                            variants={cardVariants}
                            whileHover={{ y: -12, scale: 1.02 }}
                            className={`relative group rounded-2xl overflow-hidden transition-all duration-300 ${program.premium ? 'lg:scale-105' : ''}`}
                        >
                            {/* Glow Effect on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl z-0 ${program.premium ? 'from-[#D4A574]/10 to-[#FF5722]/5' : 'from-[#FF5722]/10 to-[#FF2D5B]/5'}`} />

                            <div
                                className={`relative glass rounded-2xl p-8 backdrop-blur-sm border transition-all duration-300 h-full flex flex-col ${program.premium
                                    ? 'glass-dark bg-gradient-to-br from-[#1A1A1D] to-[#141517] border-[#D4A574] shadow-lg shadow-[#D4A574]/20'
                                    : 'glass bg-[#141517]/50 border-[#242428] hover:border-[#FF5722]/50'
                                    }`}
                            >
                                {/* Premium Badge */}
                                {program.premium && (
                                    <motion.div
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="absolute -top-3 -right-3 bg-gradient-to-r from-[#D4A574] to-[#E8B88F] text-[#0B0B0C] px-4 py-1 rounded-full text-xs font-bebas font-black uppercase tracking-widest"
                                    >
                                        Most Popular
                                    </motion.div>
                                )}

                                {/* Icon */}
                                <motion.div
                                    animate={isVisible ? { y: 0, scale: 1 } : { y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.6 }}
                                    className={`text-4xl mb-6 font-bebas font-black ${program.premium ? 'text-[#D4A574]' : 'text-[#FF5722]'}`}
                                >
                                    {program.icon}
                                </motion.div>

                                {/* Title & Description */}
                                <h3 className="font-bebas text-2xl font-black mb-3 uppercase tracking-tighter text-white">{program.title}</h3>
                                <p className="font-montserrat text-sm text-[#C0C0C8] mb-6 flex-grow font-light">{program.description}</p>

                                {/* Price */}
                                <motion.p className={`font-bebas text-3xl font-black bg-clip-text text-transparent mb-8 ${program.premium ? 'bg-gradient-to-r from-[#D4A574] to-[#E8B88F]' : 'bg-gradient-to-r from-[#FF5722] to-[#FF7043]'}`}>
                                    {program.price}
                                </motion.p>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {program.features.map((feature, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                            transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                                            className="font-montserrat text-sm text-[#C0C0C8] flex items-center gap-3"
                                        >
                                            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs text-white font-bebas font-black ${program.premium ? 'bg-[#D4A574]' : 'bg-[#FF5722]'}`}>
                                                ✓
                                            </span>
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: program.premium ? '0 0 30px rgba(212,165,116,0.4)' : '0 0 30px rgba(255,87,34,0.4)' }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => onCtaClick('training')}
                                    className={`w-full py-3 rounded-xl font-bebas font-black uppercase tracking-wider transition-all duration-300 ${program.premium
                                        ? 'bg-[#D4A574] hover:bg-[#E8B88F] text-[#0B0B0C]'
                                        : 'bg-[#FF5722] hover:bg-[#FF7043] text-white'
                                        }`}
                                >
                                    Enroll Now
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
