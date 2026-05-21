# Highres Web

⸻

## Vision / Globales Ziel

* Highres Web wird die zentrale digitale Plattform für die Brand Highres Production.

* Das Ziel ist ein modernes, modular aufgebautes Webprojekt, das langfristig erweiterbar bleibt und vollständig alleine entwickelt und verwaltet werden kann.

⸻

## Die Plattform soll:

* als kreatives Portfolio funktionieren
* Musik / Medien / Projekte präsentieren
* einen Webshop integrieren
* ein kleines CMS für dynamische Inhalte und Datei-Uploads besitzen
* performant, responsive und professionell deploybar sein
* ohne hohe laufende Kosten umsetzbar bleiben
* als echtes Lernprojekt dienen, ohne unnötig komplex zu werden

⸻

## Roadmap einfach

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

⸻

# Prozess

## Phase 1 - Basis

* Ein sauberes CSS- und Layout-System aufbauen.

### Stack

* HTML
* CSS
* Git + GitHub
* Vite (später)

### Fokus

* Design Tokens
* Layout System
* Responsive Architektur
* Component Thinking vorbereiten

⸻

## Phase 2 — Komponenten-System

* Wiederverwendbare UI-Komponenten entwickeln.

### Komponenten

* Navbar
* Hero
* Buttons
* Cards
* Forms
* Sections
* Media Components

### Fokus:

* Konsistenz
* Skalierbarkeit
* saubere Architektur
* spätere React-Migration erleichtern

⸻

## Phase 3 — React Migration

* Die statische Struktur in ein komponentenbasiertes Frontend überführen.

### Stack

* React
* Vite
* CSS System weiterverwenden

### Fokus

* Component-based Architecture
* Reusable UI
* bessere Wartbarkeit
* dynamische Inhalte vorbereiten

⸻

## Phase 4 — CMS & Dynamic Content

* Inhalte dynamisch verwalten können.

### Geplante Features:

* Datei-Uploads
* Projekte ergänzen
* Beats / Medien verwalten
* Portfolio erweitern
* eventuell Blog / Updates

### Mögliche Lösungen:

* Supabase￼
* Firebase￼
* Sanity￼
* JSON-basierte lokale Datenstruktur (einfachste Variante)

### Empfohlene Richtung - Supabase:

* kostenlose Einstiegsebene
* Auth + Datenbank + Storage kombiniert
* gut mit React kompatibel
* alleine umsetzbar
* skalierbar ohne eigenes Backend

⸻

## Phase 5 — Deployment & Production

* Professionelles Deployment mit einfacher Wartung.

### Stack

* GitHub Repository
* Vercel Deployment
* eigene Domain

### Zielzustand

* Push auf GitHub → automatische Live-Updates
* responsive Production Website
* Portfolio + Shop + CMS verbunden

⸻

# Entwicklungsphilosophie

Prioritäten

1. Skalierbarkeit vor Geschwindigkeit

Lieber ein sauberes Fundament als schnelle improvisierte Lösungen.

⸻

2. Komponenten statt Einzelseiten

Alles möglichst wiederverwendbar denken:

* Layouts
* Sections
* Cards
* Navigation
* States
* Utilities

⸻

3. Mobile-First

Responsive Verhalten wird nicht später ergänzt, sondern direkt mitgedacht.

⸻

4. Lernbar & alleine wartbar

Keine unnötig komplizierten Enterprise-Lösungen.

Das System soll:

* verständlich bleiben
* dokumentierbar sein
* alleine wartbar bleiben
* später erweiterbar sein

⸻

5. Möglichst geringe Kosten

Bevorzugt:

* kostenlose Tools
* Open-Source Lösungen
* Hosting mit Free Tier
* einfache Infrastruktur

⸻

Wo du aktuell stehst

Bereits sehr gut aufgebaut

Du bist aktuell exakt an dem Punkt angekommen, an dem professionelle Frontend-Systeme normalerweise beginnen:

Du hast bereits:

* Setup abgeschlossen
* Git Workflow eingerichtet
* Design Tokens aufgebaut
* Foundation Layer definiert
* Architektur begonnen
* Skalierbarkeit mitgedacht

Das ist bereits deutlich strukturierter als viele kleine Projekte.

⸻

Der tatsächliche nächste Schritt

Jetzt NICHT:

* React
* CMS
* Backend
* Shop
* komplexe Komponenten

⸻

Jetzt JA:

1. Layout Tokens finalisieren

Noch definieren:

* Container Widths
* Breakpoints
* Grid Columns
* Layout Gaps

⸻

2. Layout CSS Layer bauen

Danach:

* container.css
* grid.css
* section.css
* stack.css

Das wird dein eigentliches Layout-System.

⸻

3. Erste echte responsive Seite bauen

Noch ohne React.

Ziel:

* Hero
* Navbar
* Sections
* Cards
* Responsive Layout
* saubere CSS Architektur

⸻





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