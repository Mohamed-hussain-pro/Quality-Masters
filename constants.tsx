
import React from 'react';
import { 
  CreditCard, 
  FileText, 
  Package, 
  FolderOpen, 
  Notebook, 
  ShoppingBag, 
  Mail, 
  Tag, 
  UtensilsCrossed, 
  Megaphone, 
  BarChart3, 
  Stamp
} from 'lucide-react';
import { NavItem, ServiceCardProps } from './types';

export const BRAND_NAME = "Quality Masters";
export const CONTACT_EMAIL = "mohamedesamworld1@gmail.com";
export const CONTACT_PHONE = "+201117215960";
export const CONTACT_LOCATION = "السيدة زينب، القاهرة، مصر";
export const WHATSAPP_LINK = `https://wa.me/201117215960`;

export const NAV_ITEMS: NavItem[] = [
  { label: 'منتجاتنا', href: '#products' },
  { label: 'من نحن', href: '#about' },
  { label: 'عملاؤنا', href: '#clients' },
  { label: 'تواصل معنا', href: '#contact' },
];

export const PRODUCTS: ServiceCardProps[] = [
  {
    title: "بطاقات العمل الاحترافية",
    description: "بطاقات بلمسات فاخرة تعكس هويتك الشخصية والمؤسسية بأفضل صورة.",
    icon: <CreditCard className="w-8 h-8 text-amber-500" />
  },
  {
    title: "الأوراق الرسمية (Letterheads)",
    description: "مراسلات رسمية مطبوعة على أجود أنواع الورق مع شعار شركتكم بدقة عالية.",
    icon: <FileText className="w-8 h-8 text-amber-500" />
  },
  {
    title: "تغليف المنتجات المخصص",
    description: "صناديق وتغليف يحمل علامتكم التجارية لتعزيز تجربة فتح الصندوق للعملاء.",
    icon: <Package className="w-8 h-8 text-amber-500" />
  },
  {
    title: "مجلدات الشركات (Folders)",
    description: "تنظيم وثائقكم في مجلدات فاخرة تحمل شعاركم وتبرز احترافيتكم.",
    icon: <FolderOpen className="w-8 h-8 text-amber-500" />
  },
  {
    title: "مفكرات الهوية (Notebooks)",
    description: "مفكرات مخصصة للهدايا أو للاستخدام الداخلي مع شعار مطبوع أو محفور.",
    icon: <Notebook className="w-8 h-8 text-amber-500" />
  },
  {
    title: "أكياس الهدايا الورقية",
    description: "أكياس ورقية متينة وجميلة تعزز من قيمة علامتكم التجارية عند التسوق.",
    icon: <ShoppingBag className="w-8 h-8 text-amber-500" />
  },
  {
    title: "أظرف المراسلات المطبوعة",
    description: "أظرف بأحجام متنوعة مع طباعة شعار وعناوين الشركة بشكل رسمي وأنيق.",
    icon: <Mail className="w-8 h-8 text-amber-500" />
  },
  {
    title: "ملصقات المنتجات (Labels)",
    description: "ستيكرات وملصقات دقيقة بأشكال وأحجام مخصصة لهوية منتجاتكم.",
    icon: <Tag className="w-8 h-8 text-amber-500" />
  },
  {
    title: "قوائم الطعام (Menus)",
    description: "تصميم وطباعة قوائم طعام مقاومة للتلف وتعكس جودة ما تقدمونه.",
    icon: <UtensilsCrossed className="w-8 h-8 text-amber-500" />
  },
  {
    title: "نشرات الهوية (Flyers)",
    description: "نشرات ترويجية جذابة توصل رسالتكم التسويقية بوضوح واحترافية.",
    icon: <Megaphone className="w-8 h-8 text-amber-500" />
  },
  {
    title: "التقارير السنوية المؤسسية",
    description: "إخراج فني فاخر لتقارير الإنجازات السنوية بما يليق بسمعة الشركة.",
    icon: <BarChart3 className="w-8 h-8 text-amber-500" />
  },
  {
    title: "الختم المؤسسي والتواقيع",
    description: "حلول متكاملة لتوثيق الأوراق الرسمية بلمسة Branding فريدة.",
    icon: <Stamp className="w-8 h-8 text-amber-500" />
  }
];
