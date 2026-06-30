// src/components/FloatingWhatsApp.tsx
"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SOCIAL } from "@/lib/constants";

export default function FloatingWhatsApp() {
    return (
        <motion.a
            href={SOCIAL.whatsapp}
            target="_blank"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600"
        >
            <MessageCircle size={28} />
        </motion.a>
    );
}
