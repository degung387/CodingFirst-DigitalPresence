import React from 'react';
import { Code2, MapPin, Phone, Mail, Instagram, Clock, ArrowUpRight } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import { createWhatsAppLink, buildGeneralInquiryMessage } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-850">
          
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Coding<span className="text-blue-500">First</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Lembaga pembelajaran coding untuk anak & pelajar yang berfokus pada logika komputasional, pembuatan proyek nyata, dan kesiapan masa depan digital.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={CONTACT_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="Instagram Coding First"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={createWhatsAppLink(buildGeneralInquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 flex items-center justify-center transition-colors border border-slate-800"
                aria-label="WhatsApp Coding First"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${CONTACT_CONFIG.email}`}
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-colors border border-slate-800"
                aria-label="Email Coding First"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('hero')}
                  className="hover:text-white transition-colors"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('tentang')}
                  className="hover:text-white transition-colors"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('kurikulum')}
                  className="hover:text-white transition-colors"
                >
                  Kurikulum & Roadmap
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('harga')}
                  className="hover:text-white transition-colors"
                >
                  Paket & Biaya
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('galeri')}
                  className="hover:text-white transition-colors"
                >
                  Galeri Kegiatan
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('faq')}
                  className="hover:text-white transition-colors"
                >
                  FAQ & Tanya Jawab
                </button>
              </li>
            </ul>
          </div>

          {/* Program Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Program Belajar
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('program')}
                  className="hover:text-white transition-colors text-left"
                >
                  Coding Fundamental
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('program')}
                  className="hover:text-white transition-colors text-left"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('program')}
                  className="hover:text-white transition-colors text-left"
                >
                  Game Development
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('program')}
                  className="hover:text-white transition-colors text-left"
                >
                  Advanced Coding (Python)
                </button>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => scrollTo('free-trial')}
                  className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1"
                >
                  <span>Daftar Free Trial</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Kontak & Lokasi
            </h4>
            <ul className="space-y-3 text-xs leading-relaxed">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>{CONTACT_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <a
                  href={createWhatsAppLink(buildGeneralInquiryMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {CONTACT_CONFIG.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1 text-slate-400">
                <Clock className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <span>{CONTACT_CONFIG.operatingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Coding First. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => scrollTo('tentang')}
              className="hover:text-slate-200 transition-colors"
            >
              Tentang Lembaga
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => scrollTo('free-trial')}
              className="hover:text-slate-200 transition-colors"
            >
              Free Trial
            </button>
            <span>·</span>
            <a
              href={createWhatsAppLink(buildGeneralInquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              WhatsApp Admin
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
