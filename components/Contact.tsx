
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="text-right">
            <h2 className="text-xs font-bold text-amber-500 uppercase tracking-[0.3em] mb-4">تواصل معنا</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">ابدأ رحلة النشر معنا</h3>
            <p className="text-slate-400 font-light mb-12 text-lg">
              نحن هنا لمساعدتكم في تحويل أفكاركم إلى مطبوعات ملموسة. اطلب استشارة مجانية لمشروعك القادم.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-reverse space-x-6 group">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                  <Mail className="text-amber-500 group-hover:text-slate-900" size={20} />
                </div>
                <div>
                  <div className="text-slate-500 text-sm uppercase tracking-widest font-bold">البريد الإلكتروني</div>
                  <div className="text-white font-medium">print@qualitymasters.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-reverse space-x-6 group">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                  <Phone className="text-amber-500 group-hover:text-slate-900" size={20} />
                </div>
                <div>
                  <div className="text-slate-500 text-sm uppercase tracking-widest font-bold">رقم الهاتف</div>
                  <div className="text-white font-medium">+966 500 000 000</div>
                </div>
              </div>
              <div className="flex items-center space-x-reverse space-x-6 group">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                  <MapPin className="text-amber-500 group-hover:text-slate-900" size={20} />
                </div>
                <div>
                  <div className="text-slate-500 text-sm uppercase tracking-widest font-bold">المقر الرئيسي</div>
                  <div className="text-white font-medium">الرياض، المملكة العربية السعودية</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-10 rounded-3xl border border-slate-800">
            <form className="space-y-6 text-right">
              <div>
                <label className="block text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">الاسم الكامل</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors text-right"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors text-right"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">الرسالة</label>
                <textarea 
                  rows={4}
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors text-right"
                ></textarea>
              </div>
              <button className="w-full bg-amber-500 text-slate-900 font-bold py-4 rounded-xl hover:bg-amber-400 transition-all uppercase tracking-widest text-lg">
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
