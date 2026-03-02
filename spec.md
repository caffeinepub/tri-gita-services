# Specification

## Summary
**Goal:** Recreate the full TRI-GITA SERVICES solar energy website, including the Motoko backend for lead management and the complete React/TypeScript frontend with multilingual support.

**Planned changes:**
- Recreate the Motoko backend actor with a stable map storing leads keyed by email, supporting submitLead, deleteLead, getLead, and listLeads (sorted by name)
- Recreate the React frontend with all sections in order: Header, Hero, SchemeInfo, OdishaGuide, Services, WhyChooseUs, BankFinanceBanner, WarrantyGuarantee, InquiryForm, WhatsAppSection, Footer, and FloatingWhatsAppButton, all wrapped in LanguageProvider
- Recreate the fixed Header with scroll-aware background, EN/HI/OD language switcher, mobile nav, and WhatsApp CTA
- Recreate the full-screen Hero with background image, navy gradient overlay, translated headline/tagline, CTA buttons, and stat tiles
- Recreate SchemeInfo explaining PM Surya Ghar scheme with benefits, eligibility, and four-step process
- Recreate OdishaGuide with subsidy tier cards (1kW, 2kW, 3kW+), rollout phase info, and scroll-triggered fade-in animations
- Recreate Services section with residential and commercial image cards, feature checklists, and inquiry form CTAs
- Recreate WhyChooseUs with three feature cards using navy, gold, and teal accent themes
- Recreate BankFinanceBanner as an animated dark navy banner with shimmer effects and gold stat cards
- Recreate WarrantyGuarantee section with 25-year, 10-year, and 5-year cards using navy, gold, and teal accents
- Recreate InquiryForm with six fields, validation, WhatsApp deep-link on submission, and backend submitLead mutation via useSubmitLead hook
- Recreate WhatsAppSection with branded card and direct WhatsApp contact button
- Recreate Footer with two-column layout (brand identity + contact details) on navy-900 background with gold accents
- Recreate LanguageContext with localStorage persistence and useTranslation hook for EN, HI, and OD
- Recreate full i18n translations file covering all UI sections in all three languages
- Recreate global CSS with Google Fonts (Outfit, Playfair Display), Tailwind directives, custom navy/gold/teal tokens, and shimmer keyframe animations
- Recreate Tailwind config extending the theme with custom fonts, OKLCH-based color palettes, border radii, shadows, and accordion animations
- Recreate useSubmitLead mutation hook that calls actor.submitLead and invalidates the 'leads' query on success

**User-visible outcome:** A fully functional solar energy marketing website for TRI-GITA SERVICES with multilingual support (English, Hindi, Odia), lead capture form, WhatsApp integration, government scheme information, and a backend that stores and manages submitted leads.
