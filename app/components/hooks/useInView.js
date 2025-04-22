"use client";
import { useState, useEffect, useRef } from "react";

const useInView = ({ threshold = 0.5 } = {}) => {
    const elementRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!elementRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold }
        );

        observer.observe(elementRef.current);

        return () => observer.disconnect(); // Cleanup
    }, [threshold]);

    return [elementRef, inView];
};

export default useInView;
