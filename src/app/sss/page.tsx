import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Sık Sorulan Sorular | ODTÜ'lü Akademi",
    description: "Dersler, eğitmenler ve süreç hakkında merak edilenler.",
};

export default function FAQPage() {
    const faqs = [
        {
            question: "Dersler kim tarafından veriliyor?",
            answer: "Tüm dersler, ODTÜ mezunu eğitmen tarafından online olarak verilmektedir. Ders süreci baştan sona aynı eğitmen tarafından yürütülür."
        },
        {
            question: "Dersler birebir mi, grup mu?",
            answer: "ODTÜ'lü Akademi'de iki farklı ders modeli bulunmaktadır: Online birebir dersler ve sınırlı kontenjanlı online grup dersleri. Öğrencinin seviyesine ve ihtiyacına göre en uygun ders modeli, ücretsiz tanışma dersi sonrasında belirlenir."
        },
        {
            question: "Grup derslerinde kontenjan kaç kişi?",
            answer: "Grup dersleri bilinçli olarak sınırlı kontenjanla açılır. Amaç kalabalık sınıflar değil, her öğrencinin derse aktif katılabildiği küçük gruplardır."
        },
        {
            question: "Dersler haftada kaç gün ve kaç dakika?",
            answer: "Grup dersleri haftada 1 gün, 2 ders şeklinde yapılır. Ders akışı: 40 dk ders + 10 dk mola + 40 dk ders şeklindedir. Birebir derslerin programı ise öğrenciye özel belirlenir."
        },
        {
            question: "Haftada 1 gün ders yeterli olur mu?",
            answer: "Evet. Dersler planlı, düzenli ve seviye odaklı ilerlediği için haftada 1 gün yapılan 2 ders (blok), öğrencinin konuları anlaması ve pekiştirmesi için yeterlidir. Amaç yoğunluk değil, istikrarlı öğrenmedir."
        },
        {
            question: "Dersler okul müfredatına uygun mu?",
            answer: "Evet. Tüm matematik ve İngilizce dersleri Milli Eğitim müfredatına uygun şekilde planlanır. Aynı zamanda öğrencinin eksik olduğu konulara özel olarak odaklanılır."
        },
        {
            question: "Öğrencim derste anlamazsa ne olur?",
            answer: "Ders sürecinde öğrencinin zorlandığı konular tespit edilir. Gerekli durumlarda konu tekrar edilir ve ek soru çözümü yapılır."
        },
        {
            question: "Derslerde ödev veriliyor mu?",
            answer: "Evet. Ders sonrası, konuyu pekiştirmeye yönelik uygun seviyede ödevler verilir ve takibi yapılır."
        },
        {
            question: "Dersler hangi platform üzerinden yapılıyor?",
            answer: "Tüm dersler Zoom veya Google Meet üzerinden online olarak gerçekleştirilir."
        },
        {
            question: "Ücretsiz tanışma dersi var mı?",
            answer: "Evet. Kayıt öncesinde 20 dakikalık ücretsiz tanışma dersi yapılır. Bu derste öğrenci tanınır, seviye belirlenir ve en uygun ders modeli netleştirilir."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-50 py-16">
                <div className="container px-4 md:px-8 mx-auto text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">
                        Sık Sorulan Sorular
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Merak ettiğiniz tüm soruların cevapları burada.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container px-4 md:px-8 mx-auto max-w-3xl">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left font-semibold text-slate-900">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <div className="mt-12 text-center p-8 bg-blue-50 rounded-2xl">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Başka bir sorunuz mu var?</h3>
                        <p className="text-slate-600 mb-6">
                            Size yardımcı olmaktan mutluluk duyarız.
                        </p>
                        <a href="https://wa.me/905071902658?text=Merhaba,%20dersler%20hakkında%20bilgi%20almak%20istiyorum." target="_blank" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-700 text-white hover:bg-blue-800 h-10 px-4 py-2">
                            İletişime Geçin
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
