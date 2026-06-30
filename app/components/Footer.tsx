// src/components/Footer.tsx
import Image from "next/image";
import { SOCIAL } from "@/lib/constants";
import { MessageCircle, Phone } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-brand-redDark text-white py-10">
            <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-4 text-center">
                <Image src="/logo.png" alt="Dona Dete" width={60} height={60} className="rounded-full" />
                <div className="flex items-center gap-2"><Phone size={16} /> {SOCIAL.phone}</div>
                <div className="flex gap-4">
                    <a href={SOCIAL.instagram} target="_blank"><FaInstagram /></a>
                    <a href={SOCIAL.facebook} target="_blank"><FaFacebookF /></a>
                    <a href={SOCIAL.whatsapp} target="_blank"><MessageCircle /></a>
                </div>
                <p className="text-sm text-white/70">
                    © {new Date().getFullYear()} Dona Dete Pão de Queijo — Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}
