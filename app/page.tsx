'use client';

import { useState } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { SocialProofSection } from '@/components/sections/SocialProofSection';
import { InstagramReelsSection } from '@/components/sections/InstagramReelsSection';
import { YouTubeShortsSection } from '@/components/sections/YouTubeShortsSection';
import { FeaturedVideoSection } from '@/components/sections/FeaturedVideoSection';
import { TrainingProgramsSection } from '@/components/sections/TrainingProgramsSection';
import { TransformationStoriesSection } from '@/components/sections/TransformationStoriesSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { FounderSection } from '@/components/sections/FounderSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { EventsSection } from '@/components/sections/EventsSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { Footer } from '@/components/sections/Footer';
import { InquiryDialog } from '@/components/InquiryDialog';

type InquiryType = 'training' | 'tournaments' | 'collaboration' | 'sponsorship' | 'coaching' | undefined;

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<InquiryType>('training');

  const handleCtaClick = (type?: string) => {
    setDialogType((type as InquiryType) || 'training');
    setIsDialogOpen(true);
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection onCtaClick={() => handleCtaClick('training')} />

      {/* Social Proof Section */}
      <SocialProofSection />

      {/* Instagram Reels Section */}
      <InstagramReelsSection />

      {/* YouTube Shorts Section */}
      <YouTubeShortsSection />

      {/* Featured Video Section */}
      <FeaturedVideoSection />

      {/* Training Programs Section */}
      <TrainingProgramsSection onCtaClick={handleCtaClick} />

      {/* Transformation Stories Section */}
      <TransformationStoriesSection />

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Basketball Philosophy Section */}
      <PhilosophySection />

      {/* Founder Section */}
      <FounderSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Events Section */}
      <EventsSection onCtaClick={handleCtaClick} />

      {/* Final CTA Section */}
      <FinalCTASection onCtaClick={() => handleCtaClick('training')} />

      {/* Footer */}
      <Footer onCtaClick={handleCtaClick} />

      {/* Inquiry Dialog */}
      <InquiryDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        defaultType={dialogType}
      />
    </>
  );
}


