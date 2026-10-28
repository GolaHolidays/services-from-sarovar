import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ShieldCheck, MessageCircle } from "lucide-react";
import { 
  BRAND_NAME, 
  BRAND_EMAIL, 
  RESORT_ADDRESS, 
  CONTACT_DISPLAY, 
  CONTACT_PHONE,
  WHATSAPP_NUMBER,
} from "../constants/ui.constants";
import { Container } from "./Container";

export function MainFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-14 border-t border-white/10 bg-[color:var(--color-primary)] py-12 text-zinc-300">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-white/60">
              Official Travel Desk
            </span> 
            <h3 className="font-brand text-2xl font-bold tracking-wider text-white">
              {BRAND_NAME}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              Your trusted partner for Jim Corbett National Park safari experiences. Offering hassle-free Jeep permits, Dhikala Canter day visits, and premium resort transfer services.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-emerald-400">
              <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
              <span>Official Department Permits & Certified Nature Guides</span>
            </div>
          </div>

          {/* Quick Navigation / Safari Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/80">
              Explore Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/safari" className="text-zinc-300 transition-colors hover:text-white hover:underline">
                  Jeep Safari (Core & Buffer Zones)
                </Link>
              </li>
              <li>
                <Link href="/canter-safari" className="text-zinc-300 transition-colors hover:text-white hover:underline">
                  Dhikala Canter Safari (5.5h Loop)
                </Link>
              </li>
              <li>
                <Link href="/cab-service" className="text-zinc-300 transition-colors hover:text-white hover:underline">
                  Resort Cab & Taxi Services
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-zinc-300 transition-colors hover:text-white hover:underline">
                  Seasonal Timings & Gate Protocols
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-300 transition-colors hover:text-white hover:underline">
                  Contact & Travel Desk Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Helpdesk & Support */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/80">
              Helpdesk & Assistance
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-emerald-400 shrink-0" />
                <div>
                  <span className="block text-[0.7rem] text-zinc-400">Direct Call Support:</span>
                  <a href={`tel:${CONTACT_PHONE}`} className="font-semibold text-white hover:underline">
                    {CONTACT_DISPLAY}
                  </a>
                </div>
              </li>
              {WHATSAPP_NUMBER && (
                <li className="flex items-center gap-2.5">
                  <MessageCircle size={16} className="text-emerald-400 shrink-0" />
                  <div>
                    <span className="block text-[0.7rem] text-zinc-400">WhatsApp Inquiry:</span>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-white hover:underline"
                    >
                      +{WHATSAPP_NUMBER}
                    </a>
                  </div>
                </li>
              )}
              <li className="flex items-center gap-2.5">
                <Clock size={16} className="text-emerald-400 shrink-0" />
                <div>
                  <span className="block text-[0.7rem] text-zinc-400">Travel Desk Support Hours:</span>
                  <span className="text-zinc-200">06:00 AM – 09:30 PM (Daily)</span>
                </div>
              </li>
              {BRAND_EMAIL ? (
                <li className="flex items-center gap-2.5">
                  <Mail size={16} className="text-emerald-400 shrink-0" />
                  <div>
                    <span className="block text-[0.7rem] text-zinc-400">Email:</span>
                    <a href={`mailto:${BRAND_EMAIL}`} className="text-zinc-300 hover:text-white hover:underline">
                      {BRAND_EMAIL}
                    </a>
                  </div>
                </li>
              ) : null}
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 text-emerald-400 shrink-0" />
                <div>
                  <span className="block text-[0.7rem] text-zinc-400">Desk Address:</span>
                  <span className="text-zinc-300 leading-relaxed">{RESORT_ADDRESS}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row text-[0.7rem] text-zinc-500">
          <p className="tracking-wide uppercase">
            &copy; {currentYear} {BRAND_NAME}. All rights reserved.
          </p>
          <p className="text-zinc-400">
            Official safari permits and schedules are governed by Uttarakhand Forest Department regulations.
          </p>
        </div>
      </Container>
    </footer>
  );
}
