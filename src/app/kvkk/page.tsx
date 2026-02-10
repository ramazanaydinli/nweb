import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "KVKK ve Gizlilik Politikası | ODTÜ'lü Akademi",
    description: "Kişisel Verilerin Korunması ve Gizlilik Politikası hakkında bilgilendirme.",
};

export default function KVKKPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <section className="bg-slate-50 py-16">
                <div className="container px-4 md:px-8 mx-auto text-center">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">
                        KVKK ve Gizlilik Politikası
                    </h1>
                </div>
            </section>

            <section className="py-16">
                <div className="container px-4 md:px-8 mx-auto max-w-4xl text-slate-700 space-y-8 leading-relaxed">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Kişisel Verilerin Korunması Hakkında Aydınlatma Metni</h2>
                        <p>
                            ODTÜ&apos;lü Akademi olarak, kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz.
                            Bu bilinçle, ürün ve hizmetlerimizden faydalanan kişiler dahil, Şirketimiz ile ilişkili tüm şahıslara ait her türlü kişisel verilerin
                            6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVK Kanunu”)’na uygun olarak işlenerek, muhafaza edilmesine büyük önem atfetmekteyiz.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">1. Kişisel Verilerin Toplanması ve İşlenmesi</h3>
                        <p>
                            Kişisel verileriniz, ODTÜ&apos;lü Akademi tarafından sağlanan hizmetlerin ve ticari faaliyetlerin yürütülmesi stratejilerine bağlı olarak;
                            internet sitemiz, sosyal medya mecraları, mobil uygulamalar ve benzeri vasıtalarla sözlü, yazılı ya da elektronik olarak toplanabilecektir.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">2. İşlenen Kişisel Veriler</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Kimlik Bilgileri (Ad, Soyad)</li>
                            <li>İletişim Bilgileri (Telefon, E-posta, Adres)</li>
                            <li>Öğrenci Bilgileri (Sınıf seviyesi, Ders talebi)</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">3. Veri Güvenliği</h3>
                        <p>
                            Kişisel verileriniz, yasal yükümlülükler haricinde üçüncü şahıslarla paylaşılmamaktadır.
                            Verileriniz güvenli sunucularda saklanmakta ve yetkisiz erişimlere karşı korunmaktadır.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Gizlilik Politikası</h2>
                        <p>
                            Web sitemizi ziyaret etmeniz dolayısıyla elde edilen kişisel verileriniz, sadece size hizmet sunmak amacıyla kullanılacaktır.
                            Çerezler (cookies) aracılığıyla toplanan veriler, site deneyimini iyileştirmek için anonim olarak analiz edilebilir.
                        </p>
                    </div>

                    <div className="pt-8 border-t">
                        <p className="text-sm text-slate-500">
                            Bu metin bilgilendirme amaçlıdır. Detaylı bilgi için lütfen iletişime geçiniz.
                            <br />
                            Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
