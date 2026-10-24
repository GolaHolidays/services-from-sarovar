import { getFormattedLiveShifts } from "@/lib/safari-timings";

export const BRAND_NAME = "Corbett Safari";
export const BRAND_EMAIL = "";
export const CURRENCY = "INR";
export const CONTACT_PHONE = "+919520033994";
export const WHATSAPP_NUMBER = "919520033994";
export const CONTACT_DISPLAY = "95200-33994";          // formatted for display
export const CONTACT_CALL_TEXT = `Call ${CONTACT_DISPLAY}`; // e.g. "Call 95200-33994"

export const RESORT_NAME = "Resort";
export const RESORT_ADDRESS = "Patkot, Ramnagar, Uttarakhand (244715)";
export const RESORT_LOCATION_SHORT = "Patkot, Jim Corbett";
export const RESORT_DISTANCE_FROM_RAMNAGAR = "27 Km";

// Derived compound strings — built from RESORT_NAME so they update automatically
export const RESORT_TO_RAMNAGAR = `${RESORT_NAME} To Ramnagar`;
export const RESORT_TO_DHANGARI = `${RESORT_NAME} To Dhangari Gate`;
export const RESORT_SUBTITLE = `Of ${RESORT_NAME}, ${RESORT_LOCATION_SHORT}`;
export const RESORT_INCLUSION_WITH_CAB = `Include: Gypsy, Guide, Permit, ${RESORT_NAME} to Ramnagar Pickup & Drop by Cab`;

/**
 * Site Config / Business Hours:
 * Morning and Evening shifts derived dynamically from getFormattedLiveShifts()
 */
export const getSiteBusinessHours = (date: Date = new Date()) => {
  const shifts = getFormattedLiveShifts(date);
  return {
    seasonLabel: shifts.activeScheduleLabel,
    seasonName: shifts.activeSeasonName,
    morningShift: shifts.morning,
    eveningShift: shifts.afternoon,
    morningCutoff: shifts.morningLastEntry,
    eveningCutoff: shifts.afternoonLastEntry,
    travelDeskHours: "06:00 AM – 09:30 PM (Daily)",
    gateRuleNotice: "Gate boom barriers automatically lock at last entry deadline under Uttarakhand Forest Department protocols.",
    isDhikalaOpen: shifts.isDhikalaOpen,
    dhikalaStatus: shifts.dhikalaStatusLabel,
  };
};

export const SITE_BUSINESS_HOURS = getSiteBusinessHours();