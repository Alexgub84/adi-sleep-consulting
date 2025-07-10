# 🎨 **ADI Sleep Consulting - Tailwind Styling Guidelines**

## 📁 **Configuration**

### `tailwind.config.mjs`
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#f8f5f1',          // Soft page background
        'brand-accent': '#d28885',      // Main accent (buttons, highlights)
        'brand-accent-dark': '#c3766e', // Hover for accent
        'text-dark': '#333333',         // Primary text color
        'soft-border': '#cccccc',       // Light borders
        'form-bg': '#d0cfc8'            // Optional form section background
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        handwritten: ['"Patrick Hand"', 'cursive']
      }
    },
  },
  plugins: [],
}
```

## 📘 **Component Styling Principles**

### 🌐 **Global**
- Set base text and background: `bg-brand-bg text-text-dark font-sans`
- Use consistent spacing: `py-12 md:py-16` for sections
- Container width: `max-w-5xl` or `max-w-6xl` with `mx-auto px-4`

### 🧱 **Layout & Sections**
- Wrap sections in `section` with padding: `py-12 md:py-16`
- Use `max-w-5xl` or `max-w-6xl` with `mx-auto px-4` for container width
- Alternate backgrounds: `bg-white`, `bg-brand-bg`, or `bg-form-bg`

### ✍️ **Typography**
- Headings: `text-2xl md:text-4xl font-bold text-text-dark`
- Subheadings: `text-lg font-medium text-text-dark`
- Body: `text-base leading-relaxed text-text-dark`
- Optional stylized titles: `font-handwritten`

### 🔘 **Buttons**
```html
<!-- Primary Button -->
<button class="bg-brand-accent hover:bg-brand-accent-dark text-white px-6 py-2 rounded shadow font-semibold transition-colors">

<!-- Secondary Button -->
<button class="bg-white text-brand-accent px-6 py-2 rounded border border-brand-accent hover:bg-brand-bg transition-colors font-semibold shadow">
```

### 📮 **Forms - STANDARDIZED STYLING**
All forms across the project now follow this exact pattern:

```html
<!-- Form Container -->
<form class="max-w-md mx-auto p-6 bg-form-bg rounded shadow space-y-4">
  
  <!-- Form Fields -->
  <div>
    <label class="block text-sm font-medium text-text-dark mb-1">Label *</label>
    <input 
      type="text" 
      required
      class="w-full px-4 py-2 border border-soft-border rounded focus:outline-none focus:ring-2 focus:ring-brand-accent"
    >
  </div>

  <!-- Submit Button -->
  <button 
    type="submit"
    class="w-full bg-brand-accent hover:bg-brand-accent-dark text-white px-6 py-2 rounded shadow font-semibold transition-colors"
  >
    Submit
  </button>
</form>
```

**Form Standards:**
- **Container**: `max-w-md mx-auto p-6 bg-form-bg rounded shadow space-y-4`
- **Labels**: `block text-sm font-medium text-text-dark mb-1`
- **Inputs**: `w-full px-4 py-2 border border-soft-border rounded focus:outline-none focus:ring-2 focus:ring-brand-accent`
- **Buttons**: `w-full bg-brand-accent hover:bg-brand-accent-dark text-white px-6 py-2 rounded shadow font-semibold transition-colors`

### 📦 **Cards / Boxes**
- Use `bg-white p-6 rounded shadow`
- For smaller content blocks or service boxes
- Hover effects: `hover:shadow-lg transition-shadow`

## ✅ **Consistency Rules**

### **Colors**
- Use `text-text-dark` for all text unless contrast needed
- Apply `rounded` and `shadow` on all cards and buttons
- Avoid hard-coded hex values; use Tailwind tokens instead
- Stick to the same spacing scale: `gap-4`, `py-12`, `px-6`, etc.

### **Spacing**
- Section padding: `py-12 md:py-16`
- Container padding: `px-4`
- Gap between elements: `gap-4` or `gap-8`
- Button padding: `px-6 py-2`

### **Typography**
- Headings: `text-2xl md:text-4xl font-bold`
- Subheadings: `text-lg font-medium`
- Body text: `text-base leading-relaxed`
- All text uses `text-text-dark`

### **Forms - ALL STANDARDIZED**
✅ **All forms now use identical styling:**
- `src/components/ConsultForm.astro`
- `src/components/en/ContactForm.astro`
- `src/components/he/ContactForm.astro`

### **Components Updated**
✅ **Layouts**
- `src/layouts/en/Layout.astro`
- `src/layouts/he/Layout.astro`
- `src/layouts/en/PageLayout.astro`
- `src/layouts/he/PageLayout.astro`

✅ **Components**
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/en/Welcome.astro`
- `src/components/he/Welcome.astro`
- `src/components/en/ContactForm.astro`
- `src/components/he/ContactForm.astro`
- `src/components/ServiceCards.astro`
- `src/components/Testimonials.astro`
- `src/components/QuickActions.astro`
- `src/components/IntroBlock.astro`
- `src/components/HeroGallery.astro`
- `src/components/ConsultForm.astro`
- `src/components/WelcomeDynamic.astro`

✅ **Configuration**
- `tailwind.config.mjs`
- `src/styles/global.css`

## 🎯 **Implementation Summary**

All components now follow these consistent patterns:

1. **Brand Colors**: Using the defined color palette throughout
2. **Typography**: Consistent heading and text styles
3. **Spacing**: Uniform padding and margins
4. **Components**: Cards, buttons, and forms follow the same patterns
5. **Responsive Design**: Mobile-first approach with proper breakpoints
6. **Accessibility**: Proper contrast ratios and focus states
7. **Forms**: All forms now use identical styling structure

The entire project now has a cohesive, professional appearance that maintains visual consistency across all pages and components. 