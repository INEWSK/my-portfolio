import { useTheme } from "next-themes";
import type React from "react";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

import { cn } from "~/lib/utils";

import { AirplayIcon } from "./animate-ui/icons/airplay";
import { AnimateIcon } from "./animate-ui/icons/icon";
import { MoonIcon } from "./animate-ui/icons/moon";
import { SunIcon } from "./animate-ui/icons/sun";

interface ThemeSwitcherMultiButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  duration?: number;
}

const THEME_OPTIONS = [
  { value: "system", icon: AirplayIcon, label: "Switch to system theme" },
  { value: "light", icon: SunIcon, label: "Switch to light theme" },
  { value: "dark", icon: MoonIcon, label: "Switch to dark theme" },
] as const;

type ThemeValue = (typeof THEME_OPTIONS)[number]["value"];

export function AnimatedThemeSwitcher({
  className,
  duration = 400,
  ...props
}: ThemeSwitcherMultiButtonProps) {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getVisualTheme = (value?: string) =>
    value === "system" ? (systemTheme ?? resolvedTheme ?? value) : value;

  const playReveal = (trigger: HTMLElement) => {
    const { top, left, width, height } = trigger.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top),
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };

  const handleThemeSelection = async (
    nextTheme: ThemeValue,
    trigger: HTMLElement,
  ) => {
    const currentVisual = getVisualTheme(theme);
    const nextVisual = getVisualTheme(nextTheme);

    if (currentVisual === nextVisual) {
      if (theme !== nextTheme) {
        setTheme(nextTheme);
      }
      return;
    }

    const applyTheme = () => {
      flushSync(() => setTheme(nextTheme));
    };

    const transition = document.startViewTransition?.(applyTheme);

    if (!transition) {
      applyTheme();
      return;
    }

    await transition.ready;
    playReveal(trigger);
  };

  if (!mounted) {
    return (
      <div
        className={cn(
          "relative isolate inline-flex h-8 items-center rounded-full border border-dotted px-1",
          className,
        )}
        {...props}
      >
        <div className="flex space-x-1">
          <div className="bg-input size-5 animate-pulse rounded-full" />
          <div className="bg-input size-5 animate-pulse rounded-full" />
          <div className="bg-input size-5 animate-pulse rounded-full" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative isolate inline-flex h-8 items-center rounded-full border border-dotted px-1",
        className,
      )}
      {...props}
    >
      {THEME_OPTIONS.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          aria-label={label}
          aria-pressed={theme === value}
          title={label}
          type="button"
          onClick={(event) =>
            void handleThemeSelection(value, event.currentTarget)
          }
          className="group relative size-6 cursor-pointer rounded-full transition duration-200 ease-out"
        >
          {theme === value && (
            <div className="bg-muted absolute inset-0 -z-1 rounded-full" />
          )}
          <AnimateIcon animateOnHover animateOnTap>
            <Icon
              className={`relative m-auto size-3.5 transition duration-200 ease-out ${
                theme === value
                  ? "text-foreground"
                  : "text-secondary-foreground group-hover:text-foreground group-focus-visible:text-foreground"
              }`}
              aria-hidden="true"
            />
          </AnimateIcon>
        </button>
      ))}
    </div>
  );
}
