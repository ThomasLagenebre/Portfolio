"use client";

import SectionTitle from "../_global_components/SectionTitle";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { technologies } from "@data/homepage/TechnologiesUsed";

export function Services() {
  return (
    <div className="mt-8 max-w-screen-lg mx-auto">
      <SectionTitle>Le web à votre service</SectionTitle>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 grid-rows-4 lg:mt-6 px-2 lg:px-0">
            <div className="bg-primary dark:bg-white col-span-2 md:col-span-1 lg:col-span-2 row-span-4 rounded-xl text-white dark:text-primary px-6 py-4">
              <h3 className="text-xl font-bold mb-4">Mettre le maximum de fonctionnalités adaptées à votre entreprise</h3>
              <p>Démarquez-vous de tous vos concurrents en proposant à vos clients les fonctionnalités adaptées à leur besoin</p>
              <div className="flex flex-col antialiased w-full items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                  images={technologies}
                  direction="left"
                  speed="fast"
                  width="50px"
                />
              </div>
              <div className="flex flex-col antialiased w-full items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                  images={technologies}
                  direction="right"
                  speed="fast"
                  width="50px"
                />
              </div>
            </div>
            <div className="border-2 border-primary dark:border-white rounded-xl dark:text-white row-span-2">
              <h3 className="text-lg font-bold my-4 text-center">Optimisation SEO</h3>
              <img src="https://i.ibb.co/r2T7p1R/tablet-desktop-mobil-1.png" className="h-20 w-20 mx-auto"></img>
              <p className="my-2 text-center text-sm">Dépassez vos concurrents</p>
            </div>
            <div className="bg-primary dark:bg-white rounded-xl row-span-2 md:row-span-1 lg:row-span-4 text-white dark:text-primary px-3 py-2">
              <h3 className="text-lg font-bold my-4">Présent sur mobile, tablette et ordinateur</h3>
              <img src="https://i.ibb.co/99SVvMK/tablet-desktop-mobil.png" className="w-20 h-20 mx-auto my-6"></img>
              <p className="text-sm">Pour que vos utilisateurs puissent accèder à votre site web tout le temps et de partout</p>
            </div>
            <div className="border-2 border-primary dark:border-white rounded-xl dark:text-white bg-primary text-white md:bg-white md:text-primary row-span-3">4</div>
            <div className="bg-white border-2 border-primary md:bg-primary dark:bg-white col-span-2 md:col-span-1 lg:col-span-1 rounded-xl text-primary dark:text-primary md:text-white row-span-2">
              <h3 className="text-lg font-bold my-4 text-center">UX/UI Design</h3>
            </div>
            <div className="bg-secondary rounded-xl col-span-2 lg:col-span-1 row-span-1 flex justify-center items-center">
              <h3 className="font-bold text-center">Un échange entre 2 humains</h3>
            </div>
      </div>
    </div>
  );
}
