import React from 'react';
import { programs, Program } from '../data/programs';
import { Clock, Calendar, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { createWhatsAppLink, buildProgramInquiryMessage } from '../utils/whatsapp';

interface ProgramsProps {
  onSelectProgramForTrial?: (programTitle: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgramForTrial }) => {
  const handleSelectProgram = (programTitle: string) => {
    if (onSelectProgramForTrial) {
      onSelectProgramForTrial(programTitle);
    }
    const el = document.getElementById('free-trial');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="program" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-2">
            Pilihan Belajar
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Program Belajar Coding First
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600">
            Materi disusun bertingkat dari visual block hingga bahasa pemrograman industri, disesuaikan dengan minat dan usia siswa.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((prog) => {
            return (
              <div
                key={prog.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Metadata Header (Zero-pill compliant: unboxed text with separator) */}
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-3">
                    <div className="flex items-center gap-1.5 font-medium">
                      <span className="text-blue-600 font-semibold">{prog.targetAge}</span>
                      <span aria-hidden="true">·</span>
                      <span>Level: {prog.level}</span>
                    </div>
                    {prog.badge && (
                      <span className="text-emerald-700 font-semibold text-xs">
                        {prog.badge}
                      </span>
                    )}
                  </div>

                  {/* Program Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {prog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  {/* Schedule & Duration Specs */}
                  <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>{prog.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>{prog.sessions}</span>
                    </div>
                  </div>

                  {/* Key Topics Covered */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Materi Inti:
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                      {prog.mainTopics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sample Project Showcase */}
                  <div className="text-xs text-slate-600 bg-blue-50/60 p-3 rounded-lg border border-blue-100 mb-6">
                    <strong className="text-blue-900 font-semibold block mb-0.5">Contoh Output Karya:</strong>
                    <span>{prog.sampleProject}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleSelectProgram(prog.title)}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 px-4 rounded-xl shadow-xs transition-colors"
                  >
                    <span>Pilih untuk Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={createWhatsAppLink(buildProgramInquiryMessage(prog.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold py-2.5 px-3.5 rounded-xl transition-colors"
                    title={`Konsultasi program ${prog.title} via WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Tanya Mentor</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
