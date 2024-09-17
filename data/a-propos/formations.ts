interface FormationItem {
    title: string;
    link: string;
    logo: string;
    description: string;

  }

  export const allFormations: FormationItem[] = [
    {
        title: "Formation développeur web et web mobile",
        link: "https://oclock.io/formations/developpeur-web-web-mobile",
        logo: "https://firebasestorage.googleapis.com/v0/b/devbytoma-portfolio.appspot.com/o/oclock-logo.png?alt=media&token=19833f62-70ce-409a-a656-9ffdc4698538",
        description: `Notions de bases (<span class='italic'>HTML, CSS, JS, PHP, W3C, Versionning, Déploiement, Environnement Linux, Base de données MySQL</span>), POO, PHP avancé, Création d'API, Laravel, Wordpress, ReactJS (en Typescript), Projet de groupe en méthodologie Agile, ...`,
    },
    {
        title: "Formation NextJS",
        link: "https://dyma.fr/next",
        logo: "https://firebasestorage.googleapis.com/v0/b/devbytoma-portfolio.appspot.com/o/dyma-logo.png?alt=media&token=9a67d4e7-67a5-40d4-b4d0-9159faad9231",
        description: `Architecture NextJS, Segments statique et dynamique, Les hooks, SSR, CSR, Récupération de données, Déploiement, Métadonnées et SEO, Middleware, ...`,
    },
    {
        title: "Cours : Passez au Full Stack avec Node.js, Express et Mongo DB",
        link: "https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb",
        logo: "https://firebasestorage.googleapis.com/v0/b/devbytoma-portfolio.appspot.com/o/Logo-OpenClassroom.png?alt=media&token=5dbbe337-4e91-428f-81f8-6eaa62f01597",
        description: `Créer un service Express, Créer une API Rest avec Node, Express et MongoDB, Mettre en place un système d'authentification`,
    },

  ];