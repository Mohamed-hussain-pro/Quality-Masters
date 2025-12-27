
import React from 'react';
import { BRAND_NAME, CONTACT_LOCATION, CONTACT_PHONE } from '../constants';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 text-right">
            <div className="flex items-center space-x-reverse space-x-2 mb-6 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center font-bold text-slate-900">Q</div>
              <span className="text-xl font-bold tracking-tight text-white">{BRAND_NAME}</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 font-light">
              مجموعة كواليتي ماسترز لخدمات الهوية التجارية والطباعة الفاخرة. نقدم حلولاً متكاملة للشركات والمؤسسات لبناء حضور بصري استثنائي.
            </p>
            <p className="text-slate-400 text-sm mb-4">
              {CONTACT_LOCATION} <br />
              هاتف: {CONTACT_PHONE}
            </p>
            <div className="flex space-x-reverse space-x-4">
              <a href="#" className="text-slate-600 hover:text-amber-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-600 hover:text-amber-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-600 hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
          
          <div className="text-right">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">التنقل</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#products" onClick={(e) => scrollToSection(e, '#products')} className="hover:text-amber-500 cursor-pointer">منتجاتنا</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-amber-500 cursor-pointer">عن الشركة</a></li>
              <li><a href="#clients" onClick={(e) => scrollToSection(e, '#clients')} className="hover:text-amber-500 cursor-pointer">عملاؤنا</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-amber-500 cursor-pointer">تواصل معنا</a></li>
            </ul>
          </div>
          
          <div className="text-right">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">القانونية</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-amber-500">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-amber-500">شروط الخدمة</a></li>
              <li><a href="#" className="hover:text-amber-500">حقوق الملكية الفكرية</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-600 space-y-4">
          <p>© {new Date().getFullYear()} كواليتي ماسترز لخدمات الهوية والطباعة. جميع الحقوق محفوظة.</p>
          <p className="max-w-4xl mx-auto italic">
            ملاحظة: جميع خدمات التصميم والطباعة تخضع لمعايير الجودة العالمية المعتمدة لدى شركتنا. نلتزم بحماية العلامات التجارية لعملائنا وسرية تصاميمهم.
          </p>
        </div>
      </div>
    </footer>
  );
};
