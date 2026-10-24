import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { 
  BRAND_NAME, 
  BRAND_EMAIL, 
  RESORT_ADDRESS, 
  CONTACT_DISPLAY, 
  CONTACT_PHONE,
  SITE_BUSINESS_HOURS,
} from "../constants/ui.constants";
import { Container } from "./Container";

export function MainFooter() {
  const currentYear = new Date().getFullYear();
  const businessHours = SITE_BUSINESS_HOURS;

  return (
    <footer className="mt-14 border-t border-white/10 bg-[color:var(--color-primary)] py-12 text-zinc-300">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand & Navigation */}
          <div className="space-y-4">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-white/60">
              Official Travel Desk
            </span> 
            <h3 className="font-brand text-2xl font-bold tracking-wider text-white">
              {BRAND_NAME}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              Your gateway to the wild. Experience the majestic wilderness of Jim Corbett National Park with our premium safari and travel services.
            </p>
            <div className="pt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-emerald-300">
              <Link href="/safari" className="hover:underline">
                Jeep Safari
              </Link>
              <Link href="/canter-safari" className="hover:underline">
                Dhikala Canter
              </Link>
              <Link href="/cab-service" className="hover:underline">
                Cab Service
              </Link>
              <Link href="/faq" className="hover:underline">
                Timings & FAQ
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact Desk
              </Link>
            </div>
          </div>

          {/* Dynamic Business Hours & Forest Gate Timings */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-emerald-400" />
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/80">
                Live Gate Shifts & Hours
              </h4>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-zinc-400">Active Seasonal Window:</span>
                <span className="flex items-center gap-1.5 font-semibold text-white">
                  <span>{businessHours.seasonLabel}</span>
                  <span
                    className="inline-block h-2 w-2 rounded-none bg-emerald-500"
                    title="Active seasonal schedule"
                  />
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-zinc-400">Morning Shift:</span>
                <span className="font-mono text-white">{businessHours.morningShift}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-zinc-400">Afternoon Shift:</span>
                <span className="font-mono text-white">{businessHours.eveningShift}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-zinc-400">Desk Support:</span>
                <span className="text-white">{businessHours.travelDeskHours}</span>
              </div>
              <p className="pt-1 text-[0.7rem] text-zinc-400 italic leading-snug">
                {businessHours.gateRuleNotice}
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/80">
              Helpdesk & Assistance
            </h4>
            <ul className="space-y-3 text-xs">
              {BRAND_EMAIL ? (
                <li className="flex items-center gap-2.5">
                  <Mail size={16} className="text-white/40" />
                  <a href={`mailto:${BRAND_EMAIL}`} className="text-zinc-300 hover:text-white hover:underline">
                    {BRAND_EMAIL}
                  </a>
                </li>
              ) : null}
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-white/40" />
                <a href={`tel:${CONTACT_PHONE}`} className="text-zinc-300 hover:text-white hover:underline">
                  {CONTACT_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 text-white/40 shrink-0" />
                <span className="text-zinc-300 leading-relaxed">{RESORT_ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-[0.7rem] tracking-wide text-zinc-500 uppercase">
            &copy; {currentYear} {BRAND_NAME}. Official Uttarakhand Forest Department Safari Schedules.
          </p>
        </div>
      </Container>
    </footer>
  );
}
