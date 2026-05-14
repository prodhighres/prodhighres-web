# Highres Web

## Setup

### Programmierumgebung
* Git eingerichtet
* GitHub verbunden
* Node.js installiert
* VS Code eingerichtet
* Multi-device workflow aktiv

---

## CSS Foundation

* reset.css erstellt
* tokens aufgebaut

### Tokens

#### Design Tokens (abgeschlossen)
* Color Tokens definiert
* Spacing Tokens definiert
* Radius Tokens definiert
* Transition Tokens definiert
* Typografie Tokens definiert
* Shadow Tokens definiert
* Z-Index Tokens definiert
* Border Tokens definiert

---

## Layout Foundation

### Tokens (in Arbeit / geplant)
* Container Tokens (max-width + padding)
* Breakpoint Tokens (responsive breakpoints)
* Grid Tokens (columns + gap system)
* Layout Scale Tokens (optional Erweiterung für spacing im Layout-Kontext)

### CSS Layout Layer (geplant)
* container.css erstellen
* grid.css erstellen
* section.css erstellen
* stack.css erstellen (vertical spacing primitives)
* cluster.css optional (horizontal alignment patterns)

---

## Base Layer (geplant)

* global reset finalisieren (modernisiert)
* base typography defaults (body, headings, links)
* form base styles vereinheitlichen
* media defaults (img, svg, video)
* accessibility defaults (focus states)

---

## Components Layer (geplant)

### Core UI Components
* Button Component System
* Card Component System
* Input / Form Components
* Badge / Tag Components

### Navigation
* Navbar Component refactor
* Mobile Navigation System
* Menu State Handling (open/close/overlay)

### Content Components
* Hero Component
* Section Wrapper Component
* Footer Component
* Media Card / Content Card Variants

---

## Utilities Layer (geplant)

* spacing utilities (optional, falls nötig)
* typography utilities (font-size helpers ersetzen alte Klassen)
* display utilities (flex, grid helpers)
* visibility utilities
* state utilities (active, hidden, loading)

---

## Responsive Layout Basis (nächster Schritt nach Layout Tokens)

* Mobile-first breakpoints aktiv umgesetzt
* Grid System responsive gemacht
* Container Verhalten pro Breakpoint definiert
* Section spacing responsive standardisiert

---

## State & Interaction System (später)

* hover / focus / active states konsistent über Tokens
* transition system finalisieren (motion tokens + usage rules)
* loading states standardisieren
* component state classes vereinheitlichen

---

## Theme System (später)

* Dark Mode Tokens
* Light Mode Tokens
* Theme Switch Mechanismus
* Semantic Color Layer erweitern (background, surface, text variants)

---

## Architecture & Tooling (später)

* Vite Setup
* Build Pipeline strukturieren
* CSS bundling / ordering system
* PostCSS (optional)
* Linting / formatting rules

---

## Framework Migration (optional später)

* React Einführung
* Component-based architecture
* Design Tokens als shared system
* Component mapping (CSS → React Components)

---

## Backend / Data Layer (später)

* Supabase Integration
* Content Struktur (Beats / Media / Pages)
* Dynamic Content Rendering
* Admin / Upload System (optional)

---

## Deployment (später)

* Production Build Setup
* Hosting (Vercel / Netlify / Custom)
* Domain Setup
* Performance Optimization
* SEO Basics (Meta, OpenGraph)

---

## Status

### Abgeschlossen
* Setup
* Design Tokens (Foundation Layer)

### In Arbeit
* Layout Tokens
* Layout CSS Layer

### Nächster Schritt
* Container & Grid System implementieren