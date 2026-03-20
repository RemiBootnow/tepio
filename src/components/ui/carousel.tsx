"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ProgressIndicator } from "./progress-indicator";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  variant?: "center" | "left-aligned";
}

const CARD_W = 350, CARD_H = 500;
const GAP = 24;
const LEFT_PAD = 20;
const SCALE_DOWN = 0.85;
// Shrinkage on each side when a card is scaled down
const SHRINK = CARD_W * (1 - SCALE_DOWN) / 2; // 32px

// ── Variant "center" ──
// CENTER_X[r] = offset of the card's visual center from the parent center.
// Scale doesn't move the center, so compensate edge spacing for non-active cards.
const CENTER_X: Record<number, number> = {
  0: 0,
  "-1": -(CARD_W / 2 + GAP + CARD_W * SCALE_DOWN / 2), // -300
  1:    CARD_W / 2 + GAP + CARD_W * SCALE_DOWN / 2,     //  300
  "-2": -(CARD_W / 2 + GAP + CARD_W * SCALE_DOWN / 2),
  2:    CARD_W / 2 + GAP + CARD_W * SCALE_DOWN / 2,
};

function getCenterStyle(role: number) {
  const r = Math.max(-2, Math.min(2, role));
  return {
    x: CENTER_X[r] - CARD_W / 2,
    y: -CARD_H / 2,
    width: CARD_W,
    height: CARD_H,
    scale: r === 0 ? 1 : SCALE_DOWN,
    opacity: Math.abs(r) <= 1 ? 1 : 0,
    zIndex: 3 - Math.abs(r),
  };
}

// ── Variant "left-aligned" ──
// LEFT_X[r] = translate-x applied to the card (framer-motion).
// For scale=1 (role -1): visual left = LEFT_X[r]
// For scale=0.8 (others): visual left = LEFT_X[r] + SHRINK
// We compute each position so visual gaps equal GAP.
const LEFT_X: Record<number, number> = {
  "-2": LEFT_PAD,
  "-1": LEFT_PAD,
  // visual left[0] = LEFT_PAD + CARD_W + GAP → LEFT_X[0] = that - SHRINK
  0: LEFT_PAD + CARD_W + GAP - SHRINK,
  // visual left[1] = visual right[0] + GAP = (LEFT_X[0] + SHRINK + CARD_W*SCALE_DOWN) + GAP
  1: LEFT_PAD + CARD_W + GAP + CARD_W * SCALE_DOWN + GAP - SHRINK,
  2: LEFT_PAD + CARD_W + GAP + CARD_W * SCALE_DOWN + GAP - SHRINK,
};

function getLeftStyle(role: number) {
  const r = Math.max(-2, Math.min(2, role));
  return {
    x: LEFT_X[r],
    y: -CARD_H / 2,
    width: CARD_W,
    height: CARD_H,
    scale: r === -1 ? 1 : SCALE_DOWN,
    opacity: Math.abs(r) <= 1 ? 1 : 0,
    zIndex: r === -1 ? 3 : r === 0 ? 2 : 1,
  };
}

const LEFT_BASE = { position: "absolute" as const, left: 0 as const, top: "50%" };
const CENTER_BASE = { position: "absolute" as const, left: "50%", top: "50%" };

function getRole(i: number, cI: number, n: number): number {
  const raw = ((i - cI) % n + n) % n;
  return raw > n / 2 ? raw - n : raw;
}

export function Carousel({ children, className, variant = "center" }: CarouselProps) {
  const originalItems = React.Children.toArray(children);
  const originalCount = originalItems.length;

  // Desktop: always min 5 display items to avoid visible wrap-arounds
  const multiplier = originalCount < 5 ? Math.ceil(5 / originalCount) : 1;
  const items = originalCount < 5
    ? Array.from({ length: originalCount * multiplier }, (_, i) => originalItems[i % originalCount])
    : originalItems;
  const count = items.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevDesktopRoles = useRef<Record<number, number>>({});
  const pendingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const desktopRoleCenter = variant === "left-aligned"
    ? (currentIndex + 1) % count
    : currentIndex;

  useEffect(() => {
    items.forEach((_, i) => {
      prevDesktopRoles.current[i] = getRole(i, desktopRoleCenter, count);
    });
  }, [currentIndex, count]);

  useEffect(() => {
    return () => {
      if (pendingTimeoutRef.current) clearTimeout(pendingTimeoutRef.current);
    };
  }, []);

  const goTo = (i: number) => setCurrentIndex(i);

  const goToMobile = (i: number) => {
    setCurrentIndex(i);
    mobileScrollRef.current?.scrollTo({ left: i * (CARD_W + GAP), behavior: "smooth" });
  };

  const advanceTwice = () => {
    if (pendingTimeoutRef.current) clearTimeout(pendingTimeoutRef.current);
    const next1 = (currentIndex + 1) % count;
    const next2 = (currentIndex + 2) % count;
    goTo(next1);
    pendingTimeoutRef.current = setTimeout(() => {
      goTo(next2);
      pendingTimeoutRef.current = null;
    }, 500);
  };

  const renderDesktopCards = (
    roleCenter: number,
    prevRolesRef: React.MutableRefObject<Record<number, number>>,
    isLeft: boolean,
    interactive: boolean,
  ) =>
    items.map((item, i) => {
      const role = getRole(i, roleCenter, count);
      const prevRole = prevRolesRef.current[i] ?? role;
      const jumped = Math.abs(role - prevRole) > 1 && Math.abs(prevRole) >= 2;
      const style = isLeft ? getLeftStyle(role) : getCenterStyle(role);
      let handleClick: (() => void) | undefined;
      if (interactive) {
        if (isLeft) {
          if (role === 0) handleClick = () => goTo(i);
          if (role === 1) handleClick = advanceTwice;
        } else {
          if (role === -1) handleClick = () => goTo(i);
          if (role === 1) handleClick = () => goTo(i);
        }
      }

      return (
        <motion.div
          key={`d-${i}`}
          style={isLeft ? LEFT_BASE : CENTER_BASE}
          initial={false}
          animate={style}
          transition={jumped ? { duration: 0 } : { duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          onClick={handleClick}
          className={cn(
            handleClick ? "cursor-pointer" : undefined,
            Math.abs(role) >= 2 ? "pointer-events-none" : undefined,
          )}
        >
          {item}
        </motion.div>
      );
    });

  const isDesktopLeft = variant === "left-aligned";
  const desktopInteractive = variant === "left-aligned" || originalCount > 3;
  const dotActive = currentIndex % originalCount;

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {/* Mobile : CSS scroll snap */}
      <div
        ref={mobileScrollRef}
        className="flex md:hidden overflow-x-auto"
        style={{
          height: CARD_H,
          gap: GAP,
          scrollPaddingLeft: LEFT_PAD,
          paddingRight: `calc(100vw - ${LEFT_PAD + CARD_W}px)`,
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
        }}
        onScroll={() => {
          if (!mobileScrollRef.current) return;
          const idx = Math.round(mobileScrollRef.current.scrollLeft / (CARD_W + GAP));
          setCurrentIndex(Math.min(Math.max(idx, 0), originalCount - 1));
        }}
      >
        <div style={{ flexShrink: 0, width: LEFT_PAD }} />
        {originalItems.map((item, i) => (
          <div
            key={i}
            style={{
              width: CARD_W,
              height: CARD_H,
              flexShrink: 0,
              scrollSnapAlign: "start",
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div
        className={cn("relative hidden md:block", variant === "center" && "overflow-hidden")}
        style={{
          height: CARD_H,
          ...(variant === "center" ? { width: "100vw", marginLeft: "calc(-50vw + 50%)" } : {}),
        }}
      >
        {renderDesktopCards(desktopRoleCenter, prevDesktopRoles, isDesktopLeft, desktopInteractive)}
      </div>

      {/* Dots */}
      <div className="relative h-4">
        <div
          className="absolute md:hidden"
          style={{ left: LEFT_PAD + CARD_W / 2, transform: "translateX(-50%)" }}
        >
          <ProgressIndicator count={originalCount} active={dotActive} onDotClick={goToMobile} />
        </div>
        {desktopInteractive && (
          <div
            className="absolute hidden md:block"
            style={isDesktopLeft
              ? { left: LEFT_X[-1] + CARD_W / 2, transform: "translateX(-50%)" }
              : { left: "50%", transform: "translateX(-50%)" }}
          >
            <ProgressIndicator count={originalCount} active={dotActive} onDotClick={goTo} />
          </div>
        )}
      </div>
    </div>
  );
}
