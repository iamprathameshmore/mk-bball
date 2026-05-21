'use client';

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
    threshold?: number | number[];
    rootMargin?: string;
}

export function useIntersectionObserver({
    threshold = 0.1,
    rootMargin = '0px',
}: UseIntersectionObserverProps = {}) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return { ref, isVisible };
}
