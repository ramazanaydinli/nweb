"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Ana Sayfa", href: "/" },
        { name: "Hakkımızda", href: "/hakkimizda" },
        { name: "Dersler & Paketler", href: "/dersler" },
        { name: "İletişim", href: "/iletisim" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-sm">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative h-12 w-12 transition-transform group-hover:scale-105">
                            <Image
                                src="/logo.png"
                                alt="ODTÜ'lü Akademi Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight text-[var(--color-primary)] leading-none group-hover:text-red-700 transition-colors">
                                ODTÜ&apos;lü
                            </span>
                            <span className="text-sm font-medium text-slate-500 tracking-wider">AKADEMİ</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex md:items-center md:gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold text-slate-600 hover:text-[var(--color-secondary)] transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[var(--color-secondary)] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a href="https://wa.me/905071902658?text=Merhaba,%20tanışma%20dersi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer">
                            <Button className="bg-[var(--color-accent)] hover:bg-orange-600 text-white font-bold px-6 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                                Tanışma Dersi Al
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-700 focus:outline-none hover:text-[var(--color-secondary)] transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="md:hidden py-6 border-t bg-white absolute top-20 left-0 w-full shadow-xl animate-accordion-down">
                        <div className="flex flex-col gap-6 px-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-slate-700 hover:text-[var(--color-secondary)] px-2 border-l-4 border-transparent hover:border-[var(--color-secondary)] hover:bg-slate-50 py-2 transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="px-2 pt-2">
                                <a href="https://wa.me/905071902658?text=Merhaba,%20tanışma%20dersi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer">
                                    <Button className="w-full bg-[var(--color-accent)] hover:bg-orange-600 text-white font-bold h-12 text-lg shadow-md">
                                        Tanışma Dersi Al
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
