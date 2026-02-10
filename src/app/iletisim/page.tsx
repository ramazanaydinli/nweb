import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, MessageCircle } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "İletişim | ODTÜ'lü Akademi",
    description: "Ücretsiz tanışma dersi planlayın. Bizimle iletişime geçin.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-50 py-16">
                <div className="container px-4 md:px-8 mx-auto text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">
                        İletişime Geçin
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Çocuğunuz için en doğru ders planını birlikte oluşturalım.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container px-4 md:px-8 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Bize Ulaşın</h2>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500 font-medium">Telefon</p>
                                            <p className="text-lg font-semibold text-slate-900">+90 507 190 26 58</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                                            <MessageCircle className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500 font-medium">WhatsApp</p>
                                            <p className="text-lg font-semibold text-slate-900">
                                                <a href="https://wa.me/905071902658?text=Merhaba,%20dersler%20hakkında%20bilgi%20almak%20istiyorum." target="_blank" className="hover:underline text-[var(--color-accent)]">Hızlı Mesaj Gönder</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-700">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500 font-medium">E-posta</p>
                                            <p className="text-lg font-semibold text-slate-900">info@odtuakademi.com.tr</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-700">
                                            <Clock className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500 font-medium">Yanıt Süresi</p>
                                            <p className="text-lg font-semibold text-slate-900">En geç 24 saat içinde dönüş</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-blue-900 mb-2">Eğitim Danışmanlığı</h3>
                                <p className="text-blue-800 text-sm">
                                    Ücretsiz tanışma dersi ve seviye tespiti için form doldurabilir veya WhatsApp üzerinden bize yazabilirsiniz.
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Hızlı Başvuru Formu</h2>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="parentName" className="text-sm font-medium text-slate-700">Veli Adı Soyadı</label>
                                        <input type="text" id="parentName" className="w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Adınız Soyadınız" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-slate-700">Telefon Numarası</label>
                                        <input type="tel" id="phone" className="w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="0507 190 26 58" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="studentClass" className="text-sm font-medium text-slate-700">Sınıf</label>
                                            <select id="studentClass" className="w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                                                <option>Seçiniz</option>
                                                <option>5. Sınıf</option>
                                                <option>6. Sınıf</option>
                                                <option>7. Sınıf</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lesson" className="text-sm font-medium text-slate-700">Ders</label>
                                            <select id="lesson" className="w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                                                <option>Seçiniz</option>
                                                <option>Matematik</option>
                                                <option>İngilizce</option>
                                                <option>Her İkisi</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-slate-700">Mesajınız (Opsiyonel)</label>
                                        <textarea id="message" className="w-full min-h-[100px] px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Çocuğunuzun durumu hakkında kısaca bilgi verebilirsiniz..." />
                                    </div>
                                </div>
                                <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold h-12 text-lg">
                                    Gönder
                                </Button>
                                <p className="text-xs text-center text-slate-500 mt-4">
                                    Formu göndererek <a href="#" className="underline">KVKK Aydınlatma Metni</a>&apos;ni okuduğunuzu kabul edersiniz.
                                </p>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
