export const languages = {
  en: 'English',
  he: 'עברית'
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.products': 'My Products',
    'nav.contact': 'Contact',
    'lang.switch': 'עברית',
    'footer.copyright': '© 2024 ADI Sleep Consulting. All rights reserved.',
    'footer.contact': 'Contact Us',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service'
  },
  he: {
    'nav.home': 'בית',
    'nav.about': 'אודות',
    'nav.products': 'המוצרים שלי',
    'nav.contact': 'צרי קשר',
    'lang.switch': 'English',
    'footer.copyright': '© 2024 ייעוץ שינה עדי. כל הזכויות שמורות.',
    'footer.contact': 'צרי קשר',
    'footer.privacy': 'מדיניות פרטיות',
    'footer.terms': 'תנאי שירות'
  }
};

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/');
  return Object.keys(languages).includes(lang) ? lang : defaultLang;
}

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
} 