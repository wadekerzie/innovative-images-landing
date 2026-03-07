import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corporate Board of Directors Photography | McKinney, TX",
  description:
    "On-location board of directors photography for Dallas-Fort Worth corporations, law firms & hospitals. Executive portraits by Innovative Images.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Corporate Board of Directors Photography | Innovative Images",
    description:
      "Professional on-location board portraits, executive headshots & team photography for Dallas-Fort Worth corporations, law firms and hospitals.",
    url: "https://www.innovativeimagesphotos.com/corporate-board-photography",
    siteName: "Innovative Images Photography",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate board of directors seated for a professional group portrait by Innovative Images Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Board of Directors Photography | Innovative Images",
    description:
      "Professional on-location board portraits, executive headshots & team photography for Dallas-Fort Worth corporations, law firms and hospitals.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical:
      "https://www.innovativeimagesphotos.com/corporate-board-photography",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://www.innovativeimagesphotos.com/#business",
      name: "Innovative Images Photography",
      alternateName: "Innovative Images",
      description:
        "Professional on-location corporate board of directors photography, executive portraits, and team photos serving the Dallas-Fort Worth metroplex.",
      url: "https://www.innovativeimagesphotos.com",
      founder: {
        "@type": "Person",
        name: "Kurt Nelson",
        jobTitle: "Owner & Photographer",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "McKinney",
        addressRegion: "TX",
        postalCode: "75069",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.1972,
        longitude: -96.6397,
      },
      priceRange: "$$$",
      areaServed: [
        "McKinney",
        "Dallas",
        "Fort Worth",
        "Plano",
        "Frisco",
        "Allen",
        "Richardson",
        "Arlington",
        "Irving",
        "Prosper",
      ].map((city) => ({ "@type": "City", name: city })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Corporate Photography Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Board of Directors Photography",
              description:
                "On-location professional group portraits of corporate boards of directors, advisory boards, and executive leadership teams.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Executive Headshot Photography",
              description:
                "Individual professional headshots for C-suite executives, partners, physicians, and senior leadership.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corporate Team Photography",
              description:
                "Department and full-company team photos for corporations, law firms, hospitals, and professional organizations.",
            },
          },
        ],
      },
      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://calendly.com/innovativeimages/portraitphoneconsultation",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
        name: "Schedule a Portrait Consultation",
      },
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.innovativeimagesphotos.com/corporate-board-photography/#webpage",
      url: "https://www.innovativeimagesphotos.com/corporate-board-photography",
      name: "Corporate Board of Directors Photography | McKinney, TX",
      description:
        "On-location board of directors photography for Dallas-Fort Worth corporations, law firms & hospitals. Executive portraits by Innovative Images.",
      isPartOf: {
        "@id": "https://www.innovativeimagesphotos.com/#website",
      },
      about: {
        "@id": "https://www.innovativeimagesphotos.com/#business",
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gilda+Display&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
