import "./globals.css";
import AppLoader from "@/components/AppLoader";

const siteUrl = "https://standardpilefoundation.com";
const siteName = "Standard Pile Foundation";
const siteDescription =
  "Standard Pile Foundation is a Kerala-based geotechnical engineering company offering soil investigation, pile foundation construction, load testing, and deep foundation solutions for residential, commercial, and institutional projects since 1987.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Standard Pile Foundation",
    "standardpilefoundation.com",
    "pile foundation Kerala",
    "soil investigation Kerala",
    "load testing Kerala",
    "deep foundation contractor Kerala",
    "bored cast in situ piles",
    "hydraulic rotary piling",
    "DMC piling Kerala",
    "under reamed piles Kerala",
    "granular piles Kerala",
    "sand piles Kerala",
    "geotechnical engineering Kerala",
    "foundation contractor Alappuzha",
    "pile load testing Kerala",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "engineering",
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService", "Organization"],
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    email: ["standardpile87@gmail.com", "rajupunnapra@yahoo.com"],
    telephone: ["+91-477-2212963", "+91-8281133639", "+91-9447597225"],
    foundingDate: "1987",
    image: `${siteUrl}/spf.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd Floor, St. George Shopping Complex, Edathua",
      addressLocality: "Alappuzha",
      addressRegion: "Kerala",
      postalCode: "689573",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.3658388,
      longitude: 76.4744421,
    },
    areaServed: [
      {
        "@type": "State",
        name: "Kerala",
      },
      {
        "@type": "Place",
        name: "Alappuzha",
      },
    ],
    serviceType: [
      "Soil investigation",
      "Pile foundation construction",
      "Pile load testing",
      "Integrity testing",
      "Hydraulic rotary piling",
      "DMC piling",
      "Under-reamed cast-in-situ piles",
      "Granular piles",
      "Sand piles",
    ],
    sameAs: ["https://www.google.com/maps?q=Standard+Pile+Foundation"],
  };

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="bg-surface text-on-surface font-body">
        <AppLoader>{children}</AppLoader>
      </body>
    </html>
  );
}
