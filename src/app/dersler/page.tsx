import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Users, User, Calculator, Globe } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Dersler ve Paketler | ODTÜ'lü Akademi",
    description: "Birebir ve grup ders seçenekleri. Matematik ve İngilizce özel ders paketleri.",
};

export default function CoursesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="bg-slate-50 py-16">
                <div className="container px-4 md:px-8 mx-auto text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">
                        Dersler ve Paketler
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Öğrencinin ihtiyacına en uygun eğitim modelini birlikte belirliyoruz.
                    </p>
                </div>
            </section>

            {/* Course Models */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-8 mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Private */}
                        <div className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:border-blue-300 transition-all flex flex-col">
                            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-700">
                                <User className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Online Birebir Ders</h3>
                            <p className="text-slate-600 mb-6">Tamamen öğrenciye özel hız ve program.</p>
                            <ul className="space-y-3 mb-8 flex-1">
                                {[
                                    "Öğrencinin hızına göre ilerleme",
                                    "Eksik konulara nokta atışı müdahale",
                                    "Özgüven artırıcı birebir iletişim",
                                    "Esnek ders saatleri",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button asChild className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                                <Link href="https://wa.me/905071902658?text=Merhaba,%20birebir%20dersler%20hakkında%20bilgi%20almak%20istiyorum." target="_blank">Bilgi Al</Link>
                            </Button>
                        </div>

                        {/* Group */}
                        <div className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:border-blue-300 transition-all flex flex-col relative overflow-hidden">
                            <div className="absolute top-5 right-5 bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full">
                                SINIRLI KONTENJAN
                            </div>
                            <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-700">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Online Grup Dersleri</h3>
                            <p className="text-slate-600 mb-6">Akran öğrenimi ve ekonomik avantaj.</p>
                            <ul className="space-y-3 mb-8 flex-1">
                                {[
                                    "Haftada 1 gün, 2 ders (40dk + 10dk + 40dk)",
                                    "Benzer seviyedeki öğrenciler",
                                    "Etkileşimli ve motive edici ortam",
                                    "Akademik disiplin ve sorumluluk",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button asChild variant="outline" className="w-full border-blue-200 hover:bg-blue-50 text-blue-700">
                                <Link href="https://wa.me/905071902658?text=Merhaba,%20grup%20derslerine%20başvurmak%20istiyorum." target="_blank">Başvuru Yap</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subjects */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 md:px-8 mx-auto text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Hangi Dersleri Veriyoruz?</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <Calculator className="h-10 w-10 text-orange-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Matematik</h3>
                            <p className="text-slate-600">Temel kavramlar, problem çözme ve mantıksal düşünme becerileri.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <Globe className="h-10 w-10 text-blue-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">İngilizce</h3>
                            <p className="text-slate-600">Okuma, anlama, kelime bilgisi ve müfredat destekli çalışma.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Note */}
            <section className="py-16 bg-white border-t">
                <div className="container px-4 md:px-8 mx-auto text-center max-w-2xl">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Fiyatlandırma Hakkında</h3>
                    <p className="text-slate-600 mb-8">
                        Her öğrencinin ihtiyacı farklıdır. Fiyatlandırma tek tip değil, öğrenciye özel (birebir/grup, haftalık ders saati) yapılır.
                        Gereksiz ders satışı yapılmaz, bütçenize ve ihtiyacınıza en uygun paket oluşturulur.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-xl inline-block text-left text-blue-900 text-sm font-medium">
                        <p className="mb-2">⚠️ Grup dersleri sınırlı kontenjanla açılır.</p>
                        <p className="font-bold">Kombin Paket (Matematik + İngilizce) avantajlarını sorunuz.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
