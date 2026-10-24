"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TreePine, Car, Compass, HelpCircle, PhoneCall } from "lucide-react";

const navItems = [
  { href: "/safari", label: "Jeep Safari", Icon: TreePine },
  { href: "/canter-safari", label: "Dhikala Canter", Icon: Compass },
  { href: "/cab-service", label: "Cab Service", Icon: Car },
  { href: "/faq", label: "Timings & FAQ", Icon: HelpCircle },
  { href: "/contact", label: "Contact Desk", Icon: PhoneCall },
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="flex w-full flex-wrap justify-center gap-2 sm:gap-2.5">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-[color:var(--color-primary)] text-white shadow-xs"
                : "border border-[color:var(--color-primary)]/30 bg-white/90 text-[color:var(--color-primary)] hover:bg-[color:var(--color-primary)]/10"
            }`}
          >
            <item.Icon size={15} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}