
import React from 'react';

const CLIENTS = [
  { 
    name: "جامعات", 
    img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=200" 
  },
  { 
    name: "دور نشر", 
    img: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&q=80&w=200" 
  },
  { 
    name: "مراكز أبحاث", 
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=200" 
  },
  { 
    name: "مؤسسات تعليمية", 
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=200" 
  },
  { 
    name: "شركات خاصة", 
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=200" 
  },
  { 
    name: "هيئات حكومية", 
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=200" 
  }
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
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-slate-100 overflow-hidden shadow-sm hover:border-amber-500 transition-all cursor-default bg-slate-50">
                <img 
                  src={client.img} 
                  alt={client.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              <span className="text-slate-600 font-medium">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
