import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.innovativeimagesphotos.com"),
  title: "Professional Team Photography | McKinney, TX | Innovative Images",
  description:
    "On-location team photography for corporate groups, medical practices, law firms & professional organizations across Dallas-Fort Worth. 30+ years of experience.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Professional Team Photography | Innovative Images",
    description:
      "Cohesive, polished team portraits for corporate groups, medical practices, law firms & professional organizations. On-location across DFW.",
    url: "https://www.innovativeimagesphotos.com/team-photography",
    siteName: "Innovative Images Photography",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Team Photography | Innovative Images",
    description:
      "Cohesive, polished team portraits for corporate groups, medical practices, law firms & professional organizations. On-location across DFW.",
  },
  alternates: {
    canonical: "https://www.innovativeimagesphotos.com/team-photography",
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
        "Professional on-location team photography, group portraits, and headshots for corporate groups, medical practices, law firms, and professional organizations across the Dallas-Fort Worth metroplex.",
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
        name: "Professional Photography Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Team & Group Photography",
              description:
                "On-location professional group portraits for corporate teams, medical staff, law firm partners, and professional organizations of any size.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Professional Headshots",
              description:
                "Individual professional headshots with consistent lighting and style — unified across your entire team.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corporate Photography",
              description:
                "Full-service corporate photography including team portraits, executive headshots, and group photos for organizations across DFW.",
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
        name: "Schedule a Team Photography Consultation",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "3",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "T. Cowley" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "When it comes to finding a truly exceptional photographer, Kurt Nelson is the clear choice. He's responsive, accommodating, and professional; Kurt will work tirelessly to capture the perfect shot.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "MiSuk" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Kurt Nelson of Innovative Images is simply exceptional. His wonderful personality instantly establishes a comfortable and enjoyable atmosphere during photo sessions. I can confidently say he is the best in his craft. Period.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "A. Snipes" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Kurt is amazing! I saw Kurt's work at a friend's house and she raved about him, so I made an appointment. We are never disappointed! I would never willingly use a different photographer — he's the best, I promise!",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.innovativeimagesphotos.com/team-photography/#webpage",
      url: "https://www.innovativeimagesphotos.com/team-photography",
      name: "Professional Team Photography | McKinney, TX | Innovative Images",
      description:
        "On-location team photography for corporate groups, medical practices, law firms & professional organizations across Dallas-Fort Worth.",
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
