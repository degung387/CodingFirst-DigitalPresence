import React from 'react';
import { Target, Users, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export const About: React.FC = () => {
  const scrollToTrial = () => {
    const el = document.getElementById('free-trial');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="tentang" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Descriptive Content */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-2">
                Tentang Kami
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Mengenal Coding First
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Coding First merupakan lembaga pembelajaran coding yang berfokus pada pengembangan kemampuan digital melalui pembelajaran coding yang terstruktur, praktis, dan menyenangkan.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Kami percaya bahwa setiap anak memiliki potensi untuk menjadi pencipta teknologi, bukan hanya sekadar konsumen. Berpusat di Purwokerto dan melayani siswa dari seluruh Indonesia melalui kelas interaktif online, Coding First membekali pelajar dengan keterampilan esensial abad ke-21: computational thinking, pemecahan masalah kreatif, dan ketahanan dalam berinovasi.
            </p>

            {/* Core Values List */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Kurikulum Berjenjang & Adaptif</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Materi disesuaikan dengan tahap perkembangan kognitif anak usia SD, SMP, hingga SMA.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Mentor Berjiwa Pendidik</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Praktisi teknologi yang komunikatif, suportif, dan mampu menjelaskan konsep rumit menjadi analogi sederhana.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Komunitas Belajar Positif</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Siswa saling bertukar ide dan memamerkan proyek buatan sendiri dalam suasana kompetisi yang sehat.</p>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTrial}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
              >
                <span>Konsultasikan Kebutuhan Belajar Anak</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-white">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80"
                alt="Suasana pembelajaran coding menyenangkan di Coding First"
                loading="lazy"
                className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-blue-200">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>{CONTACT_CONFIG.city}</span>
                </div>
                <h3 className="text-lg font-bold leading-snug">
                  Membangun Generasi Muda Cerdas Digital & Siap Menghadapi Masa Depan
                </h3>
              </div>
            </div>

            {/* Floating Info Card */}
            <div className="mt-4 sm:absolute sm:-bottom-6 sm:-left-6 sm:max-w-xs bg-white p-4 rounded-xl border border-slate-200 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium">Metode Belajar</span>
                  <p className="text-sm font-bold text-slate-900">Project-Based Learning</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
