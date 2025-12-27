
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 px-4 sm:px-6 lg:px-8 border-y border-slate-900" dir="rtl">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800" 
              alt="Brand Design Identity" 
              className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover h-[500px]"
            />
            <div className="absolute -bottom-8 -left-8 glass p-8 rounded-2xl hidden md:block max-w-[280px]">
              <div className="text-3xl font-bold text-amber-500 mb-2 italic">"هويتك هي بصمتك"</div>
              <div className="text-sm text-slate-400">نساعد الشركات على الظهور بشكل احترافي أمام العالم.</div>
            </div>
          </div>
        </div>
        <div className="flex-1 text-right">
          <h2 className="text-xs font-bold text-amber-500 uppercase tracking-[0.3em] mb-4">عن كواليتي ماسترز</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            شريككم في صياغة <br /> صورة علامتكم التجارية
          </h3>
          <div className="space-y-6 text-slate-400 leading-relaxed font-light">
            <p>
              في Quality Masters، نتجاوز مفهوم الطباعة التقليدي. نحن ندرك أن كل ورقة تحمل شعاركم هي سفيرة لهويتكم، ولذلك نكرس خبرتنا لضمان أن يكون هذا الظهور مثالياً.
            </p>
            <p>
              نخدم قطاع الأعمال عبر توفير حلول Branding متكاملة تشمل كافة المطبوعات الورقية والمكتبية، مع التركيز على دقة الألوان وجودة الخامات التي تعزز من هيبة علامتكم التجارية.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8">
            <div className="border-r-2 border-amber-500 pr-6 py-2">
              <h4 className="text-white font-bold text-xl">توحيد الهوية</h4>
              <p className="text-sm text-slate-500 mt-1">ضمان تطابق الألوان والشعارات عبر كافة المطبوعات المكتبية والمنتجات.</p>
            </div>
            <div className="border-r-2 border-amber-500 pr-6 py-2">
              <h4 className="text-white font-bold text-xl">حلول مبتكرة</h4>
              <p className="text-sm text-slate-500 mt-1">أفكار إبداعية لتقديم منتجاتكم في تغليف يحمل طابع الفخامة والتميز.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
