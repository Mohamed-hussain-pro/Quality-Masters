
import React from 'react';

const CLIENTS = [
  { name: "جامعات", logo: "U" },
  { name: "دور نشر", logo: "P" },
  { name: "مراكز أبحاث", logo: "R" },
  { name: "مؤسسات تعليمية", logo: "E" },
  { name: "شركات خاصة", logo: "C" },
  { name: "هيئات حكومية", logo: "G" }
];

export const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-24 bg-white border-y border-slate-100" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-xs font-bold text-amber-500 uppercase tracking-[0.3em] mb-4">شركاء النجاح</h2>
        <h3 className="text-3xl font-bold text-slate-900 mb-12">عملاؤنا يثقون بجودتنا</h3>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {CLIENTS.map((client, i) => (
            <div key={i} className="flex flex-col items-center space-y-4">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-slate-100 flex items-center justify-center text-3xl font-bold text-slate-300 hover:border-amber-500 hover:text-amber-500 transition-all cursor-default bg-slate-50">
                {client.logo}
              </div>
              <span className="text-slate-600 font-medium">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
