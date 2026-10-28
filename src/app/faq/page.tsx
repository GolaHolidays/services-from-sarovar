import type { Metadata } from "next";
import { ServicePageShell, CallHeader } from "@/shared";
import { safariData } from "@/data-source";
import {
  getDhikalaCanterSchedule,
  DHIKALA_CANTER_DATA,
  GATE_DEADLINE_PROTOCOL,
  ALL_SAFARI_ZONES,
} from "@/lib/safari-timings";

export const metadata: Metadata = {
  title: "Jim Corbett Safari Timings FAQ | Official 4-Season Gate Guide",
  description: "Frequently asked questions regarding Jim Corbett safari timings, Uttarakhand Forest Department 4 seasonal windows, gate cutoff protocols, and Dhikala canter schedules.",
};

export default function FAQPage() {
  const dhikalaSchedule = getDhikalaCanterSchedule();

  const faqs = [
    {
      id: "mandatory-documents",
      question: "What documents must I carry to the safari entrance gate?",
      answer: (
        <div className="space-y-2.5">
          <p>
            Every visitor entering Jim Corbett National Park must present three mandatory verification credentials at the forest checkpoint counter:
          </p>
          <ul className="space-y-2 text-xs text-stone-700">
            {GATE_DEADLINE_PROTOCOL.mandatoryRequirements.map((req, i) => (
              <li
                key={req.id}
                className="flex items-start gap-2.5 rounded-lg border border-stone-200/80 bg-stone-50/60 p-2.5"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-900 text-[11px] font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <strong className="text-stone-900">{req.title}: </strong>
                  <span>{req.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: "dhikala-canter-timings",
      question: "When is Dhikala Core Zone open, and what are the Canter safari loop timings?",
      answer: (
        <div className="space-y-3 text-stone-700">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 rounded-xl border border-stone-200 bg-stone-50/80 p-3 text-xs">
            <div>
              <span className="font-semibold text-stone-900">Dhikala Zone Operational Window:</span>
              <p className="text-stone-600 mt-0.5">{DHIKALA_CANTER_DATA.seasonStatusText}</p>
            </div>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold self-start sm:self-auto ${
                dhikalaSchedule.isOpen
                  ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                  : "bg-amber-100 text-amber-900 border border-amber-300"
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${dhikalaSchedule.isOpen ? "bg-emerald-600" : "bg-amber-600"}`} />
              {dhikalaSchedule.statusLabel}
            </span>
          </div>

          <p className="text-xs">
            Day tourists explore Dhikala Core exclusively via official 16-seater Canters along extended 5.5-hour deep wilderness routes:
          </p>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs">
            <div className="rounded-xl border border-stone-200/90 bg-stone-50/70 p-3 space-y-1">
              <div className="flex items-center justify-between pb-1 border-b border-stone-200/60">
                <span className="font-bold text-emerald-950">{DHIKALA_CANTER_DATA.winterLoop.period}</span>
                <span className="text-[10px] rounded bg-stone-200/70 px-1.5 py-0.5 text-stone-700 font-medium">{DHIKALA_CANTER_DATA.winterLoop.duration}</span>
              </div>
              <p className="text-stone-600 pt-1">
                <strong>Morning:</strong> {DHIKALA_CANTER_DATA.winterLoop.morning}
              </p>
              <p className="text-stone-600">
                <strong>Afternoon:</strong> {DHIKALA_CANTER_DATA.winterLoop.afternoon}
              </p>
              <p className="text-[11px] text-stone-500 pt-1">{DHIKALA_CANTER_DATA.winterLoop.notes}</p>
            </div>

            <div className="rounded-xl border border-stone-200/90 bg-stone-50/70 p-3 space-y-1">
              <div className="flex items-center justify-between pb-1 border-b border-stone-200/60">
                <span className="font-bold text-emerald-950">{DHIKALA_CANTER_DATA.summerLoop.period}</span>
                <span className="text-[10px] rounded bg-stone-200/70 px-1.5 py-0.5 text-stone-700 font-medium">{DHIKALA_CANTER_DATA.summerLoop.duration}</span>
              </div>
              <p className="text-stone-600 pt-1">
                <strong>Morning:</strong> {DHIKALA_CANTER_DATA.summerLoop.morning}
              </p>
              <p className="text-stone-600">
                <strong>Afternoon:</strong> {DHIKALA_CANTER_DATA.summerLoop.afternoon}
              </p>
              <p className="text-[11px] text-stone-500 pt-1">{DHIKALA_CANTER_DATA.summerLoop.notes}</p>
            </div>
          </div>

          <p className="text-xs text-stone-500 italic">
            Note: {DHIKALA_CANTER_DATA.monsoonNotice}
          </p>
        </div>
      ),
    },
    {
      id: "private-vehicles",
      question: "Are private personal cars allowed inside the core safari zones?",
      answer: (
        <p className="text-stone-700 text-xs sm:text-sm">
          No. Private personal vehicles are strictly forbidden inside all core and buffer safari zones of Jim Corbett National Park. Only government-registered 4x4 Maruti Gypsies and department Canters with certified commercial drivers and licensed forest department guides are authorized to enter.
        </p>
      ),
    },
    {
      id: "zone-permits",
      question: "Can I visit multiple safari zones on the same permit?",
      answer: (
        <div className="space-y-2 text-stone-700 text-xs sm:text-sm">
          <p>
            No. Under Uttarakhand Forest Department regulations, each permit is issued strictly for a single designated zone ({ALL_SAFARI_ZONES.slice(0, 6).join(", ")}, etc.).
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-stone-600">
            {GATE_DEADLINE_PROTOCOL.criticalRules.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ul>
        </div>
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
                key={faq.id || index}
                className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-xs transition hover:border-stone-300 sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-xs font-bold text-emerald-900">
                    Q{index + 1}
                  </div>
                  <div className="space-y-2 flex-1">
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
