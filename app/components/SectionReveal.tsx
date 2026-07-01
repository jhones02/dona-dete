"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SectionRevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
};

export default function SectionReveal({
                                          children,
                                          className = "",
                                          delay = 0
                                      }: SectionRevealProps) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 36 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: "easeOut", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
