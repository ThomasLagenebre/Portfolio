"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { ClassicButton } from "../_global_components/ClassicButton";
import { people } from "@data/homepage/LastCustomers"

export function Hero() {

  return (
    <div className="lg:max-w-screen-lg overflow-hidden dark:bg-slate-900 dark:white lg:flex lg:items-center justify-center mx-auto mb-10">
        <div className="lg:w-1/2 lg:pe-10">
            <h1 className="text-center lg:text-start z-10 text-3xl md:text-4xl lg:h-24 mb-3 bg-clip-text text-transparent bg-gradient-to-b from-secondary to-primary dark:from-white dark:to-secondary   font-sans font-bold">
            Propulse ta visibilité grâce à un site web optimisé
            </h1>
            <p className="dark:text-white text-center lg:text-start">Offrez à vos visiteurs une expérience inégalée avec un site web innovant et intuitif.</p>
            <div className="mt-8">
                <AnimatedTooltip items={people} />
                <p className=" mt-2 text-sm text-primary dark:text-light text-center lg:text-start">Comme plus de {people.length} clients satisfaits</p>
            </div>
            <ClassicButton to="/contact" type="link" variant="primary" className="mx-auto lg:mx-0 my-4 font-bold text-primary dark:hover:text-white">Discutons de ton projet</ClassicButton>
        </div>
        <div className="bg-secondary lg:w-1/2 lg:h-[500px] h-[300px]"></div>
    </div>
    
  );
}
