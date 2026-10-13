# Sales Copilot — Product Website

A production-oriented React and TypeScript marketing website for **Sales Copilot**, a desktop AI application designed to provide private, real-time coaching during live sales conversations.

This repository represents the **public-facing web experience** for the broader Sales Copilot product ecosystem. It was designed both as a real product website and as a software engineering portfolio project demonstrating front-end architecture, reusable component design, responsive UI development, routing, deployment, product thinking, and the ability to translate a complex software product into a polished user experience.

> **Project Status:** Frontend complete and deployment-ready  
> **Architecture:** React + TypeScript + Vite  
> **Hosting:** Netlify  
> **Deployment:** GitHub → Netlify continuous deployment

---

## Why I Built This

Sales Copilot began as a larger software engineering project focused on a problem I have experienced firsthand in sales:

**The most valuable coaching usually happens after the call—when the moment to use it has already passed.**

The broader Sales Copilot product is being designed as a Windows desktop application that can run alongside Zoom, Microsoft Teams, Google Meet, and other sales conversations.

The product vision is to provide a private AI coaching layer that can understand a live conversation and surface useful guidance while the salesperson is still speaking with the prospect.

Examples include:

- Detecting objections
- Identifying buying signals
- Surfacing missed discovery questions
- Recognizing affordability concerns
- Identifying decision-maker or spouse involvement
- Highlighting potential closing opportunities
- Suggesting what to say next
- Suggesting what to ask next
- Providing playbook-specific coaching

The website was built to give that product a professional public presence and to solve a different engineering problem:

**How do you take a technically complex AI product and communicate its value through a fast, clear, credible, and conversion-focused web experience?**

---

## Project Goals

I built the website around several goals.

### 1. Create a Real Product Experience

I did not want the site to feel like a generic developer portfolio project.

The goal was to create something that could realistically serve as the public website for a commercial software product.

That meant thinking beyond individual components and considering:

- Product positioning
- Information architecture
- Conversion flow
- Pricing presentation
- Brand consistency
- User trust
- Privacy messaging
- Responsive behavior
- SEO fundamentals
- Deployment
- Maintainability

---

### 2. Demonstrate Front-End Engineering Skills

The project gave me an opportunity to build a multi-page React application with a reusable architecture rather than placing the entire website in a single component.

Areas of focus included:

- React component architecture
- TypeScript
- Client-side routing
- Shared layouts
- Reusable UI components
- Centralized product configuration
- Responsive design
- State-driven forms
- SPA routing
- Deployment configuration
- Maintainable project structure

---

### 3. Separate Product Layers Intentionally

The Sales Copilot ecosystem is larger than this repository.

I intentionally separated the public website from the future application backend and desktop application.

This repository focuses specifically on:

```text
Marketing
Product positioning
Pricing
Lead capture
Support
Legal pages
Responsive UI
Deployment
```

It does **not** contain production authentication, payment processing, AI services, customer entitlements, or installer delivery.

Those systems belong in separate trusted application/backend layers rather than being unnecessarily coupled to the public marketing site.

This separation keeps the frontend simpler, safer, and easier to maintain.

---

# Technology Stack

## Front End

- **React**
- **TypeScript**
- **Vite**
- **React Router**
- **Tailwind CSS**
- **Lucide React**
- **Inter**
- **IBM Plex Mono**

## Hosting & Deployment

- **GitHub** — source control
- **Netlify** — hosting and continuous deployment
- **Netlify Forms** — lightweight early-access and support form handling

---

# Architecture

The site uses a reusable component and layout architecture rather than page-specific duplication.

```text
src/
├── app/
│   └── router.tsx
│
├── components/
│   ├── BrandMark.tsx
│   ├── EarlyAccessForm.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── PageMeta.tsx
│   ├── ProductMockup.tsx
│   ├── ScrollManager.tsx
│   └── SupportForm.tsx
│
├── config/
│   └── brand.ts
│
├── layouts/
│   └── MarketingLayout.tsx
│
├── pages/
│   ├── HomePage.tsx
│   ├── NotFoundPage.tsx
│   ├── PricingPage.tsx
│   ├── PrivacyPage.tsx
│   ├── SupportPage.tsx
│   └── TermsPage.tsx
│
├── App.tsx
├── index.css
└── main.tsx
```

---

# Key Engineering Decisions

## Centralized Brand Configuration

Core product information is stored in:

```text
src/config/brand.ts
```

This includes values such as:

- Product name
- Tagline
- Product description
- Pricing
- Included usage

Instead of scattering those values throughout the application, they can be updated from a single source.

This helps reduce duplication and makes future product changes easier to maintain.

---

## Reusable Marketing Layout

Public pages share a common layout structure:

```text
Header
   ↓
Page Content
   ↓
Footer
```

This prevents individual pages from having to recreate global navigation and footer behavior.

---

## Component-Based UI

Repeated interface patterns were extracted into components rather than duplicated across pages.

Examples include:

- Navigation
- Brand identity
- Product preview
- Early-access form
- Support form
- Page metadata
- Scroll management
- Footer

The goal was to keep page components focused on composition rather than implementation details.

---

## Client-Side Routing

React Router powers the site's page architecture.

Current routes include:

```text
/
├── /pricing
├── /support
├── /privacy
├── /terms
└── custom 404
```

Netlify SPA redirects are configured so that directly navigating to routes such as:

```text
/pricing
/support
/privacy
```

still loads the React application correctly.

---

## Responsive Design

The site was designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

Layouts, typography, navigation, product mockups, pricing sections, and calls to action adapt based on screen size rather than relying on a desktop-only presentation.

---

## Product UI Mockup

One of the main visual elements of the homepage is a custom Sales Copilot interface mockup.

Instead of using a generic SaaS screenshot, the mockup is designed around the actual product concept and demonstrates the types of coaching Sales Copilot could surface during a conversation:

```text
WHAT'S HAPPENING
SAY
ASK
ALERT
```

This allows visitors to understand the product without needing access to the desktop application itself.

---

# Product Positioning

The current positioning is:

> **Know what to say while the call is still happening.**

Sales Copilot is presented as:

> A private, real-time AI coaching layer that listens alongside the salesperson, understands the conversation, and surfaces what to say, ask, or notice before the moment passes.

The initial product positioning is particularly focused on complex sales conversations where discovery, objections, decision-making, and timing matter.

---

# Pricing Concept

The current product concept uses:

```text
Sales Copilot Professional

$79 / month

600 live-call minutes
```

The pricing page is currently presentation-only.

No payment information is collected by this repository.

A future commercial implementation could connect the pricing experience to a dedicated billing and entitlement backend.

---

# Forms

The website includes:

```text
Early Access
Support
```

Both are designed to work with **Netlify Forms** after deployment.

This allows the static frontend to collect submissions without introducing a custom API solely for basic contact forms.

When running locally, the forms simulate the success experience so the UI can still be tested.

---

# Pages

## Homepage

The homepage is designed as the main product storytelling and conversion experience.

It includes:

- Hero section
- Product positioning
- Sales Copilot interface mockup
- Problem framing
- Coaching capabilities
- How It Works
- Insurance-focused positioning
- Privacy messaging
- Pricing preview
- FAQ
- Early-access CTA

---

## Pricing

```text
/pricing
```

Presents the planned Sales Copilot Professional offering and product features.

---

## Support

```text
/support
```

Provides a simple support/contact experience using Netlify Forms.

---

## Privacy

```text
/privacy
```

Contains the current pre-launch privacy notice and communicates the intended privacy-first direction of the product.

---

## Terms

```text
/terms
```

Contains the current pre-launch terms page.

---

## 404

Unknown routes render a custom not-found experience rather than a blank page or generic browser error.

---

# Local Development

## Requirements

Node.js 22 is recommended.

Check your installed versions:

```bash
node --version
npm --version
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

Vite will provide a local development URL, typically:

```text
http://localhost:5173
```

---

## Production Build

```bash
npm run build
```

The production-ready static application is generated in:

```text
dist/
```

Preview the production build locally:

```bash
npm run preview
```

---

# Deployment

The project is designed around a simple continuous deployment workflow:

```text
Local Development
        ↓
Git Commit
        ↓
GitHub
        ↓
Netlify Build
        ↓
Production Website
```

Netlify uses:

```text
Build command:
npm run build

Publish directory:
dist
```

The repository also includes `netlify.toml` for deployment configuration and SPA routing.

Once GitHub and Netlify are connected, pushing changes to the production branch automatically triggers a new deployment.

---

# Current Scope

This repository intentionally represents the **marketing frontend** rather than the entire Sales Copilot platform.

Currently implemented:

- React application
- TypeScript architecture
- Responsive design
- Multi-page routing
- Product positioning
- Product mockup
- Pricing page
- Early-access flow
- Support flow
- Privacy page
- Terms page
- SEO/page metadata
- Netlify deployment configuration
- Netlify Forms integration
- Custom 404 handling

---

# Planned Next Steps

The broader Sales Copilot roadmap extends significantly beyond the marketing website.

Future development is intended to include areas such as:

### Desktop Application

A Windows desktop application built around:

- Electron
- React
- TypeScript
- Microphone audio capture
- System audio capture
- Real-time transcription
- Live coaching UI

### Authentication

A shared user account system for the website and desktop application.

### Subscription & Entitlement Management

A commercial account layer capable of managing:

- Subscription status
- Product access
- Usage limits
- Customer billing state

### AI Coaching Infrastructure

Server-side systems for:

- Conversation analysis
- Objection detection
- Buying-signal detection
- Discovery analysis
- Next-best-action coaching
- Playbook-driven sales guidance

### Usage Metering

Tracking live-call usage against subscription allowances.

### Secure Desktop Distribution

Authenticated delivery of versioned Windows installers.

### Product Analytics

Understanding:

- User activation
- Feature usage
- Coaching frequency
- Session activity
- Product engagement

---

# What I Wanted to Demonstrate With This Project

Beyond simply creating a marketing page, this project was intended to demonstrate how I approach software development as a product problem.

That includes thinking about:

- Who the user is
- What problem the product solves
- How the value proposition should be communicated
- How code should be structured for change
- Where responsibilities should be separated
- What belongs on the client versus a trusted backend
- How deployment should work
- How a project can evolve from MVP to a larger commercial system

I wanted the website itself to feel like part of a real software product rather than a disposable portfolio mockup.

---

# Broader Project Vision

Sales Copilot is ultimately intended to combine:

```text
Desktop Software
        +
Real-Time Transcription
        +
AI Reasoning
        +
Sales Methodology
        +
Live Coaching
        +
Commercial SaaS Infrastructure
```

into a single application designed around one core idea:

> **Help the salesperson make a better decision while the conversation is still happening.**

This website is the public-facing foundation for that larger system.

---

# Repository Focus

If you are reviewing this repository as a recruiter, hiring manager, or engineer:

**This repo is intentionally focused on the frontend marketing experience.**

The areas I would highlight are:

- React architecture
- TypeScript
- Reusable components
- Responsive design
- Client-side routing
- Product-oriented UI development
- Maintainable project structure
- Deployment configuration
- Separation of frontend and backend responsibilities
- Translating a product concept into a usable web experience

The larger Sales Copilot project is designed to continue evolving beyond this repository as additional desktop, backend, AI, and commercial infrastructure is implemented.
