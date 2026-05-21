'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import {
    inquiryFormSchema,
    inquiryTypeLabels,
    ageGroups,
    experienceLevels,
    type InquiryFormValues,
} from '@/lib/validationSchemas';

interface InquiryDialogProps {
    isOpen: boolean;
    onClose: () => void;
    defaultType?: 'training' | 'tournaments' | 'collaboration' | 'sponsorship' | 'coaching';
}

export function InquiryDialog({ isOpen, onClose, defaultType = 'training' }: InquiryDialogProps) {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm<InquiryFormValues>({
        resolver: zodResolver(inquiryFormSchema),
        defaultValues: {
            inquiryType: defaultType,
        },
    });

    const inquiryType = watch('inquiryType');

    const onSubmit = async (data: InquiryFormValues) => {
        console.log('Form submitted:', data);
        setSubmitted(true);
        setTimeout(() => {
            reset();
            setStep(1);
            setSubmitted(false);
            onClose();
        }, 2000);
    };

    const handleClose = () => {
        reset();
        setStep(1);
        setSubmitted(false);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-[#050505]/80 backdrop-blur-md z-40"
                    />

                    {/* Dialog */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-50 px-4"
                    >
                        <div className="relative glass bg-gradient-to-br from-[#111118]/80 to-[#0A0A0F]/60 border border-[#1D1D28] rounded-3xl p-8 shadow-2xl">
                            {/* Close Button */}
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleClose}
                                className="absolute top-6 right-6 p-2 hover:bg-[#C000FF]/20 rounded-xl transition-all duration-200 text-[#B4B4C7] hover:text-[#C000FF]"
                            >
                                <X size={24} />
                            </motion.button>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="py-16 text-center"
                                >
                                    {/* Success Circle */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', damping: 15, stiffness: 150 }}
                                        className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C000FF]/20 to-[#00B7FF]/20 border border-[#C000FF] mx-auto mb-6 flex items-center justify-center"
                                    >
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 0.6, repeat: 1 }}
                                            className="text-3xl text-[#C000FF]"
                                        >
                                            ✓
                                        </motion.div>
                                    </motion.div>
                                    <h3 className="text-3xl font-bold mb-3">Thank You!</h3>
                                    <p className="text-[#B4B4C7] text-lg">Your inquiry has been received. We'll be in touch shortly.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    {/* Header */}
                                    <div className="mb-8">
                                        <h2 className="font-oswald text-3xl font-bold mb-2 uppercase tracking-tight">
                                            {inquiryTypeLabels[inquiryType]}
                                        </h2>
                                        <div className="flex items-center gap-2">
                                            <p className="text-[#707088] text-sm uppercase tracking-wider">
                                                Step {step} of 2
                                            </p>
                                            <div className="flex gap-1">
                                                {[1, 2].map((i) => (
                                                    <motion.div
                                                        key={i}
                                                        animate={{ width: step >= i ? 24 : 12 }}
                                                        className={`h-1 rounded-full transition-all ${step >= i ? 'bg-gradient-to-r from-[#C000FF] to-[#00B7FF]' : 'bg-[#1D1D28]'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {step === 1 ? (
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="space-y-5"
                                        >
                                            {/* Inquiry Type */}
                                            <div>
                                                <label className="block text-sm font-semibold mb-3 text-[#FFFFFF] uppercase tracking-wider">
                                                    Inquiry Type
                                                </label>
                                                <select
                                                    {...register('inquiryType')}
                                                    className="w-full bg-[#111118] border border-[#1D1D28] rounded-xl px-4 py-3 text-[#FFFFFF] placeholder-[#707088] focus:outline-none focus:border-[#C000FF]/50 focus:ring-1 focus:ring-[#C000FF]/20 transition-all duration-300"
                                                >
                                                    <option value="training">Training Program Inquiry</option>
                                                    <option value="tournaments">Tournament Registration</option>
                                                    <option value="collaboration">Collaboration & Partnership</option>
                                                    <option value="sponsorship">Sponsorship Opportunity</option>
                                                    <option value="coaching">Coaching Inquiry</option>
                                                </select>
                                            </div>

                                            {/* Name */}
                                            <div>
                                                <label className="block text-sm font-semibold mb-3 text-[#FFFFFF] uppercase tracking-wider">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Your name"
                                                    {...register('name')}
                                                    className="w-full bg-[#111118] border border-[#1D1D28] rounded-xl px-4 py-3 text-[#FFFFFF] placeholder-[#707088] focus:outline-none focus:border-[#C000FF]/50 focus:ring-1 focus:ring-[#C000FF]/20 transition-all duration-300"
                                                />
                                                {errors.name && (
                                                    <p className="text-xs text-[#FF2DAA] mt-2">{errors.name.message}</p>
                                                )}
                                            </div>

                                            {/* Email */}
                                            <div>
                                                <label className="block text-sm font-semibold mb-3 text-[#FFFFFF] uppercase tracking-wider">
                                                    Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="your@email.com"
                                                    {...register('email')}
                                                    className="w-full bg-[#111118] border border-[#1D1D28] rounded-xl px-4 py-3 text-[#FFFFFF] placeholder-[#707088] focus:outline-none focus:border-[#C000FF]/50 focus:ring-1 focus:ring-[#C000FF]/20 transition-all duration-300"
                                                />
                                                {errors.email && (
                                                    <p className="text-xs text-[#FF2DAA] mt-2">{errors.email.message}</p>
                                                )}
                                            </div>

                                            {/* Phone */}
                                            <div>
                                                <label className="block text-sm font-semibold mb-3 text-[#FFFFFF] uppercase tracking-wider">
                                                    Phone *
                                                </label>
                                                <input
                                                    type="tel"
                                                    placeholder="+91 XXXXX XXXXX"
                                                    {...register('phone')}
                                                    className="w-full bg-[#111118] border border-[#1D1D28] rounded-xl px-4 py-3 text-[#FFFFFF] placeholder-[#707088] focus:outline-none focus:border-[#C000FF]/50 focus:ring-1 focus:ring-[#C000FF]/20 transition-all duration-300"
                                                />
                                                {errors.phone && (
                                                    <p className="text-xs text-[#FF2DAA] mt-2">{errors.phone.message}</p>
                                                )}
                                            </div>

                                            {/* Age Group & Experience */}
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-semibold mb-3 text-[#FFFFFF] uppercase tracking-wider">
                                                        Age Group
                                                    </label>
                                                    <select
                                                        {...register('ageGroup')}
                                                        className="w-full bg-[#111118] border border-[#1D1D28] rounded-xl px-4 py-3 text-[#FFFFFF] placeholder-[#707088] focus:outline-none focus:border-[#C000FF]/50 focus:ring-1 focus:ring-[#C000FF]/20 transition-all duration-300"
                                                    >
                                                        <option value="">Select age group</option>
                                                        {ageGroups.map((group) => (
                                                            <option key={group.value} value={group.value}>
                                                                {group.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold mb-3 text-[#FFFFFF] uppercase tracking-wider">
                                                        Experience Level
                                                    </label>
                                                    <select
                                                        {...register('experience')}
                                                        className="w-full bg-[#111118] border border-[#1D1D28] rounded-xl px-4 py-3 text-[#FFFFFF] placeholder-[#707088] focus:outline-none focus:border-[#C000FF]/50 focus:ring-1 focus:ring-[#C000FF]/20 transition-all duration-300"
                                                    >
                                                        <option value="">Select level</option>
                                                        {experienceLevels.map((level) => (
                                                            <option key={level.value} value={level.value}>
                                                                {level.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="space-y-5"
                                        >
                                            {/* Message */}
                                            <div>
                                                <label className="block text-sm font-semibold mb-3 text-[#FFFFFF] uppercase tracking-wider">
                                                    Message *
                                                </label>
                                                <textarea
                                                    placeholder="Tell us more about your inquiry..."
                                                    {...register('message')}
                                                    rows={5}
                                                    className="w-full bg-[#111118] border border-[#1D1D28] rounded-xl px-4 py-3 text-[#FFFFFF] placeholder-[#707088] focus:outline-none focus:border-[#C000FF]/50 focus:ring-1 focus:ring-[#C000FF]/20 transition-all duration-300 resize-none"
                                                />
                                                {errors.message && (
                                                    <p className="text-xs text-[#FF2DAA] mt-2">{errors.message.message}</p>
                                                )}
                                            </div>

                                            {/* Summary */}
                                            <div className="bg-[#0A0A0F] border border-[#1D1D28] rounded-xl p-4">
                                                <p className="text-xs text-[#707088] mb-3 uppercase tracking-wider font-semibold">
                                                    Review Your Information
                                                </p>
                                                <div className="space-y-2 text-sm">
                                                    <p className="text-[#B4B4C7]">
                                                        <span className="text-[#707088]">Type:</span> {inquiryTypeLabels[inquiryType]}
                                                    </p>
                                                    <p className="text-[#B4B4C7]">
                                                        <span className="text-[#707088]">Name:</span> {watch('name') || '-'}
                                                    </p>
                                                    <p className="text-[#B4B4C7]">
                                                        <span className="text-[#707088]">Email:</span> {watch('email') || '-'}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Buttons */}
                                    <div className="flex gap-4 pt-6">
                                        {step === 2 && (
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                type="button"
                                                onClick={() => setStep(1)}
                                                className="flex-1 px-6 py-3 rounded-xl font-semibold uppercase tracking-wide border-2 border-[#1D1D28] text-[#B4B4C7] hover:border-[#C000FF]/50 hover:text-[#C000FF] transition-all duration-300"
                                            >
                                                Back
                                            </motion.button>
                                        )}
                                        <motion.button
                                            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(192, 0, 255, 0.3)' }}
                                            whileTap={{ scale: 0.98 }}
                                            type={step === 2 ? 'submit' : 'button'}
                                            onClick={() => step === 1 && setStep(2)}
                                            className="flex-1 px-6 py-3 rounded-xl font-semibold uppercase tracking-wide bg-gradient-to-r from-[#C000FF] to-[#00B7FF] hover:from-[#E000FF] hover:to-[#00D7FF] text-white transition-all duration-300"
                                        >
                                            {step === 1 ? 'Next' : 'Submit'}
                                        </motion.button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
