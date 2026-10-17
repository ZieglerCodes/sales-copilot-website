# Sales Copilot

Real time AI coaching for live sales conversations.

**Product Website:**  
https://salescopilot2026.netlify.app/

## The Problem

I've spent most of my career in sales and have trained other salespeople along the way.

One problem appeared repeatedly.

A prospect would raise an objection and the salesperson would not know what to say.

Sometimes they froze.

Sometimes they gave a weak response.

Sometimes they thought of the perfect answer five minutes after the call ended.

Traditional coaching usually happens after the conversation.

By that point, the opportunity may already be gone.

I wanted to build software that could help while the conversation was still happening.

## What I Built

Sales Copilot is a completed desktop AI application designed to run alongside a salesperson during a live conversation.

The application can process the conversation, maintain context, recognize important sales moments, and provide guidance while the salesperson still has an opportunity to act.

The product is designed around capabilities such as:

- Objection detection
- Buying signal recognition
- Discovery guidance
- Suggested responses
- Suggested follow up questions
- Conversation context
- Sales playbooks
- Real time coaching

The goal is simple:

> Help the salesperson know what to say while the call is still happening.

## Product Status

The Sales Copilot desktop application is complete and ready to use.

Like any software product, there is room for continuous improvement, additional integrations, mobile expansion, and future commercial infrastructure.

The core desktop product itself is complete.

## This Repository

This repository contains the **public Sales Copilot product website**.

The desktop application is maintained separately.

The website was created to give Sales Copilot a professional public presence and communicate a technically complex product in a clear, product focused way.

## Website Goals

The website needed to explain:

- What Sales Copilot does
- Who it is for
- Why real time coaching matters
- How the product fits into a sales workflow
- What the product could cost
- How users could request access or support

It also needed to feel like a real software product rather than a portfolio mockup.

## Technology Stack

### Front End

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Lucide React
- Inter
- IBM Plex Mono

### Hosting

- GitHub
- Netlify
- Netlify continuous deployment
- Netlify Forms

## Application Structure

The website uses reusable layouts and components rather than building every page independently.

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

## Routes

The public application currently includes:

```text
/
/pricing
/support
/privacy
/terms
custom 404
```

React Router handles navigation, while Netlify redirect configuration supports direct navigation to SPA routes.

## Product UI Preview

The homepage includes a custom Sales Copilot interface preview designed around the actual coaching experience.

The interface communicates four major categories of assistance:

```text
WHAT'S HAPPENING
SAY
ASK
ALERT
```

This gives visitors an immediate understanding of how Sales Copilot can assist during a conversation.

## Key Engineering Decisions

### Separate the Website From the Desktop Application

The public marketing site and the desktop product solve different problems.

Keeping them separate reduces unnecessary coupling and lets each application evolve independently.

### Centralized Product Configuration

Product information is stored centrally instead of repeated throughout individual pages.

This reduces duplication and makes product updates easier to maintain.

### Reusable Layouts

Global navigation and footer behavior are shared through layout components rather than recreated on every page.

### Component Based UI

Repeated interface patterns are extracted into reusable components.

### Static Marketing Architecture

The website does not expose the trusted logic used by the desktop application.

Authentication, AI processing, product entitlements, and other sensitive systems belong in the application and backend layers rather than the marketing frontend.

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

The deployment workflow is:

```text
Local Development
      ↓
Git
      ↓
GitHub
      ↓
Netlify
      ↓
Production Website
```

Production:

https://salescopilot2026.netlify.app/

## Future Product Improvements

The desktop product is complete, but future versions can continue expanding the ecosystem.

Potential improvements include:

- Mobile companion application
- Additional meeting platform integrations
- More configurable playbooks
- Expanded coaching analytics
- Team administration
- Usage analytics
- Subscription management
- Secure installer distribution
- Additional AI coaching modes

These are product extensions, not requirements for the current desktop application to function.

## What This Project Demonstrates

For a recruiter, hiring manager, or engineer reviewing this repository, the areas I would highlight are:

- React application architecture
- TypeScript
- Reusable component design
- Responsive UI development
- Client side routing
- Product positioning
- Information architecture
- Deployment
- Separation of application responsibilities
- Translating a complex AI product into a clear user experience

Sales Copilot represents the type of software I enjoy building most: a product that starts with a problem I have personally seen and turns that problem into a usable technical solution.

## Portfolio

**Portfolio:**  
https://zieglercodes.netlify.app/

**GitHub:**  
https://github.com/ZieglerCodes

**LinkedIn:**  
https://www.linkedin.com/in/therealadamziegler/
