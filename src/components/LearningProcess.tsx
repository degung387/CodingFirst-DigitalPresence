import React from 'react';
import { learningProcessSteps } from '../data/learningProcess';
import { CheckCircle2, Sparkles } from 'lucide-react';

export const LearningProcess: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-2">
            Metodologi
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bagaimana Siswa Belajar di Coding First
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600">
            Pendekatan 4 langkah praktis yang menjamin pemahaman konsep mendalam dan rasa bangga atas hasil karya sendiri.
          </p>
        </div>

        {/* 4-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          
          {learningProcessSteps.map((step, idx) => {
            return (
              <div
                key={step.step}
                className="relative bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 hover:bg-white shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-blue-600 text-white font-mono font-bold text-sm flex items-center justify-center shadow-xs">
                      {step.step}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      Tahap {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                    {step.title}
                  </h3>

                  <p className="text-xs font-semibold text-blue-600 mb-3">
                    {step.shortDesc}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Pendampingan Penuh</span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
