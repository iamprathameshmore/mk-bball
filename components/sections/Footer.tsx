'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Heart, Share2, Music } from 'lucide-react';

interface FooterProps {
    onCtaClick: (type?: string) => void;
}

export function Footer({ onCtaClick }: FooterProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    const socialLinks = [
        { icon: Send, href: '#', label: 'Twitter' },
        { icon: Heart, href: '#', label: 'Instagram' },
        { icon: Music, href: '#', label: 'YouTube' },
        { icon: Share2, href: '#', label: 'Facebook' },
    ];

    const quickLinks = [
        { label: 'About Us', href: '#' },
        { label: 'Programs', href: '#' },
        { label: 'Events', href: '#' },
        { label: 'Gallery', href: '#' },
    ];

    return (
        <footer className="relative bg-[#0B0B0C] border-t border-[#242428] pt-24 pb-12 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#141517] via-[#0B0B0C] to-[#0B0B0C] z-0" />

            {/* Ambient Glows */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 -right-96 w-96 h-96 bg-[radial-gradient(circle,rgba(255,87,34,0.1)_0%,transparent 70%)] rounded-full blur-3xl z-0"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -left-96 w-96 h-96 bg-[radial-gradient(circle,rgba(255,45,91,0.08)_0%,transparent 70%)] rounded-full blur-3xl z-0"
            />

            <div className="relative z-10 container mx-auto px-4 max-w-7xl">
                {/* Main Footer Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-4 gap-12 mb-16"
                >
                    {/* Brand & Mission */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-3xl font-bebas font-black mb-4 uppercase tracking-tighter text-white">
                            MK Basketball
                        </h3>
                        <p className="text-[#C0C0C8] leading-relaxed mb-8 font-montserrat text-sm font-light">
                            The epicenter of Central India basketball. Elite training. World-class tournaments. Unmatched ambition.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((link, i) => (
                                <motion.a
                                    key={i}
                                    href={link.href}
                                    whileHover={{ scale: 1.15, y: -2 }}
                                    className="p-3 rounded-lg glass bg-[#141517] text-[#C0C0C8] hover:text-[#FF5722] hover:bg-[#FF5722]/10 transition-all duration-300 border border-[#242428]"
                                    title={link.label}
                                >
                                    <link.icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Navigation */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-white font-montserrat">Programs</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-[#C0C0C8] hover:text-[#FF5722] transition-colors duration-300 text-sm font-montserrat">
                                    Beginner Training
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#C0C0C8] hover:text-[#FF5722] transition-colors duration-300 text-sm font-montserrat">
                                    Advanced Academy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#C0C0C8] hover:text-[#FF5722] transition-colors duration-300 text-sm font-montserrat">
                                    Tournaments
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#C0C0C8] hover:text-[#FF5722] transition-colors duration-300 text-sm font-montserrat">
                                    Coaching Staff
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Resources */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-white font-montserrat">Resources</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-[#C0C0C8] hover:text-[#FF5722] transition-colors duration-300 text-sm font-montserrat">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#C0C0C8] hover:text-[#FF5722] transition-colors duration-300 text-sm font-montserrat">
                                    Events & News
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#C0C0C8] hover:text-[#FF5722] transition-colors duration-300 text-sm font-montserrat">
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#C0C0C8] hover:text-[#FF5722] transition-colors duration-300 text-sm font-montserrat">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Contact & CTA */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-white font-montserrat">Connect</h4>
                        <div className="space-y-3 mb-8 flex-1">
                            <a
                                href="mailto:info@mkbasketball.com"
                                className="flex items-center gap-2 text-[#C0C0C8] hover:text-[#FF5722] transition-colors group text-sm font-montserrat"
                            >
                                <Mail size={16} />
                                <span>info@mkbasketball.com</span>
                            </a>
                            <a
                                href="tel:+919876543210"
                                className="flex items-center gap-2 text-[#C0C0C8] hover:text-[#FF5722] transition-colors group text-sm font-montserrat"
                            >
                                <Phone size={16} />
                                <span>+91 98765 43210</span>
                            </a>
                            <div className="flex items-center gap-2 text-[#C0C0C8] text-sm font-montserrat">
                                <MapPin size={16} />
                                <span>Amravati, MH</span>
                            </div>
                        </div>

                        {/* WhatsApp CTA - Prominent but not floating */}
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,87,34,0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => onCtaClick('training')}
                            className="w-full px-6 py-3 rounded-lg font-montserrat font-bold uppercase tracking-wider bg-[#FF5722] hover:bg-[#FF7043] text-white transition-all duration-300 shadow-lg text-sm"
                        >
                            💬 WhatsApp
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="h-px bg-gradient-to-r from-transparent via-[#242428] to-transparent mb-8 origin-left"
                />

                {/* Bottom Footer */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs md:text-sm"
                >
                    <motion.p variants={itemVariants} className="text-[#888892] font-montserrat">
                        © 2026 MK Basketball Club. All rights reserved.
                    </motion.p>
                    <motion.div variants={itemVariants} className="flex gap-8 font-montserrat">
                        <a href="#" className="text-[#888892] hover:text-[#FF5722] transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-[#888892] hover:text-[#FF5722] transition-colors">
                            Terms of Service
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    );
}


