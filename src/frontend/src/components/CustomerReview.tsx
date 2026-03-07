import { CheckCircle, MessageSquare, Star } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useTranslation } from "../i18n/useTranslation";

const WHATSAPP_NUMBER = "917838867880";

interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

function StarButton({
  index,
  filled,
  hovered,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  index: number;
  filled: boolean;
  hovered: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <button
      type="button"
      data-ocid={`customer_review.rating.${index}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-label={`Rate ${index} star${index > 1 ? "s" : ""}`}
      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded transition-transform hover:scale-110 active:scale-95"
    >
      <Star
        className={`w-8 h-8 transition-colors duration-150 ${
          filled || hovered
            ? "fill-amber-400 text-amber-400"
            : "fill-transparent text-muted-foreground"
        }`}
      />
    </button>
  );
}

function ReviewCard({
  review,
  index,
}: {
  review: Review;
  index: number;
}) {
  const initials = review.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div
      data-ocid={`customer_review.item.${index + 1}`}
      className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
      style={{
        animation: `fade-in-up 0.4s ease-out ${index * 0.08}s both`,
      }}
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {(["s1", "s2", "s3", "s4", "s5"] as const).map((key, i) => (
          <Star
            key={key}
            className={`w-4 h-4 ${
              i < review.rating
                ? "fill-amber-400 text-amber-400"
                : "fill-transparent text-muted-foreground"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Review text */}
      <p className="text-foreground/80 text-sm leading-relaxed mb-4 line-clamp-4">
        "{review.text}"
      </p>

      <div className="border-t border-border pt-3">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xs shrink-0"
            aria-hidden="true"
          >
            {initials}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-foreground text-sm truncate">
              {review.name}
            </p>
            <p className="text-muted-foreground text-xs truncate">
              {review.location}
            </p>
          </div>
          <div className="ml-auto shrink-0">
            <span className="text-muted-foreground text-xs">{review.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CustomerReview() {
  const t = useTranslation();
  const cr = t.customerReview;

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: "Arman Bhardwaj",
      location: "Sambalpur",
      rating: 5,
      text: "It was really a great experience. They were very friendly and helpful. Within a single day installed 3KW solar system at our home. I am very happy with their service, recommend everyone to avail the service.",
      date: "6 Mar 2026",
    },
  ]);

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = cr.nameRequired;
    if (!location.trim()) newErrors.location = cr.locationRequired;
    if (!reviewText.trim()) newErrors.review = cr.reviewRequired;
    if (rating === 0) newErrors.rating = cr.ratingRequired;
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    const today = new Date();
    const dateStr = today.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const newReview: Review = {
      name: name.trim(),
      location: location.trim(),
      rating,
      text: reviewText.trim(),
      date: dateStr,
    };

    // Add to local state
    setReviews((prev) => [newReview, ...prev]);

    // Open WhatsApp with review pre-filled
    const stars = "⭐".repeat(rating);
    const message = encodeURIComponent(
      `🌟 *New Customer Review* 🌟\n\n*Name:* ${newReview.name}\n*Location:* ${newReview.location}\n*Rating:* ${stars} (${rating}/5)\n\n*Review:*\n${newReview.text}\n\n📅 ${dateStr}`,
    );
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Reset form
    setName("");
    setLocation("");
    setRating(0);
    setReviewText("");
    setSubmitting(false);
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <section
      id="customer-review"
      data-ocid="customer_review.section"
      className="relative py-20 overflow-hidden"
      style={{ background: "oklch(0.94 0.01 185)" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.38 0.12 185 / 0.3) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Decorative glow */}
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none opacity-15"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.18 68 / 0.5) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase border border-primary/20">
            <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
            {cr.sectionBadge}
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {cr.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {cr.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Review Form */}
          <div className="bg-card border border-border rounded-3xl p-8 shadow-md">
            <form onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div className="mb-5">
                <label
                  htmlFor="review-name"
                  className="block text-sm font-semibold text-foreground mb-1.5"
                >
                  {cr.namePlaceholder}
                </label>
                <input
                  id="review-name"
                  type="text"
                  data-ocid="customer_review.name_input"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((p) => ({ ...p, name: "" }));
                  }}
                  placeholder={cr.namePlaceholder}
                  aria-invalid={!!errors.name}
                  aria-describedby={
                    errors.name ? "review-name-error" : undefined
                  }
                  className={`w-full px-4 py-3 rounded-xl border text-sm bg-background text-foreground placeholder:text-muted-foreground
                    focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors
                    ${errors.name ? "border-destructive" : "border-border"}`}
                />
                {errors.name && (
                  <p
                    id="review-name-error"
                    className="mt-1.5 text-xs text-destructive"
                    role="alert"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Location */}
              <div className="mb-5">
                <label
                  htmlFor="review-location"
                  className="block text-sm font-semibold text-foreground mb-1.5"
                >
                  {cr.locationPlaceholder}
                </label>
                <input
                  id="review-location"
                  type="text"
                  data-ocid="customer_review.location_input"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                    if (errors.location)
                      setErrors((p) => ({ ...p, location: "" }));
                  }}
                  placeholder={cr.locationPlaceholder}
                  aria-invalid={!!errors.location}
                  aria-describedby={
                    errors.location ? "review-location-error" : undefined
                  }
                  className={`w-full px-4 py-3 rounded-xl border text-sm bg-background text-foreground placeholder:text-muted-foreground
                    focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors
                    ${errors.location ? "border-destructive" : "border-border"}`}
                />
                {errors.location && (
                  <p
                    id="review-location-error"
                    className="mt-1.5 text-xs text-destructive"
                    role="alert"
                  >
                    {errors.location}
                  </p>
                )}
              </div>

              {/* Star Rating */}
              <div className="mb-5">
                <p className="text-sm font-semibold text-foreground mb-2">
                  {cr.ratingLabel}
                </p>
                <fieldset
                  className="flex gap-1 border-none p-0 m-0"
                  aria-label={cr.ratingLabel}
                  onMouseLeave={() => setHoveredRating(0)}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarButton
                      key={star}
                      index={star}
                      filled={star <= rating}
                      hovered={star <= hoveredRating}
                      onClick={() => {
                        setRating(star);
                        if (errors.rating)
                          setErrors((p) => ({ ...p, rating: "" }));
                      }}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                    />
                  ))}
                </fieldset>
                {errors.rating && (
                  <p className="mt-1.5 text-xs text-destructive" role="alert">
                    {errors.rating}
                  </p>
                )}
              </div>

              {/* Review Text */}
              <div className="mb-6">
                <label
                  htmlFor="review-text"
                  className="block text-sm font-semibold text-foreground mb-1.5"
                >
                  {cr.reviewPlaceholder}
                </label>
                <textarea
                  id="review-text"
                  data-ocid="customer_review.textarea"
                  value={reviewText}
                  onChange={(e) => {
                    setReviewText(e.target.value);
                    if (errors.review) setErrors((p) => ({ ...p, review: "" }));
                  }}
                  placeholder={cr.reviewPlaceholder}
                  rows={4}
                  aria-invalid={!!errors.review}
                  aria-describedby={
                    errors.review ? "review-text-error" : undefined
                  }
                  className={`w-full px-4 py-3 rounded-xl border text-sm bg-background text-foreground placeholder:text-muted-foreground
                    focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none
                    ${errors.review ? "border-destructive" : "border-border"}`}
                />
                {errors.review && (
                  <p
                    id="review-text-error"
                    className="mt-1.5 text-xs text-destructive"
                    role="alert"
                  >
                    {errors.review}
                  </p>
                )}
              </div>

              {/* Success message */}
              {submitted && (
                <output
                  data-ocid="customer_review.success_state"
                  className="flex items-center gap-2 bg-success/10 border border-success/30 text-success rounded-xl px-4 py-3 mb-4 text-sm"
                  aria-live="polite"
                >
                  <CheckCircle
                    className="w-4 h-4 shrink-0"
                    aria-hidden="true"
                  />
                  {cr.successMsg}
                </output>
              )}

              {/* Submit */}
              <button
                type="submit"
                data-ocid="customer_review.submit_button"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground
                  font-semibold py-3.5 px-6 rounded-xl hover:bg-primary/90 transition-all duration-200
                  shadow-md hover:shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-sm"
              >
                {submitting ? (
                  cr.submitting
                ) : (
                  <>
                    <Star className="w-4 h-4" aria-hidden="true" />
                    {cr.submitBtn}
                  </>
                )}
              </button>

              <p className="text-center text-muted-foreground text-xs mt-3">
                Your review will be sent to our WhatsApp for verification.
              </p>
            </form>
          </div>

          {/* Reviews List */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-foreground mb-5">
              {cr.recentReviews}
            </h3>

            <div
              data-ocid="customer_review.list"
              className="space-y-4 max-h-[600px] overflow-y-auto pr-1"
            >
              {reviews.length === 0 ? (
                <div
                  data-ocid="customer_review.empty_state"
                  className="flex flex-col items-center justify-center py-16 text-center border-2 border-dashed border-border rounded-2xl bg-card/50"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MessageSquare
                      className="w-7 h-7 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    {cr.noReviews}
                  </p>
                </div>
              ) : (
                reviews.map((review, idx) => (
                  <ReviewCard
                    key={`${review.name}-${idx}`}
                    review={review}
                    index={idx}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
