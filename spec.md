# Specification

## Summary
**Goal:** Add scroll-triggered animations to the subsidy structure section, add the office address to the footer, and display the service area for TRI-GITA SERVICES.

**Planned changes:**
- Add scroll-triggered fade-in and slide-up animations to the subsidy structure table rows in `OdishaGuide.tsx` using IntersectionObserver and CSS keyframes, consistent with the BankFinanceBanner animation pattern, with `prefers-reduced-motion` support
- Add the office address (Shri Hari Niwas, Dengimacha, Near Dengimacha Ministadium, Sambalpur, Odisha 768006) to the Footer component alongside existing contact details
- Add "Service Area: Odisha" to the Footer component in a clear, consistently styled manner

**User-visible outcome:** The subsidy structure section now animates into view on scroll, the footer displays the full office address, and users can clearly see that TRI-GITA SERVICES covers Odisha as its service area.
