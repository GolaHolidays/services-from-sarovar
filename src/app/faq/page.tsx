import type { Metadata } from "next";
import { ServicePageShell, CallHeader } from "@/shared";
import { safariData } from "@/data-source";
import { SafariGateTimingsWidget } from "@/features/safari";
import {
  SAFARI_SEASONS,
  DHIKALA_CANTER_DATA,
  GATE_DEADLINE_PROTOCOL,
  getFormattedLiveShifts,
} from "@/lib/safari-timings";
import {
  HelpCircle,
  Clock,
  ShieldCheck,
  AlertTriangle,
  Lock,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Jim Corbett Safari Timings FAQ | Official 4-Season Gate Guide",
  description: "Frequently asked questions regarding Jim Corbett safari timings, Uttarakhand Forest Department 4 seasonal windows, gate cutoff protocols, and Dhikala canter schedules.",
};

export default function FAQPage() {
  const liveShifts = getFormattedLiveShifts();

  const faqs = [
    {
      question: "What are the official safari timings across Jim Corbett National Park?",
      answer: (
        <div className="space-y-3">
          <p>
            The Uttarakhand Forest Department enforces <strong>4 distinct seasonal timing windows</strong> across all safari zones (Bijrani, Jhirna, Dhela, Garjiya, Durga Devi, Phato, etc.) to adapt to changing daylight hours:
          </p>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 pt-1 text-xs">
            <div className="rounded-lg border border-stone-200 bg-stone-50 p-3">
              <p className="font-bold text-emerald-950">1. Oct 01 – Nov 14 (Autumn Opening)</p>
              <p className="text-stone-600 mt-1">Morning: 06:30 AM – 10:30 AM (Last entry: 08:00 AM)</p>
              <p className="text-stone-600">Afternoon: 02:00 PM – 06:00 PM (Last entry: 03:30 PM)</p>
            </div>
            <div className="rounded-lg border border-stone-200 bg-stone-50 p-3">
              <p className="font-bold text-emerald-950">2. Nov 15 – Feb 15 (Peak Winter)</p>
              <p className="text-stone-600 mt-1">Morning: 06:30 AM – 10:30 AM (Last entry: 08:00 AM)</p>
              <p className="text-stone-600">Afternoon: 01:30 PM – 05:30 PM (Last entry: 03:00 PM)</p>
            </div>
            <div className="rounded-lg border border-stone-200 bg-stone-50 p-3">
              <p className="font-bold text-emerald-950">3. Feb 16 – Apr 15 (Spring Transition)</p>
              <p className="text-stone-600 mt-1">Morning: 06:15 AM – 10:15 AM (Last entry: 07:30 AM)</p>
              <p className="text-stone-600">Afternoon: 02:00 PM – 06:00 PM (Last entry: 03:30 PM)</p>
            </div>
            <div className="rounded-lg border border-stone-200 bg-stone-50 p-3">
              <p className="font-bold text-emerald-950">4. Apr 16 onwards (Summer Early Dawn)</p>
              <p className="text-stone-600 mt-1">Morning: 05:30 AM – 09:30 AM (Last entry: 07:00 AM)</p>
              <p className="text-stone-600">Afternoon: 03:00 PM – 07:00 PM (Last entry: 04:30 PM)</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      question: "What is the 'Last Entry' gate cutoff deadline and what happens if I arrive late?",
      answer: (
        <div className="space-y-2 text-stone-700">
          <p>
            <strong>Last Entry (Final Check-in) is an automated strict barrier cutoff</strong> under Uttarakhand Forest Department rules. The electronic boom barriers are synchronized with the central department server.
          </p>
          <p className="text-red-900 bg-red-50 p-2.5 rounded-lg border border-red-200 text-xs">
            Once the gate locks at the exact cutoff time (e.g., 08:00 AM in Winter/Autumn or 07:00 AM in Summer), no vehicle can enter under any circumstances. Late entries will NOT be adjusted in any other schedule (no return, no refund, no exchange).
          </p>
        </div>
      ),
    },
    {
      question: "What documents must I carry to the safari entrance gate?",
      answer: (
        <div className="space-y-2">
          <p>
            Every single traveler must present the following 3 mandatory items at the checkpoint:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-stone-700">
            <li>
              <strong>Original Government Photo ID:</strong> The physical original Aadhaar Card, Passport, Voter ID, or Driving License that was submitted during booking. Digital phone copies or photocopies are strictly rejected.
            </li>
            <li>
              <strong>Hardcopy Forest Department Permit:</strong> The printed official permit voucher issued by the Uttarakhand Forest Department.
            </li>
            <li>
              <strong>Certified Department Escort / Guide:</strong> All vehicles must be accompanied by an official forest department registered nature guide assigned at the gate.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "When is Dhikala Core Zone open, and what are the Canter safari loop timings?",
      answer: (
        <div className="space-y-2 text-stone-700">
          <p>
            Dhikala Core Zone operates from <strong>15 November to 15 June</strong> each year. It is closed from <strong>16 June to 14 November</strong> during the annual monsoon period.
          </p>
          <p>
            Day visitors explore Dhikala via official 16-seater Canters following a 5.5-hour deep loop:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li><strong>Winter (Nov 15 – Mar 31):</strong> Morning: 06:00 AM – 11:30 AM | Afternoon: 12:00 PM – 06:00 PM</li>
            <li><strong>Summer (Apr 01 – Jun 15):</strong> Morning: 05:30 AM – 11:00 AM | Afternoon: 12:30 PM – 06:30 PM</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Are private personal cars allowed inside the core safari zones?",
      answer: (
        <p className="text-stone-700">
          No. Private personal vehicles are strictly forbidden inside all core and buffer safari zones of Jim Corbett National Park. Only government-registered 4x4 Maruti Gypsies and department Canters with certified commercial drivers and licensed forest department guides are authorized to enter.
        </p>
      ),
    },
    {
      question: "Can I visit multiple safari zones on the same permit?",
      answer: (
        <p className="text-stone-700">
          No. Under Uttarakhand Forest Department regulations, permits are issued strictly for a single designated zone (e.g. Bijrani OR Jhirna OR Dhela). You can only visit one zone per permit and cannot cross into other sectors.
        </p>
      ),
    },
  ];

  return (
    <ServicePageShell contentTitle="Timings & Gate Protocols FAQ">
      <div className="space-y-8">
        <CallHeader
          title="Jim Corbett Safari Timings & Gate FAQ"
          tagline="Official answers to seasonal schedules, barrier cutoff protocols, and entry rules"
          callText={safariData.header.callText}
        />

        {/* ── Interactive Season-Aware Preview Widget ── */}
        <SafariGateTimingsWidget />

        {/* ── FAQ Accordion / List ── */}
        <div className="space-y-4">
          <div className="border-b border-stone-200/80 pb-3">
            <h3 className="font-brand text-xl font-bold text-stone-900">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Everything you need to know about planning your safari arrival and avoiding gate turnaways.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-xs transition hover:border-stone-300 sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-xs font-bold text-emerald-900">
                    Q{index + 1}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-brand text-base font-bold text-stone-900">
                      {faq.question}
                    </h4>
                    <div className="text-sm leading-relaxed text-stone-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServicePageShell>
  );
}
