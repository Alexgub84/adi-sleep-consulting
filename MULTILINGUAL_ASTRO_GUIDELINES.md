# Multilingual Astro Project Guidelines

This document outlines the key technologies, patterns, and implementation practices for creating a multilingual Astro project with Firebase deployment.

## 🏗️ Project Architecture Overview

### Key Technologies
- **Astro 5.6.1**: Static site generator with SSR capabilities
- **Tailwind CSS 3.4.1**: Utility-first CSS framework
- **Firebase Hosting**: Deployment platform
- **TypeScript**: Type safety and better development experience

### Core Dependencies
```json
{
  "astro": "^5.6.1",
  "firebase-tools": "^14.1.0",
  "tailwindcss": "^3.4.1",
  "@astrojs/tailwind": "^5.1.0"
}
```

## 🌐 Multilingual Support

### Configuration
The project uses Astro's built-in i18n support configured in `astro.config.mjs`:

```javascript
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    locales: ["en", "he"],
    defaultLocale: "en",
  },
});
```

### Translation Management
- **Location**: `src/i18n/config.js`
- **Pattern**: Centralized translation object with language-specific keys
- **Function**: `useTranslations(lang)` returns a translation function
- **URL Detection**: `getLangFromUrl(url)` extracts language from URL path

### Translation Structure
```javascript
export const languages = {
  en: 'English',
  he: 'עברית'
};

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Me',
    // ... more translations
  },
  he: {
    'nav.home': 'בית',
    'nav.about': 'אודות',
    // ... more translations
  }
};
```

### RTL Support
- Hebrew layout includes `dir="rtl"` attribute
- Language-specific layouts handle RTL/LTR direction
- CSS classes adapt to text direction

## 🛣️ Routing and Page Structure

### URL Structure
```
/                    → Redirects to /en/
/en/                 → English homepage
/en/about            → English about page
/he/                 → Hebrew homepage
/he/about            → Hebrew about page
```

### File Organization
```
src/pages/
├── index.astro          # Redirect to default language
├── en/
│   ├── index.astro
│   ├── about.astro
│   ├── contact.astro
│   └── products.astro
└── he/
    ├── index.astro
    ├── about.astro
    ├── contact.astro
    └── products.astro
```

### Root Redirect Pattern
```astro
---
import { defaultLang } from '../i18n/config.js';
return Astro.redirect(`/${defaultLang}/`);
---
```

## 🎨 Layout and Content Structure

### Layout Hierarchy
1. **Base Layout** (`src/layouts/[lang]/Layout.astro`): HTML structure, meta tags, SEO
2. **Page Layout** (`src/layouts/[lang]/PageLayout.astro`): Includes header, container, styling
3. **Content Layout** (`src/layouts/[lang]/ContentLayout.astro`): For markdown content pages

### Component Organization
```
src/components/
├── Header.astro              # Shared header with language switcher
├── WelcomeDynamic.astro      # Dynamic content based on language
├── en/
│   ├── ContactForm.astro
│   └── Welcome.astro
└── he/
    ├── ContactForm.astro
    └── Welcome.astro
```

### Content Collections
- **Location**: `src/content/config.ts`
- **Structure**: Language-specific collections with identical schemas
- **Usage**: Markdown files with frontmatter for structured content

### Content Schema
```typescript
const schema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  primaryButton: z.string().optional(),
  primaryButtonLink: z.string().optional(),
  secondaryButton: z.string().optional(),
  secondaryButtonLink: z.string().optional(),
});
```

## 🚀 Deployment Setup

### Firebase Configuration
**File**: `firebase.json`
```json
{
  "hosting": {
    "source": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "frameworksBackend": {
      "region": "us-central1"
    }
  }
}
```

### Build and Deploy Scripts
```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "deploy": "npm run build && firebase deploy"
  }
}
```

### Deployment Process
1. Run `npm run build` to generate static files
2. Run `firebase deploy` to upload to Firebase Hosting
3. Firebase automatically serves the built files

## 🔄 Reusable Patterns

### 1. Language Detection Pattern
```javascript
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
```

### 2. Language Switcher Pattern
```javascript
const otherLang = lang === 'en' ? 'he' : 'en';
const otherLangPath = lang === 'en' ? '/he' : '/en';
const otherLangUrl = currentPath.replace(`/${lang}`, `/${otherLang}`);
```

### 3. Dynamic Content Pattern
```javascript
const content = {
  en: { title: "English Title", ... },
  he: { title: "כותרת בעברית", ... }
};
const currentContent = content[lang] || content.en;
```

### 4. SEO Pattern
- Language-specific meta descriptions
- Proper `lang` and `dir` attributes
- Open Graph and Twitter Card support
- Structured data for search engines

### 5. Component Composition Pattern
- Shared components with language-specific props
- Language-specific components in separate folders
- Dynamic imports based on language

## ➕ Adding a New Language: Step-by-Step Guide

### Step 1: Update Astro Configuration
```javascript
// astro.config.mjs
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    locales: ["en", "he", "es"], // Add new language
    defaultLocale: "en",
  },
});
```

### Step 2: Update i18n Configuration
```javascript
// src/i18n/config.js
export const languages = {
  en: 'English',
  he: 'עברית',
  es: 'Español' // Add new language
};

export const ui = {
  en: { /* existing translations */ },
  he: { /* existing translations */ },
  es: { // Add new translations
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.products': 'Productos',
    'nav.contact': 'Contacto',
    'lang.switch': 'English'
  }
};
```

### Step 3: Create Language-Specific Folders
```
src/
├── pages/es/           # Create Spanish pages
├── layouts/es/         # Create Spanish layouts
├── components/es/      # Create Spanish components
└── content/es/         # Create Spanish content
```

### Step 4: Create Language-Specific Layouts
```astro
<!-- src/layouts/es/Layout.astro -->
---
// Copy from existing layout and update:
// - lang="es"
// - dir="ltr" (or "rtl" for RTL languages)
// - Meta descriptions in Spanish
// - Author name in Spanish
---
```

### Step 5: Create Language-Specific Pages
```astro
<!-- src/pages/es/index.astro -->
---
import Layout from '../../layouts/es/PageLayout.astro';
import WelcomeDynamic from '../../components/WelcomeDynamic.astro';
import ContactForm from '../../components/es/ContactForm.astro';
---

<Layout title="ADI Sleep Consulting - Soluciones Profesionales de Sueño">
  <WelcomeDynamic />
  <div class="mt-12">
    <ContactForm />
  </div>
</Layout>
```

### Step 6: Update Content Collections
```typescript
// src/content/config.ts
const es = defineCollection({
  type: 'content',
  schema: z.object({
    // Same schema as other languages
  })
});

export const collections = {
  en,
  he,
  es, // Add new collection
};
```

### Step 7: Create Language-Specific Components
```astro
<!-- src/components/es/ContactForm.astro -->
---
// Create Spanish version of contact form
// Update all text content to Spanish
---
```

### Step 8: Update Dynamic Components
```astro
<!-- src/components/WelcomeDynamic.astro -->
---
const welcomeContent = {
  en: { /* existing content */ },
  he: { /* existing content */ },
  es: { // Add Spanish content
    title: "Bienvenido a ADI Sleep Consulting",
    subtitle: "Soluciones Profesionales de Sueño",
    // ... more translations
  }
};
---
```

### Step 9: Create Content Files
```markdown
<!-- src/content/es/welcome.md -->
---
title: "Bienvenido a ADI Sleep Consulting"
subtitle: "Soluciones Profesionales de Sueño"
description: "Servicios profesionales de consultoría de sueño..."
primaryButton: "Más Información"
primaryButtonLink: "/es/about"
secondaryButton: "Comenzar"
secondaryButtonLink: "/es/contact"
---

# Bienvenido a ADI Sleep Consulting
...
```

### Step 10: Test and Deploy
1. Run `npm run dev` to test locally
2. Verify all pages work in the new language
3. Test language switching functionality
4. Run `npm run build` to ensure no build errors
5. Deploy with `npm run deploy`

## 📋 Best Practices Checklist

### ✅ Project Setup
- [ ] Configure Astro i18n in `astro.config.mjs`
- [ ] Set up Firebase hosting configuration
- [ ] Install required dependencies
- [ ] Configure Tailwind CSS

### ✅ Translation Management
- [ ] Create centralized translation object
- [ ] Implement language detection functions
- [ ] Set up translation helper functions
- [ ] Handle RTL languages properly

### ✅ File Structure
- [ ] Organize pages by language folders
- [ ] Create language-specific layouts
- [ ] Separate components by language when needed
- [ ] Set up content collections for each language

### ✅ SEO and Accessibility
- [ ] Implement proper `lang` attributes
- [ ] Set correct `dir` attributes for RTL languages
- [ ] Add language-specific meta descriptions
- [ ] Include Open Graph and Twitter Card meta tags

### ✅ Navigation and UX
- [ ] Implement language switcher
- [ ] Create proper URL structure
- [ ] Handle root redirect to default language
- [ ] Ensure responsive design across languages

### ✅ Content Management
- [ ] Set up content collections with schemas
- [ ] Create markdown files for each language
- [ ] Implement dynamic content loading
- [ ] Validate content structure

### ✅ Deployment
- [ ] Configure Firebase hosting
- [ ] Set up build and deploy scripts
- [ ] Test deployment process
- [ ] Verify all languages work in production

## 🎯 Key Takeaways

1. **Centralized Configuration**: All language settings in `astro.config.mjs` and `i18n/config.js`
2. **Consistent Structure**: Mirror file organization across languages
3. **Dynamic Components**: Use language detection for reusable components
4. **SEO-First**: Proper meta tags and language attributes for each page
5. **Scalable Architecture**: Easy to add new languages following the established patterns
6. **Firebase Integration**: Simple deployment with automatic static file serving

This structure provides a solid foundation for multilingual Astro projects that can scale to support multiple languages while maintaining clean, maintainable code. 