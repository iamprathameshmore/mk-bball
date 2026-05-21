import { z } from 'zod';

export const inquiryFormSchema = z.object({
    inquiryType: z.enum(['training', 'tournaments', 'collaboration', 'sponsorship', 'coaching']),
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
    ageGroup: z.string().optional(),
    experience: z.string().optional(),
});

export type InquiryFormValues = z.infer<typeof inquiryFormSchema>;

export const inquiryTypeLabels: Record<string, string> = {
    training: 'Training Program Inquiry',
    tournaments: 'Tournament Registration',
    collaboration: 'Collaboration & Partnership',
    sponsorship: 'Sponsorship Opportunity',
    coaching: 'Coaching Inquiry',
};

export const ageGroups = [
    { value: 'under-10', label: 'Under 10' },
    { value: '10-14', label: '10-14 Years' },
    { value: '14-18', label: '14-18 Years' },
    { value: '18+', label: '18+ Years' },
    { value: 'adult', label: 'Adult' },
];

export const experienceLevels = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'professional', label: 'Professional' },
];
