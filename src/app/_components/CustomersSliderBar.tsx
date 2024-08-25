"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { technologies } from "@data/homepage/TechnologiesUsed"

export function CustomersSliderBar() {
  return (
    <div className="flex flex-col antialiased w-full bg-secondary items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        images={technologies}
        direction="right"
        speed="normal"
        grayOnHover
        pauseOnHover
        width="400px"
      />
    </div>
  );
}
