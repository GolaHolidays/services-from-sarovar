import type { Metadata } from "next";
import { ServicePageShell, SinglePriceCell, Table, WarningBanner, CallHeader } from "@/shared";
import { safariData } from "@/data-source";
import { getDhikalaCanterSchedule, DHIKALA_CANTER_DATA } from "@/lib/safari-timings";
import { Compass, ShieldCheck, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Dhikala Canter Safari Timings & Rates | Corbett Core Zone",
  description: "Official Dhikala Zone 5.5h Canter Safari schedules, winter & summer loop timings, gate cutoff deadlines, and day visit booking rates.",
};

export default function CanterSafariPage() {
  const dhikala = getDhikalaCanterSchedule();

  // Extract Dhikala sections from master data source
  const indianDhikala = safariData.indian.find((s) => s.id === "dhikala-indian");
  const foreignerDhikala = safariData.foreigner.find((s) => s.id === "dhikala-foreigner");
  const cabTable = indianDhikala?.cabTables?.[0];

  return (
    <ServicePageShell contentTitle="Dhikala Canter Safari">
      <div className="space-y-8">
        {/* ── Header ── */}
        <CallHeader
          title="Dhikala Core Zone · Canter Safari"
          tagline="5.5-Hour Deep Wilderness Loop through the heart of Corbett National Park"
          callText={safariData.header.callText}
        />

        {/* ── Dhikala Live Operational Status Banner ── */}
        <div className="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-xs sm:p-6 space-y-6">
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
                Day visits to Dhikala Core Zone are strictly operated via official 16-seater open-roof Forest Department Canters. Private jeeps are prohibited for day visitors in Dhikala.
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
                    Open for Day Visits ({dhikala.activeLoop === "winter" ? "Winter Loop" : "Summer Loop"})
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

          {/* ── Official 5.5h Canter Loop Shifts (Winter vs Summer) ── */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 pt-2">
            {/* Winter Loop Card */}
            <div className={`rounded-xl border p-4 sm:p-5 transition-all ${
              dhikala.activeLoop === "winter"
                ? "border-emerald-700/50 bg-emerald-950/5 shadow-xs"
                : "border-stone-200/80 bg-stone-50/50"
            }`}>
              <div className="flex items-center justify-between border-b border-stone-200/70 pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-900">
                      Winter Expedition Loop
                    </span>
                    {dhikala.activeLoop === "winter" && (
                      <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[0.65rem] font-bold text-emerald-900">
                        Active Loop
                      </span>
                    )}
                  </div>
                  <span className="text-[0.7rem] text-stone-500 font-medium">
                    15 November – 31 March
                  </span>
                </div>
                <span className="rounded-md bg-stone-200/70 px-2.5 py-1 font-mono text-xs font-bold text-stone-800">
                  5.5h Circuit
                </span>
              </div>

              <div className="mt-3.5 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-stone-600 font-medium">Morning Shift:</span>
                  <span className="font-mono font-bold text-emerald-950 text-sm">
                    {DHIKALA_CANTER_DATA.winterLoop.morning}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-600 font-medium">Afternoon Shift:</span>
                  <span className="font-mono font-bold text-emerald-950 text-sm">
                    {DHIKALA_CANTER_DATA.winterLoop.afternoon}
                  </span>
                </div>
                <p className="text-[0.7rem] text-stone-500 pt-2 border-t border-stone-200/60 leading-relaxed italic">
                  {DHIKALA_CANTER_DATA.winterLoop.notes}
                </p>
              </div>
            </div>

            {/* Summer Loop Card */}
            <div className={`rounded-xl border p-4 sm:p-5 transition-all ${
              dhikala.activeLoop === "summer"
                ? "border-amber-700/50 bg-amber-950/5 shadow-xs"
                : "border-stone-200/80 bg-stone-50/50"
            }`}>
              <div className="flex items-center justify-between border-b border-stone-200/70 pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-900">
                      Summer Early Dawn Loop
                    </span>
                    {dhikala.activeLoop === "summer" && (
                      <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[0.65rem] font-bold text-amber-900">
                        Active Loop
                      </span>
                    )}
                  </div>
                  <span className="text-[0.7rem] text-stone-500 font-medium">
                    01 April – 15 June
                  </span>
                </div>
                <span className="rounded-md bg-stone-200/70 px-2.5 py-1 font-mono text-xs font-bold text-stone-800">
                  5.5h Circuit
                </span>
              </div>

              <div className="mt-3.5 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-stone-600 font-medium">Morning Shift:</span>
                  <span className="font-mono font-bold text-emerald-950 text-sm">
                    {DHIKALA_CANTER_DATA.summerLoop.morning}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-600 font-medium">Afternoon Shift:</span>
                  <span className="font-mono font-bold text-emerald-950 text-sm">
                    {DHIKALA_CANTER_DATA.summerLoop.afternoon}
                  </span>
                </div>
                <p className="text-[0.7rem] text-stone-500 pt-2 border-t border-stone-200/60 leading-relaxed italic">
                  {DHIKALA_CANTER_DATA.summerLoop.notes}
                </p>
              </div>
            </div>
          </div>

          {/* Monsoon Annual Notice */}
          <div className="flex items-start gap-2.5 rounded-xl border border-amber-200/80 bg-amber-50/60 p-3 text-xs text-amber-950">
            <AlertTriangle className="h-4 w-4 shrink-0 text-amber-700 mt-0.5" />
            <p className="leading-relaxed text-amber-900 text-[0.73rem]">
              <strong className="font-semibold text-amber-950">Annual Monsoon Breeding Closure: </strong>
              {DHIKALA_CANTER_DATA.monsoonNotice}
            </p>
          </div>
        </div>

        {/* ── Essential Dhikala Canter Protocol ── */}
        <div className="rounded-2xl border border-stone-200/90 bg-stone-50/50 p-5 sm:p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-800" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
              Essential Dhikala Canter Protocols
            </h4>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 text-xs">
            <div className="rounded-xl border border-stone-200/70 bg-white p-3.5">
              <span className="font-bold text-stone-900 block">Vehicle Specification</span>
              <p className="mt-1 text-[0.72rem] text-stone-600 leading-relaxed">
                Official 16-seater open-roof safari Canter with high road clearance. Private jeeps strictly prohibited.
              </p>
            </div>
            <div className="rounded-xl border border-stone-200/70 bg-white p-3.5">
              <span className="font-bold text-stone-900 block">Boarding Checkpoint</span>
              <p className="mt-1 text-[0.72rem] text-stone-600 leading-relaxed">
                Dhangari Gate Reception checkpoint. Boarding verification closes promptly 30 mins prior to shift start.
              </p>
            </div>
            <div className="rounded-xl border border-stone-200/70 bg-white p-3.5">
              <span className="font-bold text-stone-900 block">Original Photo ID</span>
              <p className="mt-1 text-[0.72rem] text-stone-600 leading-relaxed">
                Mandatory physical government ID (Aadhaar / Passport / Voter ID) for every passenger at gate verification.
              </p>
            </div>
            <div className="rounded-xl border border-stone-200/70 bg-white p-3.5">
              <span className="font-bold text-stone-900 block">Limited Seat Ceiling</span>
              <p className="mt-1 text-[0.72rem] text-stone-600 leading-relaxed">
                Department quota strictly capped at 4 canters (64 seats total) per shift for the entire reserve.
              </p>
            </div>
          </div>
        </div>

        {/* ── Dhikala Rates (Official Master Data) ── */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-stone-200/80 pb-2">
            <div>
              <h3 className="font-brand text-lg font-bold text-stone-900">
                Official Canter Safari Day-Visit Rates
              </h3>
              <p className="text-xs text-stone-500">
                Rates include Canter seat, government permit fee, certified guide fee, and Ramnagar entry checkpoint handling.
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
                  <span className="rounded bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-900 border border-emerald-200/60">
                    Day Visit Permit
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-600 font-medium">Base Permit Rate:</span>
                    <span className="font-mono font-semibold text-stone-800">
                      ₹{indianDhikala.tables[0].rateRows[0].rate.toLocaleString("en-IN")} / Seat
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-600 font-medium">Final (with 5% GST):</span>
                    <span className="font-mono font-bold text-emerald-950 text-sm">
                      ₹{indianDhikala.tables[0].rateRows[0].gstRate.toLocaleString("en-IN")} / Seat
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                    <span className="text-stone-600">Morning Shift:</span>
                    <span className="font-mono text-stone-900 font-semibold">
                      {dhikala.activeMorning}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-600">Afternoon Shift:</span>
                    <span className="font-mono text-stone-900 font-semibold">
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
                  <span className="rounded bg-stone-100 px-2.5 py-1 text-xs font-semibold text-stone-800 border border-stone-200/60">
                    Day Visit Permit
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-600 font-medium">Base Permit Rate:</span>
                    <span className="font-mono font-semibold text-stone-800">
                      ₹{foreignerDhikala.tables[0].rateRows[0].rate.toLocaleString("en-IN")} / Seat
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-600 font-medium">Final (with 5% GST):</span>
                    <span className="font-mono font-bold text-emerald-950 text-sm">
                      ₹{foreignerDhikala.tables[0].rateRows[0].gstRate.toLocaleString("en-IN")} / Seat
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                    <span className="text-stone-600">Morning Shift:</span>
                    <span className="font-mono text-stone-900 font-semibold">
                      {dhikala.activeMorning}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-600">Afternoon Shift:</span>
                    <span className="font-mono text-stone-900 font-semibold">
                      {dhikala.activeAfternoon}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Cab Transfers for Dhikala Canter (Resort to Gate) ── */}
        {cabTable && (
          <div className="space-y-3">
            <div className="rounded-lg bg-[color:var(--color-accent)]/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--cat-prebooking-accent)]">
              Resort to Gate Cab Transfer Services (Optional Add-on)
            </div>
            <Table>
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Pickup/Drop</th>
                  <th>Dzire</th>
                  <th>Ertiga</th>
                  <th>Innova Crysta</th>
                </tr>
              </thead>
              <tbody>
                {cabTable.rateRows.map((row, i) => (
                  <tr key={`dhikala-cab-${i}`}>
                    <td className="px-4 py-3 font-bold text-[color:var(--color-primary)]">
                      {row.location}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-zinc-700">
                      {row.pickupDrop}
                    </td>
                    <SinglePriceCell amount={row.dzire as number} />
                    <SinglePriceCell amount={row.ertiga as number} />
                    <SinglePriceCell amount={row.innovaCrysta as number} />
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}

        {/* Warning and Policy */}
        <WarningBanner message="Important Dhikala Notice: In case of no-show at reporting time or failure to present original Government Photo ID, tickets are automatically deemed canceled by the Forest Department. No adjustments or refunds are permitted." />
      </div>
    </ServicePageShell>
  );
}
