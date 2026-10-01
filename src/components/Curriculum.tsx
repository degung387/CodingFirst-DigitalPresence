import React, { useState } from 'react';
import { curriculumSteps } from '../data/curriculum';
import { CheckCircle2, Award, ChevronRight, Sparkles } from 'lucide-react';

export const Curriculum: React.FC = () => {
  const [selectedLevelIndex, setSelectedLevelIndex] = useState<number>(0);
  const activeStep = curriculumSteps[selectedLevelIndex];

  return (
    <section id="kurikulum" className="py-20 md:py-28 bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-2">
            Alur Pembelajaran
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kurikulum yang Membentuk Skill
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600">
            Roadmap pembelajaran berjenjang dari logika computational thinking hingga kemandirian meluncurkan portofolio karya digital.
          </p>
        </div>

        {/* Roadmap Stepper Bar (Interactive Selector) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-10">
          {curriculumSteps.map((step, idx) => {
            const isSelected = selectedLevelIndex === idx;
            return (
              <button
                key={step.stepNumber}
                type="button"
                onClick={() => setSelectedLevelIndex(idx)}
                className={`p-3 sm:p-4 rounded-xl text-left border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md -translate-y-0.5'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-blue-100' : 'text-blue-600'}`}>
                    {step.stepNumber}
                  </span>
                  <span className={`text-[11px] font-medium ${isSelected ? 'text-blue-200' : 'text-slate-400'}`}>
                    {step.level}
                  </span>
                </div>
                <div className={`text-xs sm:text-sm font-bold line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Curriculum Step Detail Card */}
        <div className="bg-slate-50/80 rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-600">
                <span>{activeStep.level}</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>Fokus: {activeStep.focus}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {activeStep.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {activeStep.description}
              </p>

              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  Kemampuan yang Dikuasai:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                  {activeStep.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200/70 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-blue-100 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wide">
                <Sparkles className="w-4 h-4" />
                <span>Output Pencapaian Nyata</span>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-slate-900 font-semibold text-sm sm:text-base">
                {activeStep.output}
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                Setiap tingkat kurikulum diuji melalui pembuatan proyek langsung yang dinilai oleh mentor sebelum siswa naik ke tingkatan berikutnya.
              </p>

              <div className="pt-1 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                <span>Total 5 Tingkatan Berjenjang</span>
                <button
                  type="button"
                  onClick={() => setSelectedLevelIndex((prev) => (prev + 1) % curriculumSteps.length)}
                  className="font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                >
                  Lihat Level Berikutnya
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
