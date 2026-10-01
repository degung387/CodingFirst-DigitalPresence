import React from 'react';
import { pricingPlans } from '../data/pricing';
import { Check, MessageCircle, HelpCircle } from 'lucide-react';
import { createWhatsAppLink, buildPricingInquiryMessage } from '../utils/whatsapp';

export const Pricing: React.FC = () => {
  return (
    <section id="harga" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-2">
            Investasi Pendidikan
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pilih Program yang Sesuai
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600">
            Biaya terjangkau dengan pendampingan intensif, fasilitas lengkap, dan pilihan kelas offline maupun online.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl bg-white p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 border ${
                  plan.popular
                    ? 'border-blue-600 shadow-xl ring-2 ring-blue-600/10 -translate-y-1'
                    : 'border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300'
                }`}
              >
                {/* Popular Ribbon / Indicator */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold py-1 px-4 rounded-full shadow-sm">
                    Paling Populer
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        {plan.period}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      *Hubungi kami untuk info promo & rincian biaya resmi
                    </span>
                  </div>

                  {/* Class Specs */}
                  <div className="space-y-2 mb-6 text-xs text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Frekuensi:</span>
                      <span className="font-semibold text-slate-900">{plan.sessions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Durasi:</span>
                      <span className="font-semibold text-slate-900">{plan.durationPerSession}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Ukuran Kelas:</span>
                      <span className="font-semibold text-slate-900">{plan.classSize}</span>
                    </div>
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Fasilitas Termasuk:
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-2">
                  <a
                    href={createWhatsAppLink(buildPricingInquiryMessage(plan.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 font-semibold text-sm py-3 px-4 rounded-xl transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md'
                        : 'bg-slate-900 hover:bg-slate-800 text-white shadow-xs'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{plan.ctaLabel}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note / Disclaimer */}
        <div className="mt-10 text-center max-w-xl mx-auto flex items-center justify-center gap-2 text-xs text-slate-500">
          <HelpCircle className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <span>
            Ingin mencoba kelas terlebih dahulu? Dapatkan 1 sesi <strong>Free Trial Gratis</strong> sebelum memilih paket belajar.
          </span>
        </div>

      </div>
    </section>
  );
};
