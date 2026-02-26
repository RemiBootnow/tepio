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

const ACTIVE_W = 272, ACTIVE_H = 400;
const SIDE_W = 240, SIDE_H = 350;
const HIDDEN_W = 200, HIDDEN_H = 290;
const GAP = 12;

// ── Variant "center" : référence left: '50%' ──
const CENTER_CENTERS: Record<number, number> = { 0: 0, "-1": -268, 1: 268, "-2": -268, 2: 268 };
const CENTER_SIZES: Record<number, [number, number]> = {
  0: [ACTIVE_W, ACTIVE_H],
  "-1": [SIDE_W, SIDE_H],
  1: [SIDE_W, SIDE_H],
  "-2": [HIDDEN_W, HIDDEN_H],
  2: [HIDDEN_W, HIDDEN_H],
};

// ── Variant "left-aligned" : référence left: 0, active à role -1 ──
const LEFT_PAD = 20;
const LEFT_X: Record<number, number> = {
  "-2": LEFT_PAD,
  "-1": LEFT_PAD,
  0: LEFT_PAD + ACTIVE_W + GAP,
  1: LEFT_PAD + ACTIVE_W + GAP + SIDE_W + GAP,
  2: LEFT_PAD + ACTIVE_W + GAP + SIDE_W + GAP,
};
const LEFT_SIZES: Record<number, [number, number]> = {
  "-2": [HIDDEN_W, HIDDEN_H],
  "-1": [ACTIVE_W, ACTIVE_H],
  0: [SIDE_W, SIDE_H],
  1: [SIDE_W, SIDE_H],
  2: [SIDE_W, SIDE_H],
};

function getRole(i: number, cI: number, n: number): number {
  const raw = ((i - cI) % n + n) % n;
  return raw > n / 2 ? raw - n : raw;
}

function getCenterStyle(role: number) {
  const r = Math.max(-2, Math.min(2, role));
  const [w, h] = CENTER_SIZES[r];
  return {
    x: CENTER_CENTERS[r] - w / 2,
    y: -h / 2,
    width: w,
    height: h,
    opacity: Math.abs(r) <= 1 ? 1 : 0,
    zIndex: 3 - Math.abs(r),
  };
}

function getLeftStyle(role: number) {
  const r = Math.max(-2, Math.min(2, role));
  const [w, h] = LEFT_SIZES[r];
  return {
    x: LEFT_X[r],
    y: -h / 2,
    width: w,
    height: h,
    opacity: Math.abs(r) <= 1 ? 1 : 0,
    zIndex: r === -1 ? 3 : r === 0 ? 2 : 1,
  };
}

const LEFT_BASE = { position: "absolute" as const, left: 0 as const, top: "50%" };
const CENTER_BASE = { position: "absolute" as const, left: "50%", top: "50%" };

export function Carousel({ children, className, variant = "center" }: CarouselProps) {
  const originalItems = React.Children.toArray(children);
  const originalCount = originalItems.length;

  // Toujours au moins 5 items pour éviter les wrap-arounds sur cards visibles.
  // displayCount = multiple de originalCount >= 5.
  const multiplier = originalCount < 5 ? Math.ceil(5 / originalCount) : 1;
  const items = originalCount < 5
    ? Array.from({ length: originalCount * multiplier }, (_, i) => originalItems[i % originalCount])
    : originalItems;
  const count = items.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevDesktopRoles = useRef<Record<number, number>>({});
  const prevMobileRoles = useRef<Record<number, number>>({});
  const pendingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Mobile : toujours left-aligned, roleCenter décalé de +1
  const mobileRoleCenter = (currentIndex + 1) % count;
  // Desktop : selon variant
  const desktopRoleCenter = variant === "left-aligned"
    ? (currentIndex + 1) % count
    : currentIndex;

  useEffect(() => {
    items.forEach((_, i) => {
      prevDesktopRoles.current[i] = getRole(i, desktopRoleCenter, count);
      prevMobileRoles.current[i] = getRole(i, mobileRoleCenter, count);
    });
  }, [currentIndex, count]);

  useEffect(() => {
    return () => {
      if (pendingTimeoutRef.current) clearTimeout(pendingTimeoutRef.current);
    };
  }, []);

  const goTo = (i: number) => setCurrentIndex(i);

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

  const renderCards = (
    roleCenter: number,
    prevRolesRef: React.MutableRefObject<Record<number, number>>,
    isLeft: boolean,
    keyPrefix: string,
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
          key={`${keyPrefix}-${i}`}
          style={isLeft ? LEFT_BASE : CENTER_BASE}
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
      {/* Mobile (< md) : toujours left-aligned, toujours interactif */}
      <div
        className="relative overflow-hidden md:hidden"
        style={{ height: ACTIVE_H }}
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const delta = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(delta) > 50) {
            if (delta < 0) goTo((currentIndex + 1) % count);
            else goTo((currentIndex - 1 + count) % count);
          }
          touchStartX.current = null;
        }}
      >
        {renderCards(mobileRoleCenter, prevMobileRoles, true, "m", true)}
      </div>
      {/* Desktop (≥ md) : selon variant, interactif seulement si originalCount > 3 en center */}
      <div className="relative overflow-hidden hidden md:block" style={{ height: ACTIVE_H }}>
        {renderCards(desktopRoleCenter, prevDesktopRoles, isDesktopLeft, "d", desktopInteractive)}
      </div>
      {/* Dots — centrés sous la card active */}
      <div className="relative h-4">
        {/* Mobile : toujours left-aligned */}
        <div
          className="absolute md:hidden"
          style={{ left: LEFT_X[-1] + ACTIVE_W / 2, transform: "translateX(-50%)" }}
        >
          <ProgressIndicator count={originalCount} active={dotActive} onDotClick={goTo} />
        </div>
        {/* Desktop */}
        {desktopInteractive && (
          <div
            className="absolute hidden md:block"
            style={isDesktopLeft
              ? { left: LEFT_X[-1] + ACTIVE_W / 2, transform: "translateX(-50%)" }
              : { left: "50%", transform: "translateX(-50%)" }}
          >
            <ProgressIndicator count={originalCount} active={dotActive} onDotClick={goTo} />
          </div>
        )}
      </div>
    </div>
  );
}
