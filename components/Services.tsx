
import React from 'react';
import { PRODUCTS } from '../constants';
import { ServiceCardProps } from '../types';

const ProductCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-amber-500/50 transition-all duration-300 shadow-sm hover:shadow-xl text-center">
    <div className="mb-6 mx-auto bg-slate-100 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-amber-500 transition-colors">
      <div className="group-hover:text-white text-amber-600 transition-colors">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-slate-50 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-amber-500 uppercase tracking-[0.3em] mb-4">خدماتنا الطباعية</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            حلول شاملة لكل ما يحتاجه <br /> النشر الورقي
          </h3>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
