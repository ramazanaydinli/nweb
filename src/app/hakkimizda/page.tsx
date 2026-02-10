import { GraduationCap, Target, Heart } from "lucide-react";
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Hakkımızda | ODTÜ'lü Akademi",
    description: "ODTÜ mezunu eğitmenlerle matematik ve İngilizce dersleri. Ezber yok, mantık var.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="bg-slate-50 py-16 md:py-24">
                <div className="container px-4 md:px-8 mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        ODTÜ&apos;lü Akademi ile <br /> Güçlü Bir Akademik Temel
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Ezbersiz, mantık odaklı ve kişiye özel eğitim anlayışımızla tanışın.
                    </p>
                    <div className="mt-12 max-w-4xl mx-auto">
                        <Image
                            src="/banner.png"
                            alt="ODTÜ'lü Akademi Banner"
                            width={1200}
                            height={400}
                            className="w-full h-auto rounded-2xl shadow-lg"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-8 mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 text-blue-700 font-semibold">
                                <GraduationCap className="h-5 w-5" />
                                <span>Biz Kimiz?</span>
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">
                                Başarı; sadece not yükseltmek değil, öğrencinin anlaması ve düşünmesidir.
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                ODTÜ&apos;lü Akademi, 5, 6 ve 7. sınıf öğrencilerinin matematik ve İngilizce derslerinde sağlam, kalıcı ve özgüvenli bir öğrenme süreci yaşamaları amacıyla kurulmuş online bir eğitim platformudur.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Eğitimlerimiz, <span className="font-semibold text-slate-900">ODTÜ mezunu eğitmen</span> tarafından online birebir ve online grup dersleri şeklinde yürütülür.
                                Her öğrencinin ihtiyacına göre en uygun ders modeli belirlenir.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Target className="h-6 w-6 text-blue-600" />
                                Eğitim Anlayışımız
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Ezbere dayalı anlatım yerine mantık ve kavrama odaklanılır.",
                                    "Dersler, öğrencinin seviyesine göre planlanır.",
                                    "Hem birebir hem grup derslerinde aktif katılım teşvik edilir.",
                                    "Süreç boyunca veliye düzenli geri bildirim sağlanır.",
                                    "Amacımız, 'yapabiliyorum' duygusunu kalıcı hâle getirmektir."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-700">
                                        <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 md:px-8 mx-auto text-center max-w-3xl">
                    <Heart className="h-12 w-12 text-red-500 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                        Bizim İçin Eğitim
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-8">
                        Eğitim, sadece ders anlatmak değil; öğrencinin kendine güvenmesini, soru sormasını ve düşünmesini sağlamaktır.
                    </p>
                    <p className="text-lg text-slate-600">
                        ODTÜ&apos;lü Akademi olarak, her öğrencinin potansiyeline inanır ve bu potansiyeli ortaya çıkarmak için çalışırız.
                    </p>
                </div>
            </section>
        </div>
    );
}
