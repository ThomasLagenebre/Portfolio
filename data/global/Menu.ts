interface MenuItem {
    label: string;
    link: string;
  }

  export const menu: MenuItem[] = [
    { label: "Accueil", link: "/" },
    { label: "Services", link: "/services" },
    { label: "Projets", link: "/projets" },
    { label: "À propos", link: "/a-propos" },
    { label: "Contact", link: "/contact" }
  ];