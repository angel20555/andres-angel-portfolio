import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function useMousePosition() {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);


    }, [mouseX, mouseY]);

    return { mouseX, mouseY };
}

