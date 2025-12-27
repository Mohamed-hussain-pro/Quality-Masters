
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 bg-slate-950 overflow-hidden" dir="rtl">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-slate-500/10 rounded-full blur-[150px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-reverse space-x-2 bg-slate-900/50 border border-slate-800 rounded-full px-4 py-1.5 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-amber-500"></span>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">خبراء بناء الهوية التجارية</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-tight">
          Quality Masters <br />
          <span className="gradient-text">نطبـع هويتكم على كل منتج</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-light">
          نحن متخصصون في خدمة الشركات لبناء علامات تجارية قوية عبر المطبوعات الورقية الفاخرة، من تصميم الشعارات وحتى إخراج الهوية المتكاملة على كافة منتجاتكم.
        </p>
        
        <div className="flex flex-col sm:flex-row-reverse justify-center items-center gap-4">
          <a 
            href="#contact" 
            className="group flex items-center justify-center w-full sm:w-auto bg-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-400 transition-all"
          >
            ابدأ مشروعك الآن
            <ArrowRight className="mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" size={20} />
          </a>
          <a 
            href="#products" 
            className="flex items-center justify-center w-full sm:w-auto border border-slate-700 bg-slate-900/50 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all"
          >
            خدمات الهوية والبراندينج
          </a>
        </div>
      </div>
    </section>
  );
};
