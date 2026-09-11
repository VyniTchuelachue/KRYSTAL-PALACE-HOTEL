export const hotel = {
  name: 'Krystal Palace Douala',
  shortName: 'Krystal Palace',
  category: 'Hôtel 5 Étoiles',
  tagline: 'Pour toi qui cherche le meilleur au Cameroun',
  address: 'Boulevard de la Liberté, Akwa, Douala, Littoral, BP 3633, Cameroun',
  plusCode: '3M4X+JP Douala',
  phones: ['+237 233 50 68 00', '+237 696 30 39 80', '+237 693 52 27 94'],
  email: 'reservations@krystalpalacedouala.com',
  mapQuery: 'Krystal Palace Douala, Boulevard de la Liberté, Akwa, Douala, Cameroun',
  social: {
    facebook: 'https://www.facebook.com/KrystalPalaceDouala',
    instagram: 'https://www.instagram.com/krystalpalacedouala',
    linkedin: 'https://www.linkedin.com/company/krystal-palace-douala-officiel',
    twitter: 'https://twitter.com/KrystalDouala',
  },
  ratings: {
    google: { score: 4.4, count: 1331 },
    tripadvisor: { score: 4.7, count: 75 },
  },
}

export const navSections = [
  {
    id: 'chambres',
    label: 'Chambres & Suites',
    to: '/chambres',
    cta: { label: 'Explorer toutes les chambres', to: '/chambres' },
    items: [
      { name: 'Chambre Classic', image: '/img/room-01.jpg', to: '/chambres' },
      { name: 'Chambre Premium Plus', image: '/img/room-02.jpg', to: '/chambres' },
      { name: 'Chambre Deluxe', image: '/img/room-03.jpg', to: '/chambres' },
      { name: 'Meugang Suite', image: '/img/room-06.jpg', to: '/chambres' },
      { name: 'Mandela Suite', image: '/img/room-07.jpg', to: '/chambres' },
    ],
  },
  {
    id: 'restauration',
    label: 'Restauration & Bien-être',
    to: '/restauration',
    cta: { label: 'Découvrir la restauration', to: '/restauration' },
    items: [
      { name: 'Restaurant & Cafétéria', image: '/img/dining-canapes.jpg', to: '/restauration' },
      { name: 'Krystal Spa', image: '/img/spa.jpg', to: '/bien-etre' },
      { name: 'Piscine & Terrasse', image: '/img/terrace.jpg', to: '/bien-etre' },
    ],
  },
  {
    id: 'evenements',
    label: 'Événements',
    to: '/evenements',
    cta: { label: 'Organiser un événement', to: '/evenements' },
    items: [
      { name: 'Mariages', image: '/img/wedding.jpg', to: '/evenements' },
      { name: 'Séminaires & Réceptions', image: '/img/event-dinner.jpg', to: '/evenements' },
      { name: 'Espace Enfants', image: '/img/kids.jpg', to: '/evenements' },
    ],
  },
  {
    id: 'hotel',
    label: 'Notre Hôtel',
    to: '/notre-hotel',
    cta: { label: 'En savoir plus sur nous', to: '/notre-hotel' },
    items: [
      { name: 'Notre histoire', image: '/img/african-decor.jpg', to: '/notre-hotel' },
      { name: 'Douala & ses environs', image: '/img/lounge-sunset.jpg', to: '/emplacement' },
      { name: 'Galerie photos', image: '/img/lobby-1.jpg', to: '/galerie' },
    ],
  },
]

export const simpleLinks = [
  { label: 'Offres', to: '/offres' },
  { label: 'Avis clients', to: '/avis' },
  { label: 'Emplacement', to: '/emplacement' },
  { label: 'Contact', to: '/contact' },
]

export const featuredRooms = [
  {
    name: 'Twin Room',
    surface: '30 m²',
    capacity: '2 pers.',
    image: '/img/room-twin.jpg',
    description: 'Deux lits confortables dans un décor épuré, idéal pour les voyages entre collègues ou amis.',
  },
  {
    name: 'Classic Room',
    surface: '30 m²',
    capacity: '2 pers.',
    image: '/img/room-01.jpg',
    description: "L'élégance intemporelle du Krystal Palace, rehaussée de touches artistiques africaines.",
  },
  {
    name: 'Premium Room',
    surface: '30 m²',
    capacity: '2 pers.',
    image: '/img/room-view.jpg',
    description: 'Une chambre lumineuse avec vue dégagée sur les toits d’Akwa.',
  },
  {
    name: 'Premium Plus Room',
    surface: '30 m²',
    capacity: '2 pers.',
    image: '/img/room-02.jpg',
    description: 'Un cran au-dessus, avec des finitions et un mobilier soigneusement sélectionnés.',
  },
  {
    name: 'Deluxe Room',
    surface: '30 m²',
    capacity: '2 pers.',
    image: '/img/room-03.jpg',
    description: 'Balcon privé, douche à l’italienne et vue sur la ville pour un séjour tout confort.',
  },
  {
    name: 'Deluxe Plus Room',
    surface: '30 m²',
    capacity: '2 pers.',
    image: '/img/room-04.jpg',
    description: 'Une ambiance feutrée aux tons profonds, pensée pour le repos absolu.',
  },
  {
    name: 'Executive Suite',
    surface: '65 m²',
    capacity: '2 pers.',
    image: '/img/room-05.jpg',
    description: 'Salle de bain vitrée, espace salon séparé : le raffinement à l’état pur.',
  },
  {
    name: 'Meugang Suite',
    surface: '110 m²',
    capacity: '2 pers.',
    image: '/img/room-06.jpg',
    description: 'Une suite spacieuse nommée en hommage à une icône culturelle africaine.',
  },
  {
    name: 'Mandela Suite',
    surface: '160 m²',
    capacity: '2 pers.',
    image: '/img/room-07.jpg',
    description: 'Notre suite signature, la plus vaste de l’hôtel, pour une expérience présidentielle.',
  },
]

export const allRoomCategories = [
  { name: 'Twin Room', surface: '30 m²', capacity: '2 pers.' },
  { name: 'Classic Room', surface: '30 m²', capacity: '2 pers.' },
  { name: 'Classic Room – Accessible (PMR)', surface: '30 m²', capacity: '2 pers.' },
  { name: 'Premium Room', surface: '30 m²', capacity: '2 pers.' },
  { name: 'Premium Plus Room', surface: '30 m²', capacity: '2 pers.' },
  { name: 'Deluxe Room', surface: '30 m²', capacity: '2 pers.' },
  { name: 'Deluxe Plus Room', surface: '30 m²', capacity: '2 pers.' },
  { name: 'Executive Room', surface: '45 m²', capacity: '2 pers.' },
  { name: 'Executive Suite', surface: '65 m²', capacity: '2 pers.' },
  { name: 'Prestige Suite', surface: '65 m²', capacity: '2 pers.' },
  { name: 'Meugang Suite', surface: '110 m²', capacity: '2 pers.' },
  { name: 'Mandela Suite', surface: '160 m²', capacity: '2 pers.' },
]

export const sectionPreviews = [
  {
    id: 'chambres',
    label: 'Chambres & Suites',
    copy: '12 catégories, des chambres Twin aux suites signature Mandela et Meugang.',
    image: '/img/preview-chambres.jpg',
    to: '/chambres',
  },
  {
    id: 'restauration',
    label: 'Restauration',
    copy: 'Restaurant, cafétéria et room service au cœur du quartier des affaires.',
    image: '/img/preview-restauration.jpg',
    to: '/restauration',
  },
  {
    id: 'bien-etre',
    label: 'Bien-être',
    copy: 'Krystal Spa, piscine sur le toit et vue sur le fleuve Wouri.',
    image: '/img/preview-bien-etre.jpg',
    to: '/bien-etre',
  },
  {
    id: 'evenements',
    label: 'Événements',
    copy: 'Mariages, séminaires et réceptions privées dans un cadre d’exception.',
    image: '/img/preview-evenements.jpg',
    to: '/evenements',
  },
]

export const galleryImages = [
  { src: '/img/hero-background.jpg', alt: 'Hall d’accueil du Krystal Palace Douala' },
  { src: '/img/hero-pool.jpg', alt: 'Piscine sur le toit du Krystal Palace' },
  { src: '/img/lobby-1.jpg', alt: 'Lobby du Krystal Palace Douala' },
  { src: '/img/lobby-2.jpg', alt: 'Réception fleurie du hall' },
  { src: '/img/entrance-night.jpg', alt: 'Entrée de nuit du Krystal Palace' },
  { src: '/img/room-05.jpg', alt: 'Executive Suite avec salle de bain vitrée' },
  { src: '/img/terrace.jpg', alt: 'Terrasse au coucher du soleil' },
  { src: '/img/lounge-sunset.jpg', alt: 'Salon panoramique au coucher du soleil sur le Wouri' },
  { src: '/img/wedding.jpg', alt: 'Cérémonie de mariage au bord de la piscine' },
  { src: '/img/dining-canapes.jpg', alt: 'Canapés gastronomiques du Krystal Palace' },
  { src: '/img/spa.jpg', alt: 'Salon du Krystal Spa' },
  { src: '/img/kids.jpg', alt: 'Espace des enfants' },
  { src: '/img/african-decor.jpg', alt: 'Décor aux touches africaines' },
]

export const testimonial = {
  quote:
    'Très bel hôtel. Accueil et personnel très gentil, souriant, serviable. Chambre très propre. Cafétéria : plein de bonnes choses à découvrir.',
  author: 'marieanne65',
  source: 'Tripadvisor',
}

export const nearby = [
  { label: "Aéroport International de Douala", distance: '10 km · env. 20 min' },
  { label: "Musée Doual'art", distance: '3 km' },
  { label: 'Quartier des affaires d’Akwa', distance: 'Sur place' },
]
