# 📰 Dev News

A modern **Next.js App Router project** for managing developer news articles with full CRUD support.  
Built using **Next.js 14**, file-based API routes, and filesystem persistence.

## ✨ Key Features

- 🌍 **Multi-Language Support** - English & Bengali with automatic browser language detection
- 📱 **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- 🎯 **Performance Optimized** - Server-side rendering with Next.js for blazing-fast load times
- 🔍 **Advanced Search** - Search stories, tags, and authors (ready to implement)
- 📊 **Engagement Metrics** - Real-time upvotes, downvotes, and view counts
- 🎭 **Modal Layout** - Intercept routes for smooth modal previews
- 🌙 **Dark Theme** - Eye-friendly dark UI with custom gradient accents
- 📝 **Rich News Content** - Detailed articles with author information and metadata
- 🏷️ **Tag System** - Organized content with category-based filtering
- ⚡ **Dynamic Date Formatting** - Human-readable timestamps (e.g., "2 months ago")
- 🎬 **Smooth Animations** - Reveal animations and hover effects
- 🖼️ **Image Optimization** - WebP format support with Next.js Image component

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Purpose |
|-----------|---------|
| ![Next.js](https://img.shields.io/badge/Next.js-Framework-black?logo=next.js&logoColor=white) | React framework with SSR & SSG |
| ![React](https://img.shields.io/badge/React-UI%20Library-61DAFB?logo=react&logoColor=black) | Component-based UI |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Styling-06B6D4?logo=tailwindcss&logoColor=white) | Utility-first CSS framework |
| ![JavaScript](https://img.shields.io/badge/JavaScript-Language-F7DF1E?logo=javascript&logoColor=black) | Core programming language |
| ![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?logo=node.js&logoColor=white) | JavaScript runtime |
| ![JSON](https://img.shields.io/badge/JSON-Data%20Format-000000) | Data storage & configuration |

</div>

---

## 🚀 Installation

### Prerequisites
- **Node.js** 18+ or higher
- **npm** 9+ or **yarn** 1.22+
- **Git** for version control

### Step-by-Step Setup

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/dev-news.git
cd dev-news

# 2. Install dependencies
npm install
# or
yarn install

# 3. Create environment variables (if needed)
cp .env.example .env.local

# 4. Run the development server
npm run dev
# or
yarn dev

# 5. Open in browser
# Visit http://localhost:3000
```
---

## 📖 Usage

### Running the Development Server

Once installed, start the development server:

```bash
npm run dev
```

The application will be available at **http://localhost:3000**

### Key URLs

- **Home Page**: `/` - Browse trending news
- **News Details**: `/news/[slug]` - Read full article with engagement metrics
- **Modal Preview**: Same route with modal intercept

### Adding New News

Edit or add entries to `public/data.json`:

```json
{
  "id": 1,
  "slug": "the-css-if-function",
  "title": "The CSS if() Function Has Arrived!",
  "description": "CSS now supports conditional logic...",
  "headline": "CSS now supports conditional logic...",
  "thumbnail": "css-if.jpg",
  "author_name": "Bogdan Fueroa",
  "author_avatar": "author-1.jpg",
  "published_date": "2025-12-08",
  "upvotes": 3600,
  "downvotes": 10,
  "views": 88700,
  "tags": ["Frontend", "CSS", "WebDev"]
}
```

### API Routes

```bash
# GET all news
GET /api/news

# GET news by slug
GET /api/news/[slug]

# UPDATE news (PATCH)
PATCH /api/news/[slug]
# Body: { title?: string, description?: string }

# DELETE news
DELETE /api/news/[slug]
```

---

## 📁 Folder Structure

```
dev-news/
├── app/
│   ├── @modal/                    # Modal layout routes
│   │   ├── (.)news/[slug]/page.jsx
│   │   └── default.js
│   ├── api/
│   │   └── news/
│   │       ├── route.js           # GET all news
│   │       └── [slug]/route.js    # GET, PATCH, DELETE
│   ├── components/
│   │   ├── Header.jsx             # Site header with search
│   │   ├── LanguageSwitcher.jsx   # Language toggle (EN/BN)
│   │   ├── NewsCard.jsx           # News card component
│   │   ├── NewsModal.jsx          # Modal preview component
│   │   ├── NewsSection.jsx        # News grid layout
│   │   └── SvgIcons/
│   │       └── SvgIcons.jsx       # Icon components
│   ├── news/
│   │   └── [slug]/
│   │       ├── page.jsx           # Full news page
│   │       └── not-found.jsx      # 404 for news
│   ├── providers/
│   │   └── LanguageProvider.jsx   # Language context
│   ├── translations/
│   │   ├── en.json                # English translations
│   │   └── bn.json                # Bengali translations
│   ├── fonts/                     # Google fonts setup
│   ├── globals.css                # Global styles & animations
│   ├── layout.js                  # Root layout
│   ├── not-found.jsx              # 404 page
│   └── page.js                    # Home page
├── lib/
│   ├── formatters.js              # formatCount(), formatDate()
│   ├── getNews.js                 # Fetch from data.json
│   └── news.js                    # Data operations (CRUD)
├── public/
│   ├── data.json                  # News database
│   └── assets/images/             # Image assets
├── .eslintrc.json                 # ESLint config
├── .gitignore                     # Git ignore rules
├── jsconfig.json                  # JS paths config
├── next.config.mjs                # Next.js config
├── package.json                   # Dependencies & scripts
├── postcss.config.mjs             # PostCSS config
├── tailwind.config.js             # Tailwind config
└── README.md                       # This file
```

---

## 🗂️ File Descriptions

| File | Purpose |
|------|---------|
| [`app/components/Header.jsx`](app/components/Header.jsx) | Navigation header with logo, search, language switcher |
| [`app/components/NewsCard.jsx`](app/components/NewsCard.jsx) | Reusable news card with image, author, tags, metrics |
| [`app/components/NewsModal.jsx`](app/components/NewsModal.jsx) | Modal preview component for news articles |
| [`app/providers/LanguageProvider.jsx`](app/providers/LanguageProvider.jsx) | Context provider for i18n functionality |
| [`lib/formatters.js`](lib/formatters.js) | Utility functions for formatting counts and dates |
| [`lib/news.js`](lib/news.js) | Core data operations (read/write to JSON) |
| [`public/data.json`](public/data.json) | JSON database for news articles |

---

## 🗺️ Roadmap

### ✅ Completed
- [x] Multi-language support (EN/BN)
- [x] Responsive dark theme UI
- [x] Modal preview with intercept routes
- [x] News CRUD API routes
- [x] Date formatting utilities
- [x] Engagement metrics display
- [x] Author profiles on news cards

### 🚀 Coming Soon
- [ ] Search functionality (backend integration)
- [ ] Filter by tags
- [ ] User authentication & comments
- [ ] Social sharing buttons
- [ ] Newsletter subscription
- [ ] Dark/Light theme toggle
- [ ] Reading time estimates
- [ ] Related articles section
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Admin dashboard

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

```bash
# 1. Fork the repository
# 2. Create a feature branch
git checkout -b feature/amazing-feature

# 3. Commit your changes
git commit -m "Add amazing feature"

# 4. Push to the branch
git push origin feature/amazing-feature

# 5. Open a Pull Request
```

**Code Style Guidelines:**
- Use functional components with React hooks
- Follow Airbnb JavaScript style guide
- Add comments for complex logic
- Test responsive design across devices

---