import { Mail, Phone, MapPin } from "lucide-react";
import { 
  BRAND_NAME, 
  BRAND_EMAIL, 
  RESORT_ADDRESS, 
  CONTACT_DISPLAY, 
  CONTACT_PHONE 
} from "../constants/ui.constants";
import { Container } from "./Container";

export function MainFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-white/10 bg-[color:var(--color-primary)] py-12 text-zinc-300">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <h1 className="text-sm font-bold uppercase tracking-widest text-white/60">
              SERVICES
            </h1> 
            <h3 className="font-brand text-2xl font-bold tracking-wider text-white">
              {BRAND_NAME}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400 max-w-md">
              Your gateway to the wild. Experience the majestic wilderness of Jim Corbett National Park with our premium safari and travel services.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/60">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              {BRAND_EMAIL ? (
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-white/40" />
                  <a href={`mailto:${BRAND_EMAIL}`} className="text-zinc-300 hover:text-white hover:underline">
                    {BRAND_EMAIL}
                  </a>
                </li>
              ) : null}
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-white/40" />
                <a href={`tel:${CONTACT_PHONE}`} className="text-zinc-300 hover:text-white hover:underline">
                  {CONTACT_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-white/40" />
                <span className="text-zinc-300 leading-relaxed">{RESORT_ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-xs tracking-wide text-zinc-500 uppercase">
            &copy; {currentYear} {BRAND_NAME}. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
