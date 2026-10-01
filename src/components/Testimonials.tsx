import React, { useState } from 'react';
import { testimonials } from '../data/testimonials';
import { ChevronLeft, ChevronRight, Star, Quote, Info } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-2">
            Pengalaman Belajar
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cerita dari Siswa dan Orang Tua
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600">
            Dampak nyata pembelajaran coding bagi perkembangan kreativitas dan pola pikir analitis siswa.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-slate-50/80 rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm transition-all">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
            
            {/* User Profile */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white font-bold text-lg flex items-center justify-center shadow-xs">
                {current.avatarInitials}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {current.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  {current.role} · <span className="text-blue-600 font-semibold">{current.program}</span>
                </p>
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="relative">
            <Quote className="absolute -top-3 -left-3 w-8 h-8 text-blue-200/50 -scale-x-100 pointer-events-none" />
            <p className="text-base sm:text-xl text-slate-700 leading-relaxed italic pl-2">
              "{current.content}"
            </p>
          </div>

          {/* Navigation Controls & Dots */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {testimonials.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`h-2.5 rounded-full transition-all duration-200 ${
                    currentIndex === dotIdx ? 'w-8 bg-blue-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Lihat ulasan ke-${dotIdx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevTestimonial}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-2xs transition-colors"
                aria-label="Ulasan sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextTestimonial}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-2xs transition-colors"
                aria-label="Ulasan berikutnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        {/* Transparent Placeholder Label as mandated by PRD */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
          <Info className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <span>[Placeholder Testimoni] — Berdasarkan sampel pengalaman uji coba & rintisan program Coding First.</span>
        </div>

      </div>
    </section>
  );
};
