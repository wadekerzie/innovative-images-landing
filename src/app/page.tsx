const CALENDLY_URL =
  "https://calendly.com/innovativeimages/portraitphoneconsultation";

function CTAButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-[var(--color-brand-accent)] text-[var(--color-brand-light)] font-[var(--font-body)] font-bold text-[0.95rem] tracking-[1.5px] uppercase no-underline px-10 py-4 transition-all duration-300 hover:bg-[var(--color-brand-accent-hover)] hover:-translate-y-0.5 active:translate-y-0 ${className}`}
    >
      {children}
    </a>
  );
}

function SectionRule() {
  return (
    <hr className="w-10 h-0.5 bg-[var(--color-brand-accent)] border-none mx-auto mb-8" />
  );
}

function SolutionItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="pl-5 border-l-2 border-[var(--color-brand-accent)]">
      <h3 className="font-[var(--font-heading)] text-lg mb-2 text-[var(--color-brand-light)]">
        {title}
      </h3>
      <p className="text-[0.95rem] text-[var(--color-brand-light)]/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function Testimonial({ quote, cite }: { quote: string; cite: string }) {
  return (
    <div className="text-left p-8 bg-[var(--color-brand-light)]/[0.04] border-t-2 border-[var(--color-brand-accent)]">
      <blockquote className="text-base italic text-[var(--color-brand-light)]/85 mb-4 leading-7">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <cite className="not-italic text-[0.85rem] font-bold tracking-[0.5px] text-[var(--color-brand-light)]/50 uppercase">
        {cite}
      </cite>
    </div>
  );
}

export default function CorporateBoardPhotography() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="pt-24 pb-20 text-center border-b border-[var(--color-brand-subtle)]">
        <div className="max-w-[780px] mx-auto px-6">
          <p className="font-[var(--font-body)] font-light text-[0.8rem] tracking-[4px] uppercase text-[var(--color-brand-light)]/50 mb-8">
            Innovative Images Photography
          </p>

          {/* Placeholder hero image area */}
          <div className="w-full max-w-[600px] mx-auto mb-10 aspect-[16/9] bg-[var(--color-brand-darker)] border border-[var(--color-brand-subtle)] flex items-center justify-center">
            <div className="text-center px-8">
              <svg
                className="w-16 h-16 mx-auto mb-3 opacity-20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-[0.75rem] tracking-[2px] uppercase text-[var(--color-brand-light)]/20">
                Portfolio image placeholder
              </p>
            </div>
          </div>

          <h1 className="font-[var(--font-heading)] text-[clamp(2.4rem,5.5vw,3.6rem)] text-[var(--color-brand-light)] mb-5">
            Your Board Deserves a{" "}
            <span className="text-[var(--color-brand-accent)]">Powerful</span>{" "}
            First Impression
          </h1>
          <p className="text-lg font-light text-[var(--color-brand-light)]/75 max-w-[560px] mx-auto mb-10 leading-7">
            Professional board of directors photography that commands trust,
            credibility, and confidence — delivered on your schedule, at your
            location.
          </p>
          <CTAButton>Schedule Your Consultation</CTAButton>
        </div>
      </section>

      {/* ===== PROBLEM / AGITATION ===== */}
      <section className="py-18 border-b border-[var(--color-brand-subtle)]">
        <div className="max-w-[780px] mx-auto px-6">
          <SectionRule />
          <h2 className="font-[var(--font-heading)] text-[clamp(1.6rem,3.5vw,2.2rem)] mb-8 text-center">
            The Cost of Looking Unprepared
          </h2>

          <div className="max-w-[660px] mx-auto space-y-5">
            <p className="text-[1.05rem] text-[var(--color-brand-light)]/80">
              Your board members appear on your website, in annual reports, on
              investor presentations, and across LinkedIn. When those portraits
              look dated, inconsistent, or amateur,{" "}
              <strong className="text-[var(--color-brand-light)] font-bold">
                it undermines the very authority they&apos;re supposed to
                project.
              </strong>
            </p>
            <p className="text-[1.05rem] text-[var(--color-brand-light)]/80">
              Mismatched backgrounds. Outdated headshots from three different
              decades. Photos that look like they were taken with a phone in a
              conference room. Prospects, partners, and stakeholders notice — and
              they make judgments in seconds.
            </p>
            <p className="text-[1.05rem] text-[var(--color-brand-light)]/80">
              Your leadership team has earned their seats at the table. Their
              portraits should reflect that — with the same level of
              professionalism they bring to every decision they make.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SOLUTION ===== */}
      <section className="py-18 border-b border-[var(--color-brand-subtle)]">
        <div className="max-w-[780px] mx-auto px-6">
          <SectionRule />
          <h2 className="font-[var(--font-heading)] text-[clamp(1.6rem,3.5vw,2.2rem)] mb-12 text-center">
            What You Get Working with Kurt
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <SolutionItem
              title="On-Location Convenience"
              description="Kurt comes to your boardroom, office, or preferred location across the DFW metroplex. No one leaves the building. Minimal disruption to the workday."
            />
            <SolutionItem
              title="Consistent, Polished Results"
              description="Every portrait is lit, composed, and retouched to the same exacting standard — so your entire board looks unified, regardless of when they were photographed."
            />
            <SolutionItem
              title="30+ Years of Experience"
              description="Kurt Nelson has spent three decades photographing executives, physicians, attorneys, and leadership teams. He knows how to make accomplished people look their best — quickly and comfortably."
            />
            <SolutionItem
              title="Fast, Reliable Turnaround"
              description="Professionally retouched portraits delivered promptly — ready for your website, publications, and print materials without the back-and-forth."
            />
          </div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      <section className="py-18 border-b border-[var(--color-brand-subtle)] text-center">
        <div className="max-w-[780px] mx-auto px-6">
          <SectionRule />
          <h2 className="font-[var(--font-heading)] text-[clamp(1.6rem,3.5vw,2.2rem)] mb-12">
            Trusted by DFW Organizations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <Testimonial
              quote="We needed all twelve board members photographed in a single afternoon with zero disruption to our schedule. Kurt delivered — and the portraits have completely elevated our annual report and website."
              cite="— Office Manager, DFW-Area Law Firm"
            />
            <Testimonial
              quote="Our previous headshots were a patchwork of different photographers over ten years. Kurt gave us a cohesive, polished look that finally matches the caliber of our leadership team."
              cite="— Marketing Director, Regional Medical Practice"
            />
          </div>

          <p className="mt-10 text-[0.8rem] text-[var(--color-brand-light)]/30 italic">
            [Placeholder testimonials — replace with verified client quotes]
          </p>
        </div>
      </section>

      {/* ===== SERVICE AREA ===== */}
      <section className="py-12 border-b border-[var(--color-brand-subtle)]">
        <div className="max-w-[780px] mx-auto px-6 text-center">
          <p className="text-[0.85rem] tracking-[2px] uppercase text-[var(--color-brand-light)]/40">
            Serving McKinney &bull; Frisco &bull; Plano &bull; Allen &bull;
            Dallas &bull; Fort Worth &bull; and the entire DFW Metroplex
          </p>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 text-center">
        <div className="max-w-[780px] mx-auto px-6">
          <SectionRule />
          <h2 className="font-[var(--font-heading)] text-[clamp(1.8rem,4vw,2.6rem)] mb-5">
            Your Board&apos;s Image{" "}
            <span className="text-[var(--color-brand-accent)]">
              Starts Here
            </span>
          </h2>

          <p className="text-[1.05rem] text-[var(--color-brand-light)]/75 max-w-[520px] mx-auto mb-9 leading-7">
            A 15-minute phone consultation is all it takes to discuss your
            needs, timeline, and vision. No pressure, no obligation — just a
            conversation with a photographer who&apos;s done this thousands of
            times.
          </p>

          <CTAButton className="mb-7">Book a 15-Minute Call</CTAButton>

          <span className="block mt-5 font-[var(--font-body)] font-light text-base text-[var(--color-brand-light)]/50 tracking-[1px]">
            Innovative Images Photography &bull; McKinney, TX
          </span>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="text-center py-10 border-t border-[var(--color-brand-subtle)]">
        <div className="max-w-[780px] mx-auto px-6">
          <p className="font-[var(--font-heading)] text-base text-[var(--color-brand-light)]/50 mb-1">
            Innovative Images Photography
          </p>
          <p className="text-[0.8rem] text-[var(--color-brand-light)]/30 mb-1">
            McKinney, Texas
          </p>
          <p className="text-[0.75rem] text-[var(--color-brand-light)]/20">
            &copy; {new Date().getFullYear()} Innovative Images. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
