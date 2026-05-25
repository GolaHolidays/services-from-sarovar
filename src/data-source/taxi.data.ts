import type { TaxiData } from "@/features/taxi";
import { RESORT_SUBTITLE, CONTACT_CALL_TEXT } from "@/shared/constants/ui.constants";


export const taxiData: TaxiData = {
  header: {
    title: "Cab Service",
    callText: CONTACT_CALL_TEXT,
  },
  categories: [
    // ─── Railway Station Transfers ───────────────────────────────────────────
    {
      type: "railway",
      title: "Near By Railway Station Transfers",
      subtitle: RESORT_SUBTITLE,
      routes: [
        { location: "Ramnagar",  pickupDrop: "Pickup / Drop", price: { dzire: 1500, ertiga: 1875, innova: 2875 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Kathgodam", pickupDrop: "Pickup / Drop", price: { dzire: 4000, ertiga: 5200, innova: 6875 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Haldwani",  pickupDrop: "Pickup / Drop", price: { dzire: 4000, ertiga: 5250, innova: 6875 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Lal Kuan",  pickupDrop: "Pickup / Drop", price: { dzire: 4375, ertiga: 5375, innova: 7250 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Kashipur",  pickupDrop: "Pickup / Drop", price: { dzire: 3125, ertiga: 3750, innova: 5625 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Moradabad", pickupDrop: "Pickup / Drop", price: { dzire: 5000, ertiga: 5625, innova: 7500 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Rampur",    pickupDrop: "Pickup / Drop", price: { dzire: 5250, ertiga: 6250, innova: 7500 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Bareilly",  pickupDrop: "Pickup / Drop", price: { dzire: 6875, ertiga: 7500, innova: 9750 }, extraWaiting: { pricePerHour: 300 } },
      ],
    },

    // ─── Airport Transfers ──────────────────────────────────────────────────
    {
      type: "airport",
      title: "Near By Airport Transfers",
      subtitle: RESORT_SUBTITLE,
      routes: [
        { location: "Pantnagar / Sarovar Resort, Patkot", pickupDrop: "Pickup / Drop", price: { dzire: 5000, ertiga: 5625, innova: 8125  }, extraWaiting: { pricePerHour: 300 } },
        { location: "Bareilly",                           pickupDrop: "Pickup / Drop", price: { dzire: 6875, ertiga: 7625, innova: 9750  }, extraWaiting: { pricePerHour: 300 } },
        { location: "Delhi",                              pickupDrop: "Pickup / Drop", price: { dzire: 8750, ertiga: 10000, innova: 14125 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Jolly Grant, Dehradun",              pickupDrop: "Pickup / Drop", price: { dzire: 8750, ertiga: 10000, innova: 14125 }, extraWaiting: { pricePerHour: 300 } },
      ],
    },

    // ─── Local Sightseeing ──────────────────────────────────────────────────
    {
      type: "local",
      title: "Near By Corbett Local Sightseeing",
      subtitle: RESORT_SUBTITLE,
      routes: [
        {
          location: "Jim Corbett Local Sightseeing",
          duration: "3 Point / Half Day",
          pickupDrop: "Pickup / Drop",
          price: { dzire: 5000, ertiga: 6125, innova: 7250 },
          extraWaiting: { pricePerHour: 300 },
          coveringPoints: ["Dhangari Museum", "Garjiya Devi Temple", "Suspension Bridge"],
        },
        {
          location: "Jim Corbett Local Sightseeing",
          duration: "6 Point / Full Day",
          pickupDrop: "Pickup / Drop",
          price: { dzire: 6250, ertiga: 7375, innova: 9125 },
          extraWaiting: { pricePerHour: 300 },
          coveringPoints: [
            "Dhangari Museum",
            "Garjiya Devi Temple",
            "Suspension Bridge",
            "Hanuman Dham Temple",
            "Corbett Waterfall",
            "Fun Activities",
          ],
        },
      ],
    },

    // ─── Hill Stations ──────────────────────────────────────────────────────
    {
      type: "hillStation",
      title: "Hills Station",
      subtitle: RESORT_SUBTITLE,
      routes: [
        { location: "Nainital",            duration: "Full Day", pickupDrop: "Pickup / Drop", price: { dzire: 7000, ertiga: 8125, innova: 9875  }, extraWaiting: { pricePerHour: 300 } },
        { location: "Kainchi Dham Temple", duration: "Full Day", pickupDrop: "Pickup / Drop", price: { dzire: 8125, ertiga: 9250, innova: 11000 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Mukteshwar",          duration: "Full Day", pickupDrop: "Pickup / Drop", price: { dzire: 7875, ertiga: 9000, innova: 11625 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Bhimtal",             duration: "Full Day", pickupDrop: "Pickup / Drop", price: { dzire: 6000, ertiga: 7125, innova: 8875  }, extraWaiting: { pricePerHour: 300 } },
        { location: "Ranikhet",            duration: "Full Day", pickupDrop: "Pickup / Drop", price: { dzire: 6875, ertiga: 8625, innova: 11000 }, extraWaiting: { pricePerHour: 300 } },
      ],
    },

    // ─── General Taxi Service Areas ─────────────────────────────────────────
    {
      type: "serviceArea",
      title: "We Provide Taxi Service At These Places",
      subtitle: "Extra toll + parking applies for Nainital & Kainchi Dham Temple",
      routes: [
        { location: "Ramnagar",          pickupDrop: "Pickup / Drop", price: { dzire: 1500,  ertiga: 1875,  innova: 2875  }, extraWaiting: { pricePerHour: 300 } },
        { location: "Nainital",          pickupDrop: "Pickup / Drop", price: { dzire: 5000,  ertiga: 5250,  innova: 8250  }, extraWaiting: { pricePerHour: 300 } },
        { location: "Ranikhet",          pickupDrop: "Pickup / Drop", price: { dzire: 5875,  ertiga: 7500,  innova: 9750  }, extraWaiting: { pricePerHour: 300 } },
        { location: "Kathgodam",         pickupDrop: "Pickup / Drop", price: { dzire: 4000,  ertiga: 5250,  innova: 6875  }, extraWaiting: { pricePerHour: 300 } },
        { location: "Haldwani",          pickupDrop: "Pickup / Drop", price: { dzire: 4000,  ertiga: 5250,  innova: 6875  }, extraWaiting: { pricePerHour: 300 } },
        { location: "Pantnagar Airport", pickupDrop: "Pickup / Drop", price: { dzire: 5000,  ertiga: 5625,  innova: 8125  }, extraWaiting: { pricePerHour: 300 } },
        { location: "Rudrapur",          pickupDrop: "Pickup / Drop", price: { dzire: 5000,  ertiga: 5625,  innova: 8125  }, extraWaiting: { pricePerHour: 300 } },
        { location: "Kashipur",          pickupDrop: "Pickup / Drop", price: { dzire: 3125,  ertiga: 3750,  innova: 5625  }, extraWaiting: { pricePerHour: 300 } },
        { location: "Moradabad",         pickupDrop: "Pickup / Drop", price: { dzire: 5000,  ertiga: 5625,  innova: 7500  }, extraWaiting: { pricePerHour: 300 } },
        { location: "Barelly",           pickupDrop: "Pickup / Drop", price: { dzire: 6875,  ertiga: 7625,  innova: 9750  }, extraWaiting: { pricePerHour: 300 } },
        { location: "Rishikesh",         pickupDrop: "Pickup / Drop", price: { dzire: 8750,  ertiga: 9875,  innova: 11000 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Haridwar",          pickupDrop: "Pickup / Drop", price: { dzire: 7750,  ertiga: 9250,  innova: 9750  }, extraWaiting: { pricePerHour: 300 } },
        { location: "Dehradun / City",   pickupDrop: "Pickup / Drop", price: { dzire: 8750,  ertiga: 10000, innova: 13750 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Delhi / City",      pickupDrop: "Pickup / Drop", price: { dzire: 8750,  ertiga: 10000, innova: 13750 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Gurugram",          pickupDrop: "Pickup / Drop", price: { dzire: 9375,  ertiga: 9875,  innova: 16000 }, extraWaiting: { pricePerHour: 300 } },
        { location: "Mussoorie",         pickupDrop: "Pickup / Drop", price: { dzire: 11250, ertiga: 12375, innova: 16625 }, extraWaiting: { pricePerHour: 300 } },
      ],
    },
  ],
  policies: [
    "It is mandatory to pay 5% GST as per government rules.",
    "Booking without advance will not be considered. It is necessary to pay advance for booking.",
    "Payment will not be refunded once the vehicle reaches the resort.",
  ],
};
