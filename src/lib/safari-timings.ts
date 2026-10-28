/**
 * Single Source of Truth (DRY Engine)
 * Official Uttarakhand Forest Department Jim Corbett Safari Timings & Gate Protocols.
 */

export type SeasonId = "autumn" | "winter" | "spring" | "summer";

export interface ShiftGateDetails {
  gateOpens: string;
  lastEntry: string;
  mandatoryExit: string;
  shiftSummary: string;
  note?: string;
}

export interface SafariSeasonSchedule {
  id: SeasonId;
  label: string;
  name: string;
  dateRangeText: string;
  description: string;
  morning: ShiftGateDetails;
  afternoon: ShiftGateDetails;
  zones: string[];
}

export interface DhikalaCanterExpedition {
  period: string;
  morning: string;
  afternoon: string;
  duration: string;
  notes: string;
}

export interface DhikalaCanterSchedule {
  isOpen: boolean;
  statusLabel: string;
  seasonStatusText: string;
  activeLoop: "winter" | "summer" | "closed";
  activeMorning: string;
  activeAfternoon: string;
  winterLoop: DhikalaCanterExpedition;
  summerLoop: DhikalaCanterExpedition;
  monsoonClosureNotice: string;
}

export interface LiveSafariShifts {
  morning: string;
  afternoon: string;
  activeScheduleLabel: string;
  activeSeasonName: string;
  seasonId: SeasonId;
  morningGateOpens: string;
  morningLastEntry: string;
  morningExit: string;
  afternoonGateOpens: string;
  afternoonLastEntry: string;
  afternoonExit: string;
  isDhikalaOpen: boolean;
  dhikalaStatusLabel: string;
  dhikalaMorning: string;
  dhikalaAfternoon: string;
  istDateString: string;
}

export interface GateDeadlineProtocol {
  ruleSummary: string;
  warningNotice: string;
  mandatoryRequirements: {
    title: string;
    description: string;
    id: string;
  }[];
  criticalRules: string[];
}

// ─────────────────────────────────────────────────────────────
// MASTER DATA SPECIFICATION
// ─────────────────────────────────────────────────────────────

export const ALL_SAFARI_ZONES = [
  "Bijrani",
  "Jhirna",
  "Dhela",
  "Garjiya",
  "Durga Devi",
  "Phato",
  "Sitawani",
  "Dhikala",
];

export const SAFARI_SEASONS: Record<SeasonId, SafariSeasonSchedule> = {
  autumn: {
    id: "autumn",
    label: "Oct 01 – Nov 14",
    name: "Autumn Opening",
    dateRangeText: "01 October – 14 November",
    description: "Post-monsoon reopening of park gates with crisp autumn morning tracking.",
    morning: {
      gateOpens: "06:30 AM",
      lastEntry: "08:00 AM",
      mandatoryExit: "10:30 AM",
      shiftSummary: "06:30 AM – 10:30 AM",
      note: "Check-in begins at 06:30 AM. Barrier cutoff strictly at 08:00 AM.",
    },
    afternoon: {
      gateOpens: "02:00 PM",
      lastEntry: "03:30 PM",
      mandatoryExit: "06:00 PM",
      shiftSummary: "02:00 PM – 06:00 PM",
      note: "Gate closes for entry at 03:30 PM. All gypsies must exit by 06:00 PM.",
    },
    zones: ["Bijrani", "Jhirna", "Dhela", "Garjiya", "Durga Devi", "Phato"],
  },
  winter: {
    id: "winter",
    label: "Nov 15 – Feb 15",
    name: "Peak Winter",
    dateRangeText: "15 November – 15 February",
    description: "Peak wildlife viewing window with earlier dusk exit to accommodate shorter daylight.",
    morning: {
      gateOpens: "06:30 AM",
      lastEntry: "08:00 AM",
      mandatoryExit: "10:30 AM",
      shiftSummary: "06:30 AM – 10:30 AM",
      note: "Standard winter morning shift with crisp dawn visibility.",
    },
    afternoon: {
      gateOpens: "01:30 PM",
      lastEntry: "03:00 PM",
      mandatoryExit: "05:30 PM",
      shiftSummary: "01:30 PM – 05:30 PM",
      note: "Earlier dusk exit (05:30 PM) mandated by forest dept for winter darkness.",
    },
    zones: ["Bijrani", "Jhirna", "Dhela", "Garjiya", "Durga Devi", "Phato", "Dhikala"],
  },
  spring: {
    id: "spring",
    label: "Feb 16 – Apr 15",
    name: "Spring Transition",
    dateRangeText: "16 February – 15 April",
    description: "Spring shift adjustments with earlier morning departures as dawn moves earlier.",
    morning: {
      gateOpens: "06:15 AM",
      lastEntry: "07:30 AM",
      mandatoryExit: "10:15 AM",
      shiftSummary: "06:15 AM – 10:15 AM",
      note: "Earlier morning entry starting 06:15 AM with 07:30 AM strict cutoff.",
    },
    afternoon: {
      gateOpens: "02:00 PM",
      lastEntry: "03:30 PM",
      mandatoryExit: "06:00 PM",
      shiftSummary: "02:00 PM – 06:00 PM",
      note: "Afternoon shift returns to 02:00 PM – 06:00 PM as sunset extends.",
    },
    zones: ["Bijrani", "Jhirna", "Dhela", "Garjiya", "Durga Devi", "Phato", "Dhikala"],
  },
  summer: {
    id: "summer",
    label: "Apr 16 onwards",
    name: "Summer Early Dawn",
    dateRangeText: "16 April onwards (Until monsoon park closure)",
    description: "Early dawn departure to beat the midday summer heat with extended evening daylight.",
    morning: {
      gateOpens: "05:30 AM",
      lastEntry: "07:00 AM",
      mandatoryExit: "09:30 AM",
      shiftSummary: "05:30 AM – 09:30 AM",
      note: "Early dawn entry (05:30 AM) to maximize big cat activity before heat peak.",
    },
    afternoon: {
      gateOpens: "03:00 PM",
      lastEntry: "04:30 PM",
      mandatoryExit: "07:00 PM",
      shiftSummary: "03:00 PM – 07:00 PM",
      note: "Delayed afternoon departure (03:00 PM) running till extended dusk at 07:00 PM.",
    },
    zones: ["Bijrani", "Jhirna", "Dhela", "Garjiya", "Durga Devi", "Phato", "Dhikala"],
  },
};

export const DHIKALA_CANTER_DATA = {
  seasonStatusText: "Open 15 Nov – 15 Jun | Closed 16 Jun – 14 Nov (Monsoon)",
  winterLoop: {
    period: "Winter (Nov 15 – Mar 31)",
    morning: "06:00 AM – 11:30 AM",
    afternoon: "12:00 PM – 06:00 PM",
    duration: "5.5h Deep Forest Loop",
    notes: "Traverses Ramganga riverbed and deep sal forests with extended grassland safari.",
  },
  summerLoop: {
    period: "Summer (Apr 01 – Jun 15)",
    morning: "05:30 AM – 11:00 AM",
    afternoon: "12:30 PM – 06:30 PM",
    duration: "5.5h Deep Forest Loop",
    notes: "Early dawn departure for enhanced tiger activity tracking around waterholes.",
  },
  monsoonNotice: "Dhikala Core Zone is closed from 16 June to 14 November during monsoon breeding and river swells. Reopens on 15 November.",
};

export const GATE_DEADLINE_PROTOCOL: GateDeadlineProtocol = {
  ruleSummary: "Last Entry (Final Check-in) is an automated strict barrier cutoff under Uttarakhand Forest Department rules. Park gates close promptly, and late vehicles cannot enter under any circumstances.",
  warningNotice: "Strict Department Notice: Forest barrier boom barriers are synchronized to official department servers. Once locked at the Last Entry cutoff, no vehicle can be admitted. Missed slots cannot be refunded, exchanged, or adjusted.",
  mandatoryRequirements: [
    {
      id: "gov-id",
      title: "Original Government Photo ID",
      description: "Every traveler must present the exact physical government photo ID (Aadhaar, Passport, Voter ID, Driving License) used during the permit reservation. Soft copies/photos on phone are strictly not accepted.",
    },
    {
      id: "permit",
      title: "Hardcopy Forest Permit",
      description: "Official stamped printed paper voucher issued by Uttarakhand Forest Department must be submitted at the entry checkpoint verification desk.",
    },
    {
      id: "guide",
      title: "Certified Department Escort / Guide",
      description: "Mandatory official Forest Department registered nature guide assigned by the gate roster must accompany each vehicle throughout the journey.",
    },
  ],
  criticalRules: [
    "No private private vehicles allowed inside core or buffer zones without official department registration.",
    "Late arrival after the Last Entry cutoff voids permit with 100% penalty (non-refundable & non-transferable).",
    "Single-Zone restriction: Each permit is strictly valid for one designated safari zone only.",
    "Strict zero-litter, silence, and no-disembarkment rules apply once inside the reserve gate.",
  ],
};

// ─────────────────────────────────────────────────────────────
// DRY ENGINE & RESOLVER LOGIC
// ─────────────────────────────────────────────────────────────

/**
 * Extracts year, month (1-12), and day (1-31) in Asia/Kolkata (IST) time.
 */
export function getISTDateParts(date: Date = new Date()): {
  year: number;
  month: number;
  day: number;
  formattedDate: string;
} {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const parts = formatter.formatToParts(date);
  let year = 2026;
  let month = 10;
  let day = 24;

  for (const part of parts) {
    if (part.type === "year") year = parseInt(part.value, 10);
    if (part.type === "month") month = parseInt(part.value, 10);
    if (part.type === "day") day = parseInt(part.value, 10);
  }

  const dateDisplayFormatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return {
    year,
    month,
    day,
    formattedDate: dateDisplayFormatter.format(date),
  };
}

/**
 * 1. getActiveSafariSchedule(date: Date = new Date())
 * Evaluates active seasonal window based on month & day in IST time:
 * - Month 10 or (Month 11 & Day <= 14) -> Return 'Oct 01 – Nov 14'
 * - (Month 11 & Day >= 15) or Month 12 or Month 1 or (Month 2 & Day <= 15) -> Return 'Nov 15 – Feb 15'
 * - (Month 2 & Day >= 16) or Month 3 or (Month 4 & Day <= 15) -> Return 'Feb 16 – Apr 15'
 * - Month 4 & Day >= 16 onwards -> Return 'Apr 16 onwards'
 */
export function getActiveSafariSchedule(date: Date = new Date()): SafariSeasonSchedule {
  const { month, day } = getISTDateParts(date);

  // Autumn: Oct 01 – Nov 14
  if (month === 10 || (month === 11 && day <= 14)) {
    return SAFARI_SEASONS.autumn;
  }

  // Peak Winter: Nov 15 – Feb 15
  if ((month === 11 && day >= 15) || month === 12 || month === 1 || (month === 2 && day <= 15)) {
    return SAFARI_SEASONS.winter;
  }

  // Spring Transition: Feb 16 – Apr 15
  if ((month === 2 && day >= 16) || month === 3 || (month === 4 && day <= 15)) {
    return SAFARI_SEASONS.spring;
  }

  // Summer Early Dawn: Apr 16 onwards
  return SAFARI_SEASONS.summer;
}

/**
 * 2. getFormattedLiveShifts(date: Date = new Date())
 * Returns current shift timings and active schedule label so any card,
 * footer, or header across the website can consume timings dynamically without hardcoding.
 */
export function getFormattedLiveShifts(date: Date = new Date()): LiveSafariShifts {
  const activeSchedule = getActiveSafariSchedule(date);
  const dhikala = getDhikalaCanterSchedule(date);
  const { formattedDate } = getISTDateParts(date);

  return {
    morning: activeSchedule.morning.shiftSummary,
    afternoon: activeSchedule.afternoon.shiftSummary,
    activeScheduleLabel: activeSchedule.label,
    activeSeasonName: activeSchedule.name,
    seasonId: activeSchedule.id,
    morningGateOpens: activeSchedule.morning.gateOpens,
    morningLastEntry: activeSchedule.morning.lastEntry,
    morningExit: activeSchedule.morning.mandatoryExit,
    afternoonGateOpens: activeSchedule.afternoon.gateOpens,
    afternoonLastEntry: activeSchedule.afternoon.lastEntry,
    afternoonExit: activeSchedule.afternoon.mandatoryExit,
    isDhikalaOpen: dhikala.isOpen,
    dhikalaStatusLabel: dhikala.statusLabel,
    dhikalaMorning: dhikala.activeMorning,
    dhikalaAfternoon: dhikala.activeAfternoon,
    istDateString: formattedDate,
  };
}

/**
 * 3. getDhikalaCanterSchedule(date: Date = new Date())
 * Evaluates Dhikala Canter status:
 * - Open 15 Nov – 15 Jun | Closed 16 Jun – 14 Nov (Monsoon)
 * - Winter (Nov 15 – Mar 31) [5.5h Deep Loop]
 * - Summer (Apr 01 – Jun 15) [Early Dawn Departure]
 */
export function getDhikalaCanterSchedule(date: Date = new Date()): DhikalaCanterSchedule {
  const { month, day } = getISTDateParts(date);

  // Winter loop: Nov 15 – Mar 31
  const isWinterLoop =
    (month === 11 && day >= 15) ||
    month === 12 ||
    month === 1 ||
    month === 2 ||
    month === 3;

  // Summer loop: Apr 01 – Jun 15
  const isSummerLoop =
    month === 4 ||
    month === 5 ||
    (month === 6 && day <= 15);

  if (isWinterLoop) {
    return {
      isOpen: true,
      statusLabel: "Open (Winter Schedule)",
      seasonStatusText: DHIKALA_CANTER_DATA.seasonStatusText,
      activeLoop: "winter",
      activeMorning: DHIKALA_CANTER_DATA.winterLoop.morning,
      activeAfternoon: DHIKALA_CANTER_DATA.winterLoop.afternoon,
      winterLoop: DHIKALA_CANTER_DATA.winterLoop,
      summerLoop: DHIKALA_CANTER_DATA.summerLoop,
      monsoonClosureNotice: DHIKALA_CANTER_DATA.monsoonNotice,
    };
  }

  if (isSummerLoop) {
    return {
      isOpen: true,
      statusLabel: "Open (Summer Schedule)",
      seasonStatusText: DHIKALA_CANTER_DATA.seasonStatusText,
      activeLoop: "summer",
      activeMorning: DHIKALA_CANTER_DATA.summerLoop.morning,
      activeAfternoon: DHIKALA_CANTER_DATA.summerLoop.afternoon,
      winterLoop: DHIKALA_CANTER_DATA.winterLoop,
      summerLoop: DHIKALA_CANTER_DATA.summerLoop,
      monsoonClosureNotice: DHIKALA_CANTER_DATA.monsoonNotice,
    };
  }

  // Monsoon closed: Jun 16 – Nov 14
  return {
    isOpen: false,
    statusLabel: "Monsoon Closed (Opens Nov 15)",
    seasonStatusText: DHIKALA_CANTER_DATA.seasonStatusText,
    activeLoop: "closed",
    activeMorning: DHIKALA_CANTER_DATA.winterLoop.morning,
    activeAfternoon: DHIKALA_CANTER_DATA.winterLoop.afternoon,
    winterLoop: DHIKALA_CANTER_DATA.winterLoop,
    summerLoop: DHIKALA_CANTER_DATA.summerLoop,
    monsoonClosureNotice: DHIKALA_CANTER_DATA.monsoonNotice,
  };
}

/**
 * Returns all seasons in array order for selector UI tabs.
 */
export function getAllSeasonsList(): SafariSeasonSchedule[] {
  return [
    SAFARI_SEASONS.autumn,
    SAFARI_SEASONS.winter,
    SAFARI_SEASONS.spring,
    SAFARI_SEASONS.summer,
  ];
}

export interface ResortTransitAdvisory {
  seasonId: SeasonId;
  seasonName: string;
  seasonLabel: string;
  morningDeparture: string;
  afternoonDeparture: string;
  gateOpeningMorning: string;
  gateOpeningAfternoon: string;
  morningCutoff: string;
  afternoonCutoff: string;
  departureNotes: string;
}

/**
 * 4. getResortTransitAdvisory(dateOrSeasonId: Date | SeasonId = new Date())
 * Dynamically computes resort pickup and transit windows for guests travelling
 * from the resort / Ramnagar to safari gates (~27–46 Km, 60–90 mins drive),
 * preventing gate lockouts under strict forest barrier cutoffs.
 */
export function getResortTransitAdvisory(
  dateOrSeasonId: Date | SeasonId = new Date()
): ResortTransitAdvisory {
  const schedule =
    typeof dateOrSeasonId === "string"
      ? SAFARI_SEASONS[dateOrSeasonId]
      : getActiveSafariSchedule(dateOrSeasonId);

  let morningDeparture = "05:00 AM – 05:30 AM";
  let afternoonDeparture = "12:30 PM – 01:00 PM";
  let departureNotes =
    "Departs resort 60–90 mins prior to gate opening to allow scenic forest transit and mandatory document verification before cutoff.";

  switch (schedule.id) {
    case "autumn":
      morningDeparture = "05:00 AM – 05:30 AM";
      afternoonDeparture = "12:30 PM – 01:00 PM";
      departureNotes = `For ${schedule.morning.gateOpens} gate opening (strict cutoff at ${schedule.morning.lastEntry}). Depart resort at 05:00 AM – 05:30 AM.`;
      break;
    case "winter":
      morningDeparture = "05:00 AM – 05:30 AM";
      afternoonDeparture = "12:00 PM – 12:30 PM";
      departureNotes = `For ${schedule.morning.gateOpens} gate opening (strict cutoff at ${schedule.morning.lastEntry}). Afternoon departs earlier at 12:00 PM for ${schedule.afternoon.gateOpens} gate opening.`;
      break;
    case "spring":
      morningDeparture = "04:45 AM – 05:15 AM";
      afternoonDeparture = "12:30 PM – 01:00 PM";
      departureNotes = `For ${schedule.morning.gateOpens} dawn gate opening (strict cutoff at ${schedule.morning.lastEntry}). Depart resort at 04:45 AM – 05:15 AM.`;
      break;
    case "summer":
      morningDeparture = "04:00 AM – 04:30 AM";
      afternoonDeparture = "01:30 PM – 02:00 PM";
      departureNotes = `For early ${schedule.morning.gateOpens} sunrise gate opening (strict cutoff at ${schedule.morning.lastEntry}). Depart resort at 04:00 AM – 04:30 AM to beat gate closure.`;
      break;
  }

  return {
    seasonId: schedule.id,
    seasonName: schedule.name,
    seasonLabel: schedule.label,
    morningDeparture,
    afternoonDeparture,
    gateOpeningMorning: schedule.morning.gateOpens,
    gateOpeningAfternoon: schedule.afternoon.gateOpens,
    morningCutoff: schedule.morning.lastEntry,
    afternoonCutoff: schedule.afternoon.lastEntry,
    departureNotes,
  };
}
