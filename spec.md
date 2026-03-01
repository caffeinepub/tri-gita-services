# Specification

## Summary
**Goal:** Add multilingual support (English, Hindi, and Odia) to the TRI-GITA SERVICES frontend so visitors can view the entire page in their preferred language.

**Planned changes:**
- Create a language context provider managing the selected language (English, Hindi, Odia), defaulting to English and persisting the choice in localStorage.
- Add a language switcher UI in the Header component (desktop nav and mobile hamburger menu) displaying "English", "हिन्दी", and "ଓଡ଼ିଆ", with the active language visually highlighted.
- Create a centralized translations file (`frontend/src/i18n/translations.ts`) containing all UI strings in all three languages for every section (Header, Hero, SchemeInfo, OdishaGuide, WhyChooseUs, WarrantyGuarantee, Services, InquiryForm, BankFinanceBanner, WhatsAppSection, Footer).
- Update all page-section components to consume translated strings from the language context instead of hard-coded text, including form placeholders, labels, and validation messages.

**User-visible outcome:** Visitors can switch the entire page between English, Hindi, and Odia instantly using the language switcher in the header, with all text content — including forms and section descriptions — updating without a page reload.
