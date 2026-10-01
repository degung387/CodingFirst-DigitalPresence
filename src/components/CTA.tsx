import React from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { createWhatsAppLink, buildGeneralInquiryMessage } from '../utils/whatsapp';

export const CTA: React.FC = () => {
  const scrollToTrial = () => {
    const el = document.getElementById('free-trial');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 uppercase tracking-widest">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span>Langkah Awal Menjadi Kreator Teknologi</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Siap Memulai Perjalanan Coding?
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Mulai dari free trial dan temukan pengalaman belajar coding yang sesuai untukmu.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={scrollToTrial}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <span>Daftar Free Trial</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href={createWhatsAppLink(buildGeneralInquiryMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold py-3.5 px-7 rounded-xl transition-colors backdrop-blur-xs"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Chat Admin</span>
          </a>
        </div>

      </div>
    </section>
  );
};
