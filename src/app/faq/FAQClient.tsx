"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  X,
  ChevronDown,
  Phone,
  MessageSquare,
  Ticket,
  Compass,
  Car,
  Calendar,
  CreditCard,
  ShieldCheck,
  AlertCircle,
  Clock,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";
import {
  CONTACT_PHONE,
  WHATSAPP_NUMBER,
  CONTACT_DISPLAY,
  RESORT_NAME,
  RESORT_ADDRESS,
  RESORT_DISTANCE_FROM_RAMNAGAR,
} from "@/shared/constants/ui.constants";
import { ALL_SAFARI_ZONES, DHIKALA_CANTER_DATA } from "@/lib/safari-timings";

export type FAQCategory = "all" | "booking" | "zones" | "transport" | "planning" | "pricing";

export interface FAQItemData {
  id: string;
  category: "booking" | "zones" | "transport" | "planning" | "pricing";
  categoryLabel: string;
  question: string;
  summary: string;
  content: React.ReactNode;
  tags: string[];
  hasWhatsAppCta?: boolean;
  hasCallCta?: boolean;
}

export const CATEGORIES: { id: FAQCategory; label: string; icon: React.ElementType }[] = [
  { id: "all", label: "All Topics (30)", icon: Sparkles },
  { id: "booking", label: "Booking & Permits", icon: Ticket },
  { id: "zones", label: "Jeep & Zones", icon: Compass },
  { id: "transport", label: "Pickup & Cabs", icon: Car },
  { id: "planning", label: "Planning & Family", icon: Calendar },
  { id: "pricing", label: "Pricing & Inquiries", icon: CreditCard },
];

export function FAQClient() {
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "book-safari": true, // First question open by default
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    faqList.forEach((item) => {
      allOpen[item.id] = true;
    });
    setOpenIds(allOpen);
  };

  const collapseAll = () => {
    setOpenIds({});
  };

  const faqList: FAQItemData[] = useMemo(
    () => [
      // ─────────────────────────────────────────────────────────────
      // Category 1: Safari Booking & Permits
      // ─────────────────────────────────────────────────────────────
      {
        id: "book-safari",
        category: "booking",
        categoryLabel: "Safari Booking & Permits",
        question: "How can I book a Jim Corbett jeep safari?",
        summary: "Contact us with your date, group size, and preferred zone. We verify official availability and confirm your booking.",
        tags: ["booking", "process", "reserve", "jeep safari", "how to book"],
        hasWhatsAppCta: true,
        content: (
          <div className="space-y-3">
            <p>
              You can contact our travel desk directly with your preferred safari date, number of visitors, and preferred zone. We check real-time Uttarakhand Forest Department quota availability and guide you through the permit and Gypsy allocation process.
            </p>
            <p>
              Your safari is confirmed once the official forest permit is generated with passenger identification credentials, and your commercial 4x4 Gypsy and licensed guide are assigned.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I%20want%20to%20book%20a%20Jim%20Corbett%20safari.%20Please%20check%20availability.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-700 px-3 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-emerald-800 transition"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                Check Available Slots on WhatsApp
              </a>
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="inline-flex items-center gap-1.5 rounded-lg bg-stone-100 px-3 py-1.5 text-xs font-semibold text-stone-800 hover:bg-stone-200 transition"
              >
                <Phone className="h-3.5 w-3.5" />
                Call {CONTACT_DISPLAY}
              </a>
            </div>
          </div>
        ),
      },
      {
        id: "permit-mandatory",
        category: "booking",
        categoryLabel: "Safari Booking & Permits",
        question: "Is a safari permit mandatory for Jim Corbett National Park?",
        summary: "Yes, 100% mandatory. Permits are strictly zone-specific and cannot be interchanged.",
        tags: ["permit", "mandatory", "zone specific", "rules", "regulations"],
        content: (
          <div className="space-y-2">
            <p>
              <strong>Yes, an official forest department entry permit is strictly mandatory.</strong> No traveler or vehicle can enter any Corbett tourism sector without a valid, government-stamped permit voucher.
            </p>
            <p>
              Permits are issued strictly for a designated single zone (such as Bijrani, Jhirna, or Dhela) and for a specific morning or afternoon session. A permit for one sector cannot be transferred or used to enter another sector under any circumstances.
            </p>
          </div>
        ),
      },
      {
        id: "how-early-book",
        category: "booking",
        categoryLabel: "Safari Booking & Permits",
        question: "How early should I book my Jim Corbett safari permit?",
        summary: "Book 30–45 days ahead for peak weekends, holidays, and summer vacation months.",
        tags: ["advance booking", "how early", "peak season", "slots", "availability"],
        content: (
          <div className="space-y-2">
            <p>
              Advance reservation is strongly recommended. The Uttarakhand Forest Department typically opens permit booking windows <strong>30 to 45 days in advance</strong> for Indian nationals and up to 90 days for foreign nationals.
            </p>
            <p>
              Because each zone enforces strict daily vehicle caps (for instance, Bijrani allows only 30 morning and 30 afternoon gypsies), slots for weekends, Diwali, Christmas/New Year, and peak tiger-tracking months (April–June) sell out within hours of opening.
            </p>
          </div>
        ),
      },
      {
        id: "documents-required",
        category: "booking",
        categoryLabel: "Safari Booking & Permits",
        question: "Which documents are required for a Jim Corbett safari booking?",
        summary: "Full names, ages, gender, and matching original Government Photo IDs for every passenger.",
        tags: ["documents", "id proof", "aadhaar", "passport", "voter id", "driving license"],
        content: (
          <div className="space-y-2.5">
            <p>
              During booking, you must submit the following verified details for each person travelling:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-stone-700">
              <li><strong>Indian Nationals:</strong> Full Name, Age, Gender, and Photo ID proof (Aadhaar Card, Passport, Voter ID, or Driving License).</li>
              <li><strong>Foreign Nationals:</strong> Full Name, Age, Gender, Passport Number, Nationality, and valid Visa details.</li>
            </ul>
            <div className="rounded-lg border border-red-200 bg-red-50 p-2.5 text-xs text-red-900 leading-relaxed">
              <strong>Crucial Gate Rule:</strong> Every guest must carry the <strong>exact physical original ID</strong> entered during booking. Digital smartphone photos or photocopies are strictly rejected by forest rangers at the entry barriers.
            </div>
          </div>
        ),
      },
      {
        id: "last-minute-permit",
        category: "booking",
        categoryLabel: "Safari Booking & Permits",
        question: "Can I get a safari permit at the last minute?",
        summary: "Subject to emergency cancellations or buffer quota availability; advance booking is always safer.",
        tags: ["last minute", "tatkal", "emergency", "same day", "availability"],
        hasWhatsAppCta: true,
        content: (
          <div className="space-y-2">
            <p>
              Last-minute permits depend entirely on day-of-travel cancellations or released buffer zone quotas (e.g. Phato, Sitawani, or Garjiya). Core zones like Bijrani and Dhikala rarely have walk-in openings.
            </p>
            <p>
              If you have arrived in Ramnagar without a permit, contact our travel desk immediately via WhatsApp or phone. We will check live departmental quota releases across all operating sectors.
            </p>
          </div>
        ),
      },
      {
        id: "cancel-reschedule-permit",
        category: "booking",
        categoryLabel: "Safari Booking & Permits",
        question: "Can I cancel or reschedule my Jim Corbett safari permit?",
        summary: "Permits are 100% non-refundable, non-transferable, and cannot be rescheduled once issued.",
        tags: ["cancellation", "refund", "reschedule", "transfer", "policy"],
        content: (
          <div className="space-y-2">
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-2.5 text-xs text-amber-950 leading-relaxed">
              <strong>Official Forest Department Terms:</strong> Once generated on the centralized government portal, safari permits are <strong>strictly non-refundable, non-transferable, and non-adjustable</strong>.
            </div>
            <p>
              Passenger names, dates of visit, and designated zones cannot be amended. If any passenger cannot travel, their slot cannot be substituted with another person at the forest checkpoint.
            </p>
          </div>
        ),
      },

      // ─────────────────────────────────────────────────────────────
      // Category 2: Jeep Safari, Zones & Wildlife
      // ─────────────────────────────────────────────────────────────
      {
        id: "available-zones",
        category: "zones",
        categoryLabel: "Jeep Safari, Zones & Wildlife",
        question: "Which safari zones are available in Jim Corbett?",
        summary: "Bijrani, Jhirna, Dhela, Garjiya, Durga Devi, Phato, Sitawani, and Dhikala core.",
        tags: ["zones", "bijrani", "jhirna", "dhela", "dhikala", "garjiya", "durga devi", "phato"],
        content: (
          <div className="space-y-2">
            <p>
              Jim Corbett National Park is divided into 8 distinct tourism sectors across core tiger habitat and surrounding buffer reserves:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="rounded border border-stone-200 bg-stone-50 p-2">
                <strong>Bijrani:</strong> Dense sal forests & riverine grasslands.
              </div>
              <div className="rounded border border-stone-200 bg-stone-50 p-2">
                <strong>Jhirna:</strong> Open year-round; excellent sloth bear habitat.
              </div>
              <div className="rounded border border-stone-200 bg-stone-50 p-2">
                <strong>Dhela:</strong> Open year-round; rich birdlife & raptors.
              </div>
              <div className="rounded border border-stone-200 bg-stone-50 p-2">
                <strong>Garjiya:</strong> Riverbed tracks with scenic boulder terrain.
              </div>
              <div className="rounded border border-stone-200 bg-stone-50 p-2">
                <strong>Durga Devi:</strong> Hilly landscape famed for mahseer & leopards.
              </div>
              <div className="rounded border border-stone-200 bg-stone-50 p-2">
                <strong>Dhikala:</strong> Deep core savannah; explored via Canter.
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "best-zone-tigers",
        category: "zones",
        categoryLabel: "Jeep Safari, Zones & Wildlife",
        question: "Which Jim Corbett safari zone is best for tiger sightings?",
        summary: "Sightings are natural and never guaranteed. Bijrani, Dhikala, and Garjiya have rich predator density.",
        tags: ["tiger sighting", "best zone", "probability", "wildlife", "predator"],
        content: (
          <div className="space-y-2">
            <p>
              <strong>No zone can ever guarantee a 100% tiger sighting.</strong> Jim Corbett is a free-ranging, unfenced natural biosphere where big cats roam across vast territories.
            </p>
            <p>
              Historically, <strong>Bijrani, Dhikala, and Garjiya</strong> offer high predator movement due to expansive grasslands and water sources. However, successful sightings rely on natural factors: deer alarm calls, early morning dawn tracking, weather conditions, and sheer wildlife serendipity. Choose a zone for its scenic beauty and biodiversity rather than unverified sighting promises.
            </p>
          </div>
        ),
      },
      {
        id: "dhikala-jeep-availability",
        category: "zones",
        categoryLabel: "Jeep Safari, Zones & Wildlife",
        question: "Is a jeep safari available in Dhikala Zone?",
        summary: "Day visitors explore Dhikala via 16-seater Canters; day jeep safaris are not permitted.",
        tags: ["dhikala", "canter", "jeep", "day visit", "night stay"],
        content: (
          <div className="space-y-2">
            <p>
              For <strong>day visitors</strong>, regular private jeep safaris are <strong>not permitted</strong> in Dhikala Core Zone. Day tourists can only explore Dhikala through official government-operated 16-seater Canters.
            </p>
            <p>
              Jeep safaris inside Dhikala are strictly reserved for guests with confirmed overnight reservations at Forest Rest Houses (FRH) inside the Dhikala complex.
            </p>
            <div className="pt-1">
              <Link
                href="/canter-safari"
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 underline hover:text-emerald-950"
              >
                View Dhikala Canter Safari Schedule & Booking Guide &rarr;
              </Link>
            </div>
          </div>
        ),
      },
      {
        id: "passengers-per-jeep",
        category: "zones",
        categoryLabel: "Jeep Safari, Zones & Wildlife",
        question: "How many people can travel in one safari jeep?",
        summary: "Maximum 6 adult passengers + 1 licensed nature guide + 1 certified driver.",
        tags: ["capacity", "passengers", "gypsy", "limit", "children"],
        content: (
          <div className="space-y-2">
            <p>
              Under Uttarakhand Forest Department safety regulations, a standard 4x4 Maruti Gypsy carries a <strong>maximum of 6 adult passengers</strong>, plus the mandatory registered nature guide and certified commercial driver.
            </p>
            <p>
              Children aged 5 and under are permitted to accompany their parents without counting towards the 6-seat cap, but their official identification details must still be recorded on the entry permit.
            </p>
          </div>
        ),
      },
      {
        id: "safari-duration",
        category: "zones",
        categoryLabel: "Jeep Safari, Zones & Wildlife",
        question: "How long does a Jim Corbett jeep safari last?",
        summary: "Approximately 3.5 to 4 hours in the forest, operating in morning dawn and afternoon dusk shifts.",
        tags: ["duration", "hours", "how long", "shifts", "morning", "afternoon"],
        content: (
          <div className="space-y-2">
            <p>
              A standard jeep safari lasts approximately <strong>3.5 to 4 hours</strong> inside the reserve. Safaris run in two separate daily shifts:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-stone-700">
              <li><strong>Morning Shift (Dawn):</strong> Gate opens ~05:30 AM to 06:30 AM (lasts ~3.5–4h till exit).</li>
              <li><strong>Afternoon Shift (Dusk):</strong> Gate opens ~01:30 PM to 03:00 PM (runs till sunset exit ~05:30 PM–07:00 PM).</li>
            </ul>
            <p className="text-xs text-stone-500">
              Exact shift timings adjust across the 4 seasons (Autumn, Winter, Spring, Summer) to follow natural daylight.
            </p>
          </div>
        ),
      },
      {
        id: "guide-included",
        category: "zones",
        categoryLabel: "Jeep Safari, Zones & Wildlife",
        question: "Is a guide included with the jeep safari?",
        summary: "Yes, an official Uttarakhand Forest Department licensed guide accompanies every single vehicle.",
        tags: ["guide", "naturalist", "escort", "mandatory", "charges"],
        content: (
          <div className="space-y-2">
            <p>
              <strong>Yes. Forest department rules mandate that an official licensed nature guide must accompany every vehicle.</strong> Guides are allotted on a strict roster rotation by forest rangers at the entrance checkpoint.
            </p>
            <p>
              Our complete safari packages include all guide fees, so you will have no unexpected extra costs at the gate. Certified guides provide invaluable insight on animal tracking, pugmarks, bird identification, and reserve history.
            </p>
          </div>
        ),
      },
      {
        id: "own-car-allowed",
        category: "zones",
        categoryLabel: "Jeep Safari, Zones & Wildlife",
        question: "Can I enter Jim Corbett National Park in my own car?",
        summary: "Strictly forbidden. Only registered 4x4 Maruti Gypsies and department Canters can enter.",
        tags: ["private car", "own vehicle", "personal car", "gypsy only", "suv"],
        content: (
          <div className="space-y-2">
            <p>
              <strong>No. Personal and private vehicles are strictly prohibited</strong> from entering any core or buffer tourism zones inside Jim Corbett National Park.
            </p>
            <p>
              Only authorized, commercially registered 4x4 Maruti Gypsies with off-road suspension, experienced local hill drivers, and department emission clearances are permitted past the gate barriers.
            </p>
          </div>
        ),
      },

      // ─────────────────────────────────────────────────────────────
      // Category 3: Resort Pickup, Drop & Local Transport
      // ─────────────────────────────────────────────────────────────
      {
        id: "resort-pickup-service",
        category: "transport",
        categoryLabel: "Resort Pickup & Local Transport",
        question: "Do you provide pickup and drop from Jim Corbett resorts and hotels?",
        summary: "Yes, we arrange seamless resort-to-gate cab transfers across Ramnagar, Dhikuli, Marchula, and Patkot.",
        tags: ["resort pickup", "hotel transfer", "cab", "ramnagar", "patkot", "dhikuli"],
        content: (
          <div className="space-y-2">
            <p>
              Yes! We provide prompt pickup and drop-off from resorts, boutique lodges, and hotels across Ramnagar, Dhikuli, Marchula, Mohaan, Bailparao, and Patkot.
            </p>
            <p>
              Simply share your hotel or resort name when reserving, and we will schedule your vehicle transfer to arrive comfortably at the gate before check-in cutoff.
            </p>
          </div>
        ),
      },
      {
        id: "station-pickup",
        category: "transport",
        categoryLabel: "Resort Pickup & Local Transport",
        question: "Can you arrange pickup from Ramnagar railway station?",
        summary: "Yes, station transfers from Ramnagar (RMR) to any resort or safari boarding point can be pre-booked.",
        tags: ["railway station", "rmr", "train pickup", "transfer", "station cab"],
        content: (
          <div className="space-y-2">
            <p>
              Yes. We coordinate dedicated station pickups from <strong>Ramnagar Railway Station (RMR)</strong> and the Ramnagar Inter-State Bus Terminal directly to your resort.
            </p>
            <p>
              Share your train arrival details (such as the Ranikhet Express or Corbett Park Link Express), passenger count, and luggage requirements, and our cab driver will receive you at the station exit.
            </p>
          </div>
        ),
      },
      {
        id: "direct-resort-to-gate",
        category: "transport",
        categoryLabel: "Resort Pickup & Local Transport",
        question: "Can you take us directly from our resort to the safari entry gate?",
        summary: "Yes, we arrange door-to-gate transport to Bijrani, Jhirna, Dhela, or Dhangari (Dhikala) gates.",
        tags: ["gate transfer", "resort to gate", "aamdanda", "dhangari", "dhela gate"],
        content: (
          <div className="space-y-2">
            <p>
              Yes. Corbett safari gates are geographically dispersed (often 15 to 45 km from your accommodation). Depending on your allotted zone:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-stone-700">
              <li><strong>Bijrani:</strong> Aamdanda Gate (approx. 29 Km from Patkot)</li>
              <li><strong>Jhirna & Dhela:</strong> Dhela Gate (approx. 41 Km from Patkot)</li>
              <li><strong>Dhikala Canter:</strong> Dhangari Gate (approx. 46 Km from Patkot)</li>
            </ul>
            <p>
              Our cab desk coordinates the exact departure time so you arrive at the correct gate with ample time for permit verification.
            </p>
          </div>
        ),
      },
      {
        id: "pickup-included-price",
        category: "transport",
        categoryLabel: "Resort Pickup & Local Transport",
        question: "Is resort pickup included in the jeep safari booking price?",
        summary: "Standard safari packages begin from Ramnagar city gates; resort cab transfers can be bundled upon request.",
        tags: ["pickup cost", "included", "package", "transfer fee", "pricing"],
        content: (
          <div className="space-y-2">
            <p>
              Standard forest department safari bookings originate at designated central boarding counters in Ramnagar town or at the forest entrance gate.
            </p>
            <p>
              For resorts located outside town (such as Patkot, Marchula, or Mohaan), we offer <strong>All-Inclusive Door-to-Door Safari Packages</strong> that bundle resort cab transit, or you can book an independent resort cab transfer through our taxi desk.
            </p>
            <div className="pt-1">
              <Link
                href="/cab-service"
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 underline hover:text-emerald-950"
              >
                View Transparent Resort Cab Rates & Routes &rarr;
              </Link>
            </div>
          </div>
        ),
      },
      {
        id: "local-sightseeing-taxi",
        category: "transport",
        categoryLabel: "Resort Pickup & Local Transport",
        question: "Can you arrange a taxi for sightseeing or travel around Ramnagar?",
        summary: "Yes, we provide Sedans, Ertiga, and Innova Crysta for Garjiya Temple, Corbett Falls, and Nainital day trips.",
        tags: ["sightseeing", "taxi", "garjiya temple", "corbett waterfall", "nainital", "cab service"],
        content: (
          <div className="space-y-2">
            <p>
              Yes! Our taxi fleet provides private AC and non-AC cabs for local sightseeing:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-stone-700">
              <li>Garjiya Devi Temple & Kosi River suspension bridge</li>
              <li>Corbett Waterfalls & Corbett Heritage Museum (Choti Haldwani)</li>
              <li>Sitabani Temple & surrounding forest drive</li>
              <li>Day excursions to Nainital, Pangot, or Ranikhet</li>
              <li>Drop transfers to Delhi, Dehradun, and Pantnagar airports</li>
            </ul>
          </div>
        ),
      },

      // ─────────────────────────────────────────────────────────────
      // Category 4: Travel Planning & Family Visits
      // ─────────────────────────────────────────────────────────────
      {
        id: "family-children-seniors",
        category: "planning",
        categoryLabel: "Travel Planning & Family Visits",
        question: "Is Jim Corbett safari suitable for children and senior citizens?",
        summary: "Yes, very popular for families. Tracks can be bumpy, so we recommend milder zones and careful driving.",
        tags: ["family", "children", "senior citizens", "elderly", "safety", "comfort"],
        content: (
          <div className="space-y-2">
            <p>
              Corbett safari is an unforgettable experience for all generations. However, jungle tracks are unpaved, natural dirt trails that can be bumpy at times.
            </p>
            <p>
              For elderly travelers or families with young infants, we recommend <strong>Jhirna or Bijrani zones</strong> (which feature comparatively smoother terrain) and afternoon shifts during winter months when dawn chill is absent. Inform our desk in advance so we assign our gentlest, most attentive drivers.
            </p>
          </div>
        ),
      },
      {
        id: "open-year-round",
        category: "planning",
        categoryLabel: "Travel Planning & Family Visits",
        question: "Is Jim Corbett open throughout the year?",
        summary: "Jhirna and Dhela zones are open 365 days; Bijrani and Dhikala close seasonally for monsoon.",
        tags: ["year round", "monsoon", "open dates", "seasonality", "closure"],
        content: (
          <div className="space-y-2">
            <p>
              Parts of Jim Corbett National Park are open year-round, while core riverine sectors close seasonally:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-stone-700">
              <li><strong>Open 365 Days:</strong> Jhirna, Dhela, Phato, and Sitawani zones remain operational throughout the monsoon (subject to temporary weather precautions).</li>
              <li><strong>Seasonal Closure:</strong> Bijrani closes from late June until October 15. Dhikala closes from June 16 until November 14 due to Ramganga river swells and breeding seasons.</li>
            </ul>
          </div>
        ),
      },
      {
        id: "best-time-safari",
        category: "planning",
        categoryLabel: "Travel Planning & Family Visits",
        question: "What is the best time for a Jim Corbett safari?",
        summary: "November to March for pleasant weather; April to mid-June for prime tiger sightings around waterholes.",
        tags: ["best time", "weather", "winter", "summer", "tiger season"],
        content: (
          <div className="space-y-2">
            <p>
              The ideal timing depends on your wildlife priorities:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-stone-700">
              <li><strong>November – February (Winter):</strong> Crisp morning air, lush golden sal forests, active bird migrations, and comfortable weather.</li>
              <li><strong>March – April (Spring):</strong> Moderate temperatures, blooming semal flowers, and excellent visibility.</li>
              <li><strong>May – mid-June (Summer):</strong> Hot daytime temperatures, but the highest statistical probability of big cat sightings as tigers frequent river channels and waterholes.</li>
            </ul>
          </div>
        ),
      },
      {
        id: "safari-without-resort",
        category: "planning",
        categoryLabel: "Travel Planning & Family Visits",
        question: "Can I book a safari without booking a resort through you?",
        summary: "Yes! Safari permit and vehicle bookings are completely independent of hotel accommodations.",
        tags: ["standalone safari", "without resort", "independent", "booking only"],
        content: (
          <div className="space-y-2">
            <p>
              <strong>Yes, absolutely.</strong> Safari permit assistance, Gypsy hire, and guide coordination can be booked independently of your lodging arrangements.
            </p>
            <p>
              Whether you are staying at an independent homestay, an Airbnb, a resort, or just driving in for a day trip from Delhi or Haldwani, we manage your complete safari logistics.
            </p>
          </div>
        ),
      },
      {
        id: "preferred-zone-unavailable",
        category: "planning",
        categoryLabel: "Travel Planning & Family Visits",
        question: "What happens if my preferred safari zone is unavailable?",
        summary: "We immediately check operating alternatives like Jhirna, Garjiya, or Dhela with live quota matching.",
        tags: ["sold out", "unavailable", "alternatives", "waitlist", "backup zone"],
        hasWhatsAppCta: true,
        content: (
          <div className="space-y-2">
            <p>
              Because official permit quotas are limited, popular zones can sell out quickly on high-demand dates. If your first choice is unavailable, our travel desk will immediately review live slots in alternative high-wildlife zones (such as Garjiya, Jhirna, Dhela, or Phato).
            </p>
            <p>
              Every zone in Corbett offers breathtaking virgin forest landscapes, herds of wild Asian elephants, spotted deer, and potential big cat encounters.
            </p>
          </div>
        ),
      },
      {
        id: "complete-trip-package",
        category: "planning",
        categoryLabel: "Travel Planning & Family Visits",
        question: "Can you arrange a complete Jim Corbett safari trip?",
        summary: "Yes, we organize end-to-end trips including permits, gypsies, resort stays, and transfers.",
        tags: ["complete trip", "package", "all inclusive", "resort stay", "custom tour"],
        hasCallCta: true,
        content: (
          <div className="space-y-2">
            <p>
              Yes! We craft complete, personalized Jim Corbett itineraries:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-stone-700">
              <li>Official forest permits across your preferred core/buffer zones</li>
              <li>Private 4x4 Maruti Gypsies and dedicated nature guides</li>
              <li>Resort pickup and drop or railway station transfers</li>
              <li>Luxury jungle resort or riverside lodge accommodations with all meals</li>
              <li>Bonfire evenings, river walks, and local sightseeing</li>
            </ul>
          </div>
        ),
      },

      // ─────────────────────────────────────────────────────────────
      // Category 5: Pricing, Inclusions & High-Intent Enquiries
      // ─────────────────────────────────────────────────────────────
      {
        id: "jeep-safari-cost",
        category: "pricing",
        categoryLabel: "Pricing, Inclusions & Assistance",
        question: "How much does a Jim Corbett jeep safari cost?",
        summary: "Standard gypsy packages range from ₹7,500 to ₹10,500 all-inclusive per vehicle (up to 6 persons).",
        tags: ["cost", "price", "rates", "package cost", "how much"],
        content: (
          <div className="space-y-2.5">
            <p>
              Official Jeep Safari pricing for Indian Nationals typically ranges between <strong>₹7,500 and ₹10,500 per Gypsy</strong> (accommodating up to 6 persons), depending on the zone:
            </p>
            <div className="rounded-lg border border-stone-200 bg-stone-50 p-2.5 text-xs space-y-1 text-stone-700">
              <div className="flex justify-between">
                <span>Bijrani / Garjiya Gypsy:</span>
                <span className="font-semibold text-stone-900">₹8,500 – ₹9,500</span>
              </div>
              <div className="flex justify-between">
                <span>Jhirna / Dhela Gypsy:</span>
                <span className="font-semibold text-stone-900">₹8,500 – ₹9,500</span>
              </div>
              <div className="flex justify-between">
                <span>Phato / Sitawani Gypsy:</span>
                <span className="font-semibold text-stone-900">₹7,500 – ₹8,500</span>
              </div>
              <div className="flex justify-between">
                <span>Dhikala Canter Seat:</span>
                <span className="font-semibold text-stone-900">₹4,500 – ₹5,500 per person</span>
              </div>
            </div>
            <p className="text-xs text-stone-500">
              Foreign nationals have higher government permit fees mandated by the state forest department.
            </p>
          </div>
        ),
      },
      {
        id: "price-inclusions",
        category: "pricing",
        categoryLabel: "Pricing, Inclusions & Assistance",
        question: "Does the safari price include the permit, jeep and guide?",
        summary: "Yes, our packages are 100% transparent and all-inclusive: permit, vehicle, guide, driver, and taxes.",
        tags: ["inclusions", "all inclusive", "hidden charges", "guide fee", "permit fee"],
        content: (
          <div className="space-y-2">
            <p>
              <strong>Yes! Our confirmed safari packages are completely all-inclusive with zero hidden gate charges:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-stone-700">
              <li>Official Uttarakhand Forest Department entry permit & taxes</li>
              <li>Commercial registered 4x4 Maruti Gypsy hire & fuel charges</li>
              <li>Certified forest department nature guide allocation fee</li>
              <li>Commercial hill driver fees & gate toll processing</li>
            </ul>
          </div>
        ),
      },
      {
        id: "check-permit-confirmation",
        category: "pricing",
        categoryLabel: "Pricing, Inclusions & Assistance",
        question: "How do I check my safari permit confirmation?",
        summary: "You receive an official forest voucher with a unique Booking ID, allotted zone, shift, and passenger IDs.",
        tags: ["confirmation", "voucher", "booking id", "verify", "ticket"],
        content: (
          <div className="space-y-2">
            <p>
              Once booked, you receive an official forest department digital confirmation voucher. The document prominently displays:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-stone-700">
              <li>Unique Government Booking Reference Number</li>
              <li>Designated Safari Zone & Shift Timing (Morning or Afternoon)</li>
              <li>List of passenger names, ages, and verified Government ID numbers</li>
              <li>Assigned entrance gate and entry protocol checklist</li>
            </ul>
            <p className="text-xs text-stone-600">
              We send your voucher directly via WhatsApp and email for easy offline viewing and printing.
            </p>
          </div>
        ),
      },
      {
        id: "time-reach-gate",
        category: "pricing",
        categoryLabel: "Pricing, Inclusions & Assistance",
        question: "What time should I reach the safari gate?",
        summary: "Arrive 20–30 mins before gate opening. Depart from outlying resorts 60–90 mins in advance.",
        tags: ["reporting time", "gate arrival", "cutoff", "transit", "when to reach"],
        content: (
          <div className="space-y-2">
            <p>
              You should reach the safari gate <strong>20 to 30 minutes before opening time</strong> to allow queue clearance, document checks, and guide allocation.
            </p>
            <div className="rounded-lg border border-red-200 bg-red-50 p-2.5 text-xs text-red-900 leading-relaxed">
              <strong>Strict Cutoff Warning:</strong> Automated central barrier gates drop and lock at strict deadlines (e.g. 08:00 AM in morning, 03:00/03:30 PM in afternoon). Late arrivals void the permit without refund. For guests staying in Patkot or Marchula (~27–46 Km away), departure must be scheduled 60 to 90 minutes before gate opening.
            </div>
          </div>
        ),
      },
      {
        id: "two-safaris-same-day",
        category: "pricing",
        categoryLabel: "Pricing, Inclusions & Assistance",
        question: "Can I book a morning safari and an evening safari on the same day?",
        summary: "Yes, you can book both shifts on the same day, even in different zones to explore varied terrain.",
        tags: ["two safaris", "same day", "morning and evening", "double safari", "photography"],
        content: (
          <div className="space-y-2">
            <p>
              <strong>Yes!</strong> Booking both morning and afternoon safaris on the same day is the most recommended approach for wildlife enthusiasts and photographers.
            </p>
            <p>
              Because the morning shift finishes by 10:00–10:30 AM and the afternoon shift starts between 01:30 PM and 02:00 PM, you have ample time to return to your resort, enjoy lunch, rest, and head out for the dusk tracking shift—even in two completely different zones (e.g. Bijrani in the morning and Jhirna in the afternoon)!
            </p>
          </div>
        ),
      },
      {
        id: "book-via-whatsapp",
        category: "pricing",
        categoryLabel: "Pricing, Inclusions & Assistance",
        question: "How can I book a Jim Corbett safari through WhatsApp?",
        summary: "Message us your travel date, passenger count, and preferred zone for instant slot checks.",
        tags: ["whatsapp booking", "mobile booking", "instant", "chat", "online"],
        hasWhatsAppCta: true,
        content: (
          <div className="space-y-3">
            <p>
              Booking via WhatsApp is the quickest and most hassle-free method:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 text-xs text-stone-700">
              <li>Message our official travel desk at <strong>+{WHATSAPP_NUMBER}</strong>.</li>
              <li>Share your travel date, total number of adults/children, and preferred zone.</li>
              <li>Our coordinator immediately checks live forest department quota availability and sends pricing options.</li>
              <li>Send passenger ID details and complete digital payment to lock in your confirmed permit.</li>
            </ol>
            <div className="pt-1">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I%20would%20like%20to%20book%20a%20Jim%20Corbett%20safari.%20Please%20help%20me%20with%20available%20options.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-green-700 transition"
              >
                <MessageSquare className="h-4 w-4" />
                Start WhatsApp Booking Now ({CONTACT_DISPLAY})
              </a>
            </div>
          </div>
        ),
      },
    ],
    []
  );

  // Filtered FAQs based on Category and Search Query
  const filteredFAQs = useMemo(() => {
    return faqList.filter((item) => {
      // Category filter
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesQuestion = item.question.toLowerCase().includes(query);
        const matchesSummary = item.summary.toLowerCase().includes(query);
        const matchesCategory = item.categoryLabel.toLowerCase().includes(query);
        const matchesTags = item.tags.some((tag) => tag.toLowerCase().includes(query));
        return matchesQuestion || matchesSummary || matchesCategory || matchesTags;
      }
      return true;
    });
  }, [faqList, selectedCategory, searchQuery]);

  return (
    <div className="space-y-7">
      {/* ── Search Bar & Filter Controls ── */}
      <div className="rounded-2xl border border-stone-200/90 bg-white p-4 sm:p-5 shadow-xs space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. 'Dhikala', 'permit', 'pickup', 'cost', 'documents', 'cancellation')..."
            className="w-full rounded-xl border border-stone-200 bg-stone-50/70 py-2.5 pl-10 pr-10 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:border-emerald-700 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-emerald-700 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-stone-400 hover:text-stone-700"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                  isSelected
                    ? "bg-emerald-900 text-white shadow-xs"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isSelected ? "text-emerald-300" : "text-stone-500"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Meta Bar: Match count & Expand/Collapse toggle */}
        <div className="flex items-center justify-between border-t border-stone-100 pt-3 text-xs text-stone-500">
          <div>
            Showing <strong className="text-stone-900">{filteredFAQs.length}</strong> of {faqList.length} questions
            {searchQuery && (
              <span>
                {" "}for &ldquo;<span className="text-emerald-900 font-medium">{searchQuery}</span>&rdquo;
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={expandAll}
              className="text-stone-600 hover:text-emerald-900 font-medium transition"
            >
              Expand All
            </button>
            <span className="text-stone-300">|</span>
            <button
              onClick={collapseAll}
              className="text-stone-600 hover:text-emerald-900 font-medium transition"
            >
              Collapse All
            </button>
          </div>
        </div>
      </div>

      {/* ── FAQ Accordion Cards List ── */}
      {filteredFAQs.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-8 text-center space-y-3">
          <AlertCircle className="mx-auto h-8 w-8 text-stone-400" />
          <h4 className="font-brand text-base font-bold text-stone-900">
            No matching questions found
          </h4>
          <p className="text-xs text-stone-500 max-w-md mx-auto">
            We couldn&apos;t find an answer matching &ldquo;{searchQuery}&rdquo;. Try another keyword or message our travel desk directly.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-100"
            >
              Reset Filters
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I%20have%20a%20question%20about%20Jim%20Corbett%20safari:%20${encodeURIComponent(searchQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-700 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-emerald-800"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredFAQs.map((item, index) => {
            const isOpen = !!openIds[item.id];
            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-2xl border transition-all ${
                  isOpen
                    ? "border-stone-300 bg-white shadow-xs ring-1 ring-stone-900/5"
                    : "border-stone-200/90 bg-white hover:border-stone-300"
                }`}
              >
                {/* Question Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3 focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex h-5 items-center justify-center rounded bg-stone-100 px-1.5 text-[10px] font-bold text-stone-600 font-mono">
                        Q{index + 1}
                      </span>
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-900 border border-emerald-200/60">
                        {item.categoryLabel}
                      </span>
                    </div>

                    <h4 className="font-brand text-sm sm:text-base font-bold text-stone-900 pt-0.5 leading-snug">
                      {item.question}
                    </h4>

                    {!isOpen && (
                      <p className="text-xs text-stone-500 line-clamp-1 pt-0.5">
                        {item.summary}
                      </p>
                    )}
                  </div>

                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-stone-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-stone-200 text-stone-900" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Expanded Answer Content */}
                {isOpen && (
                  <div className="border-t border-stone-100 bg-stone-50/40 p-4 sm:p-5 pt-3 sm:pt-4 text-xs sm:text-sm text-stone-700 leading-relaxed space-y-3">
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ── High-Intent Direct Contact Bottom Banner ── */}
      <div className="rounded-2xl border border-emerald-300 bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-950 p-6 text-white shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-emerald-300">
              Official Booking Assistance Desk
            </span>
            <h3 className="font-brand text-lg sm:text-xl font-bold text-white">
              Still Have Questions or Ready to Reserve?
            </h3>
            <p className="text-xs text-emerald-100/80 max-w-xl leading-relaxed">
              Our Ramnagar safari coordinators verify quota availability, arrange commercial 4x4 Gypsies, assign registered guides, and schedule seamless resort pickups.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 shrink-0">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I%20have%20questions%20about%20booking%20a%20Jim%20Corbett%20safari.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-2.5 text-xs font-bold text-stone-950 hover:bg-green-400 shadow-xs transition"
            >
              <MessageSquare className="h-4 w-4 text-stone-950" />
              WhatsApp Helpdesk
            </a>
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-xs font-bold text-white hover:bg-white/20 border border-white/20 transition"
            >
              <Phone className="h-4 w-4 text-emerald-300" />
              Call {CONTACT_DISPLAY}
            </a>
          </div>
        </div>

        {/* Disclaimer / Transparency Note */}
        <p className="text-[10px] text-emerald-200/60 border-t border-emerald-800/60 pt-3 leading-relaxed">
          <strong>Transparency Notice:</strong> Corbett Safari is an independent, authorized safari booking assistance, gypsy hire, and resort transit service provider. Forest entry permits are issued under the rules of the Uttarakhand Forest Department centralized system.
        </p>
      </div>
    </div>
  );
}
