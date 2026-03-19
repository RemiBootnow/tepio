import type { FC, SVGProps } from "react";
import {
  Building02 as Building02Solid,
  CheckCircle as CheckCircleSolid,
  CheckVerified01 as CheckVerified01Solid,
  Clock as ClockSolid,
  Lightning01 as Lightning01Solid,
  MarkerPin01 as MarkerPin01Solid,
  ShieldTick as ShieldTickSolid,
  UserCircle as UserCircleSolid,
} from "@untitledui-pro/icons/solid";
import {
  Building02 as Building02Line,
  CheckCircle as CheckCircleLine,
  CheckVerified01 as CheckVerified01Line,
  Clock as ClockLine,
  Lightning01 as Lightning01Line,
  MarkerPin01 as MarkerPin01Line,
  ShieldTick as ShieldTickLine,
  UserCircle as UserCircleLine,
} from "@untitledui-pro/icons/line";

export type IconName =
  | "building"
  | "check-circle"
  | "check-verified"
  | "clock"
  | "lightning"
  | "map-pin"
  | "shield-check"
  | "user-circle";

export type IconType = "solid" | "lines";
export type IconColor = "white" | "dark";
export type IconSize = "small" | "big";

export interface IconProps {
  name: IconName;
  type?: IconType;
  color?: IconColor;
  size?: IconSize;
  className?: string;
}

type UUIIconComponent = FC<SVGProps<SVGSVGElement> & { color?: string; size?: number }>;

const SOLID_ICONS: Record<IconName, UUIIconComponent> = {
  building: Building02Solid,
  "check-circle": CheckCircleSolid,
  "check-verified": CheckVerified01Solid,
  clock: ClockSolid,
  lightning: Lightning01Solid,
  "map-pin": MarkerPin01Solid,
  "shield-check": ShieldTickSolid,
  "user-circle": UserCircleSolid,
};

const LINE_ICONS: Record<IconName, UUIIconComponent> = {
  building: Building02Line,
  "check-circle": CheckCircleLine,
  "check-verified": CheckVerified01Line,
  clock: ClockLine,
  lightning: Lightning01Line,
  "map-pin": MarkerPin01Line,
  "shield-check": ShieldTickLine,
  "user-circle": UserCircleLine,
};

const COLORS: Record<IconColor, string> = {
  white: "#FFFFFF",
  dark: "#01322D",
};

const SIZES: Record<IconSize, number> = {
  small: 14,
  big: 32,
};

export function Icon({
  name,
  type = "solid",
  color = "dark",
  size = "big",
  className,
}: IconProps) {
  const Component = type === "lines" ? LINE_ICONS[name] : SOLID_ICONS[name];
  return (
    <Component
      color={COLORS[color]}
      size={SIZES[size]}
      className={className}
      aria-hidden="true"
    />
  );
}
