'use client';

import { useEffect, useRef, useState } from 'react';

export function useParallax(speed = 0.5) {
    const ref = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const elementTop = rect.top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight && elementTop + rect.height > 0) {
                setOffset(elementTop * speed);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return { ref, offset };
}
