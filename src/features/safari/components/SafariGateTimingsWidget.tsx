"use client";

import { useState } from "react";
import {
  Clock,
  Sun,
  Sunset,
  Lock,
  Compass,
  ChevronDown,
  ChevronUp,
  IdCard,
  FileText,
  ShieldAlert,
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
   * Controlled selected season ID override.
   */
  selectedSeasonId?: SeasonId;
  /**
   * Callback fired when user switches seasons.
   */
  onSeasonChange?: (seasonId: SeasonId) => void;
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
  /**
   * Default expanded state for detailed protocol rules. Default false.
   */
  defaultExpanded?: boolean;
}

export function SafariGateTimingsWidget({
  defaultSeason,
  selectedSeasonId: controlledSeasonId,
  onSeasonChange,
  showDhikala = true,
  showGateRules = true,
  className = "",
  defaultExpanded = false,
}: SafariGateTimingsWidgetProps) {
  const seasons = getAllSeasonsList();
  const currentActiveSchedule = getActiveSafariSchedule();
  const currentSeasonId = currentActiveSchedule.id;

  const [internalSeasonId, setInternalSeasonId] = useState<SeasonId>(
    defaultSeason || currentSeasonId
  );
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const selectedSeasonId = controlledSeasonId ?? internalSeasonId;
  const handleSeasonSelect = (seasonId: SeasonId) => {
    setInternalSeasonId(seasonId);
    onSeasonChange?.(seasonId);
  };

  const selectedSeason: SafariSeasonSchedule = SAFARI_SEASONS[selectedSeasonId];
  const dhikalaSchedule = getDhikalaCanterSchedule();

  return (
    <section
      aria-label="Official Safari Timings and Gate Protocols"
      className={`relative w-full rounded-2xl border border-stone-200/90 bg-white shadow-xs overflow-hidden transition-all ${className}`}
    >
      {/* ── Compact Header & Season Pills Bar ── */}
      <div className="flex flex-col gap-2.5 border-b border-stone-200/70 bg-stone-50/70 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-emerald-800 shrink-0" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">
            Safari Gate Timings & Cutoffs
          </h3>
          <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 text-[0.65rem] font-semibold text-emerald-800 border border-emerald-200/60">
            <span className="h-1.5 w-1.5 rounded-none bg-emerald-600" />
            Live Forest Dept IST
          </span>
        </div>

        {/* Compact Segmented Season Pills */}
        <div
          role="tablist"
          aria-label="Select season schedule"
          className="flex flex-wrap items-center gap-1 rounded-xl bg-stone-200/60 p-1 text-[0.72rem]"
        >
          {seasons.map((season) => {
            const isSelected = season.id === selectedSeasonId;
            const isCurrent = season.id === currentSeasonId;

            return (
              <button
                key={season.id}
                role="tab"
                aria-selected={isSelected}
                type="button"
                onClick={() => handleSeasonSelect(season.id)}
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-semibold transition-all ${
                  isSelected
                    ? "bg-white text-emerald-950 shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <span>{season.label}</span>
                {isCurrent && (
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-none bg-emerald-600"
                    title="Current live active season"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Concise Concrete Shift Grid ── */}
      <div className="p-4 sm:p-5">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {/* Morning Shift */}
          <div className="rounded-xl border border-stone-200/80 bg-stone-50/40 p-3.5 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-amber-900 shrink-0">
                  <Sun className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900">Morning Safari</h4>
                  <span className="text-[0.68rem] text-stone-500">Gate opens {selectedSeason.morning.gateOpens}</span>
                </div>
              </div>
              <span className="font-mono text-sm font-extrabold text-emerald-950">
                {selectedSeason.morning.shiftSummary}
              </span>
            </div>
            <div className="mt-2.5 flex items-center justify-between rounded-lg bg-red-50/90 px-2.5 py-1.5 text-[0.7rem] border border-red-100">
              <span className="flex items-center gap-1 font-semibold text-red-900">
                <Lock className="h-3 w-3 text-red-700 shrink-0" />
                Last Entry Cutoff:
              </span>
              <span className="font-mono font-bold text-red-950">
                {selectedSeason.morning.lastEntry}
              </span>
            </div>
          </div>

          {/* Afternoon Shift */}
          <div className="rounded-xl border border-stone-200/80 bg-stone-50/40 p-3.5 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-orange-900 shrink-0">
                  <Sunset className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900">Afternoon Safari</h4>
                  <span className="text-[0.68rem] text-stone-500">Gate opens {selectedSeason.afternoon.gateOpens}</span>
                </div>
              </div>
              <span className="font-mono text-sm font-extrabold text-emerald-950">
                {selectedSeason.afternoon.shiftSummary}
              </span>
            </div>
            <div className="mt-2.5 flex items-center justify-between rounded-lg bg-red-50/90 px-2.5 py-1.5 text-[0.7rem] border border-red-100">
              <span className="flex items-center gap-1 font-semibold text-red-900">
                <Lock className="h-3 w-3 text-red-700 shrink-0" />
                Last Entry Cutoff:
              </span>
              <span className="font-mono font-bold text-red-950">
                {selectedSeason.afternoon.lastEntry}
              </span>
            </div>
          </div>

          {/* Dhikala Canter / Quick Summary */}
          {showDhikala && (
            <div className="rounded-xl border border-stone-200/80 bg-stone-50/40 p-3.5 flex flex-col justify-between sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-900 shrink-0">
                    <Compass className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Dhikala Canter</h4>
                    <span className="text-[0.68rem] text-stone-500">5.5h Deep Loop Safari</span>
                  </div>
                </div>
                <span
                  className={`rounded px-2 py-0.5 text-[0.68rem] font-bold ${
                    dhikalaSchedule.isOpen
                      ? "bg-emerald-100 text-emerald-900"
                      : "bg-amber-100 text-amber-900"
                  }`}
                >
                  {dhikalaSchedule.statusLabel}
                </span>
              </div>
              <div className="mt-2.5 flex items-center justify-between text-[0.7rem] text-stone-700 pt-1.5 border-t border-stone-200/60">
                <span className="text-stone-500">Loop Shifts:</span>
                <span className="font-mono font-semibold text-stone-900">
                  {dhikalaSchedule.winterLoop.morning.split(" – ")[0]} & {dhikalaSchedule.winterLoop.afternoon.split(" – ")[0]}
                </span>
                <span className="text-stone-300">|</span>
                <span className="text-stone-500">
                  Nov 15 – Jun 15
                </span>
              </div>
            </div>
          )}
        </div>

        {/* ── Concise 1-Line Department Alert + Progressive Disclosure ── */}
        <div className="mt-3 flex flex-col gap-2 rounded-xl bg-amber-50/70 px-3.5 py-2.5 border border-amber-200/60 sm:flex-row sm:items-center sm:justify-between text-xs">
          <div className="flex items-center gap-2 text-amber-950">
            <ShieldAlert className="h-4 w-4 shrink-0 text-amber-700" />
            <span className="text-[0.73rem] leading-tight text-amber-900">
              <strong>Forest Barrier Protocol:</strong> Boom barriers lock strictly at cutoff. Carry <strong>Original Govt Photo ID</strong>.
            </span>
          </div>

          {showGateRules && (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 font-semibold text-emerald-900 hover:text-emerald-950 text-[0.72rem] self-start sm:self-auto shrink-0 transition-colors"
            >
              <span>{isExpanded ? "Hide Details" : "View Protocols & Dhikala"}</span>
              {isExpanded ? (
                <ChevronUp className="h-3.5 w-3.5" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5" />
              )}
            </button>
          )}
        </div>

        {/* ── Expandable Details Panel (Only shown when requested) ── */}
        {showGateRules && isExpanded && (
          <div className="mt-4 pt-4 border-t border-stone-200/80 space-y-4">
            {/* 3 Mandatory Requirements */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 text-xs">
              {GATE_DEADLINE_PROTOCOL.mandatoryRequirements.map((req, i) => {
                const IconComponent =
                  i === 0 ? IdCard : i === 1 ? FileText : Compass;
                return (
                  <div
                    key={req.id}
                    className="flex flex-col rounded-lg border border-stone-200/80 bg-white p-3"
                  >
                    <div className="flex items-center gap-1.5 font-bold text-stone-900">
                      <IconComponent className="h-3.5 w-3.5 text-emerald-800" />
                      <span>{req.title}</span>
                    </div>
                    <p className="mt-1 text-[0.7rem] text-stone-600 leading-relaxed">
                      {req.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Dhikala Details */}
            {showDhikala && (
              <div className="rounded-lg bg-stone-50 p-3 border border-stone-200/70 text-xs text-stone-700 space-y-1">
                <p className="font-bold text-stone-900 text-[0.75rem]">
                  Dhikala Core Zone Schedule Details (5.5h Canter Day Visit):
                </p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 pt-1 text-[0.72rem]">
                  <div>
                    <span className="font-semibold text-stone-800">Winter (15 Nov – 31 Mar):</span>{" "}
                    Morning: {dhikalaSchedule.winterLoop.morning} | Afternoon: {dhikalaSchedule.winterLoop.afternoon}
                  </div>
                  <div>
                    <span className="font-semibold text-stone-800">Summer (01 Apr – 15 Jun):</span>{" "}
                    Morning: {dhikalaSchedule.summerLoop.morning} | Afternoon: {dhikalaSchedule.summerLoop.afternoon}
                  </div>
                </div>
                <p className="text-[0.68rem] text-stone-500 pt-1 italic">
                  {dhikalaSchedule.monsoonClosureNotice}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
