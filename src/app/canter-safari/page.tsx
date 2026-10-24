import type { Metadata } from "next";
import { ServicePageShell, Table, PriceCell, WarningBanner, NotesList, CallHeader } from "@/shared";
import { SafariGateTimingsWidget } from "@/features/safari";
import { safariData } from "@/data-source";
import { getDhikalaCanterSchedule, getFormattedLiveShifts } from "@/lib/safari-timings";
import { Clock, ShieldCheck, Bus, MapPin, AlertCircle, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Dhikala Canter Safari Timings & Rates | Corbett Core Zone",
  description: "Official Dhikala Zone 5.5h Canter Safari schedules, winter & summer loop timings, gate cutoff deadlines, and day visit booking rates.",
};

export default function CanterSafariPage() {
  const dhikala = getDhikalaCanterSchedule();
  const liveShifts = getFormattedLiveShifts();

  // Extract Dhikala sections from master data source
  const indianDhikala = safariData.indian.find((s) => s.id === "dhikala-indian");
  const foreignerDhikala = safariData.foreigner.find((s) => s.id === "dhikala-foreigner");

  return (
    <ServicePageShell contentTitle="Dhikala Canter Safari">
      <div className="space-y-8">
        {/* ── Header ── */}
        <CallHeader
          title="Dhikala Core Zone · Canter Safari"
          tagline="5.5-Hour Deep Wilderness Loop through the heart of Corbett National Park"
          callText={safariData.header.callText}
        />

        {/* ── Status Banner (Live Date-Aware) ── */}
        <div className="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-xs sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Compass className="h-4 w-4 text-emerald-800" />
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-stone-500">
                  Zone Status · Corbett Core
                </span>
              </div>
              <h3 className="font-brand text-lg font-bold text-emerald-950 sm:text-xl">
                Dhikala Canter Operations (15 Nov – 15 Jun)
              </h3>
              <p className="text-xs text-stone-600 max-w-2xl leading-relaxed">
                Day visits to Dhikala Core Zone are strictly operated via 16-seater open-roof Forest Department Canters. Private jeeps are prohibited for day visitors in Dhikala.
              </p>
            </div>

            <div className="flex flex-col sm:items-end">
              <span className="text-[0.68rem] uppercase tracking-wider text-stone-400">
                Current Season Status
              </span>
              <div className="mt-1 flex items-center gap-2">
                {dhikala.isOpen ? (
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900">
                    <span className="inline-block h-2 w-2 rounded-none bg-emerald-600" />
                    Open for Day Visits
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
                    <span className="inline-block h-2 w-2 rounded-none bg-amber-600" />
                    Monsoon Closed (Opens Nov 15)
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Quick Loop Summary Highlights */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 border-t border-stone-100 pt-5 text-xs">
            <div className="rounded-xl border border-stone-200/70 bg-stone-50/60 p-3.5">
              <span className="text-stone-500 font-medium">Winter Loop (Nov 15 – Mar 31)</span>
              <p className="mt-1 font-mono font-bold text-stone-900">06:00 AM & 12:00 PM</p>
              <p className="text-[0.7rem] text-stone-500 mt-0.5">5.5 Hours deep riverbed circuit</p>
            </div>
            <div className="rounded-xl border border-stone-200/70 bg-stone-50/60 p-3.5">
              <span className="text-stone-500 font-medium">Summer Loop (Apr 01 – Jun 15)</span>
              <p className="mt-1 font-mono font-bold text-stone-900">05:30 AM & 12:30 PM</p>
              <p className="text-[0.7rem] text-stone-500 mt-0.5">Early dawn departure to beat midday heat</p>
            </div>
            <div className="rounded-xl border border-stone-200/70 bg-stone-50/60 p-3.5">
              <span className="text-stone-500 font-medium">Monsoon Closure</span>
              <p className="mt-1 font-mono font-bold text-stone-900">16 Jun – 14 Nov</p>
              <p className="text-[0.7rem] text-stone-500 mt-0.5">Annual wildlife breeding & river swells</p>
            </div>
          </div>
        </div>

        {/* ── Interactive Gate Timings & Protocol Widget ── */}
        <SafariGateTimingsWidget showDhikala={true} />

        {/* ── Dhikala Rates (Official Master Data) ── */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-stone-200/80 pb-2">
            <div>
              <h3 className="font-brand text-lg font-bold text-stone-900">
                Official Canter Safari Day-Visit Rates
              </h3>
              <p className="text-xs text-stone-500">
                Rates include Canter seat, government permit fee, guide fee, and Ramnagar entry checkpoint handling.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Indian Guests */}
            {indianDhikala && (
              <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-950">
                    Indian Travelers
                  </span>
                  <span className="rounded bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-900">
                    Day Visit Permit
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-600">Base Permit Rate:</span>
                    <span className="font-mono font-semibold text-stone-800">
                      ₹{indianDhikala.tables[0].rateRows[0].rate.toLocaleString("en-IN")} / Seat
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-600">Final (with 5% GST):</span>
                    <span className="font-mono font-bold text-emerald-950 text-sm">
                      ₹{indianDhikala.tables[0].rateRows[0].gstRate.toLocaleString("en-IN")} / Seat
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                    <span className="text-stone-600">Morning Shift:</span>
                    <span className="font-mono text-stone-800">
                      {dhikala.activeMorning}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-600">Afternoon Shift:</span>
                    <span className="font-mono text-stone-800">
                      {dhikala.activeAfternoon}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Foreign Travelers */}
            {foreignerDhikala && (
              <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-800">
                    Foreign Travelers
                  </span>
                  <span className="rounded bg-stone-100 px-2.5 py-1 text-xs font-semibold text-stone-800">
                    Day Visit Permit
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-600">Base Permit Rate:</span>
                    <span className="font-mono font-semibold text-stone-800">
                      ₹{foreignerDhikala.tables[0].rateRows[0].rate.toLocaleString("en-IN")} / Seat
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-600">Final (with 5% GST):</span>
                    <span className="font-mono font-bold text-emerald-950 text-sm">
                      ₹{foreignerDhikala.tables[0].rateRows[0].gstRate.toLocaleString("en-IN")} / Seat
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                    <span className="text-stone-600">Morning Shift:</span>
                    <span className="font-mono text-stone-800">
                      {dhikala.activeMorning}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-600">Afternoon Shift:</span>
                    <span className="font-mono text-stone-800">
                      {dhikala.activeAfternoon}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Warning and Policy */}
        <WarningBanner message="Important Dhikala Notice: In case of no-show at reporting time or failure to present original Government Photo ID, tickets are automatically deemed canceled by the Forest Department. No adjustments or refunds are permitted." />
      </div>
    </ServicePageShell>
  );
}
