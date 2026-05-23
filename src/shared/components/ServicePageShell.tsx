import { type ReactNode } from "react";
import { HelpCircle } from "lucide-react";
import { UserToggle } from "@/features/user";
import { Container } from "./Container";
import { Section } from "./Section";
import { TopNav } from "./TopNav";
import { MainFooter } from "./MainFooter";
import FloatingWhatsApp from "./FloatingWhatsApp";
import { CONTACT_PHONE, WHATSAPP_NUMBER, BRAND_NAME, RESORT_LOCATION_SHORT } from "../constants/ui.constants";

type ServicePageShellProps = {
  contentTitle: string;
  children: ReactNode;
};

export function ServicePageShell({ contentTitle, children }: ServicePageShellProps) {
  return (
    <>
      {/* Sticky top bar — sticks to top on scroll */}
      <div className="sticky top-0 z-50 border-b border-zinc-200/60 bg-[color:var(--color-bg)]/90 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-3 py-2 lg:px-6">
          <div className="flex flex-col justify-center">
            <span className="font-brand text-[0.65rem] font-bold uppercase tracking-[0.2em] text-zinc-500">
              Official Travel Desk
            </span>
          </div>
          <UserToggle />
        </div>
      </div>

      <Container>
        <header className="pt-4 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Services</p>
          <h1 className="mt-2 font-brand text-2xl font-semibold tracking-wide text-[color:var(--color-primary)] md:text-3xl">
            {BRAND_NAME}
          </h1>
          <p className="mt-2 text-sm text-zinc-600">{RESORT_LOCATION_SHORT}</p>
        </header>

        <div className="pt-4 pb-2 text-center">
          <div className="mx-auto h-1 w-16 rounded-full bg-[color:var(--color-accent)] opacity-50" />
        </div>

        <TopNav />
        {/* Assistance Line Block */}
        <div className="mx-auto mt-4 mb-2 flex max-w-4xl items-center justify-center gap-3 rounded-xl border border-[color:var(--color-secondary)]/20 bg-[color:var(--color-secondary)]/10 px-4 py-3 text-center shadow-sm">
          <HelpCircle size={20} className="text-[color:var(--color-primary)]" />
          <p className="text-sm font-medium tracking-wide text-zinc-800 md:text-base">
            <span className="font-bold text-[color:var(--color-primary)]">Need Help?</span> For any queries or assistance, please{" "}
            <a href={`tel:${CONTACT_PHONE}`} className="font-bold text-blue-700 hover:underline">Call</a>
            {" or "}
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="font-bold text-green-600 hover:underline">WhatsApp</a>
            {" us 24/7."}
          </p>
        </div>

        {/* Brand Intro Line */}
        <div className="my-6 text-center max-w-3xl mx-auto">
          <p className="text-zinc-600 italic leading-relaxed">
            &quot;Experience the heart of the jungle with <span className="font-bold text-[color:var(--color-primary)]">us</span>. 
            We specialize in providing seamless, luxury travel and wildlife experiences tailored to your comfort and curiosity.&quot;
          </p>
        </div>

        
        <Section title={contentTitle}>{children}</Section>
      </Container>
      <MainFooter />
      <FloatingWhatsApp />
    </>
  );
}
