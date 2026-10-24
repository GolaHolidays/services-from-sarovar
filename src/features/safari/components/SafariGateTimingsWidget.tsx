"use client";

import { useState, useId } from "react";
import {
  Clock,
  ShieldAlert,
  IdCard,
  FileText,
  Compass,
  Lock,
  Sun,
  Sunset,
  AlertTriangle,
} from "lucide-react";
import {
  SAFARI_SEASONS,
  getAllSeasonsList,
  getActiveSafariSchedule,
  getDhikalaCanterSchedule,
  GATE_DEADLINE_PROTOCOL,
  type SeasonId,
  type SafariSeasonSchedule,
} from "@/lib/safari-timings";

export interface SafariGateTimingsWidgetProps {
  /**
   * Optional default season override. If omitted, automatically resolves
   * current season based on current date in IST.
   */
  defaultSeason?: SeasonId;
  /**
   * Show Dhikala Canter schedule section below general timings. Default true.
   */
  showDhikala?: boolean;
  /**
   * Show gate deadline protocol requirements. Default true.
   */
  showGateRules?: boolean;
  /**
   * Custom CSS container class.
   */
  className?: string;
}

export function SafariGateTimingsWidget({
  defaultSeason,
  showDhikala = true,
  showGateRules = true,
  className = "",
}: SafariGateTimingsWidgetProps) {
  const seasons = getAllSeasonsList();
  const currentActiveSchedule = getActiveSafariSchedule();
  const currentSeasonId = currentActiveSchedule.id;

  const [selectedSeasonId, setSelectedSeasonId] = useState<SeasonId>(
    defaultSeason || currentSeasonId
  );

  const selectedSeason: SafariSeasonSchedule = SAFARI_SEASONS[selectedSeasonId];
  const dhikalaSchedule = getDhikalaCanterSchedule();
  const isSelectedSeasonActive = selectedSeasonId === currentSeasonId;
  const widgetId = useId();

  return (
    <section
      aria-label="Official Safari Timings and Gate Protocols"
      className={`relative w-full rounded-2xl border border-stone-200/80 bg-white shadow-xs transition-all ${className}`}
    >
      {/* ── Minimalist Header Bar ── */}
      <div className="border-b border-stone-200/70 px-5 py-4 sm:px-7 sm:py-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-stone-500">
                <Clock className="h-3 w-3 text-emerald-800" />
                Uttarakhand Forest Department Official Schedule
              </span>
            </div>
            <h2 className="font-brand text-xl font-semibold tracking-tight text-emerald-950 sm:text-2xl">
              Safari Gate Timings & Protocols
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-500">
            <span className="inline-block h-2 w-2 rounded-none bg-emerald-600" />
            <span className="text-[0.72rem]">Live active schedule marked</span>
          </div>
        </div>
      </div>

      {/* ── Main Body ── */}
      <div className="p-5 sm:p-7 space-y-8">
        {/* ── 1. General Safari Gate Windows (4 Seasonal Windows) ── */}
        <div className="space-y-5">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-stone-400">
                General Safari Gate Windows
              </span>
              <h3 className="text-sm font-bold text-stone-900">
                Jeep Safari Zones (Bijrani, Jhirna, Dhela, Garjiya, Durga Devi, Phato)
              </h3>
            </div>
            <span className="text-[0.72rem] text-stone-500">
              Select window to preview seasonal shift hours:
            </span>
          </div>

          {/* 4 Seasonal Window Tabs */}
          <div
            role="tablist"
            aria-label="Safari seasonal schedules"
            className="grid grid-cols-2 gap-2 sm:grid-cols-4"
          >
            {seasons.map((season) => {
              const isSelected = season.id === selectedSeasonId;
              const isCurrent = season.id === currentSeasonId;

              return (
                <button
                  key={season.id}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`${widgetId}-panel-${season.id}`}
                  id={`${widgetId}-tab-${season.id}`}
                  type="button"
                  onClick={() => setSelectedSeasonId(season.id)}
                  className={`group relative flex flex-col items-start rounded-xl px-3.5 py-3 text-left transition-all duration-150 ${
                    isSelected
                      ? "border border-emerald-900/30 bg-emerald-950/5 shadow-xs"
                      : "border border-stone-200/80 bg-stone-50/50 hover:border-stone-300 hover:bg-stone-50"
                  }`}
                >
                  {/* Season Label with Clean Green Square Dot for Active Schedule */}
                  <div className="flex w-full items-center justify-between gap-1">
                    <span
                      className={`text-xs font-semibold ${
                        isSelected ? "text-emerald-950" : "text-stone-800"
                      }`}
                    >
                      {season.label}
                    </span>

                    {/* Subtle green square dot (w-2 h-2) directly to the right of the season label */}
                    {isCurrent && (
                      <span
                        className="inline-block h-2 w-2 shrink-0 rounded-none bg-emerald-600"
                        title="Currently active seasonal window"
                        aria-label="Active seasonal schedule"
                      />
                    )}
                  </div>

                  <span className="mt-0.5 text-[0.7rem] text-stone-500">
                    {season.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Window Details Panel */}
          <div
            id={`${widgetId}-panel-${selectedSeason.id}`}
            role="tabpanel"
            aria-labelledby={`${widgetId}-tab-${selectedSeason.id}`}
            className="space-y-4 pt-1"
          >
            <div className="flex flex-col gap-1.5 border-b border-stone-100 pb-3 sm:flex-row sm:items-baseline sm:justify-between">
              <div className="flex items-center gap-2">
                <h4 className="font-brand text-base font-bold text-stone-900">
                  {selectedSeason.name} Window
                </h4>
                {isSelectedSeasonActive && (
                  <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-800">
                    <span className="inline-block h-2 w-2 rounded-none bg-emerald-600" />
                    Live active schedule
                  </span>
                )}
              </div>
              <div className="text-xs font-medium text-stone-600 sm:text-right">
                <span>Period: </span>
                <span className="font-semibold text-stone-900">
                  {selectedSeason.dateRangeText}
                </span>
              </div>
            </div>

            {/* Shift Cards: Morning & Afternoon */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* Morning Safari Card */}
              <div className="rounded-xl border border-stone-200/90 bg-stone-50/40 p-4 sm:p-5">
                <div className="flex items-center justify-between border-b border-stone-200/70 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-900">
                      <Sun className="h-4 w-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-stone-900">
                        Morning Safari
                      </h5>
                      <span className="text-[0.7rem] text-stone-500">
                        Dawn Tracking Window
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[0.68rem] uppercase tracking-wider text-stone-500">
                      Shift Hours
                    </span>
                    <p className="font-mono text-sm font-bold text-emerald-950">
                      {selectedSeason.morning.shiftSummary}
                    </p>
                  </div>
                </div>

                {/* Gate Timeline */}
                <div className="mt-4 space-y-2.5">
                  <div className="flex items-start justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[0.65rem] font-bold text-emerald-800">
                        1
                      </span>
                      <div>
                        <p className="font-medium text-stone-800">Gate Opens (Check-in start)</p>
                        <p className="text-[0.68rem] text-stone-500">Guide allocation & document check</p>
                      </div>
                    </div>
                    <span className="font-mono font-semibold text-stone-900">
                      {selectedSeason.morning.gateOpens}
                    </span>
                  </div>

                  <div className="flex items-start justify-between rounded-lg bg-red-50/80 px-2.5 py-2 text-xs border border-red-200/60">
                    <div className="flex items-center gap-2">
                      <Lock className="h-3.5 w-3.5 text-red-700 shrink-0" />
                      <div>
                        <p className="font-bold text-red-900">
                          Last Entry (Gate locks)
                        </p>
                        <p className="text-[0.68rem] text-red-700">Strict barrier locking deadline</p>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-red-950">
                      {selectedSeason.morning.lastEntry}
                    </span>
                  </div>

                  <div className="flex items-start justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-200 text-[0.65rem] font-bold text-stone-700">
                        3
                      </span>
                      <div>
                        <p className="font-medium text-stone-800">Mandatory Exit (Check-out)</p>
                        <p className="text-[0.68rem] text-stone-500">Vehicles must clear gate</p>
                      </div>
                    </div>
                    <span className="font-mono font-semibold text-stone-900">
                      {selectedSeason.morning.mandatoryExit}
                    </span>
                  </div>
                </div>

                {selectedSeason.morning.note && (
                  <p className="mt-3 text-[0.72rem] text-stone-500 border-t border-stone-200/60 pt-2 italic">
                    {selectedSeason.morning.note}
                  </p>
                )}
              </div>

              {/* Afternoon Safari Card */}
              <div className="rounded-xl border border-stone-200/90 bg-stone-50/40 p-4 sm:p-5">
                <div className="flex items-center justify-between border-b border-stone-200/70 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-orange-900">
                      <Sunset className="h-4 w-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-stone-900">
                        Afternoon Safari
                      </h5>
                      <span className="text-[0.7rem] text-stone-500">
                        Dusk Tracking Window
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[0.68rem] uppercase tracking-wider text-stone-500">
                      Shift Hours
                    </span>
                    <p className="font-mono text-sm font-bold text-emerald-950">
                      {selectedSeason.afternoon.shiftSummary}
                    </p>
                  </div>
                </div>

                {/* Gate Timeline */}
                <div className="mt-4 space-y-2.5">
                  <div className="flex items-start justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[0.65rem] font-bold text-emerald-800">
                        1
                      </span>
                      <div>
                        <p className="font-medium text-stone-800">Gate Opens (Check-in start)</p>
                        <p className="text-[0.68rem] text-stone-500">Guide allocation & document check</p>
                      </div>
                    </div>
                    <span className="font-mono font-semibold text-stone-900">
                      {selectedSeason.afternoon.gateOpens}
                    </span>
                  </div>

                  <div className="flex items-start justify-between rounded-lg bg-red-50/80 px-2.5 py-2 text-xs border border-red-200/60">
                    <div className="flex items-center gap-2">
                      <Lock className="h-3.5 w-3.5 text-red-700 shrink-0" />
                      <div>
                        <p className="font-bold text-red-900">
                          Last Entry (Gate locks)
                        </p>
                        <p className="text-[0.68rem] text-red-700">Strict barrier locking deadline</p>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-red-950">
                      {selectedSeason.afternoon.lastEntry}
                    </span>
                  </div>

                  <div className="flex items-start justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-200 text-[0.65rem] font-bold text-stone-700">
                        3
                      </span>
                      <div>
                        <p className="font-medium text-stone-800">Mandatory Exit (Check-out)</p>
                        <p className="text-[0.68rem] text-stone-500">Vehicles must clear gate before darkness</p>
                      </div>
                    </div>
                    <span className="font-mono font-semibold text-stone-900">
                      {selectedSeason.afternoon.mandatoryExit}
                    </span>
                  </div>
                </div>

                {selectedSeason.afternoon.note && (
                  <p className="mt-3 text-[0.72rem] text-stone-500 border-t border-stone-200/60 pt-2 italic">
                    {selectedSeason.afternoon.note}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. Dhikala Core Zone · Canter Safari Shifts (Directly Below General Timings) ── */}
        {showDhikala && (
          <div className="border-t border-stone-200/80 pt-6 space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-emerald-800" />
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-stone-400">
                    Core Zone Expedition
                  </span>
                </div>
                <h3 className="text-sm font-bold text-stone-900 sm:text-base">
                  Dhikala Core Zone · Canter Safari Shifts (Canter Only)
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Day visits to Dhikala are operated exclusively via official 16-seater open-top Forest Department Canters (5.5-Hour Deep Loop).
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-stone-500">Season Status:</span>
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 font-semibold rounded ${
                    dhikalaSchedule.isOpen
                      ? "bg-emerald-100 text-emerald-900"
                      : "bg-amber-100 text-amber-900"
                  }`}
                >
                  <span
                    className={`inline-block h-2 w-2 rounded-none ${
                      dhikalaSchedule.isOpen ? "bg-emerald-600" : "bg-amber-600"
                    }`}
                  />
                  {dhikalaSchedule.statusLabel}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-stone-600 bg-stone-50 px-3.5 py-2 rounded-lg border border-stone-200/60">
              <span className="font-semibold text-stone-800">Operating Calendar:</span>
              <span>Open 15 Nov – 15 Jun | Closed 16 Jun – 14 Nov (Monsoon)</span>
            </div>

            {/* Dhikala Schedule Grid: Winter vs Summer */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Winter Loop */}
              <div className="rounded-xl border border-stone-200/90 bg-stone-50/50 p-4 sm:p-5">
                <div className="flex items-center justify-between border-b border-stone-200/80 pb-2.5">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                      Winter (Nov 15 – Mar 31)
                    </h5>
                    <p className="text-[0.68rem] text-stone-500">5.5h Deep Loop</p>
                  </div>
                  <span className="font-mono text-xs font-semibold text-emerald-950">
                    5.5h Circuit
                  </span>
                </div>
                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-600">Morning Expedition:</span>
                    <span className="font-mono font-bold text-stone-900">
                      {dhikalaSchedule.winterLoop.morning}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-600">Afternoon Expedition:</span>
                    <span className="font-mono font-bold text-stone-900">
                      {dhikalaSchedule.winterLoop.afternoon}
                    </span>
                  </div>
                  <p className="text-[0.7rem] text-stone-500 pt-2 border-t border-stone-200/60 italic">
                    {dhikalaSchedule.winterLoop.notes}
                  </p>
                </div>
              </div>

              {/* Summer Loop */}
              <div className="rounded-xl border border-stone-200/90 bg-stone-50/50 p-4 sm:p-5">
                <div className="flex items-center justify-between border-b border-stone-200/80 pb-2.5">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                      Summer (Apr 01 – Jun 15)
                    </h5>
                    <p className="text-[0.68rem] text-stone-500">Early Dawn Departure</p>
                  </div>
                  <span className="font-mono text-xs font-semibold text-amber-950">
                    Early Dawn
                  </span>
                </div>
                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-600">Morning Expedition:</span>
                    <span className="font-mono font-bold text-stone-900">
                      {dhikalaSchedule.summerLoop.morning}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-600">Afternoon Expedition:</span>
                    <span className="font-mono font-bold text-stone-900">
                      {dhikalaSchedule.summerLoop.afternoon}
                    </span>
                  </div>
                  <p className="text-[0.7rem] text-stone-500 pt-2 border-t border-stone-200/60 italic">
                    {dhikalaSchedule.summerLoop.notes}
                  </p>
                </div>
              </div>
            </div>

            {/* Monsoon Notice */}
            <div className="flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50/60 p-3 text-xs text-amber-950">
              <AlertTriangle className="h-4 w-4 shrink-0 text-amber-700 mt-0.5" />
              <p className="leading-relaxed text-amber-900/90 text-[0.73rem]">
                <strong className="font-semibold text-amber-950">Monsoon Closure: </strong>
                {dhikalaSchedule.monsoonClosureNotice}
              </p>
            </div>
          </div>
        )}

        {/* ── 3. Gate Deadline Protocol & Mandatory Requirements ── */}
        {showGateRules && (
          <div className="border-t border-stone-200/80 pt-6 space-y-5">
            <div>
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-stone-400">
                Department Protocol
              </span>
              <h4 className="text-sm font-bold text-stone-900">
                Gate Deadline Protocol & Verification Rules
              </h4>
              <p className="text-xs text-stone-700 mt-1 leading-relaxed max-w-3xl">
                {GATE_DEADLINE_PROTOCOL.ruleSummary}
              </p>
            </div>

            {/* 3 Mandatory Requirements */}
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
              {GATE_DEADLINE_PROTOCOL.mandatoryRequirements.map((req, i) => {
                const IconComponent =
                  i === 0 ? IdCard : i === 1 ? FileText : Compass;
                return (
                  <div
                    key={req.id}
                    className="flex flex-col rounded-xl border border-stone-200/80 bg-stone-50/40 p-3.5"
                  >
                    <div className="flex items-center gap-2 text-emerald-900">
                      <IconComponent className="h-4 w-4 shrink-0 text-emerald-800" />
                      <h5 className="text-xs font-bold text-stone-900">
                        {req.title}
                      </h5>
                    </div>
                    <p className="mt-2 text-[0.73rem] leading-relaxed text-stone-600">
                      {req.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Barrier Warning Callout */}
            <div className="rounded-xl border border-red-200/80 bg-red-50/60 p-3.5 sm:p-4">
              <div className="flex items-start gap-3">
                <ShieldAlert className="h-4 w-4 shrink-0 text-red-700 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <p className="font-bold text-red-950">
                    Important Forest Barrier Warning:
                  </p>
                  <p className="leading-relaxed text-red-900/90 text-[0.73rem]">
                    {GATE_DEADLINE_PROTOCOL.warningNotice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Footer Metadata ── */}
      <div className="border-t border-stone-200/70 bg-stone-50/70 px-5 py-3 sm:px-7 rounded-b-2xl">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[0.7rem] text-stone-500">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-none bg-emerald-600" />
            <span>Single Source of Truth · Uttarakhand Forest Department</span>
          </span>
          <span>Timezone: Asia/Kolkata (IST)</span>
        </div>
      </div>
    </section>
  );
}
