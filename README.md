# Sreejith A S - Portfolio

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.6-38B2AC.svg)](https://tailwindcss.com/)
[![Jest](https://img.shields.io/badge/Jest-29.7.0-C21325.svg)](https://jestjs.io/)

A modern, responsive portfolio website showcasing my skills, projects, experience, and certifications as a full-stack developer.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Components**: Engaging user experience with parallax effects and transitions
- **Contact Form**: Integrated contact form with EmailJS for direct communication
- **Project Showcase**: Grid layout displaying featured projects with live demos and source code links
- **Skills Section**: Visual representation of technical skills and expertise
- **Experience Timeline**: Chronological display of professional experience
- **Certifications Gallery**: Showcase of professional certifications and achievements
- **Testimonials**: Client and colleague feedback section
- **Accessibility**: Built with accessibility best practices in mind

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **EmailJS** - Client-side email sending service

### Development Tools
- **ESLint** - Code linting and formatting
- **Jest** - JavaScript testing framework
- **React Testing Library** - Testing utilities for React components
- **Babel** - JavaScript transpiler
- **PostCSS** - CSS processing tool
- **Autoprefixer** - CSS vendor prefixing

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/sreejith-portfolio.git
   cd sreejith-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the portfolio.

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks
- `npm run test` - Run Jest tests

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   └── certificates/     # Certificate PDF files
│   └── index.html            # Main HTML template
├── src/
│   ├── assets/
│   │   ├── certificates/     # Certificate assets
│   │   └── images/           # Image assets (logo, profile picture)
│   ├── components/           # React components
│   │   ├── About.jsx         # About section component
│   │   ├── CertificationsGrid.jsx  # Certifications display
│   │   ├── ContactForm.jsx   # Contact form with EmailJS
│   │   ├── ExperienceTimeline.jsx  # Work experience timeline
│   │   ├── Footer.jsx        # Site footer
│   │   ├── Hero.jsx          # Hero/landing section
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── ProjectCard.jsx   # Individual project card
│   │   ├── ProjectsGrid.jsx  # Projects showcase grid
│   │   ├── Skills.jsx        # Skills section
│   │   ├── Testimonials.jsx  # Testimonials section
│   │   └── UiBtn.jsx         # Reusable UI button component
│   ├── data/                 # Static data files
│   │   ├── seed-certifications.json  # Certifications data
│   │   └── seed-projects.json        # Projects data
│   ├── hooks/                # Custom React hooks
│   │   ├── useFetch.js       # Data fetching hook
│   │   ├── useOnScreen.js    # Intersection observer hook
│   │   ├── useParallax.js    # Parallax scrolling hook
│   │   └── usePrefersReducedMotion.js  # Accessibility hook
│   ├── __tests__/            # Test files
│   │   └── Hero.test.jsx     # Hero component tests
│   ├── App.jsx               # Main application component
│   ├── index.css             # Global styles
│   ├── main.jsx              # Application entry point
│   └── setupTests.js         # Test configuration
├── .gitignore                # Git ignore rules
├── babel.config.js           # Babel configuration
├── jest.config.js            # Jest configuration
├── package.json              # Project dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
```

## 🎨 Customization

### Personal Information
Update the following files to customize the portfolio with your information:

- **Hero Section**: Edit `src/components/Hero.jsx`
- **About Section**: Edit `src/components/About.jsx`
- **Skills**: Edit `src/components/Skills.jsx`
- **Projects**: Update `src/data/seed-projects.json`
- **Experience**: Edit `src/components/ExperienceTimeline.jsx`
- **Certifications**: Update `src/data/seed-certifications.json` and add certificate files to `public/assets/certificates/`
- **Testimonials**: Edit `src/components/Testimonials.jsx`
- **Contact Information**: Edit `src/components/ContactForm.jsx` and `src/components/Footer.jsx`

### Styling
- **Colors and Themes**: Modify `tailwind.config.js` for custom color schemes
- **Global Styles**: Edit `src/index.css` for additional global styles
- **Component Styles**: Each component has its own styling within the JSX files

### EmailJS Configuration
To enable the contact form:
1. Sign up for an EmailJS account at https://www.emailjs.com/
2. Create a service and email template
3. Update the EmailJS configuration in `src/components/ContactForm.jsx`

## 🧪 Testing

The project includes Jest and React Testing Library for unit testing. Run tests with:

```bash
npm run test
```

Current test coverage includes:
- Hero component rendering and functionality

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### Environment Variables
Create a `.env` file in the root directory for any environment-specific configurations (currently not required for basic functionality).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Sreejith A S
- [sreejithsreenivasan.06@gmail.com](mailto:sreejithsreenivasan.06@gmail.com)
 - [Linkedin](https://www.linkedin.com/in/sreejithas/)

Project Link:
- [Live Link]()
- [Github](https://github.com/sreejith-as/portfolio)

---

⭐ If you found this project helpful, please give it a star!
