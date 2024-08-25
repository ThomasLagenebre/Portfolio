export const allPrices: {
    title: string;
    description: string;
    price: number;
    includes: string[];
    plus: string[]
  }[] = [
    {
    title: "Starter",
    description: "Free access for 2 members",
    price: 129,
    includes: ['Complete documentation', 'Working materials in Sketch'],
    plus: ['Integration help', '40GB Cloud storage', 'Support team full assist']
  }, 
  {
    title: "Premium",
    description: "Free access for 30 members",
    price: 299,
    includes: ['Complete documentation', 'Working materials in Sketch','Integration help', '40GB Cloud storage' ],
    plus: ['Support team full assist']
  }, 
  {
    title: "Company",
    description: "Free access for 200 members",
    price: 399,
    includes: ['Complete documentation', 'Working materials in Sketch', 'Integration help', '40GB Cloud storage', 'Support team full assist'],
    plus: []
  }, 
];