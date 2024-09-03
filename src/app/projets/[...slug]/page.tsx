import React from 'react'
import EspaceurHeader from '../../_global_components/HeaderSpacer'
import { MacbookScrollDemo } from './_components/Macbook';
import SectionTitle from '@/app/_global_components/SectionTitle';
import Card from './_components/Card';

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
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-lg mx-auto px-2'>
            <Card title='Laurine - Boostacarriere' className='row-span-2'>
                <p>Je m'appelle Laurine et ça fait 5 ans que je suis plongée et passionnée par le monde des ressources humaines. Au fil de ces années, j'ai accumulé une expérience solide dans ce domaine en constante évolution.</p><br/>
                <p>J'ai eu l'occasion d'aider de nombreuses entreprises à gérer leurs ressources humaines, en mettant un point d'honneur sur le développement du potentiel humain et de leurs carrières.</p>
            </Card>
            <div className='bg-blue-300 p-10 rounded-lg row-span-1'>
                <img className='h-full w-full object-cover rounded-lg' src="https://firebasestorage.googleapis.com/v0/b/devbytoma-portfolio.appspot.com/o/Capture%20d'%C3%A9cran%202024-05-28%20184507.png?alt=media&token=42a1a072-df7d-429d-8849-955cbf228151"></img>
            </div>
        </div>
        <section className='mt-20'>
            <SectionTitle>Qu'avons-nous voulu proposer sur ce site ?</SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto gap-8 mt-8 px-2'>
                <Card title='Une prise de rendez-vous simple'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, ad fugiat a voluptatum exercitationem voluptas saepe, nemo similique soluta labore porro suscipit maxime dignissimos dolor, debitis accusamus quia rem ipsam! Itaque, asperiores corrupti delectus possimus repellat consequuntur alias saepe rerum voluptatem, obcaecati architecto voluptatum dolore culpa quod fuga adipisci nihil quos earum est veniam cum ducimus cupiditate iure? Quibusdam enim corrupti eveniet asperiores esse, nobis iusto possimus odit facilis eum quam veritatis rerum, a consequatur cum. Consequatur praesentium maiores quibusdam dolor ad quae debitis quisquam? Sit, distinctio labore vitae atque culpa id molestiae molestias maiores possimus porro temporibus commodi repellendus aperiam harum consectetur dicta officiis delectus saepe, itaque nisi doloribus? Nulla a assumenda sed optio veritatis facilis ratione autem amet facere harum sapiente cupiditate, aspernatur earum illo cum iure minus voluptate voluptatem enim atque officia ullam. Molestiae delectus recusandae libero harum iste aut a optio perspiciatis suscipit, asperiores eveniet modi officia cum cumque expedita laborum nostrum corporis ipsa pariatur similique alias. Velit, architecto perspiciatis magni itaque, tempora iure dignissimos commodi aliquid in natus repellendus ex quae facilis recusandae veritatis quia earum eaque praesentium voluptatem eligendi sunt ducimus. Praesentium, perferendis sunt dolorem eius similique error molestias laborum a quisquam impedit quam. A veniam quis, labore libero possimus dicta numquam dolore. Autem repellat minus sequi nisi dicta, ad quidem rem numquam nam. Rem et, enim repellendus non laboriosam accusamus. Cum, esse voluptates!
                </Card>
            </div>
        </section>
    </div>
  )
}
