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
          width: 48,
          height: 48,
          margin: "0 auto 16px",
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
          fontSize: "1.1rem",
          marginBottom: 8,
          color: "var(--color-text)",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "0.85rem",
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
    <div className="card" style={{ padding: "40px 32px" }}>
      <svg
        style={{
          width: 24,
          height: 24,
          margin: "0 auto 16px",
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
          fontSize: "0.95rem",
          fontStyle: "italic",
          color: "var(--color-text)",
          marginBottom: 16,
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
          fontSize: "0.65rem",
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

export default function ProfessionalTeamPhotography() {
  return (
    <>
      {/* ===== HERO — tighter height, more above the fold ===== */}
      <section
        style={{
          position: "relative",
          minHeight: "65vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80&auto=format&fit=crop"
          alt="Professional team collaborating in modern office"
          fill
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.55), rgba(255,255,255,0.5), var(--color-bg-light))",
          }}
        />

        <div
          className="section-container section-container--narrow"
          style={{ position: "relative", zIndex: 10, textAlign: "center", paddingTop: 48, paddingBottom: 48 }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "0.7rem",
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
              marginBottom: 20,
            }}
          >
            Innovative Images Photography &bull; McKinney, TX
          </p>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.6rem)",
              lineHeight: 1.1,
              color: "var(--color-text)",
              marginBottom: 20,
            }}
          >
            Professional Team Photography{" "}
            <span style={{ color: "var(--color-gold)" }}>for Your Organization</span>
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              fontWeight: 300,
              color: "var(--color-text-muted)",
              maxWidth: 560,
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 32,
              lineHeight: 1.8,
            }}
          >
            Cohesive, polished team portraits for corporate groups, medical
            practices, law firms, and professional organizations — on location,
            on your schedule.
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
      </section>

      {/* ===== INDUSTRY STRIP — immediately visible below hero ===== */}
      <section
        style={{
          backgroundColor: "var(--color-bg-white)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          padding: "28px 0",
        }}
      >
        <div className="section-container" style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "0.65rem",
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontWeight: 500,
              color: "var(--color-text-dim)",
              marginBottom: 12,
            }}
          >
            Trusted by teams across every industry
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px 32px",
              fontSize: "0.85rem",
              color: "var(--color-text-muted)",
              fontWeight: 300,
            }}
          >
            {["Corporate Teams", "Medical Practices", "Law Firms", "Financial Groups", "Executive Leadership"].map(
              (item, i) => (
                <span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "var(--color-gold)", fontSize: "0.5rem" }}>◆</span>
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ===== PROBLEM / AGITATION ===== */}
      <section className="section-block" style={{ backgroundColor: "var(--color-bg-light)", paddingTop: 72, paddingBottom: 72 }}>
        <div className="section-container section-container--narrow" style={{ textAlign: "center" }}>
          <ElegantDivider />
          <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", marginBottom: 32, color: "var(--color-text)" }}>
            Your Team Deserves a Unified, Professional Image
          </h2>

          <div style={{ maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: 1.9, marginBottom: 20, textAlign: "center" }}>
              Your team members appear on your website, in marketing materials,
              on LinkedIn, and in client-facing presentations. When those
              portraits look mismatched, outdated, or amateur,{" "}
              <strong style={{ color: "var(--color-text)", fontWeight: 500 }}>
                it undermines the professional image you&apos;ve worked so hard
                to build.
              </strong>
            </p>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: 1.9, textAlign: "center" }}>
              Inconsistent backgrounds. Headshots from five different
              photographers over a decade. Photos that look like they were taken
              with a phone. Clients, patients, and partners notice — and they
              make judgments in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TEAM GALLERY — mixed group shots ===== */}
      <section style={{ padding: "16px 0", backgroundColor: "var(--color-bg-warm)" }}>
        <div className="section-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr",
              gap: 12,
            }}
          >
            {/* Large group shot */}
            <div style={{ position: "relative", aspectRatio: "3/2", overflow: "hidden", gridRow: "1 / 3" }}>
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&auto=format&fit=crop"
                alt="Professional corporate team group photo"
                fill
                style={{ objectFit: "cover", objectPosition: "center", filter: "grayscale(20%)" }}
              />
            </div>
            {/* Medical team */}
            <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&auto=format&fit=crop"
                alt="Medical professional team portrait"
                fill
                style={{ objectFit: "cover", objectPosition: "top", filter: "grayscale(20%)" }}
              />
            </div>
            {/* Individual headshot */}
            <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop&crop=face"
                alt="Professional executive headshot"
                fill
                style={{ objectFit: "cover", objectPosition: "top", filter: "grayscale(20%)" }}
              />
            </div>
            {/* Legal / business team */}
            <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80&auto=format&fit=crop"
                alt="Business team in professional setting"
                fill
                style={{ objectFit: "cover", objectPosition: "center", filter: "grayscale(20%)" }}
              />
            </div>
            {/* Office candid */}
            <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop&crop=face"
                alt="Professional woman corporate portrait"
                fill
                style={{ objectFit: "cover", objectPosition: "top", filter: "grayscale(20%)" }}
              />
            </div>
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: "0.7rem",
              color: "var(--color-text-dim)",
              marginTop: 12,
              fontStyle: "italic",
            }}
          >
            Sample imagery — to be replaced with Kurt&apos;s portfolio
          </p>
        </div>
      </section>

      {/* ===== SOLUTION ===== */}
      <section className="section-block" style={{ backgroundColor: "var(--color-bg-warm)", paddingTop: 72, paddingBottom: 72 }}>
        <div className="section-container" style={{ textAlign: "center" }}>
          <ElegantDivider />
          <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", marginBottom: 12, color: "var(--color-text)" }}>
            What You Get Working with Kurt
          </h2>
          <p style={{ color: "var(--color-text-muted)", marginBottom: 44, maxWidth: 500, marginLeft: "auto", marginRight: "auto", fontSize: "0.95rem" }}>
            30+ years of experience, distilled into a seamless process designed
            for busy teams.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 20,
              maxWidth: 800,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <SolutionCard
              icon={
                <svg style={{ width: 22, height: 22 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              title="On-Location Convenience"
              description="Kurt comes to your office, practice, or firm — anywhere across the DFW metroplex. No one leaves the building."
            />
            <SolutionCard
              icon={
                <svg style={{ width: 22, height: 22 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Consistent, Unified Results"
              description="Every portrait is lit, composed, and retouched to the same exacting standard — a cohesive look across your entire team."
            />
            <SolutionCard
              icon={
                <svg style={{ width: 22, height: 22 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              title="Any Size Team"
              description="From a 3-person practice to a 50-person department — Kurt has the experience and equipment to deliver, efficiently."
            />
            <SolutionCard
              icon={
                <svg style={{ width: 22, height: 22 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              title="30+ Years of Expertise"
              description="Three decades photographing teams across corporate, medical, legal, and professional organizations throughout DFW."
            />
          </div>
        </div>
      </section>

      {/* ===== FULL-WIDTH IMAGE BREAK ===== */}
      <section style={{ position: "relative", height: 320, overflow: "hidden" }}>
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format&fit=crop"
          alt="Modern office interior"
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
      <section className="section-block" style={{ backgroundColor: "var(--color-bg-light)", paddingTop: 72, paddingBottom: 72 }}>
        <div className="section-container" style={{ textAlign: "center" }}>
          <ElegantDivider />
          <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", marginBottom: 44, color: "var(--color-text)" }}>
            Trusted by Teams Across DFW
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 28,
              maxWidth: 820,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Testimonial
              quote="We needed our entire staff of 25 photographed in a single afternoon with zero disruption to patient care. Kurt made it seamless — and the portraits look incredible."
              cite="Practice Manager, DFW Medical Group"
            />
            <Testimonial
              quote="Our previous headshots were a patchwork from years of different photographers. Kurt gave us a cohesive, professional look that finally matches the caliber of our firm."
              cite="Marketing Director, DFW Law Firm"
            />
          </div>

          <p style={{ marginTop: 28, fontSize: "0.7rem", color: "var(--color-text-dim)", fontStyle: "italic" }}>
            Placeholder testimonials — to be replaced with verified client quotes
          </p>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="section-block" style={{ backgroundColor: "var(--color-bg-warm)", paddingTop: 80, paddingBottom: 80 }}>
        <div className="section-container section-container--narrow" style={{ textAlign: "center" }}>
          <ElegantDivider />
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", marginBottom: 20, color: "var(--color-text)" }}>
            Your Team&apos;s Image{" "}
            <span style={{ color: "var(--color-gold)" }}>Starts Here</span>
          </h2>

          <p
            style={{
              fontSize: "1rem",
              color: "var(--color-text-muted)",
              maxWidth: 520,
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 36,
              lineHeight: 1.9,
            }}
          >
            A quick phone consultation is all it takes. No pressure, no
            obligation — just a conversation about what your team needs with a
            photographer who&apos;s been doing this for over 30 years.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 28,
            }}
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--primary">
              Book Your Free Consultation
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
              }}
            >
              {PHONE}
            </a>
          </p>

          <p
            style={{
              marginTop: 36,
              fontSize: "0.6rem",
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
          padding: "32px 0",
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
              style={{ color: "inherit", textDecoration: "none" }}
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
