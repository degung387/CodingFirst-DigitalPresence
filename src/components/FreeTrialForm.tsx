import React, { useState, useEffect } from 'react';
import { programs } from '../data/programs';
import { FreeTrialFormData, buildFreeTrialMessage, createWhatsAppLink } from '../utils/whatsapp';
import { CONTACT_CONFIG } from '../config/contact';
import { ArrowRight, CheckCircle2, MessageCircle, AlertCircle, Loader2, Sparkles, RefreshCw } from 'lucide-react';

interface FreeTrialFormProps {
  initialProgram?: string;
}

const SCHEDULE_OPTIONS = [
  'Weekend Pagi (Sabtu / Minggu 09:00 - 10:30 WIB)',
  'Weekend Siang (Sabtu / Minggu 13:30 - 15:00 WIB)',
  'Weekday Sore (Senin - Jumat 15:30 - 17:00 WIB)',
  'Fleksibel / Diskusi Lebih Lanjut'
];

export const FreeTrialForm: React.FC<FreeTrialFormProps> = ({ initialProgram }) => {
  const [formData, setFormData] = useState<FreeTrialFormData>({
    parentName: '',
    studentName: '',
    whatsapp: '',
    studentAge: '9',
    program: initialProgram || programs[0].title,
    schedule: SCHEDULE_OPTIONS[0],
    notes: ''
  });

  useEffect(() => {
    if (initialProgram) {
      setFormData((prev) => ({ ...prev, program: initialProgram }));
    }
  }, [initialProgram]);

  const [errors, setErrors] = useState<Partial<Record<keyof FreeTrialFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [lastGeneratedUrl, setLastGeneratedUrl] = useState<string>('');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FreeTrialFormData, string>> = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Nama orang tua wajib diisi';
    }
    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Nama siswa wajib diisi';
    }
    const cleanPhone = formData.whatsapp.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 9) {
      newErrors.whatsapp = 'Nomor WhatsApp tidak valid (minimal 9 digit)';
    }
    if (!formData.program) {
      newErrors.program = 'Pilih salah satu program';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate snappy processing before launching WhatsApp
    setTimeout(() => {
      const message = buildFreeTrialMessage(formData);
      const url = createWhatsAppLink(message);
      setLastGeneratedUrl(url);

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Open WhatsApp in new tab
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 450);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      parentName: '',
      studentName: '',
      whatsapp: '',
      studentAge: '9',
      program: programs[0].title,
      schedule: SCHEDULE_OPTIONS[0],
      notes: ''
    });
    setErrors({});
  };

  return (
    <section id="free-trial" className="py-20 md:py-28 bg-white border-b border-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-2">
            Uji Coba Kelas Gratis
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Coba Free Trial Coding First
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600">
            Kenali metode belajar Coding First sebelum memilih program yang sesuai. Gratis 1 sesi tanpa komitmen awal!
          </p>
        </div>

        {/* Main Form Box */}
        <div className="bg-slate-50/90 rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm relative overflow-hidden">
          
          {isSubmitted ? (
            /* Confirmation & Success State */
            <div className="text-center py-8 px-4 space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="max-w-md mx-auto space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">
                  Pendaftaran Terkirim!
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  WhatsApp konfirmasi telah dibuka di tab baru. Jika belum otomatis terbuka, klik tombol di bawah untuk terhubung langsung dengan admin kami.
                </p>
              </div>

              {/* Direct Re-open Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={lastGeneratedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow-xs transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Buka WhatsApp Sekarang</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Daftarkan Siswa Lain</span>
                </button>
              </div>

              <div className="pt-4 border-t border-slate-200/60 max-w-sm mx-auto text-xs text-slate-500">
                Admin kami akan mengonfirmasi ketersediaan slot kelas pada jam operasional: {CONTACT_CONFIG.operatingHours}.
              </div>
            </div>
          ) : (
            /* Free Trial Registration Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Nama Orang Tua */}
                <div>
                  <label htmlFor="parentName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Nama Orang Tua / Wali <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="Contoh: Bapak Hendra Gunawan"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                      errors.parentName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                    }`}
                  />
                  {errors.parentName && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.parentName}</span>
                    </p>
                  )}
                </div>

                {/* Nama Siswa */}
                <div>
                  <label htmlFor="studentName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Nama Siswa / Anak <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="Contoh: Rafi Aditya"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                      errors.studentName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                    }`}
                  />
                  {errors.studentName && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.studentName}</span>
                    </p>
                  )}
                </div>

                {/* Nomor WhatsApp */}
                <div>
                  <label htmlFor="whatsapp" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Nomor WhatsApp Aktif <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="Contoh: 081234567890"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                      errors.whatsapp ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                    }`}
                  />
                  {errors.whatsapp && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.whatsapp}</span>
                    </p>
                  )}
                </div>

                {/* Usia Siswa */}
                <div>
                  <label htmlFor="studentAge" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Usia Siswa
                  </label>
                  <select
                    id="studentAge"
                    value={formData.studentAge}
                    onChange={(e) => setFormData({ ...formData, studentAge: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    {[7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, '18+ (Mahasiswa/Umum)'].map((age) => (
                      <option key={age} value={age}>
                        {typeof age === 'number' ? `${age} Tahun` : age}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Program yang diminati */}
              <div>
                <label htmlFor="program" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Program yang Diminati <span className="text-rose-500">*</span>
                </label>
                <select
                  id="program"
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  {programs.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title} ({p.targetAge} · {p.level})
                    </option>
                  ))}
                  <option value="Belum Tahu / Butuh Rekomendasi Mentor">
                    Belum Tahu / Butuh Rekomendasi Mentor
                  </option>
                </select>
              </div>

              {/* Pilihan Jadwal */}
              <div>
                <label htmlFor="schedule" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Preferensi Waktu Trial
                </label>
                <select
                  id="schedule"
                  value={formData.schedule}
                  onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  {SCHEDULE_OPTIONS.map((opt, oIdx) => (
                    <option key={oIdx} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Catatan Tambahan */}
              <div>
                <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Catatan Tambahan (Opsional)
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Misal: Tertarik kelas offline di Purwokerto atau kelas online, pengalaman minat anak, dll."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Menyiapkan Pesan WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <span>Daftar Free Trial via WhatsApp</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>100% Gratis Tanpa Komitmen · Konfirmasi Cepat via WhatsApp Resmi</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
