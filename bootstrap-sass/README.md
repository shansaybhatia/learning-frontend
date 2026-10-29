# 🎨 Bootstrap + Sass Portfolio Website

A responsive, multi-section portfolio and business-style website built with **Bootstrap 5** and **Sass**. Designed as a hands-on learning project to practice modern frontend development workflows, component-based styling, and responsive design principles.

---

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=flat&logo=bootstrap&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=flat&logo=fontawesome&logoColor=white)
![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)

---

![Website Preview](images/website-preview.png)

<h2 align="center">
  🔗 <a href="https://sass-portfolio-demo.netlify.app/">View Live Demo →</a>
</h2>

---

## ✨ Features

| Section | Description |
|---------|-------------|
| **Navbar** | Fixed-top responsive navigation bar with logo and smooth-scrolling links |
| **Hero / Intro** | Personal introduction with an illustration and a GitHub profile link |
| **Companies** | "Trusted by companies like" showcase displaying 6 company logos |
| **Services** | Three service cards — UI/UX Design, Web Development, and Cloud Hosting |
| **Testimonials** | Bootstrap carousel rotating through 4 client testimonials |
| **FAQ** | Accordion with 4 frequently asked questions and answers |
| **Portfolio** | 9-item portfolio grid with interactive filter buttons (All, Websites, UI/UX, Mockup) |
| **Contact** | Call-to-action section with a contact form (first name, last name, email, message) |
| **Footer** | Contact info (phone, email, location) and social media links |

---

## 🛠️ Built With

- **HTML5** — Semantic markup and page structure
- **CSS3** — Custom styling and animations
- **Bootstrap 5** — Responsive grid system, navbar, carousel, accordion, and cards
- **Sass (SCSS)** — Variables, mixins, partials, and component-based architecture
- **Font Awesome** — Scalable vector icons throughout the site
- **GLightbox** — Lightbox library for the portfolio section
- **Google Fonts** — Poppins typeface

---

## 📁 Project Structure

```
bootstrap-sass/
├── images/
│   ├── arts/
│   ├── companies/
│   ├── portfolio/
│   ├── services/
│   ├── testimonials/
│   ├── logo.png
│   └── website-preview.png
├── scss/
│   ├── components/
│   │   ├── _animation.scss
│   │   ├── _button.scss
│   │   ├── _mixins.scss
│   │   └── _typography.scss
│   ├── sections/
│   │   ├── _companies.scss
│   │   ├── _faq.scss
│   │   ├── _footer.scss
│   │   ├── _get-started.scss
│   │   ├── _intro.scss
│   │   ├── _navbar.scss
│   │   ├── _portfolio.scss
│   │   ├── _services.scss
│   │   └── _testimonials.scss
│   ├── _custom.scss
│   ├── fontawesome.scss
│   └── style.scss
├── assets/css/          # Compiled CSS output
├── index.html
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed on your machine

### Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/shansaybhatia/learning-frontend.git

# 2. Navigate to the project
cd learning-frontend/bootstrap-sass

# 3. Install dependencies
npm install

# 4. Compile Sass to CSS
npm run compile:sass

# 5. Open in your browser
# Open index.html directly in your browser — no dev server needed
```

---

## 📚 What I Learned

This project was a hands-on exercise in several core frontend concepts:

- **Bootstrap Grid System** — Building responsive layouts with rows, columns, and breakpoints
- **Responsive Design** — Crafting a site that adapts seamlessly across screen sizes
- **Sass Variables & Mixins** — Keeping styles DRY and maintainable with reusable abstractions
- **Sass Partials** — Organizing stylesheets into modular, section-based files
- **Component-Based SCSS Architecture** — Separating concerns between components and page sections
- **Bootstrap Components** — Working with the navbar, carousel, accordion, and cards
- **Font Awesome Integration** — Adding scalable icons to enhance the UI

---

> ⚠️ **Learning Disclaimer**
>
> This is a learning project built while following a Bootstrap 5 + Sass tutorial. It is not an entirely original project and is not production-ready.

---

<p align="center">
  📂 <strong><a href="https://github.com/shansaybhatia/learning-frontend">← Back to Learning Frontend</a></strong>
</p>
