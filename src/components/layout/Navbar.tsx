"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        {/* <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-105 group-hover:bg-accent">
                            V
                        </div>
                        <span className="font-bold text-xl tracking-tight text-foreground">
                            VitaPhysical
                        </span> */}
                        <img src="/logo.jpg" alt="Logo" className="w-45" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors position-relative overflow-hidden group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-3">
                            <a href="tel:01915658886" className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors flex items-center gap-2">
                                <PhoneCall size={16} />
                                0191 565 8886
                            </a>
                            <Button variant="accent" size="default" className="shadow-lg shadow-accent/20">
                                Book Online
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-foreground"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={cn(
                    "md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out overflow-hidden origin-top",
                    isMobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 h-0"
                )}
            >
                <div className="p-4 flex flex-col gap-4">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-foreground py-2 border-b border-gray-50 last:border-0"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
                        <a href="tel:01915658886" className="flex items-center justify-center gap-2 text-primary font-semibold py-3 border border-primary/20 rounded-full">
                            <PhoneCall size={18} /> Call 0191 565 8886
                        </a>
                        <Button variant="accent" size="lg" className="w-full text-lg shadow-lg shadow-accent/20">
                            Book Appointment
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
