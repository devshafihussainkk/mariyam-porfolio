
import React, { useState } from 'react';
import { EDUCATION } from '../constants.tsx';
import { gemini } from '../geminiService.ts';

const About: React.FC = () => {
  const [query, setQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  // High-quality silhouette of a woman in a hijab
  const profileImage = "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=1000&auto=format&fit=crop";

  const handleAskAI = async () => {
    if (!query.trim()) return;
    setLoading(true);
    const result = await gemini.askAboutMariyam(query);
    setAiResponse(result);
    setLoading(false);
  };

  return (
    <div className="flex flex-col w-full max-w-[1000px] mx-auto px-6 py-20 gap-24">
      {/* Editorial Profile Section */}
      <section className="flex flex-col md:flex-row gap-20 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-10 animate-fade-in">
          <div className="flex flex-col gap-6">
            <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">HER STORY / HER EXPERTISE</span>
            <h1 className="text-slate-900 dark:text-white text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter uppercase italic">
              Impactful <br />HR Leadership
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-xl leading-relaxed max-w-md">
              MBA Professional specializing in Hospital Management and organizational resilience. A dedicated visionary for human capital.
            </p>
          </div>
          <div className="flex flex-wrap gap-5">
            <button className="flex h-14 px-10 items-center justify-center rounded-2xl bg-primary text-white font-black shadow-xl shadow-blue-500/20 hover:bg-blue-600 transition-all hover:-translate-y-1">
              CONTACT ME
            </button>
            <button className="flex h-14 px-10 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-black hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
              RESUME.PDF
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative group animate-fade-in">
            <div className="absolute -inset-10 bg-primary/10 rounded-[4rem] blur-[100px] opacity-40"></div>
            
            <div className="relative aspect-[3/4] w-full bg-slate-200 dark:bg-slate-800 rounded-[3rem] shadow-[0_48px_80px_-16px_rgba(0,0,0,0.3)] overflow-hidden border-[10px] border-white dark:border-slate-900 transition-transform duration-1000 group-hover:scale-[1.03]">
              <img 
                src={profileImage} 
                alt="Mariyam Khamila KV Portrait" 
                className="w-full h-full object-cover grayscale opacity-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100"
                style={{ objectPosition: 'center 15%' }}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary Glass Card */}
      <section className="flex flex-col gap-12">
        <div className="flex items-center gap-6">
          <div className="h-0.5 flex-1 bg-slate-200 dark:bg-slate-800"></div>
          <h2 className="text-slate-900 dark:text-white text-2xl font-black uppercase tracking-[0.3em] px-4 italic">Summary</h2>
          <div className="h-0.5 flex-1 bg-slate-200 dark:bg-slate-800"></div>
        </div>
        <div className="bg-white dark:bg-slate-900/50 p-12 md:p-16 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
          <span className="material-symbols-outlined absolute -top-12 -right-12 text-[260px] text-slate-100 dark:text-slate-800/10 pointer-events-none select-none transition-transform group-hover:rotate-12 duration-1000">format_quote</span>
          <div className="relative z-10">
            <p className="text-slate-700 dark:text-slate-300 text-2xl md:text-3xl font-medium leading-relaxed italic">
              "Results-oriented HR professional with an MBA in <span className="text-primary font-black not-italic border-b-4 border-primary/20">Hospital Management & HR</span>. Committed to fostering positive workplace cultures through evidence-based practices."
            </p>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="flex flex-col gap-10 bg-slate-100 dark:bg-slate-800/50 p-12 rounded-[3rem] border border-slate-200 dark:border-slate-700 shadow-inner">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="size-12 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <span className="material-symbols-outlined text-3xl">psychology</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight italic">RECRUITMENT ASSISTANT</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-bold text-lg">Inquire about my professional suitability and experience.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAskAI()}
            placeholder="e.g., Describe her leadership style..."
            className="flex-1 rounded-2xl border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-4 focus:ring-primary/10 focus:border-primary px-8 py-5 text-xl font-bold shadow-sm"
          />
          <button 
            onClick={handleAskAI}
            disabled={loading}
            className="bg-primary text-white font-black px-12 py-5 rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 active:scale-95 disabled:opacity-50 whitespace-nowrap text-lg"
          >
            {loading ? 'ANALYZING...' : 'ASK ASSISTANT'}
          </button>
        </div>
        {aiResponse && (
          <div className="mt-2 p-10 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-700 animate-fade-in shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
            <p className="text-slate-700 dark:text-slate-300 text-xl leading-relaxed italic">
              <span className="text-primary font-black uppercase text-sm block mb-2 not-italic tracking-widest">Assistant Response:</span>
              "{aiResponse}"
            </p>
          </div>
        )}
      </section>

      {/* Academic Qualification */}
      <section className="flex flex-col gap-12">
        <div className="flex items-center gap-6">
          <div className="h-0.5 flex-1 bg-slate-200 dark:bg-slate-800"></div>
          <h2 className="text-slate-900 dark:text-white text-2xl font-black uppercase tracking-[0.3em] px-4 italic">Academic Journey</h2>
          <div className="h-0.5 flex-1 bg-slate-200 dark:bg-slate-800"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="group flex flex-col gap-8 p-12 rounded-[2.5rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-primary transition-all duration-500 shadow-sm hover:shadow-2xl">
              <div className="flex justify-between items-start">
                <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-[36px]">{edu.icon}</span>
                </div>
                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-black px-5 py-2 rounded-xl uppercase tracking-[0.2em]">
                  {edu.level}
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight group-hover:text-primary transition-colors">{edu.degree}</h3>
                <div className="flex flex-col gap-1">
                  <p className="text-primary font-black text-sm tracking-widest uppercase">{edu.institution}</p>
                  <p className="text-slate-400 font-black text-xs">{edu.period}</p>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mt-4">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
