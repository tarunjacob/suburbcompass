# SuburbCompass.ai - Development Task List

This document outlines the step-by-step tasks required to build the SuburbCompass.ai platform, as defined in the PRD v2.0.

---

### Phase 1: Foundation & MVP Scaffolding (Weeks 1-4)

-   [ ] **Task 1.1: Setup Project & Tech Stack**
    -   Initialize Git repository.
    -   Setup frontend application (e.g., Next.js, TypeScript, Tailwind CSS).
    -   Setup backend services (e.g., Python with FastAPI for AI, Node.js/Express for general API).
    -   Setup database (PostgreSQL).
    -   Dockerize all services for local development.

-   [ ] **Task 1.2: Design Database Schema**
    -   Define tables for `users`, `investor_profiles`, `suburbs`, `properties`, `saved_searches`, `subscriptions`.
    -   Establish relationships and constraints.

-   [ ] **Task 1.3: Implement User Authentication & Investor DNA Profile**
    -   Build user registration and login flows (e.g., using NextAuth.js or Clerk).
    -   Create the multi-step "Investor DNA Profile" questionnaire (Feature 1, Enhanced).
    -   Store profile data against the user record.

-   [ ] **Task 1.4: Build UI/UX Wireframes & Core Components**
    -   Design high-fidelity wireframes for all major screens.
    -   Develop a reusable component library (e.g., using Storybook).

-   [ ] **Task 1.5: Setup Initial Data Ingestion Pipeline**
    -   Write scripts to ingest and normalize data from initial sources (e.g., ABS for demographics, sample property data).
    -   Setup cron jobs or serverless functions for periodic updates.

---

### Phase 2: Core Feature Development (Weeks 5-9)

-   [ ] **Task 2.1: Develop AI-Powered Suburb Matchmaker (Feature 2)**
    -   Build the backend algorithm to filter and rank suburbs based on the Investor DNA Profile.
    -   Create the frontend results page to display matched suburbs with key metrics and a "Match Score".

-   [ ] **Task 2.2: Develop "Why This Suburb?" AI Narratives (Feature 3)**
    -   Engineer the LLM prompts with RAG to generate personalized suburb explanations.
    -   Integrate the LLM API call into the suburb details view.

-   [ ] **Task 2.3: Build Instant Deal Analyzer (v1.0 version)**
    -   Develop a basic URL parser for major property portals.
    -   Create the initial analysis report with "Pros" and "Cons" and basic yield calculations.

-   [ ] **Task 2.4: Implement Subscriptions & Payments**
    -   Integrate a payment provider (e.g., Stripe).
    -   Create subscription plans (Freemium, Pro) and manage user access levels.

---

### Phase 3: Advanced AI & Data Integration (Weeks 10-14)

-   [ ] **Task 3.1: Develop AI Strata Report Analyzer (Feature 5)**
    -   Build the PDF upload functionality.
    -   Develop the backend service to process PDFs (text extraction, keyword analysis).
    -   Fine-tune the LLM prompts to generate the "Building Health Check" summary.
    -   Design and build the results UI with the traffic-light system.

-   [ ] **Task 3.2: Develop Negative Gearing Simulator (Feature 6)**
    -   Create the calculator logic using ATO tax brackets.
    -   Design and build the interactive UI components.

-   [ ] **Task 3.3: Build Council Zoning & Development Tracker (Feature 7)**
    -   Develop web scrapers or API connectors for initial target council DA portals.
    -   Create a standardized data model for DAs and zoning info.
    -   Integrate map views (e.g., Mapbox, Google Maps) to display the data.

-   [ ] **Task 3.4: Enhance Instant Deal Analyzer to v2.0**
    -   Integrate the outputs from the Strata Analyzer, Gearing Simulator, and Zoning Tracker into the main report.
    -   Implement the "Red Flag" warning system.

---

### Phase 4: Pre-Launch & Deployment (Weeks 15-16)

-   [ ] **Task 4.1: End-to-End Testing**
    -   Write comprehensive unit and integration tests.
    -   Conduct User Acceptance Testing (UAT) with a closed group.
    -   Perform security and performance testing.

-   [ ] **Task 4.2: Setup CI/CD & Production Environment**
    -   Configure CI/CD pipelines (e.g., GitHub Actions) for automated testing and deployment.
    *   Provision production infrastructure (e.g., on Vercel, AWS, or GCP).

-   [ ] **Task 4.3: Finalize Go-to-Market Assets**
    -   Build the marketing landing page.
    -   Prepare help documentation and user guides.

-   [ ] **Task 4.4: Launch**
    -   Launch the platform to the public.
    -   Monitor system health, user feedback, and analytics. 