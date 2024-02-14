import { Camera, Colour } from "@/types/canvas";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const COLOURS = ["#DC2626", "#D97709", "#059669", "#7C3AED", "#DB2777"];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function connectionIdToColour(connectionId: number): string {
  return COLOURS[connectionId % COLOURS.length];
}

export function pointerEventToCanvasPoint(
  e: React.PointerEvent,
  camera: Camera
) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y,
  };
}

export function colourToCss(colour: Colour) {
  return `#${colour.r.toString(16).padStart(2, "0")}${colour.g
    .toString(16)
    .padStart(2, "0")}${colour.b.toString(16).padStart(2, "0")}`;
}


