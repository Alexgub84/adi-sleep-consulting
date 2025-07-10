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
    'lang.switch': 'עברית'
  },
  he: {
    'nav.home': 'בית',
    'nav.about': 'אודות',
    'nav.products': 'המוצרים שלי',
    'nav.contact': 'צור קשר',
    'lang.switch': 'English'
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