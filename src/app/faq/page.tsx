import type { Metadata } from "next";
import { ServicePageShell, CallHeader } from "@/shared";
import { FAQClient } from "./FAQClient";
import { CONTACT_DISPLAY } from "@/shared/constants/ui.constants";

export const metadata: Metadata = {
  title: "Jim Corbett Safari FAQ | Permits, Jeep Booking, Zones & Resort Pickup Guide",
  description:
    "Comprehensive guide answering essential questions about Jim Corbett jeep safari bookings, mandatory documents, cancellation policies, tiger zones, Dhikala canter schedules, and resort pickups.",
  openGraph: {
    title: "Jim Corbett Safari FAQ | Complete Permit & Booking Guide",
    description:
      "All your questions answered: How to book permits, passenger limits per Gypsy, tiger sightings honesty, and resort cab transfers.",
    type: "website",
  },
};

// FAQ Schema.org structured data for SEO rich snippets
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can I book a Jim Corbett jeep safari?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact our travel desk with your preferred safari date, number of visitors, and preferred zone. We verify live quota availability and assist with the official forest permit, gypsy allocation, and licensed guide.",
      },
    },
    {
      "@type": "Question",
      name: "Is a safari permit mandatory for Jim Corbett National Park?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every visitor must possess a valid official forest department permit before approaching the entry gate. Permits are strictly zone-specific and cannot be interchanged.",
      },
    },
    {
      "@type": "Question",
      name: "How early should I book my Jim Corbett safari permit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Advance booking is recommended 30 to 45 days in advance for Indian nationals (and up to 90 days for foreign nationals), especially for peak weekends, holidays, and summer vacation periods.",
      },
    },
    {
      "@type": "Question",
      name: "Which documents are required for a Jim Corbett safari booking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full names, ages, gender, and valid government photo ID details (Aadhaar, Passport, Voter ID, Driving License). The exact physical original ID must be presented at the gate.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel or reschedule my Jim Corbett safari permit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Under official Uttarakhand Forest Department rules, all confirmed safari permits are strictly non-refundable, non-transferable, and non-adjustable once issued on the central server.",
      },
    },
    {
      "@type": "Question",
      name: "Which Jim Corbett safari zone is best for tiger sightings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tiger sightings are natural and never 100% guaranteed. Bijrani, Dhikala, and Garjiya have historically high predator movement, but sightings depend on tracking, alarm calls, waterhole activity, and nature.",
      },
    },
    {
      "@type": "Question",
      name: "How many people can travel in one safari jeep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under official regulations, a maximum of 6 adult passengers are permitted in one 4x4 Maruti Gypsy, accompanied by 1 mandatory certified forest guide and 1 licensed driver.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide pickup and drop from Jim Corbett resorts and hotels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We arrange comfortable cab pickup and drop-off from resorts and luxury hotels across Ramnagar, Dhikuli, Marchula, Mohaan, Bailparao, and Patkot.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a Jim Corbett jeep safari cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard Gypsy safari packages range from ₹7,500 to ₹10,500 all-inclusive per vehicle (for up to 6 persons), covering permit fees, 4x4 Gypsy hire, guide charges, driver fee, and entry taxes.",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <ServicePageShell contentTitle="Frequently Asked Questions">
        <div className="space-y-8">
          <CallHeader
            title="Jim Corbett Safari FAQ & Travel Guide"
            tagline="Research-backed answers to permits, gypsy bookings, safari zones, resort pickups, and costs"
            callText={`Queries? Call ${CONTACT_DISPLAY}`}
          />

          {/* Interactive Search & Filterable FAQ Explorer */}
          <FAQClient />
        </div>
      </ServicePageShell>
    </>
  );
}
