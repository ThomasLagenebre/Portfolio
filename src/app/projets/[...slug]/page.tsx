import React from 'react'
import EspaceurHeader from '../../_global_components/HeaderSpacer'
import { MacbookScrollDemo } from './_components/Macbook';
import SectionTitle from '@/app/_global_components/SectionTitle';

export default function page({ params }: {
    params: {
        slug: string[];
    }
}) {
  return (
    <div>
        <EspaceurHeader />
        <div className='text-center bg-blue-300 py-3'>
            <h1 className='text-3xl font-bold'>Un site qui t'accompagne dans ta carrière professionnelle</h1>
            <a href='http://boostacarriere.com' target='blank'>www.boostacarriere.com</a>
        </div>
        <MacbookScrollDemo src="https://firebasestorage.googleapis.com/v0/b/devbytoma-portfolio.appspot.com/o/Capture%20d'%C3%A9cran%202024-05-28%20184507.png?alt=media&token=42a1a072-df7d-429d-8849-955cbf228151"/>
        <div className='grid grid-cols-2 gap-8 max-w-screen-lg mx-auto'>
            <div className='bg-gray-200 rounded-lg p-10'>
                <h2 className='font-bold text-xl text-center mb-8'>Laurine - Boostacarriere</h2>
                <p>Je m'appelle Laurine et ça fait 5 ans que je suis plongée et passionnée par le monde des ressources humaines. Au fil de ces années, j'ai accumulé une expérience solide dans ce domaine en constante évolution.</p><br/>
                <p>J'ai eu l'occasion d'aider de nombreuses entreprises à gérer leurs ressources humaines, en mettant un point d'honneur sur le développement du potentiel humain et de leurs carrières.</p>
            </div>
            <div className='bg-blue-300 p-10 rounded-lg'>
                <img className='h-full w-full object-cover rounded-lg' src="https://firebasestorage.googleapis.com/v0/b/devbytoma-portfolio.appspot.com/o/Capture%20d'%C3%A9cran%202024-05-28%20184507.png?alt=media&token=42a1a072-df7d-429d-8849-955cbf228151"></img>
            </div>
        </div>
        <SectionTitle>Qu'avons-nous voulu proposer sur ce site ?</SectionTitle>
    </div>
  )
}
