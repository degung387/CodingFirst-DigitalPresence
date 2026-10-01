import React from 'react';
import { Layers, Users, Laptop, Rocket, MessageSquareCode, Award } from 'lucide-react';

interface TrustCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const trustItems: TrustCard[] = [
  {
    icon: Layers,
    title: 'Pembelajaran Terstruktur',
    description: 'Kurikulum bertingkat dari logika dasar hingga bahasa pemrograman teks, dirancang khusus agar mudah dipahami anak sesuai usia.'
  },
  {
    icon: Users,
    title: 'Mentor Berpengalaman',
    description: 'Didampingi mentor praktisi yang sabar, ramah anak, dan berpengalaman membimbing siswa dari pemula hingga mandiri.'
  },
  {
    icon: Laptop,
    title: 'Materi Praktis & Relevan',
    description: 'Menggunakan teknologi modern yang terpakai di industri digital, mulai dari game engine ramah anak hingga web development nyata.'
  },
  {
    icon: Rocket,
    title: 'Belajar Sambil Bikin Project',
    description: '70% waktu pembelajaran difokuskan pada praktik langsung. Setiap akhir sesi menghasilkan karya nyata untuk portofolio siswa.'
  },
  {
    icon: MessageSquareCode,
    title: 'Lingkungan Belajar Interaktif',
    description: 'Kelas kecil dan suportif dengan suasana santai yang memicu rasa ingin tahu, daya kritis, dan keberanian eksplorasi problem solving.'
  },
  {
    icon: Award,
    title: 'Sertifikat & Portofolio Resmi',
    description: 'Setiap siswa yang menuntaskan level mendapatkan sertifikat pencapaian resmi serta link showcase proyek yang dapat dibagikan.'
  }
];

export const TrustSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-2">
            Mengapa Coding First
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Metode Belajar yang Tepat untuk Generasi Digital
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600">
            Kami mengubah waktu layar (screen time) pasif menjadi kegiatan kreasi aktif yang mengasah nalar dan kreativitas masa depan.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-blue-200 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
