import Image from "next/image";

const CALENDLY_URL =
  "https://calendly.com/innovativeimages/portraitphoneconsultation";
const WEBSITE_URL = "https://www.innovativeimagesphotos.com";
const PHONE = "972-335-3686";

/* ─── Reusable Components ─── */

function ElegantDivider() {
  return (
    <div className="elegant-divider">
      <span className="elegant-divider__line" />
      <span className="elegant-divider__diamond" />
      <span className="elegant-divider__line" />
    </div>
  );
}

function SolutionCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="card">
      <div
        style={{
          width: 56,
          height: 56,
          margin: "0 auto 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          backgroundColor: "var(--color-gold-dim)",
          color: "var(--color-gold)",
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "1.15rem",
          marginBottom: 12,
          color: "var(--color-text)",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "0.9rem",
          lineHeight: 1.7,
          color: "var(--color-text-muted)",
        }}
      >
        {description}
      </p>
    </div>
  );
}

function Testimonial({ quote, cite }: { quote: string; cite: string }) {
  return (
    <div className="card" style={{ padding: "48px 36px" }}>
      <svg
        style={{
          width: 28,
          height: 28,
          margin: "0 auto 20px",
          color: "var(--color-gold)",
          opacity: 0.3,
          display: "block",
        }}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <blockquote
        style={{
          fontSize: "1rem",
          fontStyle: "italic",
          color: "var(--color-text)",
          marginBottom: 20,
          lineHeight: 1.8,
          maxWidth: 420,
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        {quote}
      </blockquote>
      <cite
        style={{
          fontStyle: "normal",
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "1.5px",
          color: "var(--color-gold)",
          textTransform: "uppercase",
        }}
      >
        {cite}
      </cite>
    </div>
  );
}

/* ─── Page ─── */

export default function CorporateBoardPhotography() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80&auto=format&fit=crop"
          alt="Confident executive in professional business attire"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        {/* Light overlay for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,255,255,0.5), var(--color-bg-light))",
          }}
        />

        <div
          className="section-container section-container--narrow"
          style={{ position: "relative", zIndex: 10, textAlign: "center" }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "0.7rem",
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
              marginBottom: 24,
            }}
          >
            Innovative Images Photography
          </p>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
              lineHeight: 1.1,
              color: "var(--color-text)",
              marginBottom: 24,
            }}
          >
            Your Board Deserves a{" "}
            <span style={{ color: "var(--color-gold)" }}>Powerful</span> First
            Impression
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: 300,
              color: "var(--color-text-muted)",
              maxWidth: 540,
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 40,
              lineHeight: 1.8,
            }}
          >
            Professional board of directors photography that commands trust,
            credibility, and confidence — delivered on your schedule, at your
            location.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--primary">
              Schedule Your Consultation
            </a>
            <a href={WEBSITE_URL} rel="noopener noreferrer" className="cta-btn cta-btn--outline">
              Visit Our Website
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <svg
            style={{ width: 24, height: 24, color: "var(--color-gold)", opacity: 0.5 }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===== PROBLEM / AGITATION ===== */}
      <section className="section-block" style={{ backgroundColor: "var(--color-bg-light)" }}>
        <div className="section-container section-container--narrow" style={{ textAlign: "center" }}>
          <ElegantDivider />
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", marginBottom: 40, color: "var(--color-text)" }}>
            The Cost of Looking Unprepared
          </h2>

          <div style={{ maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
            <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.9, marginBottom: 24, textAlign: "center" }}>
              Your board members appear on your website, in annual reports, on
              investor presentations, and across LinkedIn. When those portraits
              look dated, inconsistent, or amateur,{" "}
              <strong style={{ color: "var(--color-text)", fontWeight: 500 }}>
                it undermines the very authority they&apos;re supposed to project.
              </strong>
            </p>
            <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.9, marginBottom: 24, textAlign: "center" }}>
              Mismatched backgrounds. Outdated headshots from three different
              decades. Photos that look like they were taken with a phone in a
              conference room. Prospects, partners, and stakeholders notice — and
              they make judgments in seconds.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.9, textAlign: "center" }}>
              Your leadership team has earned their seats at the table. Their
              portraits should reflect that — with the same level of
              professionalism they bring to every decision they make.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PORTRAIT GALLERY STRIP ===== */}
      <section style={{ paddingTop: 16, paddingBottom: 16, backgroundColor: "var(--color-bg-warm)" }}>
        <div className="section-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 12,
            }}
          >
            {[
              {
                src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop&crop=face",
                alt: "Executive portrait — male professional in suit",
              },
              {
                src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop&crop=face",
                alt: "Executive portrait — female professional",
              },
              {
                src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&auto=format&fit=crop&crop=face",
                alt: "Executive portrait — male professional",
              },
              {
                src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80&auto=format&fit=crop&crop=face",
                alt: "Executive portrait — female professional",
              },
            ].map((img, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  aspectRatio: "3/4",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                    filter: "grayscale(30%)",
                    transition: "all 0.5s ease",
                  }}
                />
              </div>
            ))}
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: "0.75rem",
              color: "var(--color-text-dim)",
              marginTop: 16,
              fontStyle: "italic",
            }}
          >
            Sample portraits — to be replaced with Kurt&apos;s portfolio work
          </p>
        </div>
      </section>

      {/* ===== SOLUTION ===== */}
      <section className="section-block" style={{ backgroundColor: "var(--color-bg-warm)" }}>
        <div className="section-container" style={{ textAlign: "center" }}>
          <ElegantDivider />
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", marginBottom: 16, color: "var(--color-text)" }}>
            What You Get Working with Kurt
          </h2>
          <p style={{ color: "var(--color-text-muted)", marginBottom: 56, maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}>
            30+ years of experience, distilled into a seamless process designed
            for busy leadership teams.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 24,
            }}
          >
            <SolutionCard
              icon={
                <svg style={{ width: 24, height: 24 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              title="On-Location"
              description="Kurt comes to your boardroom or office across the DFW metroplex. No one leaves the building."
            />
            <SolutionCard
              icon={
                <svg style={{ width: 24, height: 24 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Consistent Results"
              description="Every portrait is lit, composed, and retouched to the same exacting standard — unified across your entire board."
            />
            <SolutionCard
              icon={
                <svg style={{ width: 24, height: 24 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Fast Turnaround"
              description="Retouched portraits delivered promptly — ready for your website, publications, and print materials."
            />
            <SolutionCard
              icon={
                <svg style={{ width: 24, height: 24 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              title="30+ Years"
              description="Three decades photographing executives, physicians, attorneys, and leadership teams across DFW."
            />
          </div>
        </div>
      </section>

      {/* ===== FULL-WIDTH IMAGE BREAK ===== */}
      <section style={{ position: "relative", height: 380, overflow: "hidden" }}>
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format&fit=crop"
          alt="Modern corporate office interior"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(245,243,239,0.85), rgba(245,243,239,0.3), rgba(245,243,239,0.85))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                color: "var(--color-text)",
                fontSize: "0.7rem",
                letterSpacing: "5px",
                textTransform: "uppercase",
                marginBottom: 12,
                fontWeight: 500,
              }}
            >
              Serving the Entire DFW Metroplex
            </p>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", letterSpacing: "3px" }}>
              McKinney &bull; Frisco &bull; Plano &bull; Allen &bull; Dallas &bull; Fort Worth
            </p>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      <section className="section-block" style={{ backgroundColor: "var(--color-bg-light)" }}>
        <div className="section-container" style={{ textAlign: "center" }}>
          <ElegantDivider />
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", marginBottom: 56, color: "var(--color-text)" }}>
            Trusted by DFW Organizations
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 32,
              maxWidth: 900,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Testimonial
              quote="We needed all twelve board members photographed in a single afternoon with zero disruption. Kurt delivered — and the portraits have completely elevated our annual report."
              cite="Office Manager, DFW-Area Law Firm"
            />
            <Testimonial
              quote="Our previous headshots were a patchwork from ten years of different photographers. Kurt gave us a cohesive look that finally matches the caliber of our team."
              cite="Marketing Director, Regional Medical Practice"
            />
          </div>

          <p style={{ marginTop: 32, fontSize: "0.75rem", color: "var(--color-text-dim)", fontStyle: "italic" }}>
            Placeholder testimonials — to be replaced with verified client quotes
          </p>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="section-block" style={{ backgroundColor: "var(--color-bg-warm)", paddingTop: 112, paddingBottom: 112 }}>
        <div className="section-container section-container--narrow" style={{ textAlign: "center" }}>
          <ElegantDivider />
          <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", marginBottom: 24, color: "var(--color-text)" }}>
            Your Board&apos;s Image{" "}
            <span style={{ color: "var(--color-gold)" }}>Starts Here</span>
          </h2>

          <p
            style={{
              fontSize: "1rem",
              color: "var(--color-text-muted)",
              maxWidth: 520,
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 40,
              lineHeight: 1.9,
            }}
          >
            A 15-minute phone consultation is all it takes. No pressure, no
            obligation — just a conversation with a photographer who&apos;s done
            this thousands of times.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 32,
            }}
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--primary">
              Book a 15-Minute Call
            </a>
            <a href={WEBSITE_URL} rel="noopener noreferrer" className="cta-btn cta-btn--outline">
              Visit Our Website
            </a>
          </div>

          <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
            Or call directly:{" "}
            <a
              href={`tel:+1${PHONE.replace(/-/g, "")}`}
              style={{
                color: "var(--color-gold)",
                textDecoration: "none",
                fontWeight: 500,
                letterSpacing: "1px",
                transition: "color 0.3s",
              }}
            >
              {PHONE}
            </a>
          </p>

          <p
            style={{
              marginTop: 40,
              fontSize: "0.65rem",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--color-text-dim)",
            }}
          >
            Innovative Images Photography &bull; McKinney, Texas
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer
        style={{
          textAlign: "center",
          padding: "40px 0",
          backgroundColor: "var(--color-bg-light)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="section-container">
          <p style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", color: "var(--color-text)", marginBottom: 4 }}>
            Innovative Images Photography
          </p>
          <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: 4 }}>
            <a
              href={`tel:+1${PHONE.replace(/-/g, "")}`}
              style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}
            >
              {PHONE}
            </a>{" "}
            &bull; McKinney, TX 75072
          </p>
          <p style={{ fontSize: "0.75rem", color: "var(--color-text-dim)" }}>
            &copy; {new Date().getFullYear()} Innovative Images. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
