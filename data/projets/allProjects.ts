interface ProjectItem {
    title: string;
    slug: string;
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

  export const allProjects: ProjectItem[] = [
    {
      title: "Un site qui t'accompagne dans ta carrière professionnelle",
      slug: "boostacarriere",
      link: "https://boostacarriere.com",
      linkText: "www.boostacarriere.com",
      screenshot: "",
      subtitle: "Laurine - Boostacarriere",
      description: "Je m'appelle Laurine et ça fait 5 ans que je suis plongée et passionnée par le monde des ressources humaines. Au fil de ces années, j'ai accumulé une expérience solide dans ce domaine en constante évolution. J'ai eu l'occasion d'aider de nombreuses entreprises à gérer leurs ressources humaines, en mettant un point d'honneur sur le développement du potentiel humain et de leurs carrières.",
      customerPic: "",
      services: [
        {
          name: "",
          description: "",
          img: ""
        }
      ]
    }
  ];