"use client ";

import { colourToCss } from "@/lib/utils";
import { Colour } from "@/types/canvas";

interface ColourPickerProps {
  onChange: (colour: Colour) => void;
}

export const ColourPicker = ({ onChange }: ColourPickerProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200">
      <ColourButton colour={{ r: 243, g: 82, b: 35 }} onClick={onChange} />
      <ColourButton colour={{ r: 255, g: 249, b: 177 }} onClick={onChange} />
      <ColourButton colour={{ r: 68, g: 202, b: 99 }} onClick={onChange} />
      <ColourButton colour={{ r: 39, g: 142, b: 237 }} onClick={onChange} />
      <ColourButton colour={{ r: 155, g: 105, b: 245 }} onClick={onChange} />
      <ColourButton colour={{ r: 252, g: 142, b: 42 }} onClick={onChange} />
      <ColourButton colour={{ r: 0, g: 0, b: 0 }} onClick={onChange} />
      <ColourButton colour={{ r: 255, g: 255, b: 255 }} onClick={onChange} />
    </div>
  );
};

interface ColourButtonProps {
  onClick: (colour: Colour) => void;
  colour: Colour;
}

const ColourButton = ({ onClick, colour }: ColourButtonProps) => {
  return (
    <button
      className="w-8 h-8 items-center flex justify-center hover:opacity-75 transition"
      onClick={() => onClick(colour)}
    >
      <div
        className="h-8 w-8 rounded-md border border-neutral-300"
        style={{
          background: colourToCss(colour),
        }}
      />
    </button>
  );
};
