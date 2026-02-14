# School Mosque Management System

A comprehensive web-based School Mosque Management Software System built with React, TypeScript, and modern frontend technologies. Features a professional teal-themed UI/UX with Arabic text support and dashboard-based navigation.

## ✨ Latest Updates

### Professional Theme
- **New Color Scheme**: Teal/Turquoise primary (#0d9488) with amber accents
- **Arabic Integration**: Daily verses and duas display in Arabic with English translations
- **Enhanced Typography**: Inter font for English, Amiri font for Arabic
- **Polished Design**: Professional shadows, gradients, and animations

### Key Features
- 🎨 Modern, professional design system
- 🕌 Arabic text support with proper RTL direction
- 📱 Fully responsive (mobile, tablet, desktop)
- 🌙 Dark/Light theme toggle
- 📸 Complete image system with fallbacks
- ⚡ Fast performance and optimized bundle

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add images to public folder (see QUICK_START.md)

# 3. Start development server
npm run dev

# 4. Open http://localhost:5173
```

## Features

### Public Features
- **Home Dashboard**: Prayer times, Islamic date, Quranic verses, and daily duas
- **Lectures**: Video lecture gallery with embedded player
- **Studies/Courses**: Islamic education courses with progress tracking
- **Projects & Donations**: Funding projects with progress bars
- **Activities/Events**: Event registration and management
- **Executives Directory**: Leadership profiles and contact information
- **FAQ**: Accordion-style frequently asked questions
- **About**: Organization history, mission, vision, and achievements

### Admin Features
- Secure admin portal with role-based access
- Dashboard with analytics and statistics
- Management panels for all content modules
- Quick actions for common tasks

### UI/UX Features
- Modern Islamic geometric design
- Emerald and gold color palette
- Dark/Light theme toggle
- Fully responsive (mobile, tablet, desktop)
- Smooth transitions and animations
- Card-based content system
- Collapsible sidebar navigation

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Navigation
- **Vite** - Build tool
- **CSS3** - Styling with custom properties
- **Context API** - State management

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd school-mosque-management
```

2. Install dependencies:
```bash
npm install
```

3. Add your images to the `public` folder:
   - Place all 27 required images in the `public` directory
   - See `public/README.md` for complete image list and specifications
   - Images include: executive photos, activity images, project images, course images, lecture thumbnails, and logos

4. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
public/                 # Static assets (place images here)
├── president.jpg       # Executive photos (10 total)
├── imam1.jpg
├── football.jpg        # Activity images (3 total)
├── extend.jpg          # Project images (3 total)
├── tajweed.jpg         # Course images (5 total)
├── lecture.jpg         # Lecture images (4 total)
├── udslogo.jpg         # Logos (2 total)
├── gmsalogo.jpg
└── README.md           # Image specifications guide

src/
├── components/          # Reusable UI components
│   ├── Layout.tsx
│   ├── Sidebar.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── context/            # React Context providers
│   ├── ThemeContext.tsx
│   └── AuthContext.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── Lectures.tsx
│   ├── Courses.tsx
│   ├── Projects.tsx
│   ├── Activities.tsx
│   ├── Executives.tsx
│   ├── FAQ.tsx
│   ├── About.tsx
│   ├── Login.tsx
│   ├── AdminLogin.tsx
│   └── admin/
│       └── AdminDashboard.tsx
├── styles/             # Global styles
│   └── global.css
├── App.tsx            # Main app component
└── main.tsx           # Entry point
```

## Routes

### Public Routes
- `/` - Home Dashboard
- `/lectures` - Lectures Gallery
- `/courses` - Islamic Studies
- `/projects` - Projects & Donations
- `/activities` - Events & Activities
- `/executives` - Executive Directory
- `/faq` - FAQ
- `/about` - About Us
- `/login` - User Login
- `/admin/login` - Admin Login

### Admin Routes
- `/admin` - Admin Dashboard
- `/admin/prayer-times` - Prayer Times Management
- `/admin/lectures` - Lectures Management
- `/admin/courses` - Courses Management
- `/admin/projects` - Projects Management
- `/admin/activities` - Activities Management
- `/admin/executives` - Executives Management
- `/admin/faq` - FAQ Management
- `/admin/about` - About Content Management

## Theme Customization

The application uses CSS custom properties for theming. You can customize colors in `src/styles/global.css`:

```css
:root {
  --primary: #059669;      /* Emerald green */
  --secondary: #d97706;    /* Amber */
  --gold: #f59e0b;         /* Gold */
  /* ... more variables */
}
```

## Authentication

The application includes simulated authentication for demonstration purposes:
- User login at `/login`
- Admin login at `/admin/login`
- No backend integration required

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the development team.
