import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const COLOURS = ["#DC2626", "#D97709", "#059669", "#7C3AED", "#DB2777"];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function connectionIdToColour(connectionId: number): string {
  return COLOURS[connectionId % COLOURS.length];
}
