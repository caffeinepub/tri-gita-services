# Specification

## Summary
**Goal:** Add an inquiry form with WhatsApp integration to the TRI-GITA SERVICES solar website.

**Planned changes:**
- Create an `InquiryForm` component with fields: Full Name (required), Phone Number (required), Email (optional), City/Location, System Size of Interest (dropdown: 1-3 kW, 3-5 kW, 5-10 kW, 10+ kW), and Message/Query
- On form submit, format all field values into a pre-filled WhatsApp message URL targeting `+917838867880` and open it in a new tab
- Add basic client-side validation (Full Name and Phone Number required)
- Style the form using the existing solar amber/charcoal Tailwind theme
- Insert the `InquiryForm` section into `App.tsx` between the Services section and the BankFinanceBanner section, with an `id` anchor for smooth scrolling
- Add a nav link ("Get Quote" or "Inquiry") in the Header that smooth-scrolls to the inquiry form section

**User-visible outcome:** Visitors can fill out an inquiry form on the site and, upon submission, are redirected to WhatsApp with a pre-filled message sent directly to the business number.
