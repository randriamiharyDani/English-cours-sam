export type Course = {
  title: string;
  cat: string;
  catLabel: string;
  level: string;
  duration: string;
  price: string;
  img: string;
  desc: string;
};

export const courses: Course[] = [
  { title: "Conversation du quotidien", cat: "conversation", catLabel: "Conversation", level: "A1–B1", duration: "8 sem.", price: "$45", img: "https://picsum.photos/id/1/500/320", desc: "Prenez confiance à l'oral dans les situations de tous les jours." },
  { title: "Club de conversation avancé", cat: "conversation", catLabel: "Conversation", level: "B2–C1", duration: "En continu", price: "$35", img: "https://picsum.photos/id/20/500/320", desc: "Sessions hebdomadaires de discussion libre entre étudiants avancés." },
  { title: "Anglais des voyages", cat: "conversation", catLabel: "Conversation", level: "A1–A2", duration: "4 sem.", price: "$29", img: "https://picsum.photos/id/1015/500/320", desc: "Le vocabulaire et les réflexes essentiels pour voyager sereinement." },
  { title: "Business English essentiel", cat: "business", catLabel: "Business", level: "B1–B2", duration: "10 sem.", price: "$79", img: "https://picsum.photos/id/3/500/320", desc: "Emails, réunions et présentations professionnelles en anglais." },
  { title: "Négociation & pitch", cat: "business", catLabel: "Business", level: "B2–C1", duration: "6 sem.", price: "$95", img: "https://picsum.photos/id/119/500/320", desc: "Convainquez et négociez avec assurance face à un public anglophone." },
  { title: "Anglais pour entretiens", cat: "business", catLabel: "Business", level: "B1–C1", duration: "3 sem.", price: "$59", img: "https://picsum.photos/id/180/500/320", desc: "Préparation ciblée aux entretiens d'embauche en anglais." },
  { title: "Préparation IELTS", cat: "exam", catLabel: "Examens", level: "B2–C1", duration: "12 sem.", price: "$120", img: "https://picsum.photos/id/24/500/320", desc: "Stratégies et entraînement intensif pour viser le score visé." },
  { title: "Préparation TOEFL iBT", cat: "exam", catLabel: "Examens", level: "B2–C1", duration: "12 sem.", price: "$120", img: "https://picsum.photos/id/26/500/320", desc: "Méthodologie complète pour les 4 épreuves du TOEFL." },
  { title: "Cambridge First (B2)", cat: "exam", catLabel: "Examens", level: "B2", duration: "10 sem.", price: "$99", img: "https://picsum.photos/id/28/500/320", desc: "Préparation ciblée à la certification Cambridge B2 First." },
  { title: "English for Kids (8–12 ans)", cat: "kids", catLabel: "Enfants", level: "Débutant", duration: "En continu", price: "$25", img: "https://picsum.photos/id/1027/500/320", desc: "Apprentissage ludique par le jeu, les chansons et le storytelling." },
  { title: "English for Teens (13–17 ans)", cat: "kids", catLabel: "Ados", level: "A2–B2", duration: "En continu", price: "$29", img: "https://picsum.photos/id/1062/500/320", desc: "Un format dynamique pensé pour les adolescents et leurs objectifs scolaires." },
  { title: "Préparation Cambridge Kids", cat: "kids", catLabel: "Enfants", level: "A1–A2", duration: "8 sem.", price: "$45", img: "https://picsum.photos/id/1074/500/320", desc: "Initiation ludique aux certifications Cambridge pour jeunes apprenants." },
];

export const courseFilters = [
  { value: "all", label: "Toutes" },
  { value: "conversation", label: "Conversation" },
  { value: "business", label: "Business English" },
  { value: "exam", label: "Préparation examens" },
  { value: "kids", label: "Enfants & ados" },
];

export type Testimonial = {
  text: string;
  name: string;
  role: string;
  img: string;
};

export const testimonials: Testimonial[] = [
  { text: "En trois mois avec Mr Sam, j'ai enfin osé parler en réunion. Sa méthode axée sur la pratique change tout.", name: "Mialy R.", role: "Responsable marketing", img: "https://i.pravatar.cc/100?img=12" },
  { text: "J'ai obtenu mon IELTS 7.5 après seulement quatre mois de préparation intensive. Un accompagnement remarquable.", name: "Tojo A.", role: "Étudiant en médecine", img: "https://i.pravatar.cc/100?img=23" },
  { text: "Les cours pour mon fils de 10 ans sont ludiques et efficaces. Il réclame ses leçons chaque semaine !", name: "Hanta L.", role: "Parent d'élève", img: "https://i.pravatar.cc/100?img=33" },
  { text: "Une approche humaine et exigeante à la fois. Je négocie désormais mes contrats en anglais sans stress.", name: "Fara N.", role: "Entrepreneure", img: "https://i.pravatar.cc/100?img=41" },
  { text: "Le meilleur investissement de mon année. Mr Sam sait exactement où sont nos blocages et comment les lever.", name: "Nomena V.", role: "Ingénieur logiciel", img: "https://i.pravatar.cc/100?img=56" },
];

export type Faq = { question: string; answer: string };

export const faqItems: Faq[] = [
  { question: "Dois-je avoir un niveau minimum pour commencer ?", answer: "Non. Les cours sont ouverts aux grands débutants comme aux niveaux avancés. Un test de positionnement gratuit détermine votre point de départ exact." },
  { question: "Les cours ont-ils lieu en présentiel ou en ligne ?", answer: "Les deux formats sont proposés : cours en présentiel à Antananarivo et cours en ligne en visioconférence, avec le même niveau d'exigence pédagogique." },
  { question: "Combien de temps pour progresser réellement ?", answer: "La plupart des étudiants constatent une nette amélioration de leur aisance orale après 8 à 12 semaines de pratique régulière (2 séances/semaine)." },
  { question: "Proposez-vous des cours pour enfants ?", answer: "Oui, dès 8 ans, avec une pédagogie ludique adaptée : jeux de rôle, chansons, storytelling et activités interactives." },
  { question: "Puis-je annuler ou modifier mon abonnement ?", answer: "Oui, sans engagement de durée. Vous pouvez suspendre, changer de formule ou annuler à tout moment depuis votre espace personnel." },
  { question: "Comment se déroule le premier cours d'essai ?", answer: "Une session de 30 minutes gratuite avec Mr Sam pour évaluer votre niveau, comprendre vos objectifs et définir un plan de progression personnalisé." },
];

export type BlogPost = {
  date: string;
  title: string;
  desc: string;
  img: string;
};

export const blogPosts: BlogPost[] = [
  { date: "12 Juillet 2026", title: "5 astuces pour parler anglais sans stress", desc: "Des méthodes concrètes pour dépasser la peur de faire des erreurs à l'oral.", img: "https://picsum.photos/id/60/500/320" },
  { date: "2 Juillet 2026", title: "TOEFL vs IELTS : lequel choisir ?", desc: "Comparatif complet pour choisir la certification adaptée à votre projet.", img: "https://picsum.photos/id/48/500/320" },
  { date: "21 Juin 2026", title: "Apprendre l'anglais avec des séries : le guide", desc: "Comment transformer votre temps de détente en pratique linguistique efficace.", img: "https://picsum.photos/id/96/500/320" },
];

export type GalleryItem = {
  img: string;
  alt: string;
  caption: string;
  big?: boolean;
  full?: string;
  video?: string;
};

export const galleryItems: GalleryItem[] = [
  { img: "https://picsum.photos/id/1074/600/600", alt: "Atelier de conversation en groupe", caption: "Atelier de conversation", big: true, full: "https://picsum.photos/id/1074/1200/1200" },
  { img: "https://picsum.photos/id/1062/400/400", alt: "Session individuelle avec un étudiant", caption: "Coaching individuel", full: "https://picsum.photos/id/1062/800/800" },
  { img: "https://picsum.photos/id/1076/400/400", alt: "Extrait vidéo d'un cours", caption: "Extrait de cours (vidéo)", video: "dQw4w9WgXcQ" },
  { img: "https://picsum.photos/id/180/400/400", alt: "Séance de préparation aux certifications", caption: "Préparation examens", full: "https://picsum.photos/id/180/800/800" },
  { img: "https://picsum.photos/id/1005/400/400", alt: "Portrait de Mr Sam en salle de classe", caption: "Mr Sam", full: "https://picsum.photos/id/1005/800/800" },
  { img: "https://picsum.photos/id/1011/400/400", alt: "Club de conversation hebdomadaire", caption: "Club de conversation", full: "https://picsum.photos/id/1011/800/800" },
  { img: "https://picsum.photos/id/1027/400/400", alt: "Cérémonie de remise de certificats", caption: "Remise de certificats", full: "https://picsum.photos/id/1027/800/800" },
];

export const searchIndex = [
  { title: "Conversation courante", cat: "Formation", href: "#courses" },
  { title: "Business English", cat: "Formation", href: "#courses" },
  { title: "Préparation TOEFL / IELTS", cat: "Formation", href: "#courses" },
  { title: "Cours enfants & ados", cat: "Formation", href: "#courses" },
  { title: "Niveau débutant (A1–A2)", cat: "Niveau", href: "#levels" },
  { title: "Niveau intermédiaire (B1–B2)", cat: "Niveau", href: "#levels" },
  { title: "Niveau avancé (C1–C2)", cat: "Niveau", href: "#levels" },
  { title: "La méthode S.P.E.A.K", cat: "Méthode", href: "#method" },
  { title: "Tarifs et formules", cat: "Tarifs", href: "#pricing" },
  { title: "Formulaire d'inscription", cat: "Inscription", href: "#register" },
  { title: "Nous contacter", cat: "Contact", href: "#contact" },
  { title: "Foire aux questions", cat: "FAQ", href: "#faq" },
  { title: "5 astuces pour parler anglais sans stress", cat: "Blog", href: "#blog" },
  { title: "TOEFL vs IELTS : lequel choisir ?", cat: "Blog", href: "#blog" },
  { title: "Apprendre l'anglais avec des séries", cat: "Blog", href: "#blog" },
  { title: "À propos de Mr Sam", cat: "À propos", href: "#about" },
];

export const heroSlides = [
  { img: "/img/image4.jpg", alt: "Mr Sam animant un cours d'anglais en groupe", caption: "Cours en groupe", sub: "Ambiance conviviale, pratique active" },
  { img: "/img/image5.jpg", alt: "Séance individuelle de conversation en anglais", caption: "Coaching individuel", sub: "Un accompagnement 100% personnalisé" },
  { img: "/img/image3.jpg", alt: "Atelier de préparation aux certifications d'anglais", caption: "Préparation certifications", sub: "TOEFL, IELTS, Cambridge" },
];

export type PricingPlan = {
  name: string;
  desc: string;
  monthly: number;
  yearly: number;
  featured?: boolean;
  features: string[];
  cta: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Essentiel",
    desc: "Pour démarrer à votre rythme",
    monthly: 45000,
    yearly: 38000,
    features: [
      "2 cours en groupe / semaine",
      "Accès aux vidéos de base",
      "Suivi mensuel",
    ],
    cta: "Choisir Essentiel",
  },
  {
    name: "Immersion",
    desc: "Le format le plus efficace",
    monthly: 89000,
    yearly: 76000,
    featured: true,
    features: [
      "1 cours individuel + 2 en groupe",
      "Accès complet à la vidéothèque",
      "Club de conversation hebdo",
      "Suivi personnalisé",
    ],
    cta: "Choisir Immersion",
  },
  {
    name: "Sur-mesure",
    desc: "Coaching 100% individuel",
    monthly: 150000,
    yearly: 128000,
    features: [
      "4 cours individuels / semaine",
      "Programme 100% personnalisé",
      "Préparation certification incluse",
      "Disponibilité prioritaire",
    ],
    cta: "Choisir Sur-mesure",
  },
];

export const stats = [
  { count: 320, suffix: "+", label: "Étudiants formés" },
  { count: 12, suffix: " ans", label: "D'expérience" },
  { count: 98, suffix: "%", label: "Taux de satisfaction" },
  { count: 45, suffix: "+", label: "Formations disponibles" },
];
