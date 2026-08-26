# The Odin Project Portfolio & Project Showcase

A comprehensive web development portfolio repository built by **Chukwuebuka Henry** showcasing foundational to advanced projects completed through [The Odin Project](https://www.theodinproject.com/) curriculum.

This repository demonstrates mastery of core frontend web technologies: semantic HTML5, modern CSS3 (Flexbox, CSS Grid, responsive design, cascade & specificity), vanilla JavaScript DOM manipulation, mathematical algorithms, and Node.js serving.

---

## 🌟 Featured Projects Overview

### 1. [MovieHive (Streaming UI)](./Project-111/README.md)
* **Location**: `/Project-111`
* **Focus**: Complex multi-section entertainment web interface featuring a hero showcase, search filter, continue-watching tray, release metadata badges, and high-contrast responsive layouts using CSS Grid and Flexbox.

### 2. [Scientific Calculator](./Calculator/README.md)
* **Location**: `/Calculator`
* **Focus**: Advanced interactive scientific calculator supporting standard arithmetic, operator precedence, trigonometric functions ($\sin$, $\cos$, $\tan$, inverses), logarithms, powers, factorials, roots, and degree/radian angular mode toggling with custom keyboard/button event handlers.

### 3. [Odin Recipes Collection](./recipes/README.md)
* **Location**: `/recipes`
* **Focus**: Multi-page recipe catalog featuring step-by-step culinary guides (Classic Lasagna, Nigerian Jollof Rice, Yam Casserole, Fried Potatoes, and Puerto Rican Coquito) structured with semantic HTML and custom CSS.

### 4. [Landing Page Project](./CSS-EXERSISES/Landing-page/README.md)
* **Location**: `/CSS-EXERSISES/Landing-page`
* **Focus**: Full-scale responsive product landing page incorporating hamburger mobile navigation, a balanced hero column, 4-card feature showcase, testimonial quote banner, and call-to-action (CTA) module.

### 5. [CSS & Flexbox Exercises Series](./CSS-EXERSISES/README.md)
* **Location**: `/CSS-EXERSISES`
* **Focus**: 15+ targeted technical drills covering CSS cascade resolution, ID/class specificity, combinators, grouping selectors, box-model margin/padding behavior, modal dialogs, and Holy Grail layouts.

---

## 🚀 Running the Project Locally

This project includes a unified Express server (`server.js`) configured on port `3000` to serve all projects and the interactive directory hub.

### Prerequisites
* [Node.js](https://nodejs.org/) (version 18+ recommended)
* npm (bundled with Node.js)

### Installation & Launch

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev
# or
npm start
```

Open your browser and navigate to:
```
http://localhost:3000
```

### Direct Route Access
* **Portfolio Showcase Hub**: `http://localhost:3000/`
* **MovieHive**: `http://localhost:3000/moviehive`
* **Scientific Calculator**: `http://localhost:3000/calculator`
* **Odin Recipes**: `http://localhost:3000/recipes`
* **Product Landing Page**: `http://localhost:3000/landing`

---

## 📂 Project Structure

```
├── .vscode/               # Workspace editor settings
├── Calculator/            # Scientific Calculator project
│   ├── calculator.css
│   ├── calculator.js
│   ├── index.html
│   └── README.md
├── CSS-EXERSISES/         # CSS foundational exercise collection
│   ├── 01-cascade-fix/
│   ├── 01-css-methods/
│   ├── 02-class-id-selectors/
│   ├── 03-grouping-selectors/
│   ├── 04-chaining-selectors/
│   ├── 05-descendant-combinator/
│   ├── Landing-page/      # Responsive Product Landing Page
│   ├── block-and-inline/  # Box model margin & padding exercises
│   ├── flex/              # Flexbox header, cards, modals, holy grail
│   └── README.md
├── Project-111/           # MovieHive streaming platform interface
│   ├── images/            # Movie posters & logos
│   ├── index.html
│   ├── style.css
│   └── README.md
├── recipes/               # Odin Recipes website
│   ├── CSS Files/
│   ├── Coquito.html
│   ├── friedPotatoes.html
│   ├── jollofRice.html
│   ├── lasagna.html
│   ├── yamCasserole.html
│   └── README.md
├── images/                # Shared assets
├── index.html             # Main portfolio index hub
├── package.json           # Node.js project manifest & scripts
├── server.js              # Express static server
└── README.md              # Root repository documentation
```

---

## 👨‍💻 Author

**Chukwuebuka Henry**
* Project: The Odin Project Curriculum
* Technologies: HTML5, CSS3, JavaScript (ES6+), Node.js, Express
