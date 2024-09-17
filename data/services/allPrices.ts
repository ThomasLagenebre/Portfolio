export const allPrices: {
    title: string;
    description: string;
    price: number;
    includes: string[];
    plus: string[]
  }[] = [
    {
    title: "L'essentiel",
    description: "Idéal pour les petites entreprises ou indépendants qui souhaitent une présence en ligne basique mais professionnelle.",
    price: 800,
    includes: ['Création d’un site vitrine de 1 à 3 pages avec un design simple et moderne, mettant en avant vos services ou produits', 'Hébergement gratuit pendant 1 an, avec un nom de domaine inclus', 'Design responsive pour que votre site s’adapte automatiquement aux téléphones, tablettes et ordinateurs', 'Formulaire de contact intégré pour que vos visiteurs puissent facilement vous joindre', 'Mise en ligne du contenu initial (textes et images fournis par le client)'],
    plus: ['Maintenance basique pendant 3 mois pour corriger les éventuels bugs ou petits ajustements.']
  }, 
  {
    title: "Pro",
    description: "Idéal pour les entreprises souhaitant un site plus complet et interactif, avec des fonctionnalités supplémentaires.",
    price: 1500,
    includes: ['Création d’un site sur mesure de 4 à 6 pages, avec un design personnalisé qui reflète votre image', 'Optimisation pour le référencement afin d’améliorer la visibilité de votre site sur les moteurs de recherche.','Gestion facile du contenu, vous permettant d’ajouter ou de modifier des textes et images vous-même via une interface simple.'],
    plus: ['Support et maintenance pendant 6 mois, incluant des mises à jour et une assistance technique']
  }, 
  {
    title: "Premium",
    description: "Idéal pour les entreprises ou commerces qui ont besoin d’un site complet avec des fonctionnalités avancées.",
    price: 3000,
    includes: ['Création d’un site e-commerce avec un catalogue de produits, panier d’achat et paiement en ligne sécurisé', 'Personnalisation poussée du design avec des animations, des effets visuels et une identité graphique forte', 'Optimisation avancée pour la performance (temps de chargement rapide et fluidité de navigation)', 'Système de gestion des utilisateurs (comptes clients, abonnements, etc.) pour interagir directement avec vos utilisateurs.'],
    plus: ['Formation à l’utilisation du site, pour que vous puissiez gérer votre boutique ou vos contenus en toute autonomie', 'Maintenance et support premium pendant 1 an, avec des mises à jour régulières et une assistance réactive.']
  }, 
];