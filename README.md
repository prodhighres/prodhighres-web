# Highres Web

## Vision / Globales Ziel

Highres Web wird die zentrale digitale Plattform für die Brand Highres Production.

* Das Ziel ist ein modernes, modular aufgebautes mobile first Webprojekt, das langfristig erweiterbar bleibt und vollständig alleine entwickelt und verwaltet werden kann, mit möglichst geringen Kosten.

### Die Plattform soll:

* als kreatives Portfolio funktionieren
* Musik / Medien / Projekte präsentieren
* einen Webshop integrieren
* ein kleines CMS für dynamische Inhalte und Datei-Uploads besitzen
* performant, responsive und professionell deploybar sein
* ohne hohe laufende Kosten umsetzbar bleiben
* als echtes Lernprojekt dienen, ohne unnötig komplex zu werden

## Roadmap

1. Setup
2. Design Tokens
3. Layout Tokens
4. Layout System
5. Base Layer
6. Responsive Testseite
7. Components
8. Vite
9. React
10. CMS / Supabase
11. Shop
12. Deployment
13. Optimierung

# Progress

## Setup (done)
* Git eingerichtet
* GitHub verbunden
* Node.js installiert
* VS Code eingerichtet
* Multi-device workflow aktiv

## CSS Tokens (done)

### Design Tokens (done)
* Color
* Spacing
* Radius
* Transition
* Typografie
* Shadows
* Z-Index
* Border

### Layout Tokens (done)
* breakpoints
* container
* grid

## CSS Layout (done)
* container layout
* grid layout
* section layout
* stack layout

## Base Layer (geplant)
* global reset finalisieren (modernisiert)
* base typography defaults (body, headings, links)
* form base styles vereinheitlichen
* media defaults (img, svg, video)
* accessibility defaults (focus states)

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

## Utilities Layer (geplant)

* spacing utilities (optional, falls nötig)
* typography utilities (font-size helpers ersetzen alte Klassen)
* display utilities (flex, grid helpers)
* visibility utilities
* state utilities (active, hidden, loading)

## Responsive Layout Basis (nächster Schritt nach Layout Tokens)

* Mobile-first breakpoints aktiv umgesetzt
* Grid System responsive gemacht
* Container Verhalten pro Breakpoint
* Section spacing responsive standardisiert

## State & Interaction System (später)

* hover / focus / active states konsistent über Tokens
* transition system finalisieren (motion tokens + usage rules)
* loading states standardisieren
* component state classes vereinheitlichen

## Theme System (später)

* Dark Mode Tokens
* Light Mode Tokens
* Theme Switch Mechanismus
* Semantic Color Layer erweitern (background, surface, text variants)

## Architecture & Tooling (später)

* Vite Setup
* Build Pipeline strukturieren
* CSS bundling / ordering system
* PostCSS (optional)
* Linting / formatting rules

## Framework Migration (optional später)

* React Einführung
* Component-based architecture
* Design Tokens als shared system
* Component mapping (CSS → React Components)

## Backend / Data Layer (später)

* Supabase Integration
* Content Struktur (Beats / Media / Pages)
* Dynamic Content Rendering
* Admin / Upload System (optional)

## Deployment (später)

* Production Build Setup
* Hosting (Vercel / Netlify / Custom)
* Domain Setup
* Performance Optimization
* SEO Basics (Meta, OpenGraph)