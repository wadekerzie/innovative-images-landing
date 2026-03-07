import Image from "next/image";

const CALENDLY_URL =
  "https://calendly.com/innovativeimages/portraitphoneconsultation";

function CTAButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}) {
  const base =
    "inline-block font-[family-name:var(--font-body)] font-bold text-sm tracking-[2px] uppercase no-underline px-10 py-4 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0";
  const styles =
    variant === "primary"
      ? "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] shadow-[0_4px_24px_var(--color-accent-glow)]"
      : "border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-bg-dark)]";
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

function GoldRule() {
  return (
    <div className="flex items-center justify-center gap-4 mb-10">
      <span className="block w-12 h-px bg-[var(--color-gold)]" />
      <span className="block w-1.5 h-1.5 rotate-45 border border-[var(--color-gold)]" />
      <span className="block w-12 h-px bg-[var(--color-gold)]" />
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
    <div className="text-center p-8 bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-gold)] transition-colors duration-300 group">
      <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-[var(--color-gold-dim)] text-[var(--color-gold)] group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg mb-3 text-[var(--color-text)]">{title}</h3>
      <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
        {description}
      </p>
    </div>
  );
}

function Testimonial({ quote, cite }: { quote: string; cite: string }) {
  return (
    <div className="text-center p-10 bg-[var(--color-bg-dark)] border border-[var(--color-border)] relative">
      <svg
        className="w-8 h-8 mx-auto mb-5 text-[var(--color-gold)] opacity-40"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <blockquote className="text-base italic text-[var(--color-text)] mb-5 leading-7 max-w-md mx-auto text-center">
        {quote}
      </blockquote>
      <cite className="not-italic text-xs font-bold tracking-[1.5px] text-[var(--color-gold)] uppercase">
        {cite}
      </cite>
    </div>
  );
}

export default function CorporateBoardPhotography() {
  return (
    <>
      {/* ===== HERO — Full-bleed image with overlay ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80&auto=format"
          alt="Professional corporate boardroom"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[var(--color-bg-dark)]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="font-[family-name:var(--font-body)] font-light text-xs tracking-[5px] uppercase text-[var(--color-gold)] mb-6">
            Innovative Images Photography
          </p>

          <h1 className="text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.1] text-white mb-6">
            Your Board Deserves a{" "}
            <span className="text-[var(--color-gold)]">Powerful</span>{" "}
            First Impression
          </h1>

          <p className="text-lg font-light text-white/70 max-w-xl mx-auto mb-10 leading-8">
            Professional board of directors photography that commands trust,
            credibility, and confidence — delivered on your schedule, at your
            location.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton>Schedule Your Consultation</CTAButton>
            <CTAButton variant="outline">View Our Work</CTAButton>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-[var(--color-gold)] opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM / AGITATION — Dark section ===== */}
      <section className="py-24 bg-[var(--color-bg-dark)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <GoldRule />
          <h2 className="text-[clamp(1.6rem,4vw,2.6rem)] mb-10 text-[var(--color-text)]">
            The Cost of Looking Unprepared
          </h2>

          <div className="space-y-6 text-center max-w-2xl mx-auto">
            <p className="text-base text-[var(--color-text-muted)] leading-8">
              Your board members appear on your website, in annual reports, on
              investor presentations, and across LinkedIn. When those portraits
              look dated, inconsistent, or amateur,{" "}
              <strong className="text-[var(--color-text)] font-normal">
                it undermines the very authority they&apos;re supposed to
                project.
              </strong>
            </p>
            <p className="text-base text-[var(--color-text-muted)] leading-8">
              Mismatched backgrounds. Outdated headshots from three different
              decades. Photos that look like they were taken with a phone in a
              conference room. Prospects, partners, and stakeholders notice — and
              they make judgments in seconds.
            </p>
            <p className="text-base text-[var(--color-text-muted)] leading-8">
              Your leadership team has earned their seats at the table. Their
              portraits should reflect that — with the same level of
              professionalism they bring to every decision they make.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO IMAGE STRIP ===== */}
      <section className="relative h-80 sm:h-96 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80&auto=format&fit=crop"
          alt="Professional executive portrait with dramatic lighting"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-dark)] via-transparent to-[var(--color-bg-dark)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-xs tracking-[6px] uppercase text-white/40 bg-black/40 px-6 py-3 backdrop-blur-sm">
            Replace with Kurt&apos;s portfolio image
          </p>
        </div>
      </section>

      {/* ===== SOLUTION — Slightly lighter section ===== */}
      <section className="py-24 bg-[var(--color-bg-section)]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <GoldRule />
          <h2 className="text-[clamp(1.6rem,4vw,2.6rem)] mb-4 text-[var(--color-text)]">
            What You Get Working with Kurt
          </h2>
          <p className="text-[var(--color-text-muted)] mb-14 max-w-xl mx-auto">
            30+ years of experience, distilled into a seamless process designed
            for busy leadership teams.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SolutionCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              title="On-Location"
              description="Kurt comes to your boardroom or office across the DFW metroplex. No one leaves the building."
            />
            <SolutionCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Consistent Results"
              description="Every portrait is lit, composed, and retouched to the same exacting standard — unified across your entire board."
            />
            <SolutionCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Fast Turnaround"
              description="Retouched portraits delivered promptly — ready for your website, publications, and print materials."
            />
            <SolutionCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* ===== SOCIAL PROOF ===== */}
      <section className="py-24 bg-[var(--color-bg-dark)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <GoldRule />
          <h2 className="text-[clamp(1.6rem,4vw,2.6rem)] mb-14 text-[var(--color-text)]">
            Trusted by DFW Organizations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Testimonial
              quote="We needed all twelve board members photographed in a single afternoon with zero disruption. Kurt delivered — and the portraits have completely elevated our annual report."
              cite="Office Manager, DFW-Area Law Firm"
            />
            <Testimonial
              quote="Our previous headshots were a patchwork from ten years of different photographers. Kurt gave us a cohesive look that finally matches the caliber of our team."
              cite="Marketing Director, Regional Medical Practice"
            />
          </div>

          <p className="mt-8 text-xs text-[var(--color-text-dim)] italic">
            Placeholder testimonials — to be replaced with verified client quotes
          </p>
        </div>
      </section>

      {/* ===== SECOND IMAGE STRIP ===== */}
      <section className="relative h-72 sm:h-80 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80&auto=format&fit=crop"
          alt="Corporate team in a modern boardroom setting"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-[var(--color-gold)] text-xs tracking-[5px] uppercase mb-3">
              Serving the Entire DFW Metroplex
            </p>
            <p className="text-white/60 text-sm tracking-widest">
              McKinney &bull; Frisco &bull; Plano &bull; Allen &bull; Dallas
              &bull; Fort Worth
            </p>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-28 bg-[var(--color-bg-section)] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <GoldRule />
          <h2 className="text-[clamp(1.8rem,4.5vw,3rem)] mb-6 text-[var(--color-text)]">
            Your Board&apos;s Image{" "}
            <span className="text-[var(--color-gold)]">Starts Here</span>
          </h2>

          <p className="text-base text-[var(--color-text-muted)] max-w-lg mx-auto mb-10 leading-8">
            A 15-minute phone consultation is all it takes. No pressure, no
            obligation — just a conversation with a photographer who&apos;s done
            this thousands of times.
          </p>

          <CTAButton>Book a 15-Minute Call</CTAButton>

          <p className="mt-10 text-xs tracking-[3px] uppercase text-[var(--color-text-dim)]">
            Innovative Images Photography &bull; McKinney, Texas
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="text-center py-10 bg-[var(--color-bg-dark)] border-t border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm text-[var(--color-text-muted)] mb-1">
            Innovative Images Photography
          </p>
          <p className="text-xs text-[var(--color-text-dim)]">
            &copy; {new Date().getFullYear()} Innovative Images. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
