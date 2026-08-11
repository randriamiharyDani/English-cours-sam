export type Course = {
  id: number;
  title: string;
  category: string;
  categoryLabel: string;
  level: string;
  duration: string;
  price: number;
  image: string;
  description: string;
  status: 'published' | 'draft';
  students: number;
  rating: number;
  createdAt: string;
};

export type Lesson = {
  id: number;
  courseId: number;
  courseTitle: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  order: number;
  status: 'published' | 'draft';
  resources: string[];
};

export type Video = {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  category: string;
  duration: string;
  views: number;
  status: 'published' | 'draft';
  createdAt: string;
};

export type Photo = {
  id: number;
  album: string;
  url: string;
  thumbnail: string;
  alt: string;
  category: string;
  createdAt: string;
};

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  status: 'published' | 'draft';
  publishedAt: string;
  views: number;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
  status: 'published' | 'draft';
  createdAt: string;
};

export type Message = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'read' | 'unread';
  createdAt: string;
};

export type Stats = {
  courses: number;
  lessons: number;
  videos: number;
  photos: number;
  articles: number;
  testimonials: number;
  messages: number;
  students: number;
};

const mockCourses: Course[] = [
  { id: 1, title: "Conversation du quotidien", category: "conversation", categoryLabel: "Conversation", level: "A1–B1", duration: "8 sem.", price: 45000, image: "https://picsum.photos/id/1/500/320", description: "Prenez confiance à l'oral dans les situations de tous les jours.", status: "published", students: 45, rating: 4.8, createdAt: "2024-01-15" },
  { id: 2, title: "Club de conversation avancé", category: "conversation", categoryLabel: "Conversation", level: "B2–C1", duration: "En continu", price: 35000, image: "https://picsum.photos/id/20/500/320", description: "Sessions hebdomadaires de discussion libre entre étudiants avancés.", status: "published", students: 32, rating: 4.9, createdAt: "2024-02-01" },
  { id: 3, title: "Anglais des voyages", category: "conversation", categoryLabel: "Conversation", level: "A1–A2", duration: "4 sem.", price: 29000, image: "https://picsum.photos/id/1015/500/320", description: "Le vocabulaire et les réflexes essentiels pour voyager sereinement.", status: "published", students: 28, rating: 4.7, createdAt: "2024-02-10" },
  { id: 4, title: "Business English essentiel", category: "business", categoryLabel: "Business", level: "B1–B2", duration: "10 sem.", price: 79000, image: "https://picsum.photos/id/3/500/320", description: "Emails, réunions et présentations professionnelles en anglais.", status: "published", students: 38, rating: 4.9, createdAt: "2024-01-20" },
  { id: 5, title: "Négociation & pitch", category: "business", categoryLabel: "Business", level: "B2–C1", duration: "6 sem.", price: 95000, image: "https://picsum.photos/id/119/500/320", description: "Convainquez et négociez avec assurance face à un public anglophone.", status: "draft", students: 0, rating: 0, createdAt: "2024-03-01" },
  { id: 6, title: "Anglais pour entretiens", category: "business", categoryLabel: "Business", level: "B1–C1", duration: "3 sem.", price: 59000, image: "https://picsum.photos/id/180/500/320", description: "Préparation ciblée aux entretiens d'embauche en anglais.", status: "published", students: 22, rating: 4.6, createdAt: "2024-02-15" },
];

const mockLessons: Lesson[] = [
  { id: 1, courseId: 1, courseTitle: "Conversation du quotidien", title: "Introduction et présentations", description: "Apprenez à vous présenter en anglais", videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "15:30", order: 1, status: "published", resources: ["pdf", "audio"] },
  { id: 2, courseId: 1, courseTitle: "Conversation du quotidien", title: "Au restaurant", description: "Commander et discuter au restaurant", videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "22:45", order: 2, status: "published", resources: ["pdf"] },
  { id: 3, courseId: 4, courseTitle: "Business English essentiel", title: "Écrire un email professionnel", description: "Structure et vocabulaire essentiel", videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "18:20", order: 1, status: "published", resources: ["pdf", "template"] },
  { id: 4, courseId: 4, courseTitle: "Business English essentiel", title: "Réunion en anglais", description: "Participer et animer une réunion", videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: "25:10", order: 2, status: "draft", resources: ["pdf"] },
];

const mockVideos: Video[] = [
  { id: 1, title: "Comment améliorer votre prononciation", description: "Astuces pour une prononciation parfaite", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", thumbnail: "https://picsum.photos/id/1/400/225", category: "Tutoriel", duration: "12:30", views: 1250, status: "published", createdAt: "2024-01-10" },
  { id: 2, title: "Les 10 phrases essentielles en voyage", description: "Phrases à connaître absolument", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", thumbnail: "https://picsum.photos/id/20/400/225", category: "Voyage", duration: "8:45", views: 890, status: "published", createdAt: "2024-02-05" },
  { id: 3, title: "Business English : les erreurs à éviter", description: "Erreurs courantes en milieu professionnel", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", thumbnail: "https://picsum.photos/id/3/400/225", category: "Business", duration: "15:20", views: 650, status: "published", createdAt: "2024-02-20" },
];

const mockPhotos: Photo[] = [
  { id: 1, album: "Cours en groupe", url: "/assets-old/img/image2.jpg", thumbnail: "/assets-old/img/image2.jpg", alt: "Cours en groupe", category: "Cours", createdAt: "2024-01-15" },
  { id: 2, album: "Cours en groupe", url: "/assets-old/img/image2.jpg", thumbnail: "/assets-old/img/image3.jpg", alt: "Club de conversation", category: "Cours", createdAt: "2024-01-20" },
  { id: 3, album: "Événements", url: "/assets-old/img/image2.jpg", thumbnail: "/assets-old/img/image4.jpg", alt: "Remise de certificats", category: "Événement", createdAt: "2024-02-10" },
  { id: 4, album: "Événements", url: "/assets-old/img/image2.jpg", thumbnail: "/assets-old/img/image5.jpg", alt: "Workshop", category: "Événement", createdAt: "2024-02-15" },
];

const mockBlogPosts: BlogPost[] = [
  { id: 1, title: "5 astuces pour parler anglais sans stress", excerpt: "Découvrez comment surmonter votre peur de parler anglais", content: "Contenu complet de l'article...", image: "https://picsum.photos/id/1/800/400", category: "Conseils", author: "Mr Sam", status: "published", publishedAt: "2024-02-01", views: 450 },
  { id: 2, title: "TOEFL vs IELTS : lequel choisir ?", excerpt: "Comparatif détaillé des deux certifications", content: "Contenu complet de l'article...", image: "https://picsum.photos/id/20/800/400", category: "Certifications", author: "Mr Sam", status: "published", publishedAt: "2024-02-10", views: 320 },
  { id: 3, title: "Apprendre l'anglais avec des séries", excerpt: "Méthode efficace pour apprendre en s'amusant", content: "Contenu complet de l'article...", image: "https://picsum.photos/id/3/800/400", category: "Méthodes", author: "Mr Sam", status: "draft", publishedAt: "", views: 0 },
];

const mockTestimonials: Testimonial[] = [
  { id: 1, name: "Mia Rakotobe", role: "Étudiante", image: "https://i.pravatar.cc/150?img=32", text: "En trois mois avec Mr Sam, j'ai enfin osé parler en réunion. Sa méthode axée sur la pratique change tout.", rating: 5, status: "published", createdAt: "2024-01-20" },
  { id: 2, name: "Jean Andria", role: "Entrepreneur", image: "https://i.pravatar.cc/150?img=47", text: "Les cours de business English m'ont permis de décrocher un contrat international. Merci Mr Sam !", rating: 5, status: "published", createdAt: "2024-02-05" },
  { id: 3, name: "Sophie R.", role: "Professeure", image: "https://i.pravatar.cc/150?img=15", text: "Mr Sam est patient, pédagogique et vraiment passionné. Je recommande à 100%.", rating: 5, status: "published", createdAt: "2024-02-15" },
];

const mockMessages: Message[] = [
  { id: 1, name: "Lucas M.", email: "lucas@example.com", subject: "Demande d'informations", message: "Bonjour, je souhaite des informations sur vos cours de conversation...", status: "unread", createdAt: "2024-03-10 14:30" },
  { id: 2, name: "Emma L.", email: "emma@example.com", subject: "Inscription cours Business", message: "Bonjour, je veux m'inscrire au cours de Business English...", status: "read", createdAt: "2024-03-09 10:15" },
  { id: 3, name: "Thomas R.", email: "thomas@example.com", subject: "Question sur les tarifs", message: "Bonjour, avez-vous des tarifs pour les cours en groupe ?", status: "unread", createdAt: "2024-03-08 16:45" },
];

export const api = {
  getCourses: async (): Promise<Course[]> => Promise.resolve(mockCourses),

  getCourse: async (id: number): Promise<Course | undefined> => Promise.resolve(mockCourses.find(c => c.id === id)),

  createCourse: async (course: Omit<Course, 'id' | 'createdAt'>): Promise<Course> => {
    const newCourse = { ...course, id: Date.now(), createdAt: new Date().toISOString() };
    mockCourses.push(newCourse);
    return Promise.resolve(newCourse);
  },

  updateCourse: async (id: number, course: Partial<Course>): Promise<Course> => {
    const index = mockCourses.findIndex(c => c.id === id);
    if (index === -1) throw new Error('Course not found');
    mockCourses[index] = { ...mockCourses[index], ...course };
    return Promise.resolve(mockCourses[index]);
  },

  deleteCourse: async (id: number): Promise<void> => {
    const index = mockCourses.findIndex(c => c.id === id);
    if (index !== -1) mockCourses.splice(index, 1);
    return Promise.resolve();
  },


  getLessons: async (): Promise<Lesson[]> => Promise.resolve(mockLessons),
  getLessonsByCourse: async (courseId: number): Promise<Lesson[]> => Promise.resolve(mockLessons.filter(l => l.courseId === courseId)),
  getVideos: async (): Promise<Video[]> => Promise.resolve(mockVideos),
  getPhotos: async (): Promise<Photo[]> => Promise.resolve(mockPhotos),
  getPosts: async (): Promise<BlogPost[]> => Promise.resolve(mockBlogPosts),
  getTestimonials: async (): Promise<Testimonial[]> => Promise.resolve(mockTestimonials),
  getMessages: async (): Promise<Message[]> => Promise.resolve(mockMessages),
  markMessageAsRead: async (id: number): Promise<void> => {
    const message = mockMessages.find(m => m.id === id);
    if (message) message.status = 'read';
    return Promise.resolve();
  },



  getStats: async (): Promise<Stats> => Promise.resolve({
    courses: mockCourses.length,
    lessons: mockLessons.length,
    videos: mockVideos.length,
    photos: mockPhotos.length,
    articles: mockBlogPosts.length,
    testimonials: mockTestimonials.length,
    messages: mockMessages.filter(m => m.status === 'unread').length,
    students: 320,
  }),
};
