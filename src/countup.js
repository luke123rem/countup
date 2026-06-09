import { useEffect, useRef, useState } from "react";

export function useCountUp(target = 5, duration = 1200) {
    const [value, setValue] = useState(0);
    const ref = useRef(null);
    const hasRun = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasRun.current) {
                hasRun.current = true;

                let current = 0;
                const step = target / (duration / 50);

                const timer = setInterval(() => {
                    current += step;

                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }

                    setValue(Math.floor(current));
                }, 50);
            }
        });

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [target, duration]);

    return { ref, value };
}