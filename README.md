# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, interactive elements, and a clean design.

## 🌟 Features

### 1. Modern UI Components

- Responsive navigation with smooth scroll
- Interactive hero section with orbital animations
- Infinite scrolling tape section with keywords
- Draggable hobby cards with floating animations
- Project cards with parallax scrolling effect
- Contact form with real-time validation
- Scroll progress indicator
- "Back to top" button

### 2. Sections

- **Hero** - Introduction with animated elements and orbital rings
- **Experience** - Professional background with timeline
- **Projects** - Showcase of work with detailed descriptions
- **Achievements** - Scrolling cards showing competitions and awards
- **About** - Personal information including:
  - Toolbox (Tech stack)
  - Beyond the Code (Interactive hobby cards)
  - Location indicator
  - Reading interests
- **Contact** - Form integrated with Supabase

### 3. Technical Features

- Server-side rendering with Next.js 14
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Supabase for backend services
- Responsive design for all devices
- SEO optimized

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Backend:** Supabase
- **Icons:** Custom SVG icons
- **Fonts:** Inter, Calistoga

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone [repository-url]
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   Create a `.env.local` file with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── assets/
│   ├── icons/
│   └── images/
├── components/
│   ├── Card.tsx
│   ├── Navigation.tsx
│   ├── ScrollProgress.tsx
│   ├── ScrollToTop.tsx
│   ├── SectionHeader.tsx
│   ├── TechIcon.tsx
│   └── ToolboxItems.tsx
└── sections/
    ├── About.tsx
    ├── ContactForm.tsx
    ├── Experience.tsx
    ├── Footer.tsx
    ├── Header.tsx
    ├── Hero.tsx
    ├── Projects.tsx
    ├── Tape.tsx
    └── Testimonials.tsx
```

## 🎨 Design Features

- Gradient color scheme (emerald to sky blue)
- Dark mode design
- Grain texture overlays
- Custom animations
- Interactive elements
- Responsive typography
- Modern card designs

## 🔧 Configuration

### Tailwind Configuration

The project uses a custom Tailwind configuration for:

- Custom animations
- Extended color palette
- Custom font families
- Custom spacing
- Responsive breakpoints

### Next.js Configuration

- Optimized image loading
- Font optimization
- Static site generation where applicable
- API routes for form handling

## 📱 Responsive Design

The website is fully responsive across:

- Mobile devices
- Tablets
- Desktop screens
- Large displays

## 🔄 State Management

- React hooks for local state
- Framer Motion for animation states
- Form state management for contact form

## 🎯 Future Improvements

- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add more interactive elements
- [ ] Enhance accessibility features
- [ ] Add more project details
- [ ] Implement filtering for projects

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

[Your Name]

- Website: [your-website]
- GitHub: [@your-username]
- LinkedIn: [your-linkedin]

## 🙏 Acknowledgments

- Icons from various sources
- Inspiration from modern web design trends
- Community feedback and suggestions
