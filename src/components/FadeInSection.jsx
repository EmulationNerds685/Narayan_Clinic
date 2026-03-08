import { useRef, useEffect, useState } from 'react';

/**
 * Lightweight fade-in-on-scroll wrapper using IntersectionObserver.
 * Replaces framer-motion whileInView for simple opacity+translateY animations.
 */
const FadeInSection = ({ children, className = '' }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`fade-in-section${visible ? ' visible' : ''} ${className}`}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
