"use client";

import { useState } from "react";
import { safariData } from "@/data-source";
import {
  Table,
  PriceCell,
  SinglePriceCell,
  SectionBanner,
  WarningBanner,
  NotesList,
  PolicyFooter,
  CallHeader,
  RESORT_NAME,
  RESORT_INCLUSION_WITH_CAB,
} from "@/shared";
import { useUser } from "@/features/user";
import { SafariGateTimingsWidget } from "./SafariGateTimingsWidget";
import {
  getActiveSafariSchedule,
  getDhikalaCanterSchedule,
  SAFARI_SEASONS,
  type SeasonId,
} from "@/lib/safari-timings";

export function SafariTable() {
  const { userType } = useUser();
  const sections = safariData[userType];

  const currentActiveSchedule = getActiveSafariSchedule();
  const [selectedSeasonId, setSelectedSeasonId] = useState<SeasonId>(
    currentActiveSchedule.id
  );
  const selectedSeason = SAFARI_SEASONS[selectedSeasonId];
  const dhikalaSchedule = getDhikalaCanterSchedule();

  return (
    <div className="space-y-8">
      {/* ── Park header ── */}
      <CallHeader
        title={safariData.header.parkTitle}
        tagline={safariData.header.tagline}
        callText={safariData.header.callText}
      />

      {/* ── Zone legend ── */}
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-[color:var(--cat-current-border)] bg-[color:var(--cat-current-bg)] p-4">
          <h4 className="text-sm font-bold uppercase tracking-wide text-[color:var(--cat-current-accent)]">
            🌳 Core Zones
          </h4>
          <p className="mt-1 text-sm font-medium text-[color:var(--cat-current-accent)]/80">
            {safariData.header.coreZones.join(" • ")}
          </p>
        </div>
        <div className="rounded-xl border border-[color:var(--cat-combined-border)] bg-[color:var(--cat-combined-bg)] p-4">
          <h4 className="text-sm font-bold uppercase tracking-wide text-[color:var(--cat-combined-accent)]">
            🌿 Buffer Zones
          </h4>
          <p className="mt-1 text-sm font-medium text-[color:var(--cat-combined-accent)]/80">
            {safariData.header.bufferZones.join(" • ")}
          </p>
        </div>
      </div>

      {/* ── DRY Season-Aware Gate Timings & Protocols Widget ── */}
      <div id="gate-timings-widget" className="scroll-mt-20">
        <SafariGateTimingsWidget
          selectedSeasonId={selectedSeasonId}
          onSeasonChange={setSelectedSeasonId}
        />
      </div>

      {/* ── Rate sections ── */}
      {sections.flatMap((section, index) => {
        const sectionEl = (
          <section key={section.id} className="space-y-3">
            <SectionBanner
              category={section.category}
              title={section.title}
              subtitle={section.subtitle}
              zoneType={section.tables[0]?.rateRows[0]?.zoneType}
            />

            <div className="space-y-6">
              {section.tables.map((table, tableIndex) => (
                <div key={`${section.id}-table-${tableIndex}`} className="space-y-2">
                  {table.inclusionText && (
                    <div className="flex w-full flex-wrap items-center justify-between gap-y-2 rounded-lg bg-[color:var(--color-accent)]/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--cat-prebooking-accent)]">
                      {table.inclusionText.split(", ").length > 1 ? (
                        <>
                          <span>
                            {table.inclusionText.split(", ").slice(0, -1).join(", ")}
                          </span>
                          <span className="inline-flex items-center rounded bg-white/60 px-2.5 py-1 text-[color:var(--cat-prebooking-accent)] border border-[color:var(--cat-prebooking-accent)]/20">
                            {table.inclusionText.split(", ").pop()}
                          </span>
                        </>
                      ) : (
                        table.inclusionText
                      )}
                    </div>
                  )}
                  <Table>
                    <thead>
                      <tr>
                        <th>Zone</th>
                        <th>Rate</th>
                        <th>Rate + 5% GST</th>
                        <th>
                          <div className="flex flex-col">
                            <span>Morning Slot</span>
                            <span className="text-[0.65rem] font-normal tracking-normal text-stone-500 lowercase">
                              {selectedSeason.label}
                            </span>
                          </div>
                        </th>
                        <th>
                          <div className="flex flex-col">
                            <span>Afternoon Slot</span>
                            <span className="text-[0.65rem] font-normal tracking-normal text-stone-500 lowercase">
                              {selectedSeason.label}
                            </span>
                          </div>
                        </th>
                        <th>
                          {table.inclusionText?.toLowerCase().includes("safari gate")
                            ? `${RESORT_NAME} to Safari Gate Distance`
                            : `${RESORT_NAME} to Ramnagar Distance`}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {table.rateRows.map((row) => {
                        const isDhikala = row.zone.toLowerCase().includes("dhikala");
                        const morningShift = isDhikala
                          ? dhikalaSchedule.activeMorning
                          : selectedSeason.morning.shiftSummary;
                        const afternoonShift = isDhikala
                          ? dhikalaSchedule.activeAfternoon
                          : selectedSeason.afternoon.shiftSummary;

                        return (
                          <tr key={`${section.id}-${tableIndex}-${row.zone}`}>
                            <td className="px-4 py-3 font-bold text-[color:var(--color-primary)]">
                              {row.zone}
                            </td>
                            <PriceCell base={row.rate} final={row.gstRate} />
                            <td className="px-4 py-3 text-sm font-semibold text-zinc-800">
                              <div>{morningShift}</div>
                              {isDhikala ? (
                                <span className="block text-[0.68rem] font-normal text-emerald-700">
                                  {dhikalaSchedule.statusLabel}
                                </span>
                              ) : table.inclusionText === RESORT_INCLUSION_WITH_CAB ? (
                                <span className="block text-[0.68rem] font-normal text-stone-500">
                                  Resort pickup ~60m before gate
                                </span>
                              ) : (
                                <span className="block text-[0.68rem] font-normal text-stone-500">
                                  Last entry: {selectedSeason.morning.lastEntry}
                                </span>
                              )}
                            </td>
                            <td className="px-4 py-3 text-sm font-semibold text-zinc-800">
                              <div>{afternoonShift}</div>
                              {isDhikala ? (
                                <span className="block text-[0.68rem] font-normal text-stone-500">
                                  5.5h Canter Loop
                                </span>
                              ) : table.inclusionText === RESORT_INCLUSION_WITH_CAB ? (
                                <span className="block text-[0.68rem] font-normal text-stone-500">
                                  Resort pickup ~60m before gate
                                </span>
                              ) : (
                                <span className="block text-[0.68rem] font-normal text-stone-500">
                                  Last entry: {selectedSeason.afternoon.lastEntry}
                                </span>
                              )}
                            </td>
                            <td className="px-4 py-3 text-sm text-[color:var(--color-muted)]">
                              {row.distanceFromRamnagar}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              ))}

              {section.cabTables?.map((table, tableIndex) => (
                <div key={`${section.id}-cab-table-${tableIndex}`} className="space-y-2 mt-8">
                  <div className="rounded-lg bg-[color:var(--color-accent)]/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--cat-prebooking-accent)]">
                    Cab Services
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
                      {table.rateRows.map((row, i) => (
                        <tr key={`${section.id}-cab-${tableIndex}-${i}`}>
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
              ))}
            </div>

            {section.warning && <WarningBanner message={section.warning} />}

            {section.notes && section.notes.length > 0 && (
              <NotesList notes={section.notes} />
            )}
          </section>
        );

        if (index < sections.length - 1) {
          return [
            sectionEl,
            <hr
              key={`divider-${section.id}`}
              className="border-t-2 border-dashed border-zinc-300"
            />,
          ];
        }
        return [sectionEl];
      })}

      <PolicyFooter title="Important Safari Terms" lines={safariData.policyLines} />
    </div>
  );
}
