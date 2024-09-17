"use client";

import SectionTitle from "../_global_components/SectionTitle";
import Fonctionnalites from "../_global_components/svg/Fonctionnalites";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { technologies } from "@data/homepage/TechnologiesUsed";

export function Services() {
  return (
    <div className="mt-8 max-w-screen-lg mx-auto">
      <SectionTitle>Le web à votre service</SectionTitle>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:mt-6 px-2 lg:px-0">
            <ServiceCard 
                img="https://firebasestorage.googleapis.com/v0/b/devbytoma-portfolio.appspot.com/o/fonctionnalites.svg?alt=media&token=ca7e489e-6b2d-41e7-b074-aa6c8b1073a0"
                className="col-span-2 md:col-span-1 " 
                title="Fonctionnalités sur-mesure"
                description="Proposez des fonctionnalités sur-mesure, entièrement adaptées aux besoins de votre entreprise et de vos clients. Que ce soit un système de réservation en ligne, une boutique e-commerce, ou des outils de gestion spécifiques, je m'assure que chaque fonction renforce l'efficacité et l'expérience utilisateur, vous permettant ainsi de vous démarquer de vos concurrents."
                />
            <ServiceCard 
                img="https://firebasestorage.googleapis.com/v0/b/devbytoma-portfolio.appspot.com/o/seo.svg?alt=media&token=ff3af1ff-f138-4df5-adc0-2fc3316001c3"
                className="" 
                title="Optimisation SEO"
                description="Améliorez votre visibilité en ligne et dépassez vos concurrents grâce à un site optimisé pour le SEO. J’optimise le contenu, la structure et la vitesse de votre site pour garantir un positionnement durable sur les moteurs de recherche et attirer un maximum de trafic qualifié."
            />
            <ServiceCard 
                img="https://firebasestorage.googleapis.com/v0/b/devbytoma-portfolio.appspot.com/o/responsive.svg?alt=media&token=090de675-8ca6-45ae-9569-2ef0b3ad6862"
                className="" 
                title="Accessibilité multi-supports"
                description="Offrez une expérience utilisateur fluide sur tous les appareils. Je conçois des sites web responsifs qui s’adaptent parfaitement à toutes les tailles d’écran, que ce soit mobile, tablette ou ordinateur, afin que vos utilisateurs puissent naviguer sur votre site partout et à tout moment."
            />
            <ServiceCard 
                img="https://firebasestorage.googleapis.com/v0/b/devbytoma-portfolio.appspot.com/o/securite.svg?alt=media&token=7aa2dc70-40e3-4a28-bc3c-2d872b8fa0b9"
                className="" 
                title="Sécurité et maintenance"
                description="Protégez votre site web contre les menaces en ligne grâce à des solutions de sécurité robustes. En plus de la mise en place des meilleures pratiques de sécurité, je propose une maintenance continue pour garantir la stabilité et la mise à jour de votre site, afin d'assurer une performance optimale sur le long terme."
            />
            <ServiceCard 
                img="https://firebasestorage.googleapis.com/v0/b/devbytoma-portfolio.appspot.com/o/uxuidesign.svg?alt=media&token=c89f5a6f-85e8-4115-8402-ecabe26faa19"
                className="col-span-2 md:col-span-1 " 
                title="UX/UI Design"
                description="Conception d’interfaces intuitives et agréables à utiliser. En combinant des principes de design esthétique et une expérience utilisateur fluide, je crée des sites web qui captivent vos utilisateurs et facilitent la navigation. Mon approche centrée sur l'utilisateur permet d'optimiser l'engagement et la conversion."
            />
            <ServiceCard 
                img="https://firebasestorage.googleapis.com/v0/b/devbytoma-portfolio.appspot.com/o/collaboration.svg?alt=media&token=3d1fe7b6-db52-46c9-a05c-4ce8e68bcf2e"
                className="col-span-2 lg:col-span-1 "
                title="Collaboration et écoute active"
                description="Chaque projet est unique, et je mets un point d’honneur à comprendre vos besoins en profondeur. À travers un échange régulier et une écoute attentive, nous travaillons ensemble pour créer un site qui reflète parfaitement votre vision. Votre satisfaction est ma priorité, et chaque étape est personnalisée selon vos retours et attentes."
            />
      </div>
    </div>
  );
}

const ServiceCard = ({children, className, title, description, img}: {children?: React.ReactNode, className?: string, title: string, description?: string, img: string}) => {
  return (
    <div className={`bg-white shadow-lg dark:bg-white  rounded-xl px-6 py-6 ${className}`}>
        <img className="w-20 rounded-xl mb-4" src={img}/>
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm">{description}</p>
        {children}
    </div>
  )

}