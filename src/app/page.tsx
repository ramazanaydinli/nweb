import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, GraduationCap, Users, BookOpen, Clock, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-[var(--color-muted)] overflow-hidden">
        {/* Subtle Pattern Background */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#2C3E50_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="container px-4 md:px-8 mx-auto relative z-10">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-100 text-[var(--color-primary)] shadow-sm">
              5, 6 ve 7. Sınıflara Özel
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--color-primary)] leading-tight">
              Online <span className="text-[var(--color-primary)]">Matematik</span> & <br className="hidden md:inline" />
              <span className="text-[var(--color-secondary)]">İngilizce</span> Özel Ders
            </h1>
            <p className="text-xl text-slate-700 max-w-2xl leading-relaxed font-medium">
              <span className="font-bold text-[var(--color-secondary)]">ODTÜ mezunu eğitmen</span> ile birebir, planlı ve takipli online dersler.
              <br />
              <span className="font-semibold text-[var(--color-primary)] mt-2 block">
                “Her öğrenciye özel plan – ezber yok, mantık var.”
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://wa.me/905071902658?text=Merhaba,%20tanışma%20dersi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[var(--color-accent)] hover:bg-orange-600 text-white text-lg h-14 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  Ücretsiz Tanışma Dersi Al
                </Button>
              </a>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-semibold">
                Detaylı Bilgi
              </Button>
            </div>

            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[var(--color-secondary)]" />
                ODTÜ Mezunu Eğitmen
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[var(--color-secondary)]" />
                Öğrenciye Özel Takip
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[var(--color-secondary)]" />
                Veli Bilgilendirme
              </div>
            </div>
          </div>
        </div>
        {/* Background Decorative Elements */}
        <div className="absolute top-10 right-0 -translate-y-12 translate-x-12 opacity-5 pointer-events-none">
          <GraduationCap className="w-[500px] h-[500px] text-[var(--color-primary)]" />
        </div>
      </section>

      {/* About / Value Proposition */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
                Neden <span className="text-[var(--color-secondary)]">ODTÜ&apos;lü Akademi?</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                ODTÜ&apos;lü Akademi, 5, 6 ve 7. sınıf öğrencilerinin matematik ve İngilizce derslerinde sağlam bir temel oluşturması için kurulmuş online bir eğitim platformudur.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Her öğrenci farklıdır. Bu yüzden dersler ezberden uzak, öğrencinin seviyesine, öğrenme hızına ve ihtiyacına göre planlanır.
              </p>

              <ul className="space-y-4 pt-4">
                {[
                  { text: "ODTÜ mezunu eğitmen farkı", highlight: true },
                  { text: "%100 birebir online ders imkanı", highlight: false },
                  { text: "Mantık, anlama ve kalıcı öğrenme odaklı sistem", highlight: false },
                  { text: "Veliye düzenli ve şeffaf geri bildirim", highlight: false }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <div className={`h-2.5 w-2.5 rounded-full ${item.highlight ? 'bg-[var(--color-secondary)]' : 'bg-[var(--color-primary)]'}`} />
                    <span className={item.highlight ? "font-bold text-[var(--color-primary)]" : ""}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[var(--color-muted)] rounded-3xl p-8 md:p-12 space-y-8 shadow-inner">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-[var(--color-primary)]">
                  <GraduationCap className="h-10 w-10 text-[var(--color-primary)] mb-4" />
                  <h3 className="font-bold text-[var(--color-primary)] mb-2">Akademik Disiplin</h3>
                  <p className="text-sm text-slate-600">Disiplinli ve programlı çalışma alışkanlığı.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-[var(--color-secondary)]">
                  <Users className="h-10 w-10 text-[var(--color-secondary)] mb-4" />
                  <h3 className="font-bold text-[var(--color-primary)] mb-2">Birebir İlgi</h3>
                  <p className="text-sm text-slate-600">Öğrencinin hızına uygun özel anlatım.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-[var(--color-accent)]">
                  <BookOpen className="h-10 w-10 text-[var(--color-accent)] mb-4" />
                  <h3 className="font-bold text-[var(--color-primary)] mb-2">Mantık Odaklı</h3>
                  <p className="text-sm text-slate-600">Ezber değil, kalıcı öğrenme.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-green-500">
                  <Clock className="h-10 w-10 text-green-500 mb-4" />
                  <h3 className="font-bold text-[var(--color-primary)] mb-2">Düzenli Takip</h3>
                  <p className="text-sm text-slate-600">Sürekli gelişim izleme ve raporlama.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-[var(--color-muted)]">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              Derslerimiz
            </h2>
            <p className="text-lg text-slate-600">
              Okul başarısını artıran ve temeli güçlendiren online özel dersler.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Math */}
            <div className="bg-white rounded-3xl p-8 border-t-8 border-[var(--color-primary)] shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <div className="h-14 w-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">📐</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Online Matematik</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Temel matematik kavramları",
                  "Problem çözme teknikleri",
                  "Yazılılara hazırlık",
                  "Mantık ve akıl yürütme becerileri"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-[var(--color-primary)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-500 italic border-t border-slate-100 pt-4">
                Amaç sadece soru çözmek değil, matematiği gerçekten anlamak.
              </p>
            </div>

            {/* English */}
            <div className="bg-white rounded-3xl p-8 border-t-8 border-[var(--color-secondary)] shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <div className="h-14 w-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Online İngilizce</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Kelime bilgisi geliştirme",
                  "Okuma ve anlama",
                  "Temel konuşma pratiği",
                  "Okul müfredatına birebir destek"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-[var(--color-secondary)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-500 italic border-t border-slate-100 pt-4">
                İngilizceyi korkulan bir ders olmaktan basit ve eğlenceli hale getiriyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              Nasıl İşliyor?
            </h2>
            <p className="text-lg text-slate-600">
              Başarıya giden yolda adım adım ilerleyen sistemimiz.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Tanışma Dersi", desc: "Ücretsiz 20 dk tanışma" },
              { step: "2", title: "Seviye Analizi", desc: "Eksiklerin belirlenmesi" },
              { step: "3", title: "Ders Planı", desc: "Kişiye özel program" },
              { step: "4", title: "Ders & Takip", desc: "Zoom üzerinden dersler" },
              { step: "5", title: "Bilgilendirme", desc: "Veliye düzenli rapor" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full bg-[var(--color-muted)] text-[var(--color-primary)] font-bold text-xl flex items-center justify-center mb-4 group-hover:bg-[var(--color-secondary)] group-hover:text-white transition-all shadow-sm">
                  {item.step}
                </div>
                <h3 className="font-bold text-[var(--color-primary)] mb-1">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-primary)]">
        <div className="container px-4 md:px-8 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ücretsiz Tanışma Dersi
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed opacity-90">
            Öğrenciyi tanımadan ders başlamıyoruz. <br />20 dakikalık ücretsiz tanışma dersi ile seviye tespiti yapıyor ve ders sistemini anlatıyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/905071902658?text=Merhaba,%20ders%20planlamak%20istiyorum." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[var(--color-accent)] text-white hover:bg-orange-600 text-lg h-14 px-10 rounded-full shadow-lg border-2 border-[var(--color-accent)] font-bold">
                Hemen Planla
              </Button>
            </a>
            <a href="https://wa.me/905071902658?text=Merhaba,%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[var(--color-primary)] text-lg h-14 px-10 bg-transparent rounded-full font-bold">
                WhatsApp İletişim
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
