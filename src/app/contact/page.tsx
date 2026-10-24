import type { Metadata } from "next";
import { ServicePageShell, CallHeader, Container } from "@/shared";
import { SafariGateTimingsWidget } from "@/features/safari";
import { getFormattedLiveShifts, GATE_DEADLINE_PROTOCOL } from "@/lib/safari-timings";
import {
  BRAND_NAME,
  CONTACT_DISPLAY,
  CONTACT_PHONE,
  WHATSAPP_NUMBER,
  BRAND_EMAIL,
  RESORT_ADDRESS,
  RESORT_NAME,
  RESORT_LOCATION_SHORT,
  SITE_BUSINESS_HOURS,
} from "@/shared/constants/ui.constants";
import {
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  Mail,
  ShieldCheck,
  AlertTriangle,
  Lock,
  Sun,
  Sunset,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Official Travel Desk & Safari Office | Corbett Safari",
  description: "Contact the official Jim Corbett safari desk for permits, today's active gate shifts, last entry cutoffs, and resort cab assistance.",
};

export default function ContactPage() {
  const liveShifts = getFormattedLiveShifts();
  const businessHours = SITE_BUSINESS_HOURS;

  return (
    <ServicePageShell contentTitle="Contact Desk & Office">
      <div className="space-y-8">
        <CallHeader
          title="Official Corbett Travel Desk"
          tagline="Assisting guests with verified safari bookings, barrier gate cutoffs, and transfers"
          callText={`Call ${CONTACT_DISPLAY}`}
        />

        {/* ── Today's Active Shift & Gate Cutoffs Card ── */}
        <div className="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-xs sm:p-7">
          <div className="flex flex-col gap-2 border-b border-stone-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-800" />
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-stone-500">
                  Live Forest Department Schedule
                </span>
              </div>
              <h3 className="font-brand text-lg font-bold text-stone-900 sm:text-xl">
                Today&apos;s Active Safari Gates & Cutoffs
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-stone-500">Date:</span>
              <span className="font-semibold text-stone-900">{liveShifts.istDateString}</span>
              <span className="flex items-center gap-1.5 rounded-md bg-emerald-50 px-2 py-0.5 text-[0.7rem] font-semibold text-emerald-900 border border-emerald-200/60">
                <span>{liveShifts.activeScheduleLabel}</span>
                <span className="inline-block h-2 w-2 rounded-none bg-emerald-600" />
              </span>
            </div>
          </div>

          {/* Today's Shifts Grid */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Morning Shift Today */}
            <div className="rounded-xl border border-stone-200/80 bg-stone-50/50 p-4">
              <div className="flex items-center justify-between border-b border-stone-200/60 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-100 text-amber-900">
                    <Sun className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Morning Shift</h4>
                    <p className="text-[0.68rem] text-stone-500">Dawn Safari</p>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-emerald-950">
                  {liveShifts.morning}
                </span>
              </div>

              <div className="mt-3 space-y-2 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Gate Opens:</span>
                  <span className="font-mono font-medium text-stone-900">
                    {liveShifts.morningGateOpens}
                  </span>
                </div>
                <div className="flex justify-between rounded bg-red-50 px-2 py-1 text-red-900 border border-red-200/50">
                  <span className="font-bold flex items-center gap-1">
                    <Lock className="h-3 w-3 text-red-700" />
                    Last Entry Barrier Lock:
                  </span>
                  <span className="font-mono font-bold">{liveShifts.morningLastEntry}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Mandatory Exit:</span>
                  <span className="font-mono font-medium text-stone-900">
                    {liveShifts.morningExit}
                  </span>
                </div>
              </div>
            </div>

            {/* Afternoon Shift Today */}
            <div className="rounded-xl border border-stone-200/80 bg-stone-50/50 p-4">
              <div className="flex items-center justify-between border-b border-stone-200/60 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-orange-100 text-orange-900">
                    <Sunset className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Afternoon Shift</h4>
                    <p className="text-[0.68rem] text-stone-500">Dusk Safari</p>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-emerald-950">
                  {liveShifts.afternoon}
                </span>
              </div>

              <div className="mt-3 space-y-2 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Gate Opens:</span>
                  <span className="font-mono font-medium text-stone-900">
                    {liveShifts.afternoonGateOpens}
                  </span>
                </div>
                <div className="flex justify-between rounded bg-red-50 px-2 py-1 text-red-900 border border-red-200/50">
                  <span className="font-bold flex items-center gap-1">
                    <Lock className="h-3 w-3 text-red-700" />
                    Last Entry Barrier Lock:
                  </span>
                  <span className="font-mono font-bold">{liveShifts.afternoonLastEntry}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Mandatory Exit:</span>
                  <span className="font-mono font-medium text-stone-900">
                    {liveShifts.afternoonExit}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between rounded-lg bg-stone-50 px-3.5 py-2.5 text-xs text-stone-600 border border-stone-200/60">
            <span>Dhikala Canter Status:</span>
            <span className="font-semibold text-emerald-950">{liveShifts.dhikalaStatusLabel}</span>
          </div>
        </div>

        {/* ── Contact Channels & Helpdesk ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Direct Support Phone & WhatsApp */}
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs space-y-4">
            <h4 className="font-brand text-base font-bold text-stone-900">
              Immediate Booking & Permit Support
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Our safari coordinators assist with current-day permit allocation, gypsy hire, certified guides, and resort cab transfers.
            </p>

            <div className="space-y-3 pt-2">
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="flex items-center justify-between rounded-xl border border-emerald-900/30 bg-emerald-950 px-4 py-3 text-white transition hover:bg-emerald-900"
              >
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-emerald-400" />
                  <div>
                    <span className="text-[0.68rem] uppercase tracking-wider text-emerald-300">
                      Direct Helpline
                    </span>
                    <p className="font-mono text-sm font-bold">{CONTACT_DISPLAY}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-200">Call Now &rarr;</span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-green-950 transition hover:bg-green-100/70"
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-green-600" />
                  <div>
                    <span className="text-[0.68rem] uppercase tracking-wider text-green-700">
                      24/7 WhatsApp Chat
                    </span>
                    <p className="font-mono text-sm font-bold">{CONTACT_DISPLAY}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-green-700">Message &rarr;</span>
              </a>
            </div>
          </div>

          {/* Office & Travel Desk Location */}
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs space-y-4">
            <h4 className="font-brand text-base font-bold text-stone-900">
              Office & Desk Hours
            </h4>
            <ul className="space-y-3 text-xs text-stone-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-800">Physical Address:</span>
                  <p className="text-stone-600 mt-0.5">{RESORT_ADDRESS}</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-800">Desk Working Hours:</span>
                  <p className="text-stone-600 mt-0.5">{businessHours.travelDeskHours}</p>
                </div>
              </li>
              {BRAND_EMAIL ? (
                <li className="flex items-start gap-2.5">
                  <Mail className="h-4 w-4 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-800">Email Inquiries:</span>
                    <p className="text-stone-600 mt-0.5">{BRAND_EMAIL}</p>
                  </div>
                </li>
              ) : null}
            </ul>

            <div className="rounded-xl border border-stone-200/70 bg-stone-50/70 p-3 text-[0.73rem] text-stone-600">
              <p className="font-bold text-stone-900">Reporting Time Advisory:</p>
              <p className="mt-0.5 leading-snug">
                For morning safaris, gypsies pick up from resort at 05:00 AM – 05:30 AM to comfortably meet the forest gate check-in window.
              </p>
            </div>
          </div>
        </div>

        {/* ── Interactive Seasonal Preview Widget ── */}
        <SafariGateTimingsWidget />
      </div>
    </ServicePageShell>
  );
}
