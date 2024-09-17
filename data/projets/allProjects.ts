interface ProjectItem {
    title: string;
    slug: string;
    category: string;
    primaryColor: string;
    darkFont: boolean;
    link: string;
    linkText: string;
    screenshot: string;
    subtitle: string;
    description: string;
    customerPic: string;
    services: {
      name: string;
      description: string;
      img: string;
    }[]
  }

  export const categoryProject = [
    "Sites de ventes de coachings",
    "Sites e-commerce",
    "Sites vitrine / portfolio"
  ]

  export const allProjects: ProjectItem[] = [
    {
      title: "Un site qui t'accompagne dans ta carrière professionnelle",
      slug: "boostacarriere",
      category : categoryProject[0],
      primaryColor: "#b9ddff",
      darkFont: true,
      link: "https://boostacarriere.com",
      linkText: "www.boostacarriere.com",
      screenshot: "https://firebasestorage.googleapis.com/v0/b/devbytoma-portfolio.appspot.com/o/Capture%20d'%C3%A9cran%202024-05-28%20184507.png?alt=media&token=42a1a072-df7d-429d-8849-955cbf228151",
      subtitle: "Laurine - Boostacarriere",
      description: "Je m'appelle Laurine et ça fait 5 ans que je suis plongée et passionnée par le monde des ressources humaines. Au fil de ces années, j'ai accumulé une expérience solide dans ce domaine en constante évolution. [SL] J'ai eu l'occasion d'aider de nombreuses entreprises à gérer leurs ressources humaines, en mettant un point d'honneur sur le développement du potentiel humain et de leurs carrières.",
      customerPic: "",
      services: [
        {
          name: "Une prise de rendez-vous simple",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, ad fugiat a voluptatum exercitationem voluptas saepe, nemo similique soluta labore porro suscipit maxime dignissimos dolor, debitis accusamus quia rem ipsam! Itaque, asperiores corrupti delectus possimus repellat consequuntur alias saepe rerum voluptatem, obcaecati architecto voluptatum dolore culpa quod fuga adipisci nihil quos earum est veniam cum ducimus cupiditate iure? Quibusdam enim corrupti eveniet asperiores esse, nobis iusto possimus odit facilis eum quam veritatis rerum, a consequatur cum. Consequatur praesentium maiores quibusdam dolor ad quae debitis quisquam? ",
          img: "https://firebasestorage.googleapis.com/v0/b/devbytoma-portfolio.appspot.com/o/calendrier-boostacarriere.png?alt=media&token=5c2b6354-4841-42c3-9105-b2715438605a"
        },
        {
          name: "Une prise de rendez-vous simple",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, ad fugiat a voluptatum exercitationem voluptas saepe, nemo similique soluta labore porro suscipit maxime dignissimos dolor, debitis accusamus quia rem ipsam! Itaque, asperiores corrupti delectus possimus repellat consequuntur alias saepe rerum voluptatem, obcaecati architecto voluptatum dolore culpa quod fuga adipisci nihil quos earum est veniam cum ducimus cupiditate iure? Quibusdam enim corrupti eveniet asperiores esse, nobis iusto possimus odit facilis eum quam veritatis rerum, a consequatur cum. Consequatur praesentium maiores quibusdam dolor ad quae debitis quisquam? ",
          img: "https://firebasestorage.googleapis.com/v0/b/devbytoma-portfolio.appspot.com/o/calendrier-boostacarriere.png?alt=media&token=5c2b6354-4841-42c3-9105-b2715438605a"
        }
      ]
    },
    {
      title: "Des créations faites à la main, pour un quotidien durable",
      slug: "atelier-disis",
      category : categoryProject[1],
      primaryColor: "#99AB99",
      darkFont: false,
      link: "https://atelierdisis.fr/",
      linkText: "www.atelierdisis.fr",
      screenshot: "https://firebasestorage.googleapis.com/v0/b/devbytoma-portfolio.appspot.com/o/Capture%20d'%C3%A9cran%202024-05-28%20184507.png?alt=media&token=42a1a072-df7d-429d-8849-955cbf228151",
      subtitle: "Sandra - Atelier d'Isis",
      description: "Je m’appelle Sandra, et je suis la créatrice derrière Atelier d’Isis. Mon aventure a commencé dans un petit coin de mon atelier, où chaque produit est fabriqué avec amour et attention.  Toujours à mes côtés, Isis, mon chat, trouvait toujours une place près de moi pendant que je travaillais, veillant sur chaque création comme un véritable compagnon de travail. [SL] Chaque création est le fruit de nombreuses heures de travail, d’essais et d’ajustements, pour parvenir à un résultat qui me satisfait pleinement et qui, je l’espère, vous plaira autant qu’à moi. Mon engagement est de vous offrir des produits de qualité, conçus avec des matériaux choisis avec soin, pour une consommation plus durable et éthique.",
      customerPic: "",
      services: [
        {
          name: "Une page d'accueil à son image",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, ad fugiat a voluptatum exercitationem voluptas saepe, nemo similique soluta labore porro suscipit maxime dignissimos dolor, debitis accusamus quia rem ipsam! Itaque, asperiores corrupti delectus possimus repellat consequuntur alias saepe rerum voluptatem, obcaecati architecto voluptatum dolore culpa quod fuga adipisci nihil quos earum est veniam cum ducimus cupiditate iure? Quibusdam enim corrupti eveniet asperiores esse, nobis iusto possimus odit facilis eum quam veritatis rerum, a consequatur cum. Consequatur praesentium maiores quibusdam dolor ad quae debitis quisquam? ",
          img: "https://firebasestorage.googleapis.com/v0/b/devbytoma-portfolio.appspot.com/o/calendrier-boostacarriere.png?alt=media&token=5c2b6354-4841-42c3-9105-b2715438605a"
        },
        {
          name: "Une mise en avant des produits",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, ad fugiat a voluptatum exercitationem voluptas saepe, nemo similique soluta labore porro suscipit maxime dignissimos dolor, debitis accusamus quia rem ipsam! Itaque, asperiores corrupti delectus possimus repellat consequuntur alias saepe rerum voluptatem, obcaecati architecto voluptatum dolore culpa quod fuga adipisci nihil quos earum est veniam cum ducimus cupiditate iure? Quibusdam enim corrupti eveniet asperiores esse, nobis iusto possimus odit facilis eum quam veritatis rerum, a consequatur cum. Consequatur praesentium maiores quibusdam dolor ad quae debitis quisquam? ",
          img: "https://firebasestorage.googleapis.com/v0/b/devbytoma-portfolio.appspot.com/o/calendrier-boostacarriere.png?alt=media&token=5c2b6354-4841-42c3-9105-b2715438605a"
        }
      ]
    }
  ];




