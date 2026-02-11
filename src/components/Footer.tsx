import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full bg-[var(--color-primary)] text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="relative h-10 w-10">
                                <Image
                                    src="/logo.png"
                                    alt="ODTÜ'lü Akademi Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tight">
                                ODTÜ&apos;lü Akademi
                            </span>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed font-light">
                            5, 6 ve 7. sınıflara özel, ODTÜ mezunu eğitmenlerden birebir ve
                            online matematik & İngilizce dersleri. Mantık odaklı, ezbersiz eğitim.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-400">
                            Hızlı Bağlantılar
                        </h3>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li>
                                <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">
                                    Ana Sayfa
                                </Link>
                            </li>
                            <li>
                                <Link href="/hakkimizda" className="hover:text-[var(--color-accent)] transition-colors">
                                    Hakkımızda
                                </Link>
                            </li>
                            <li>
                                <Link href="/dersler" className="hover:text-[var(--color-accent)] transition-colors">
                                    Dersler & Paketler
                                </Link>
                            </li>
                            <li>
                                <Link href="/iletisim" className="hover:text-[var(--color-accent)] transition-colors">
                                    İletişim
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-400">
                            İletişim
                        </h3>
                        <ul className="space-y-4 text-sm text-slate-300">
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-[var(--color-accent)]" />
                                <span>+90 507 190 26 58</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-[var(--color-accent)]" />
                                <span>info@odtuakademi.com.tr</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin className="h-5 w-5 text-[var(--color-accent)]" />
                                <span>Online Eğitim (Zoom / Meet)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-400">
                            Bizi Takip Edin
                        </h3>
                        <ul className="space-y-4 text-sm text-slate-300">
                            <li>
                                <a
                                    href="https://www.instagram.com/odtuluakademi1/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 hover:text-[var(--color-accent)] transition-colors group"
                                >
                                    <div className="h-10 w-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Instagram className="h-5 w-5 text-white" />
                                    </div>
                                    <span>@odtuluakademi1</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-400">
                            Yasal
                        </h3>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li>
                                <Link href="/kvkk" className="hover:text-[var(--color-accent)] transition-colors">
                                    Kullanım Koşulları
                                </Link>
                            </li>
                            <li>
                                <Link href="/kvkk" className="hover:text-[var(--color-accent)] transition-colors">
                                    Gizlilik Politikası
                                </Link>
                            </li>
                            <li>
                                <Link href="/kvkk" className="hover:text-[var(--color-accent)] transition-colors">
                                    KVKK Aydınlatma Metni
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
                    <p>© {new Date().getFullYear()} ODTÜ&apos;lü Akademi. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
