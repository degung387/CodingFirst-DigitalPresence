import React from 'react';
import { Eye, Compass, BookOpenCheck, Palette, Cpu, Sparkles } from 'lucide-react';

const missions = [
  {
    number: "01",
    icon: BookOpenCheck,
    title: "Pembelajaran yang Mudah Dipahami",
    description: "Menyediakan kurikulum ramah anak dengan analogi visual, materi bertahap, dan bimbingan mentor yang sabar."
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Menghasilkan Project Nyata",
    description: "Mendorong setiap siswa menciptakan karya sendiri—baik berupa game, website, maupun animasi interaktif di setiap modul."
  },
  {
    number: "03",
    icon: Palette,
    title: "Mengembangkan Kreativitas & Problem Solving",
    description: "Melatih daya nalar analitis agar siswa mampu memecahkan masalah secara sistematis dan percaya diri bereksplorasi."
  },
  {
    number: "04",
    icon: Cpu,
    title: "Kesiapan Menghadapi Teknologi Digital",
    description: "Mempersiapkan siswa agar adaptif terhadap evolusi AI, otomatisasi, dan dunia digital tanpa kehilangan integritas logika."
  }
];

export const VisionMission: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Visi Banner Card */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-10 md:p-12 text-white shadow-lg mb-12 relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-300 uppercase tracking-widest mb-3">
              <Eye className="w-4 h-4 text-blue-400" />
              <span>Visi Coding First</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white mb-4">
              "Menjadi lembaga pembelajaran coding yang membantu generasi muda mengembangkan kemampuan digital, kreativitas, dan pola pikir komputasional."
            </h3>
            <p className="text-sm sm:text-base text-slate-300">
              Membangun fondasi generasi masa depan Indonesia yang cerdas bernalar, berani berkarya, dan mandiri secara teknologi.
            </p>
          </div>
        </div>

        {/* Misi Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4" />
            <span>Misi Pembelajaran</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Langkah Nyata Kami Mencapai Visi
          </h2>
        </div>

        {/* Misi Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {missions.map((mission) => {
            const Icon = mission.icon;
            return (
              <div
                key={mission.number}
                className="p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-sm font-bold text-slate-400">
                      {mission.number}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {mission.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
