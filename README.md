# English Cours Sam

Site web de cours d'anglais développé avec **Next.js 16** et **Tailwind CSS**.

## Structure du projet

```
english-cours-sam/
├── app/                        # Application Next.js (App Router)
│   ├── globals.css             # Styles globaux
│   ├── layout.tsx              # Layout principal du site
│   ├── page.tsx                # Page d'accueil
│   └── admin/                  # Interface d'administration
│       ├── layout.tsx          # Layout de l'admin
│       ├── page.tsx            # Dashboard admin
│       ├── components/         # Composants réutilisables de l'admin
│       │   ├── AdminHeader.tsx
│       │   └── Sidebar.tsx
│       ├── blog/               # Gestion des articles de blog
│       ├── courses/            # Gestion des cours
│       ├── dashboard/          # Tableau de bord
│       ├── gallery/            # Gestion de la galerie
│       ├── lessons/            # Gestion des leçons
│       ├── messages/           # Gestion des messages
│       ├── settings/           # Paramètres du site
│       ├── testimonials/       # Gestion des témoignages
│       └── videos/             # Gestion des vidéos
├── component/                  # Composants React du front-office
│   ├── About.tsx
│   ├── Blog.tsx
│   ├── Contact.tsx
│   ├── Courses.tsx
│   ├── data.ts
│   ├── Faq.tsx
│   ├── Footer.tsx
│   ├── formValidate.ts
│   ├── Gallery.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Levels.tsx
│   ├── MapSection.tsx
│   ├── Method.tsx
│   ├── Newsletter.tsx
│   ├── PageLoader.tsx
│   ├── Pricing.tsx
│   ├── Register.tsx
│   ├── Reveal.tsx
│   ├── StatsBar.tsx
│   ├── Testimonials.tsx
│   ├── VideoModal.tsx
│   └── Why.tsx
├── services/                   # Services et API
│   └── api.ts                  # Configuration et utilitaires API
├── public/                     # Fichiers statiques
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   ├── window.svg
│   ├── img/                    # Images du site
│   │   ├── image3.jpg
│   │   ├── image4.jpg
│   │   ├── image5.jpg
│   │   └── image_sam.jpg
│   └── assets-old/             # Anciennes images
│       └── img/
│           ├── image2.jpg
│           ├── image3.jpg
│           ├── image4.jpg
│           ├── image5.jpg
│           ├── image6.jpg
│           ├── image7.jpg
│           ├── image8.jpg
│           ├── image_sam.jpg
│           ├── img_sam.jpg
│           ├── logo.jpg
│           └── Mr_sam.jpg
├── package.json                # Dépendances et scripts
├── next.config.ts              # Configuration Next.js
├── tsconfig.json               # Configuration TypeScript
├── postcss.config.mjs          # Configuration PostCSS
├── eslint.config.mjs           # Configuration ESLint
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
└── next-env.d.ts
```

## Technologies utilisées

- **Next.js 16.3.0** - Framework React
- **React 19.2.8** - Bibliothèque UI
- **TypeScript 5** - Typage statique
- **Tailwind CSS 4** - Framework CSS
- **ESLint 9** - Linting

## Installation

```bash
npm install
```

## Scripts disponibles

```bash
npm run dev      # Lancer le serveur de développement
npm run build    # Construire l'application pour la production
npm run start    # Démarrer l'application en production
npm run lint     # Vérifier le code avec ESLint
```

## Démarrage rapide

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Déploiement

Le projet est déployable sur [Vercel](https://vercel.com) ou tout hébergeur supportant Next.js.

## Architecture backend cible

### Stack
- **Backend** : Laravel 11
- **Base de données** : MySQL 8
- **Admin panel** : Filament v3
- **Stockage média** : Cloudinary ou S3
- **Authentification API** : Laravel Sanctum
- **Frontend** : Next.js 16 + TypeScript + Tailwind CSS 4

### Entités et tables MySQL

#### users
| Champ | Type | Description |
|---|---|---|
| id | bigint PK | Identifiant |
| name | varchar | Nom complet |
| email | varchar unique | Email |
| email_verified_at | nullable timestamp | Vérification email |
| password | varchar | Mot de passe hashé |
| role | enum | admin, teacher, editor |
| avatar | nullable varchar | URL avatar |
| phone | nullable varchar | Téléphone |
| is_active | boolean | Compte actif |
| last_login_at | nullable timestamp | Dernière connexion |
| created_at | timestamp | |
| updated_at | timestamp | |

#### courses
| Champ | Type | Description |
|---|---|---|
| id | bigint PK | |
| title | varchar | Titre |
| slug | varchar unique | Slug SEO |
| category | enum | conversation, business, exam, kids |
| category_label | varchar | Libellé affiché |
| level | varchar | Niveau CECR |
| duration | varchar | Durée |
| price | int | Prix en Ariary |
| image | varchar | URL image |
| description | text | Description complète |
| short_description | nullable varchar | Description courte |
| status | enum | published, draft |
| students_count | int | Nombre d'étudiants |
| rating | decimal | Note moyenne |
| rating_count | int | Nombre de votes |
| published_at | nullable timestamp | Date de publication |
| created_at | timestamp | |
| updated_at | timestamp | |

#### lessons
| Champ | Type | Description |
|---|---|---|
| id | bigint PK | |
| course_id | bigint FK → courses.id | Cours parent |
| title | varchar | Titre de la leçon |
| slug | varchar | Slug SEO |
| description | text | Description |
| video_url | varchar | URL vidéo |
| duration | varchar | Durée |
| order | int | Ordre dans le cours |
| status | enum | published, draft |
| resources | json | Liste des ressources |
| created_at | timestamp | |
| updated_at | timestamp | |

#### videos
| Champ | Type | Description |
|---|---|---|
| id | bigint PK | |
| title | varchar | Titre |
| slug | varchar unique | Slug SEO |
| description | text | Description |
| url | varchar | URL vidéo |
| thumbnail | varchar | URL miniature |
| category | varchar | Catégorie |
| duration | varchar | Durée |
| views | int | Nombre de vues |
| status | enum | published, draft |
| published_at | nullable timestamp | |
| created_at | timestamp | |
| updated_at | timestamp | |

#### photos
| Champ | Type | Description |
|---|---|---|
| id | bigint PK | |
| album | varchar | Nom de l'album |
| url | varchar | URL image originale |
| thumbnail | varchar | URL miniature |
| alt | varchar | Texte alternatif |
| category | varchar | Catégorie |
| sort_order | int | Ordre d'affichage |
| created_at | timestamp | |
| updated_at | timestamp | |

#### blog_posts
| Champ | Type | Description |
|---|---|---|
| id | bigint PK | |
| title | varchar | Titre |
| slug | varchar unique | Slug SEO |
| excerpt | varchar | Extrait |
| content | longtext | Contenu complet |
| image | varchar | URL image |
| category | varchar | Catégorie |
| author | varchar | Auteur |
| status | enum | published, draft |
| published_at | nullable timestamp | Date de publication |
| views | int | Nombre de vues |
| created_at | timestamp | |
| updated_at | timestamp | |

#### testimonials
| Champ | Type | Description |
|---|---|---|
| id | bigint PK | |
| name | varchar | Nom |
| role | varchar | Rôle |
| image | varchar | URL photo |
| text | text | Témoignage |
| rating | tinyint | Note 1-5 |
| status | enum | published, draft |
| created_at | timestamp | |
| updated_at | timestamp | |

#### messages
| Champ | Type | Description |
|---|---|---|
| id | bigint PK | |
| name | varchar | Nom |
| email | varchar | Email |
| phone | nullable varchar | Téléphone |
| subject | enum | formations, tarifs, technique, autre |
| message | text | Message |
| status | enum | read, unread |
| ip_address | nullable varchar | IP |
| user_agent | nullable varchar | Navigateur |
| created_at | timestamp | |
| updated_at | timestamp | |

#### registrations
| Champ | Type | Description |
|---|---|---|
| id | bigint PK | |
| first_name | varchar | Prénom |
| last_name | varchar | Nom |
| email | varchar | Email |
| phone | varchar | Téléphone |
| course_interest | nullable varchar | Cours souhaité |
| message | nullable text | Message complémentaire |
| consent | boolean | Consentement RGPD |
| status | enum | pending, contacted, converted |
| created_at | timestamp | |
| updated_at | timestamp | |

#### newsletter_subscriptions
| Champ | Type | Description |
|---|---|---|
| id | bigint PK | |
| email | varchar unique | Email |
| is_active | boolean | Abonnement actif |
| created_at | timestamp | |
| updated_at | timestamp | |

#### site_settings
| Champ | Type | Description |
|---|---|---|
| id | bigint PK | |
| key | varchar unique | Clé |
| value | text | Valeur |
| type | enum | text, textarea, url, json |
| group | varchar | Groupe d'affichage |
| created_at | timestamp | |
| updated_at | timestamp | |

#### media
| Champ | Type | Description |
|---|---|---|
| id | bigint PK | |
| model_type | varchar | Type de modèle |
| model_id | bigint | ID du modèle |
| collection | varchar | Collection média |
| file_name | varchar | Nom du fichier |
| file_path | varchar | Chemin ou URL |
| mime_type | varchar | Type MIME |
| size | bigint | Taille en octets |
| sort_order | int | Ordre |
| created_at | timestamp | |
| updated_at | timestamp | |

#### notifications
| Champ | Type | Description |
|---|---|---|
| id | bigint PK | |
| user_id | nullable bigint FK → users.id | Utilisateur |
| type | varchar | Type de notification |
| data | json | Données |
| read_at | nullable timestamp | Lu le |
| created_at | timestamp | |
| updated_at | timestamp | |

#### password_reset_tokens
| Champ | Type | Description |
|---|---|---|
| email | varchar PK | |
| token | varchar | Token |
| created_at | timestamp | |

#### personal_access_tokens
| Champ | Type | Description |
|---|---|---|
| id | bigint PK | |
| tokenable_type | varchar | |
| tokenable_id | bigint | |
| name | varchar | Nom du token |
| token | varchar unique | Token hashé |
| abilities | nullable json | Permissions |
| last_used_at | nullable timestamp | |
| expires_at | nullable timestamp | |
| created_at | timestamp | |
| updated_at | timestamp | |

### Relations principales
- `courses` → `lessons` : one-to-many
- `users` → `notifications` : one-to-many
- `media` est polymorphique via `model_type` / `model_id`
- `site_settings` utilise une clé/valeur pour éviter un schéma trop rigide
- `personal_access_tokens` est requis par Laravel Sanctum

### Rôles et permissions
| Rôle | Description |
|---|---|
| super_admin | Accès total Filament |
| admin | Gestion complète sauf paramètres système |
| editor | Contenu uniquement : blog, gallery, videos |
| teacher | Cours et leçons uniquement |

Permissions Filament proposées :
- `view_dashboard`
- `manage_courses`
- `manage_lessons`
- `manage_blog`
- `manage_gallery`
- `manage_videos`
- `manage_testimonials`
- `manage_messages`
- `manage_settings`
- `manage_users`

### Fonctionnalités CRUD

#### Front-office
- Consultation des cours, leçons, vidéos, galerie, blog, témoignages
- Recherche et filtres sur cours et blog
- Formulaire de contact
- Formulaire d'inscription / cours d'essai
- Inscription newsletter
- Affichage des statistiques du site

#### Admin / Filament
- Gestion des cours : création, édition, suppression, publication, recherche, filtre par catégorie
- Gestion des leçons : rattachement à un cours, ordre, ressources, statut
- Gestion des vidéos : CRUD, miniature, catégorie, vues
- Gestion de la galerie : albums, upload, tri, alt text
- Gestion du blog : articles, catégories, auteurs, publication
- Gestion des témoignages : CRUD, notation, avatar
- Gestion des messages : lecture, marquer comme lu, suppression
- Gestion des inscriptions : suivi des leads
- Gestion des abonnements newsletter : activation/désactivation
- Gestion des paramètres : clé/valeur par groupe
- Gestion des médias : bibliothèque centralisée

### Authentification : Laravel Sanctum
- `/api/register` : inscription admin/teacher/editor
- `/api/login` : connexion par email + mot de passe
- `/api/logout` : déconnexion
- `/api/user` : profil connecté
- `/api/forgot-password` : demande de reset
- `/api/reset-password` : confirmation du reset
- Cookies de session pour le web
- Tokens personnels pour les applications externes

### Endpoints API nécessaires

#### Authentification
- `POST /api/register`
- `POST /api/login`
- `POST /api/logout`
- `GET /api/user`
- `POST /api/forgot-password`
- `POST /api/reset-password`

#### Courses
- `GET /api/courses`
- `GET /api/courses/{id}`
- `GET /api/courses/{id}/lessons`
- `POST /api/admin/courses`
- `PUT /api/admin/courses/{id}`
- `DELETE /api/admin/courses/{id}`

#### Lessons
- `GET /api/lessons`
- `GET /api/courses/{courseId}/lessons`
- `POST /api/admin/lessons`
- `PUT /api/admin/lessons/{id}`
- `DELETE /api/admin/lessons/{id}`

#### Videos
- `GET /api/videos`
- `GET /api/videos/{id}`
- `POST /api/admin/videos`
- `PUT /api/admin/videos/{id}`
- `DELETE /api/admin/videos/{id}`

#### Photos / Gallery
- `GET /api/photos`
- `GET /api/gallery/albums`
- `GET /api/gallery/{album}`
- `POST /api/admin/photos`
- `PUT /api/admin/photos/{id}`
- `DELETE /api/admin/photos/{id}`

#### Blog
- `GET /api/blog-posts`
- `GET /api/blog-posts/{slug}`
- `POST /api/admin/blog-posts`
- `PUT /api/admin/blog-posts/{id}`
- `DELETE /api/admin/blog-posts/{id}`

#### Testimonials
- `GET /api/testimonials`
- `POST /api/admin/testimonials`
- `PUT /api/admin/testimonials/{id}`
- `DELETE /api/admin/testimonials/{id}`

#### Messages
- `GET /api/messages`
- `POST /api/contact`
- `PATCH /api/admin/messages/{id}/read`
- `DELETE /api/admin/messages/{id}`

#### Registrations
- `POST /api/register`
- `GET /api/admin/registrations`
- `PATCH /api/admin/registrations/{id}/status`

#### Newsletter
- `POST /api/newsletter/subscribe`
- `DELETE /api/newsletter/unsubscribe`
- `GET /api/admin/newsletter/subscriptions`

#### Settings
- `GET /api/settings`
- `GET /api/settings/{group}`
- `PUT /api/admin/settings`

#### Stats
- `GET /api/admin/stats`
- `GET /api/admin/stats/chart`

#### Media
- `POST /api/admin/media/upload`
- `GET /api/admin/media`
- `DELETE /api/admin/media/{id}`

#### Notifications
- `GET /api/notifications`
- `POST /api/notifications/{id}/read`
- `POST /api/notifications/mark-all-read`

### Gestion des médias : Cloudinary / S3
- **Cloudinary** recommandé pour :
  - transformation automatique d'images
  - upload depuis Filament
  - versions multiples : thumbnail, medium, large
- **S3** alternative si besoin de stockage pur sans transformation
- Collections média prévues :
  - `courses` : image de cours
  - `lessons` : vidéo + ressources PDF
  - `videos` : thumbnail + vidéo
  - `gallery` : photo + thumbnail
  - `blog` : image mise en avant
  - `testimonials` : avatar
  - `settings` : favicon, logo
- Chaque média stocké dans `media` avec :
  - `model_type` / `model_id` pour la liaison
  - `collection` pour le type de fichier
  - `file_path` URL finale Cloudinary/S3

### Statistiques et notifications
#### Statistiques admin
- Total cours, leçons, vidéos, photos, articles, témoignages, messages, étudiants
- Évolution des vues blog et vidéos
- Taux de conversion des inscriptions
- Messages non lus

#### Notifications
- Nouveau message de contact
- Nouvelle inscription à un cours
- Nouvel abonné newsletter
- Nouveau commentaire si futur module
- Stockées dans `notifications`
- Lecture via API et panel Filament

### Structure Filament Admin
- **Pages** :
  - Dashboard : cartes statistiques + graphiques
  - Courses : resource avec filtres, recherche, statut
  - Lessons : resource liée aux cours, orderable
  - Videos : resource
  - Gallery : gestion par albums
  - Blog : resource avec éditeur riche
  - Testimonials : resource
  - Messages : table avec actions rapides
  - Registrations : table + suivi statut
  - Newsletter : table + toggle actif
  - Settings : page par groupe
  - Media : bibliothèque + upload
  - Users : gestion des admins/editors
- **Widgets** :
  - StatsOverview
  - RecentMessages
  - RecentRegistrations
  - ChartViews

### Structure `services/api` côté Next.js
```
services/
└── api.ts
    - Types TypeScript alignés sur Laravel
    - Base URL configurable
    - Helpers :
      - getHeaders() avec token Sanctum
      - handleResponse() avec gestion d'erreurs
      - queryString() pour filtres
    - Ressources :
      - authApi : login, logout, register, me, forgot-password, reset-password
      - coursesApi : liste, détail, leçons d'un cours
      - lessonsApi : liste, détail
      - videosApi : liste, détail
      - photosApi : liste, albums
      - blogApi : liste, détail par slug
      - testimonialsApi : liste
      - contactApi : envoyer message
      - registerApi : inscription cours d'essai
      - newsletterApi : subscribe, unsubscribe
      - settingsApi : récupération par groupe
      - adminApi : stats, upload média
    - Intercepteurs :
      - ajout token automatique
      - refresh token si 401
      - log global en dev
```

### Migration depuis l'existant
- Les types actuels dans `services/api.ts` deviennent la base des ressources Laravel
- Les données mockées dans `component/data.ts` deviennent des seeders Laravel
- Les composants front continuent de fonctionner via l'API sans changement d'UI
- Le dashboard admin Next.js peut être remplacé progressivement par Filament

### Convention de nommage
- Tables : `snake_case` pluriel
- Modèles Laravel : `StudlyCase` singulier
- Contrôleurs : `StudlyCase` + `Controller`
- Resources API : `StudlyCaseResource`
- Policies : `StudlyCasePolicy`
- Routes API : préfixe `/api`
- Routes admin Filament : gérées par Filament

### Sécurité
- Sanctum avec cookies HttpOnly pour le web
- Rate limiting sur login, contact, register, newsletter
- Validation stricte côté Laravel
- CORS configuré pour le domaine Next.js
- Policies pour chaque ressource admin
- Logs d'activité pour les actions critiques
