import { animate, useInView, useIsomorphicLayoutEffect } from 'framer-motion';
import { useRef } from 'react';

const AnimatedCounter = ({ from = 0, to, duration = 2, className }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useIsomorphicLayoutEffect(() => {
        const element = ref.current;
        if (!element || !inView) return;

        // Set initial value
        element.textContent = String(from);

        // If reduced motion is preferred
        if (window.matchMedia('(prefers-reduced-motion)').matches) {
            element.textContent = String(to);
            return;
        }

        const controls = animate(from, to, {
            duration: duration,
            ease: 'easeOut',
            onUpdate(value) {
                element.textContent = Math.floor(value).toLocaleString();
            },
        });

        return () => controls.stop();
    }, [ref, inView, from, to, duration]);

    return <span ref={ref} className={className} />;
};

export default AnimatedCounter;
