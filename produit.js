
var produits = [
    {
        id: 1,
        nom: "T-shirt Good",
        categorie: "t-shirt",
        prix: "19,99$",
        description: "Ce T-shirt en coton doux allie confort et modernité pour un look minimaliste parfait au quotidien. Parfait pour ceux qui aiment la simplicité.",
        image: "images/T-shirt1.png"
    },
    {
        id: 2,
        nom: "T-shirt Cool",
        categorie: "t-shirt",
        prix: "17,99$",
        description: "Confortable, résistant et stylé, il te suit partout, que ce soit pour une virée entre amis ou un afterwork chill. Streetwear assumé, attitude garantie.",
        image: "images/T-shirt2.png"
    },
    {
        id: 3,
        nom: "T-shirt La vie est belle",
        categorie: "t-shirt",
        prix: "20,99$",
        description: "T-shirt léger au design inspiré par les grands espaces. Porte-le en ville ou en pleine nature pour un look cool et engagé.",
        image: "images/T-shirt3.png"
    },
    {
        id: 4,
        nom: "T-shirt La vichie",
        categorie: "t-shirt",
        prix: "40,99$",
        description: "Un T-shirt au message fort, coupe moderne et matière agréable à porter. Exprime ta personnalité en toute confiance.",
        image: "images/T-shirt4.png"
    },
    {
        id: 5,
        nom: "Dress Blue",
        categorie: "robe",
        prix: "40,99$",
        description: "Conçue pour allier confort et chic, elle t’accompagne du bureau à la soirée sans fausse note.",
        image: "images/dress1.png"
    },
    {
        id: 6,
        nom: "Pink Dress",
        categorie: "robe",
        prix: "60,99$",
        description: "Coupe aérienne, tissu respirant et motif tendance : elle incarne la fraîcheur estivale avec une touche de glamour.",
        image: "images/dress2.png"
    },
    {
        id: 7,
        nom: "Yellow Dress",
        categorie: "robe",
        prix: "29,99$",
        description: "Brille de mille feux avec cette robe élégante et fluide, parfaite pour les grandes occasions.",
        image: "images/dress3.png"
    },
    {
        id: 8,
        nom: "Roses Dress",
        categorie: "robe",
        prix: "30,99$",
        description: "Inspirée du style bohème, cette robe longue allie confort et liberté avec une touche romantique.",
        image: "images/dress4.png"
    },
    {
        id: 9,
        nom: "Pink Veste",
        categorie: "veste",
        prix: "19,99$",
        description: "Misez sur une allure urbaine affirmée avec cette veste zippée aux lignes modernes. Légère mais structurée.",
        image: "images/veste1.png"
    },
    {
        id: 10,
        nom: "Grey Veste",
        categorie: "veste",
        prix: "50,99$",
        description: "Une veste polyvalente et élégante, parfaite pour toutes occasions.",
        image: "images/veste2.png"
    },
    {
        id: 11,
        nom: "Warmy Veste",
        categorie: "veste",
        prix: "100,99$",
        description: "Chaleureuse et moderne, parfaite pour les saisons froides.",
        image: "images/veste3.png"
    },
    {
        id: 12,
        nom: "Vichy Veste",
        categorie: "veste",
        prix: "200,99$",
        description: "Style affirmé et coupe parfaite pour vos looks urbains.",
        image: "images/veste4.png"
    },
    {
        id: 13,
        nom: "Pink Pants",
        categorie: "pantalon",
        prix: "19,99$",
        description: "Coupe confortable, allure décontractée mais toujours tendance.",
        image: "images/pantalon1.png"
    },
    {
        id: 14,
        nom: "Black Pants",
        categorie: "pantalon",
        prix: "18,99$",
        description: "Tissu stretch, taille haute et finition soignée.",
        image: "images/pantalon2.png"
    },
    {
        id: 15,
        nom: "Blue Pants",
        categorie: "pantalon",
        prix: "17,99$",
        description: "Pensé pour bouger sans perdre en élégance, ce pantalon fluide modernise la silhouette.",
        image: "images/pantalon3.png"
    },
    {
        id: 16,
        nom: "Stret Pants",
        categorie: "pantalon",
        prix: "18,99$",
        description: "Pantalon au style décontracté, coupe droite et tissu doux pour un confort maximal.",
        image: "images/pantalon4.png"
    }
];
// Après votre tableau de produits
if (!localStorage.getItem('stylemode_produits')) {
    localStorage.setItem('stylemode_produits', JSON.stringify(produits));
    
    // Initialisez aussi les catégories si elles n'existent pas
    if (!localStorage.getItem('stylemode_categories')) {
        const categories = ["t-shirt", "robe", "veste", "pantalon"];
        localStorage.setItem('stylemode_categories', JSON.stringify(categories));
    }
}