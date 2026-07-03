# 📚 LMS Course Dashboard

A modern, responsive Learning Management System (LMS) dashboard built with vanilla HTML, CSS, and JavaScript. Designed for browsing and managing academic courses under the **Academic and Capacity Building Program (ACP)**.

---

## ✨ Features

- **Category Navigation** — Browse courses by category (Miscellaneous, Sample Courses, Archived, etc.) via sidebar or dropdown
- **Subcategory Filtering** — Drill down into subcategories (ACP Courses 2025, Skill Development, Orientation, Workshops)
- **Course Search** — Real-time search filtering across course titles
- **Breadcrumb Navigation** — Dynamic breadcrumb trail showing current navigation path
- **Grid/List View** — Toggle between grid and list layouts for course cards
- **Responsive Design** — Fully responsive with a mobile-friendly sidebar overlay
- **Premium UI** — Modern light theme with smooth animations, gradient cards, and micro-interactions

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure with `<template>` elements |
| CSS3 | Custom properties, flexbox, grid, animations |
| JavaScript (ES6+) | State-based rendering, DOM manipulation |
| Google Fonts | Inter typeface for modern typography |

---

## 📁 Project Structure

```
dash/
├── index.html      # Main HTML structure & templates
├── index.css       # Complete design system & styles
├── index.js        # Application state, rendering & interactions
├── logo.png        # Portal logo (sidebar header)
├── un111.png       # Hero section background image
└── README.md       # This file
```

---

## 🚀 Getting Started

1. **Clone or download** the project
2. **Open `index.html`** in any modern browser — no build step required!

```bash
# Or serve with any static file server
npx serve .
```

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#FFF8F8` | Page background |
| `--accent` | `#e84057` | Primary accent (buttons, highlights) |
| `--text-primary` | `#1a1a2e` | Headings, body text |
| `--text-secondary` | `#4a4a68` | Secondary text |
| `--text-muted` | `#8e8ea8` | Muted labels, metadata |

### Background Gradient

```css
background: linear-gradient(180deg, #FFFDFD 0%, #FFF8F8 35%, #FFF4F4 100%);
```

### Typography

- **Font**: Inter (400, 500, 600, 700, 800, 900)
- **Scale**: 0.7rem – 2.2rem

---

## 📐 Architecture

The app uses a **state-driven rendering** pattern:

```
State Object → renderAll() → DOM Updates
     ↑                            |
     └──── User Interactions ─────┘
```

- **`state`** — Central data store (categories, courses, view mode)
- **`renderAll()`** — Orchestrator that calls individual render functions
- **Templates** — HTML `<template>` elements cloned and populated via JS

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `> 1024px` | Sidebar + main content side by side |
| `768px – 1024px` | Collapsible sidebar overlay |
| `< 768px` | Full-width mobile layout, hamburger menu |

---

## 📄 License

This project is for educational and internal use.
