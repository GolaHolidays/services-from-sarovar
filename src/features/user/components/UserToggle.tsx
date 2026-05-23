"use client";

import { useUser } from "../hooks/useUser";
import type { UserType } from "../types";

const options: { label: string; value: UserType; emoji: string }[] = [
  { label: "Indian", value: "indian", emoji: "🇮🇳" },
  { label: "Foreigner", value: "foreigner", emoji: "✈️" },
];

export function UserToggle() {
  const { userType, setUserType } = useUser();

  return (
    <div className="flex flex-col items-end gap-1">
      {/* <span className="text-xs font-medium text-[color:var(--color-muted)] uppercase tracking-wide">
        Viewing prices for
      </span> */}
      <div className="inline-flex rounded-full bg-[color:var(--color-primary)] p-1 shadow-sm">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setUserType(option.value)}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
              userType === option.value
                ? "bg-[color:var(--color-accent)] text-zinc-900 shadow-sm"
                : "text-white/80 hover:text-white"
            }`}
          >
            {option.emoji} {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
