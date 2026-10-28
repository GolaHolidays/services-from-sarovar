import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageShell, CallHeader } from "@/shared";
import {
  getFormattedLiveShifts,
  getResortTransitAdvisory,
} from "@/lib/safari-timings";
import {
  CONTACT_DISPLAY,
  CONTACT_PHONE,
  WHATSAPP_NUMBER,
  BRAND_EMAIL,
  RESORT_ADDRESS,
  SITE_BUSINESS_HOURS,
} from "@/shared/constants/ui.constants";
import {
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  Lock,
  Sun,
  Sunset,
  Car,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Official Travel Desk & Safari Office | Corbett Safari",
  description: "Contact the official Jim Corbett safari desk for permits, today's active gate shifts, last entry cutoffs, and resort cab assistance.",
};

export default function ContactPage() {
  const liveShifts = getFormattedLiveShifts();
  const transitAdvisory = getResortTransitAdvisory();
  const businessHours = SITE_BUSINESS_HOURS;

  return (
    <ServicePageShell contentTitle="Contact Desk & Office">
      <div className="space-y-8">
        <CallHeader
          title="Official Corbett Travel Desk"
          tagline="Direct assistance with verified safari bookings, gate cutoffs, and resort departures"
          callText={`Call ${CONTACT_DISPLAY}`}
        />

        {/* ── Contact Channels & Travel Desk Office ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Direct Support Phone & WhatsApp */}
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs sm:p-6 space-y-4">
            <h4 className="font-brand text-base font-bold text-stone-900">
              Immediate Booking & Permit Support
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Our dedicated safari coordinators assist guests with advance permit allocations, gypsy hire, licensed forest guides, and resort cab transfers.
            </p>

            <div className="space-y-3 pt-1">
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

            <div className="pt-2 border-t border-stone-100 space-y-2 text-xs text-stone-600">
              <div className="flex justify-between items-center">
                <span className="font-medium text-stone-700">Desk Working Hours:</span>
                <span className="font-semibold text-stone-900">{businessHours.travelDeskHours}</span>
              </div>
              {BRAND_EMAIL ? (
                <div className="flex justify-between items-center">
                  <span className="font-medium text-stone-700">Email Desk:</span>
                  <span className="font-semibold text-stone-900">{BRAND_EMAIL}</span>
                </div>
              ) : null}
            </div>
          </div>

          {/* Office & Travel Desk Location */}
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs sm:p-6 space-y-4">
            <h4 className="font-brand text-base font-bold text-stone-900">
              Resort Location & Gate Distances
            </h4>
            <div className="space-y-1 text-xs text-stone-600">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-800">Physical Resort Address:</span>
                  <p className="text-stone-600 mt-0.5">{RESORT_ADDRESS}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2 border-t border-stone-100 pt-3 text-xs text-stone-600">
              <p className="font-semibold text-stone-800">Travel Times to Corbett Forest Gates:</p>
              <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                <div className="rounded-lg bg-stone-50 p-2 border border-stone-200/60">
                  <span className="font-medium text-stone-800">Bijrani Gate:</span>
                  <p className="text-[11px] text-stone-500">29 Km (approx. 50–55 mins)</p>
                </div>
                <div className="rounded-lg bg-stone-50 p-2 border border-stone-200/60">
                  <span className="font-medium text-stone-800">Jhirna / Dhela Gate:</span>
                  <p className="text-[11px] text-stone-500">41 Km (approx. 75–80 mins)</p>
                </div>
                <div className="rounded-lg bg-stone-50 p-2 border border-stone-200/60">
                  <span className="font-medium text-stone-800">Garjiya Gate:</span>
                  <p className="text-[11px] text-stone-500">32 Km (approx. 60 mins)</p>
                </div>
                <div className="rounded-lg bg-stone-50 p-2 border border-stone-200/60">
                  <span className="font-medium text-stone-800">Dhangari (Dhikala) Gate:</span>
                  <p className="text-[11px] text-stone-500">46 Km (approx. 85–90 mins)</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-stone-200/70 bg-stone-50/70 p-3 text-[0.73rem] text-stone-600">
              <span className="font-bold text-stone-900">Resort Transit Note: </span>
              <span>All forest entrance gates enforce strict electronically synchronized boom barrier cutoffs. Private personal vehicles cannot enter safari sectors.</span>
            </div>
          </div>
        </div>

        {/* ── Official Safari Gate Operations & Resort Departure Schedule (Single Authoritative Source) ── */}
        <div className="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-xs sm:p-7 space-y-5">
          <div className="flex flex-col gap-2 border-b border-stone-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-800" />
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-stone-500">
                  Live Forest Department Schedule
                </span>
              </div>
              <h3 className="font-brand text-lg font-bold text-stone-900 sm:text-xl">
                Today&apos;s Active Safari Gates & Resort Departure Schedule
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-stone-500">Date:</span>
              <span className="font-semibold text-stone-900">{liveShifts.istDateString}</span>
              <span className="flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-[0.72rem] font-semibold text-emerald-900 border border-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>{liveShifts.activeSeasonName} ({liveShifts.activeScheduleLabel})</span>
              </span>
            </div>
          </div>

          {/* Today's Shifts Grid with Dynamic Resort Departure */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Morning Shift */}
            <div className="rounded-xl border border-stone-200/80 bg-stone-50/50 p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-stone-200/60 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-100 text-amber-900">
                    <Sun className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Morning Safari Shift</h4>
                    <p className="text-[0.68rem] text-stone-500">Dawn Safari</p>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-emerald-950">
                  {liveShifts.morning}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Gate Opens:</span>
                  <span className="font-mono font-medium text-stone-900">
                    {liveShifts.morningGateOpens}
                  </span>
                </div>
                <div className="flex justify-between rounded bg-red-50 px-2.5 py-1 text-red-900 border border-red-200/50">
                  <span className="font-bold flex items-center gap-1">
                    <Lock className="h-3 w-3 text-red-700" />
                    Strict Barrier Lock Cutoff:
                  </span>
                  <span className="font-mono font-bold">{liveShifts.morningLastEntry}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Mandatory Forest Exit:</span>
                  <span className="font-mono font-medium text-stone-900">
                    {liveShifts.morningExit}
                  </span>
                </div>
                <div className="flex justify-between rounded-lg bg-emerald-100/70 px-2.5 py-1.5 text-emerald-950 border border-emerald-300/70">
                  <span className="font-bold flex items-center gap-1">
                    <Car className="h-3.5 w-3.5 text-emerald-800" />
                    Resort Departure Window:
                  </span>
                  <span className="font-mono font-bold text-emerald-900">
                    {transitAdvisory.morningDeparture}
                  </span>
                </div>
              </div>
            </div>

            {/* Afternoon Shift */}
            <div className="rounded-xl border border-stone-200/80 bg-stone-50/50 p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-stone-200/60 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-orange-100 text-orange-900">
                    <Sunset className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Afternoon Safari Shift</h4>
                    <p className="text-[0.68rem] text-stone-500">Dusk Safari</p>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-emerald-950">
                  {liveShifts.afternoon}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Gate Opens:</span>
                  <span className="font-mono font-medium text-stone-900">
                    {liveShifts.afternoonGateOpens}
                  </span>
                </div>
                <div className="flex justify-between rounded bg-red-50 px-2.5 py-1 text-red-900 border border-red-200/50">
                  <span className="font-bold flex items-center gap-1">
                    <Lock className="h-3 w-3 text-red-700" />
                    Strict Barrier Lock Cutoff:
                  </span>
                  <span className="font-mono font-bold">{liveShifts.afternoonLastEntry}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Mandatory Forest Exit:</span>
                  <span className="font-mono font-medium text-stone-900">
                    {liveShifts.afternoonExit}
                  </span>
                </div>
                <div className="flex justify-between rounded-lg bg-emerald-100/70 px-2.5 py-1.5 text-emerald-950 border border-emerald-300/70">
                  <span className="font-bold flex items-center gap-1">
                    <Car className="h-3.5 w-3.5 text-emerald-800" />
                    Resort Departure Window:
                  </span>
                  <span className="font-mono font-bold text-emerald-900">
                    {transitAdvisory.afternoonDeparture}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Advisory & Dhikala Status Bar */}
          <div className="rounded-xl border border-stone-200 bg-stone-50 p-3.5 text-xs text-stone-700 space-y-2">
            <p className="leading-relaxed">
              <strong>⛔ Critical Gate Barrier Warning:</strong> Forest entrance boom barriers are synchronized with the central department server and drop strictly at <strong>{liveShifts.morningLastEntry}</strong> and <strong>{liveShifts.afternoonLastEntry}</strong>. Late entries cannot be accommodated.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 pt-1.5 border-t border-stone-200/60 text-stone-600">
              <span>{transitAdvisory.departureNotes}</span>
              <span className="font-semibold text-emerald-950 shrink-0">
                Dhikala Canter: {liveShifts.dhikalaStatusLabel}
              </span>
            </div>
          </div>
        </div>

        {/* ── Quick Reference Link Cards (No duplicate widget) ── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            href="/faq"
            className="flex items-center justify-between rounded-xl border border-stone-200 bg-white p-4 transition hover:border-emerald-600 hover:shadow-xs group"
          >
            <div>
              <p className="font-bold text-sm text-stone-900 group-hover:text-emerald-900">
                Official 4-Season Gate Guide & FAQ
              </p>
              <p className="text-xs text-stone-500 mt-0.5">
                View all Autumn, Winter, Spring & Summer cutoff schedules
              </p>
            </div>
            <ArrowRight className="h-4 w-4 text-stone-400 group-hover:text-emerald-800 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/safari"
            className="flex items-center justify-between rounded-xl border border-stone-200 bg-white p-4 transition hover:border-emerald-600 hover:shadow-xs group"
          >
            <div>
              <p className="font-bold text-sm text-stone-900 group-hover:text-emerald-900">
                Safari Packages & Zone Pricing
              </p>
              <p className="text-xs text-stone-500 mt-0.5">
                Compare rates, permits, and gypsy inclusions
              </p>
            </div>
            <ArrowRight className="h-4 w-4 text-stone-400 group-hover:text-emerald-800 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </ServicePageShell>
  );
}

