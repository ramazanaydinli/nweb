'use client';

import { Button } from "@/components/ui/button";
import { useState, FormEvent } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        parentName: '',
        phone: '',
        studentClass: '',
        lesson: '',
        message: ''
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // WhatsApp mesaj formatı
        const whatsappMessage = `Merhaba, ODTÜ'lü Akademi ile iletişime geçmek istiyorum.

📋 *Başvuru Bilgileri:*
👤 Veli Adı: ${formData.parentName}
📱 Telefon: ${formData.phone}
📚 Sınıf: ${formData.studentClass}
📖 Ders: ${formData.lesson}
${formData.message ? `\n💬 Mesaj: ${formData.message}` : ''}`;

        // WhatsApp URL'si oluştur
        const whatsappUrl = `https://wa.me/905071902658?text=${encodeURIComponent(whatsappMessage)}`;

        // WhatsApp'ı yeni sekmede aç
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Hızlı Başvuru Formu</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="parentName" className="text-sm font-medium text-slate-700">Veli Adı Soyadı</label>
                        <input
                            type="text"
                            id="parentName"
                            required
                            value={formData.parentName}
                            onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                            className="w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Adınız Soyadınız"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-slate-700">Telefon Numarası</label>
                        <input
                            type="tel"
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="0507 190 26 58"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="studentClass" className="text-sm font-medium text-slate-700">Sınıf</label>
                            <select
                                id="studentClass"
                                required
                                value={formData.studentClass}
                                onChange={(e) => setFormData({ ...formData, studentClass: e.target.value })}
                                className="w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            >
                                <option value="">Seçiniz</option>
                                <option>5. Sınıf</option>
                                <option>6. Sınıf</option>
                                <option>7. Sınıf</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="lesson" className="text-sm font-medium text-slate-700">Ders</label>
                            <select
                                id="lesson"
                                required
                                value={formData.lesson}
                                onChange={(e) => setFormData({ ...formData, lesson: e.target.value })}
                                className="w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            >
                                <option value="">Seçiniz</option>
                                <option>Matematik</option>
                                <option>İngilizce</option>
                                <option>Her İkisi</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-slate-700">Mesajınız (Opsiyonel)</label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full min-h-[100px] px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Çocuğunuzun durumu hakkında kısaca bilgi verebilirsiniz..."
                        />
                    </div>
                </div>
                <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold h-12 text-lg">
                    WhatsApp ile Gönder
                </Button>
                <p className="text-xs text-center text-slate-500 mt-4">
                    Formu göndererek <a href="#" className="underline">KVKK Aydınlatma Metni</a>&apos;ni okuduğunuzu kabul edersiniz.
                </p>
            </form>
        </div>
    );
}
