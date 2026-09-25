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
      { name: 'Piscine & Terrasse', image: '/img/pool-loungers.jpg', to: '/bien-etre' },
      { name: 'Sport & Fitness', image: '/img/fitness-class.jpg', to: '/bien-etre' },
    ],
  },
  {
    id: 'evenements',
    label: 'Événements',
    to: '/evenements',
    cta: { label: 'Organiser un événement', to: '/evenements' },
    items: [
      { name: 'Mariages', image: '/img/event-wedding-table.jpg', to: '/evenements' },
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
      { name: 'Notre histoire', image: '/img/night-exterior.jpg', to: '/notre-hotel' },
      { name: 'Douala & ses environs', image: '/img/lounge-sunset.jpg', to: '/emplacement' },
      { name: 'Galerie photos', image: '/img/lobby-1.jpg', to: '/galerie' },
    ],
  },
]

export const simpleLinks = [
  { label: 'Expériences', to: '/experiences' },
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

export const amenityHighlights = [
  { icon: 'bed', label: 'Chambres & Suites élégantes' },
  { icon: 'fork', label: 'Restaurant gastronomique' },
  { icon: 'leaf', label: 'Spa & bien-être de classe mondiale' },
  { icon: 'dumbbell', label: 'Salle de sport moderne' },
  { icon: 'pool', label: 'Piscine extérieure avec terrasse' },
  { icon: 'car', label: 'Parking sécurisé et navette' },
]

export const homeFeatures = [
  {
    id: 'chambres',
    eyebrow: 'Nos chambres & suites',
    title: 'Un confort pensé pour vous',
    description:
      'Des chambres spacieuses et élégamment décorées, alliant confort moderne et touche d’élégance africaine.',
    cta: { label: 'Voir toutes les chambres', to: '/chambres' },
    images: [
      { src: '/img/room-suite-attends.jpg', alt: 'Chambre du Krystal Palace Douala' },
      { src: '/img/room-02.jpg', alt: 'Chambre Premium Plus' },
      { src: '/img/room-03.jpg', alt: 'Chambre Deluxe' },
      { src: '/img/room-05.jpg', alt: 'Executive Suite avec salle de bain vitrée' },
    ],
    imageSide: 'right',
    dark: false,
  },
  {
    id: 'restauration',
    eyebrow: 'Restaurant & Bar',
    title: 'Une cuisine qui éveille les sens',
    description:
      'Découvrez une gastronomie raffinée mêlant saveurs locales et internationales dans un cadre élégant et chaleureux.',
    cta: { label: 'Découvrir notre restaurant', to: '/restauration' },
    images: [{ src: '/img/dining-inspire.jpg', alt: 'Assiette gastronomique du restaurant' }],
    imageSide: 'left',
    dark: true,
  },
  {
    id: 'bien-etre',
    eyebrow: 'Bien-être & détente',
    title: 'Un espace pour se ressourcer',
    description:
      'Profitez de notre piscine, de notre spa, de notre salle de sport et de nos soins sur mesure pour un moment de pure relaxation.',
    cta: { label: 'Découvrir nos espaces bien-être', to: '/bien-etre' },
    images: [{ src: '/img/pool-loungers.jpg', alt: 'Transats au bord de la piscine' }],
    imageSide: 'right',
    dark: false,
  },
  {
    id: 'evenements',
    eyebrow: 'Événements',
    title: 'Des lieux d’exception pour vos moments importants',
    description:
      'Mariages, réceptions privées, séminaires ou conférences, nos espaces s’adaptent à toutes vos exigences.',
    cta: { label: 'Nos salles & événements', to: '/evenements' },
    images: [{ src: '/img/event-hall-gold.jpg', alt: 'Salle de réception aménagée pour un événement' }],
    imageSide: 'left',
    dark: false,
  },
]

export const footerLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'Chambres', to: '/chambres' },
  { label: 'Restaurant', to: '/restauration' },
  { label: 'Spa & bien-être', to: '/bien-etre' },
  { label: 'Événements', to: '/evenements' },
  { label: 'Galerie', to: '/galerie' },
  { label: 'À propos', to: '/notre-hotel' },
  { label: 'Contact', to: '/contact' },
]

export const legalLinks = ['Mentions légales', 'Politique de confidentialité', 'Plan du site']

export const galleryCategories = ['Tout', 'Chambres', 'Restaurant', 'Piscine & Spa', 'Événements', 'Extérieurs']

export const galleryImages = [
  { src: '/img/night-exterior.jpg', alt: 'Façade du Krystal Palace Douala de nuit, vue aérienne', category: 'Extérieurs' },
  { src: '/img/room-suite-attends.jpg', alt: 'Chambre du Krystal Palace Douala', category: 'Chambres' },
  { src: '/img/hero-pool.jpg', alt: 'Piscine sur le toit du Krystal Palace', category: 'Piscine & Spa' },
  { src: '/img/fitness-class.jpg', alt: 'Cours de fitness collectif sur le toit', category: 'Piscine & Spa' },
  { src: '/img/dining-inspire.jpg', alt: 'Assiette gastronomique du restaurant', category: 'Restaurant' },
  { src: '/img/event-hall-gold.jpg', alt: 'Salle de réception aménagée pour un mariage', category: 'Événements' },
  { src: '/img/spa-equilibre.jpg', alt: 'Soin relaxant au Krystal Spa', category: 'Piscine & Spa' },
  { src: '/img/dining-canapes.jpg', alt: 'Canapés gastronomiques du Krystal Palace', category: 'Restaurant' },
  { src: '/img/exterior-day.jpg', alt: 'Façade du Krystal Palace Douala de jour', category: 'Extérieurs' },
  { src: '/img/hero-background.jpg', alt: 'Hall d’accueil du Krystal Palace Douala' },
  { src: '/img/pool-loungers.jpg', alt: 'Transats au bord de la piscine', category: 'Piscine & Spa' },
  { src: '/img/room-02.jpg', alt: 'Chambre Premium Plus', category: 'Chambres' },
  { src: '/img/room-03.jpg', alt: 'Chambre Deluxe', category: 'Chambres' },
  { src: '/img/room-05.jpg', alt: 'Executive Suite avec salle de bain vitrée', category: 'Chambres' },
  { src: '/img/lobby-1.jpg', alt: 'Lobby du Krystal Palace Douala' },
  { src: '/img/lobby-2.jpg', alt: 'Réception fleurie du hall' },
  { src: '/img/entrance-night.jpg', alt: 'Entrée de nuit du Krystal Palace', category: 'Extérieurs' },
  { src: '/img/terrace.jpg', alt: 'Terrasse au coucher du soleil', category: 'Extérieurs' },
  { src: '/img/lounge-sunset.jpg', alt: 'Salon panoramique au coucher du soleil sur le Wouri' },
  { src: '/img/event-wedding-table.jpg', alt: 'Table de mariage dressée au Krystal Palace', category: 'Événements' },
  { src: '/img/event-hall-pink.jpg', alt: 'Salle de réception thème rose et blanc', category: 'Événements' },
  { src: '/img/spa.jpg', alt: 'Salon du Krystal Spa', category: 'Piscine & Spa' },
  { src: '/img/kids.jpg', alt: 'Espace des enfants' },
  { src: '/img/african-decor.jpg', alt: 'Décor aux touches africaines' },
]

export const testimonial = {
  quote:
    'Très bel hôtel. Accueil et personnel très gentil, souriant, serviable. Chambre très propre. Cafétéria : plein de bonnes choses à découvrir.',
  author: 'marieanne65',
  source: 'Tripadvisor',
}

export const guestTestimonials = [
  {
    text: 'Notre séjour s’est très bien passé. Un accueil et un service exceptionnels du début à la fin, avec un geste qui nous a agréablement surpris à l’arrivée.',
    name: 'Thérèse Ngo Kwablag',
    role: 'Avis Google · 4/5 · il y a 4 mois',
  },
  {
    text: 'Bel hôtel, personnel adorable et attentionné, chambres impeccables, et une cafétéria pleine de bonnes surprises.',
    name: 'marieanne65',
    role: 'Avis Tripadvisor · 5/5 · il y a 2 mois',
  },
  {
    text: 'Le luxe rencontre l’innovation en plein cœur de Douala. Un hôtel 5 étoiles qui se distingue vraiment par son raffinement.',
    name: 'MamharK',
    role: 'Avis Google · 5/5 · il y a 6 mois',
  },
  {
    text: 'Un hôtel de luxe très chaleureux. Personnel accueillant, respectueux et à l’écoute, dans un établissement très sécurisé.',
    name: 'Yolande Koutou',
    role: 'Avis Google · 5/5 · il y a 7 mois',
  },
  {
    text: 'Sans doute l’un des plus beaux séjours vécus au Cameroun. Le Krystal Palace respire la classe : chambres confortables, petit-déjeuner copieux et personnel très bien formé.',
    name: "'Niyi David",
    role: 'Avis Tripadvisor · il y a 5 mois',
  },
  {
    text: 'Un accueil chaleureux et un personnel aux petits soins du début à la fin. Toute l’équipe s’est surpassée pour rendre notre séjour mémorable.',
    name: 'Yvonne G.',
    role: 'Avis Tripadvisor · il y a 3 mois',
  },
  {
    text: 'Un cadre magnifique pour une journée de travail, un accueil de qualité et une équipe très réactive.',
    name: 'Claudelen M.',
    role: 'Avis Tripadvisor · il y a 8 mois',
  },
  {
    text: 'Notre événement s’est parfaitement déroulé au Krystal Palace. Une expérience exceptionnelle pour nous et nos invités dans leur salle de réception.',
    name: 'Tchoungong Nana L.',
    role: 'Avis Tripadvisor · il y a 9 mois',
  },
  {
    text: 'L’endroit rêvé pour se détendre. Un service attentionné et un personnel d’une grande bienveillance : à visiter sans hésiter.',
    name: 'Motoko Oyong J.',
    role: 'Avis Tripadvisor · il y a 1 an',
  },
  {
    text: 'Un hôtel très propre avec des chambres spacieuses. Personnel toujours souriant et serviable, piscine agréable et rafraîchissante.',
    name: 'M. A.',
    role: 'Avis Tripadvisor · il y a 2 ans',
  },
]

export const experiences = [
  {
    name: 'Séjours Affaires',
    icon: 'briefcase',
    image: '/img/experience-business.jpg',
    copy: "Tout ce qu'il faut pour travailler, se retrouver et séjourner avec élégance.",
    linkLabel: 'Explorer',
  },
  {
    name: 'Escapades Romantiques',
    icon: 'heart',
    image: '/img/experience-romance.jpg',
    copy: 'Suites, vues sur le Wouri et instants privilégiés à deux.',
    linkLabel: 'Découvrir',
  },
  {
    name: 'Célébrations & Groupes',
    icon: 'users',
    image: '/img/experience-celebration.jpg',
    copy: 'Des espaces et une attention particulière pour vos événements.',
    linkLabel: 'Découvrir',
  },
]

export const nearby = [
  { label: "Aéroport International de Douala", distance: '10 km · env. 20 min' },
  { label: "Musée Doual'art", distance: '3 km' },
  { label: 'Quartier des affaires d’Akwa', distance: 'Sur place' },
]
