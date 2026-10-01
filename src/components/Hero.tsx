import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Play, Terminal, ShieldCheck, MapPin } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

const CODE_EXAMPLES = {
  game: {
    tab: "Game Maker (2D)",
    fileName: "player_hero.js",
    lang: "javascript",
    code: `// Logika kontrol karakter pemain
function onPlayerJump() {
  player.velocity.y = -12;
  player.playAnimation("jump");
  audio.playSound("jump_sfx");
  score.addPoints(10);
  console.log("Karakter melompat ke level baru!");
}`,
    output: "✓ Karakter aktif melompat! Skor: +10 pts"
  },
  web: {
    tab: "Web Builder (HTML & CSS)",
    fileName: "portfolio.html",
    lang: "html",
    code: `<div class="card-hero">
  <h1>Halo Dunia, Saya Budi!</h1>
  <p>Siswa Coding First Level 2</p>
  <button onclick="kirimPesan()">
    Lihat Proyek Saya 🚀
  </button>
</div>`,
    output: "✓ Web interaktif berhasil dirender di browser"
  },
  python: {
    tab: "Python Logic",
    fileName: "hitung_diskon.py",
    lang: "python",
    code: `# Algoritma perhitungan otomatis
def hitung_skor_akhir(tugas, proyek):
    total = (tugas * 0.4) + (proyek * 0.6)
    if total >= 80:
        return f"Hebat! Lulus dengan Nilai A ({total})"
    return f"Lulus dengan Nilai B ({total})"`,
    output: "✓ Output: Hebat! Lulus dengan Nilai A (92.0)"
  }
};

type CodeTab = keyof typeof CODE_EXAMPLES;

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CodeTab>('game');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50/80">
      {/* Subtle background decorative grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0F172A 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Location & Status Kicker (Zero-pill compliant) */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1 text-blue-600">
                <MapPin className="w-3.5 h-3.5" />
                Purwokerto & Online Seluruh Indonesia
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-emerald-700 font-medium">Batch Baru Dibuka</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Belajar Coding,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">
                Bangun Masa Depan.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Coding First membantu anak dan pelajar mengenal dunia coding melalui pembelajaran yang menyenangkan, terstruktur, dan relevan dengan perkembangan teknologi.
            </p>

            {/* Value Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-slate-600 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Tanpa Syarat Dasar Coding</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Kelas Kecil 1 Mentor : 4 Siswa</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Praktik 70% Bikin Proyek Nyata</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => scrollToSection('free-trial')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <span>Daftar Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('program')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold py-3.5 px-6 rounded-xl border border-slate-200/90 shadow-xs transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>Lihat Program</span>
              </button>
            </div>

            {/* Micro Trust Stats */}
            <div className="pt-4 border-t border-slate-200/60 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500">
              <div>
                <strong className="block text-slate-900 font-bold text-sm">Usia 7 – 18+ Thn</strong>
                <span>Tingkat SD, SMP, SMA</span>
              </div>
              <span className="h-7 w-px bg-slate-200" aria-hidden="true" />
              <div>
                <strong className="block text-slate-900 font-bold text-sm">1x Free Trial</strong>
                <span>Konsultasi minat anak gratis</span>
              </div>
              <span className="h-7 w-px bg-slate-200" aria-hidden="true" />
              <div>
                <strong className="block text-slate-900 font-bold text-sm">Offline & Online</strong>
                <span>Jadwal fleksibel akhir pekan</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code Sandbox Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 rounded-2xl shadow-xl border border-slate-800 overflow-hidden transition-all">
              
              {/* Window Bar */}
              <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">
                    {CODE_EXAMPLES[activeTab].fileName}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-medium text-emerald-400">Interactive Preview</span>
                </div>
              </div>

              {/* Code Tab Switcher (Segmented buttons) */}
              <div className="flex items-center gap-1 p-1.5 bg-slate-900 border-b border-slate-800 text-xs overflow-x-auto">
                {(Object.keys(CODE_EXAMPLES) as CodeTab[]).map((tabKey) => {
                  const isActive = activeTab === tabKey;
                  return (
                    <button
                      key={tabKey}
                      type="button"
                      onClick={() => setActiveTab(tabKey)}
                      className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap font-medium ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                      }`}
                    >
                      {CODE_EXAMPLES[tabKey].tab}
                    </button>
                  );
                })}
              </div>

              {/* Code Display */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200 bg-slate-900/90 overflow-x-auto min-h-[170px]">
                <pre className="text-blue-100">
                  <code>{CODE_EXAMPLES[activeTab].code}</code>
                </pre>
              </div>

              {/* Console Output Bar */}
              <div className="bg-slate-950 px-4 py-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate">{CODE_EXAMPLES[activeTab].output}</span>
                </div>
                <span className="text-[11px] text-slate-500 hidden sm:inline">Hasil Live</span>
              </div>
            </div>

            {/* Floating Card under sandbox */}
            <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  CF
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Kurikulum Berorientasi Proyek</h4>
                  <p className="text-xs text-slate-500">Bukan sekadar hafalan, langsung buat aplikasi & game.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => scrollToSection('kurikulum')}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                Roadmap
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
