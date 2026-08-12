import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
// Nota: Ajusta la ruta de importación según dónde guardaste el hook
// import { useMousePosition } from "@/hooks/useMouse";

export function CustomCursor({ playHoverSound }: { playHoverSound: () => void }) {
    // Aquí usamos el hook (descomentar la importación real en tu proyecto)
    // const { mouseX, mouseY } = useMousePosition();

    // MOCK PARA ESTE ARCHIVO UNIFICADO:
    const mouseX = 0, mouseY = 0; // Reemplazar con el hook real

    const smoothX = useSpring(mouseX, { damping: 20, stiffness: 250 });
    const smoothY = useSpring(mouseY, { damping: 20, stiffness: 250 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("a, button, input, textarea")) {
                if (!isHovered) {
                    setIsHovered(true);
                    playHoverSound();
                }
            } else {
                setIsHovered(false);
            }
        };
        window.addEventListener("mouseover", handleMouseOver);
        return () => window.removeEventListener("mouseover", handleMouseOver);
    }, [isHovered, playHoverSound]);

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-blue-400/50 bg-blue-500/20 backdrop-blur-[2px] hidden md:block"
            style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
            animate={{
                width: isHovered ? 48 : 20,
                height: isHovered ? 48 : 20,
                backgroundColor: isHovered ? "rgba(59, 130, 246, 0.3)" : "rgba(59, 130, 246, 0.15)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
    );
}