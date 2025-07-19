
### **Product Requirements Document: SuburbCompass.ai**

*   **Version:** 2.0
*   **Author:** AI Assistant
*   **Date:** July 19, 2025
*   **Status:** Draft (Updated with Market Research)

### 1. Introduction & Vision

**SuburbCompass.ai is an intelligent, personalized platform designed to demystify property investment for first-time investors in Australia.** The Australian property market is complex, data-rich, but insight-poor for novices. New investors are often paralyzed by choice, overwhelmed by conflicting advice, and fearful of making a multi-million dollar mistake.

Our vision is to be the trusted co-pilot for the new property investor, transforming their fear and analysis paralysis into confidence and decisive action. We do this by translating raw market data and complex local factors (like strata reports and council zoning) into personalized, actionable insights, guiding users from a vague goal to a curated list of suitable suburbs and properties.

### 2. Problem Statement

The journey for a first-time property investor is broken. They face several critical pain points:

*   **Information Overload:** They are drowning in data (median prices, yields, auction clearance rates) but don't have the framework to interpret it or apply it to their personal situation.
*   **Lack of a Clear Starting Point:** Their primary question, "Where should I even start looking?", is the hardest to answer. They spend months aimlessly browsing property portals without a clear strategy.
*   **Underestimation of Nuance:** They often focus on a single metric (e.g., capital growth) without understanding the interplay of factors like rental demand, infrastructure development, council zoning, and demographics that drive long-term value.
*   **Fear and Lack of Confidence:** The financial stakes are enormous. This fear leads to indecision, causing them to miss opportunities or, conversely, rush into a poor decision based on hype or emotion.
*   **Opaque Local Risks:** Critical but hard-to-access information, such as the financial health of a strata scheme, local development applications, or the real-world cost of negative gearing, presents a significant barrier to confident decision-making.

### 3. Goals & Objectives

#### Business Goals
*   Achieve Product-Market Fit with the first-time Australian property investor segment.
*   Establish a subscription-based revenue model (e.g., freemium with a premium "Pro" tier).
*   Become the go-to starting point for property investment research, reducing reliance on generic forums and blogs.

#### User Goals
*   To quickly identify 3-5 investment-grade suburbs that align with their personal financial goals.
*   To understand the true, all-inclusive costs and risks of a potential investment before committing.
*   To save dozens of hours of manual research time.
*   To feel confident and educated in their decision-making process.
*   To quickly evaluate the viability and hidden risks of a specific property listing.

### 4. Target Audience & User Personas

**Primary Persona: "First-Time Frankie"**

*   **Age:** 28-38
*   **Profession:** Tech, Healthcare, Professional Services. Good income but time-poor.
*   **Financials:** Has saved a deposit ($100k - $150k) and has pre-approval for a loan.
*   **Goals:** Wants to buy their first investment property for long-term capital growth but is open to a balanced or cash-flow strategy if it makes sense.
*   **Frustrations:** "I've read all the books and listened to the podcasts, but I still don't know how to apply it to *my* situation. Every time I find a 'hot' suburb, I feel like I'm already too late. I'm scared of buying a dud, especially in a building with a nightmare strata committee or a huge special levy just around the corner."

### 5. Competitive Landscape & Our Differentiators

#### **Current Competitors**
1.  **Data-Heavy Platforms (e.g., SuburbsFinder, Stash, Real Estate Investar):** These tools are powerful but cater to experienced investors and buyer's agents. They provide a vast sea of data points, charts, and filters but offer little guidance, making them overwhelming for novices.
2.  **Service-Based Models (e.g., PropHero):** These are tech-enabled buyer's agencies. They offer a "done for you" service, which is great but doesn't empower the user to learn and make their own decisions. Their value is in the service, not the software itself.
3.  **Generic Property Portals (e.g., realestate.com.au, Domain):** Excellent for listings, but their analysis tools are superficial and not tailored to an individual investor's strategy or the deep due diligence required.

#### **Our Key Differentiators**
*   **From Data to Insight:** We don't just show users data; we interpret it for them. Our AI narratives and simulators translate complex numbers into simple, actionable advice.
*   **Focus on the First-Time Investor:** Our entire UX/UI is designed for simplicity and guidance, removing the jargon and fear from the process.
*   **Solving "Hard Australian Problems":** We are building a competitive moat by tackling the most confusing, Australia-specific challenges that others ignore:
    *   **Demystifying Strata:** Our AI Strata Report Analyzer is a unique tool that tackles a major pain point for apartment investors.
    *   **Clarifying Negative Gearing:** Our simulator makes the real-world cash flow impact of negative gearing easy to understand.
    *   **Illuminating Council Plans:** Our zoning and DA tracker makes hyperlocal future developments transparent.

### 6. Features & Requirements (v2.0)

#### **Feature 1: The Investor DNA Profile (Enhanced)**

*   **Description:** A guided, interactive onboarding questionnaire that captures the user's unique investment profile. This profile becomes the foundation for all recommendations.
*   **User Stories:**
    *   As a new investor, I want to answer simple questions about my budget, goals, and risk tolerance so the platform can understand what I'm looking for.
    *   As a user, I want to see a summary of my "Investor DNA" so I can confirm the platform has understood me correctly.
*   **Enhancements for v2.0:**
    *   The questionnaire will now ask about **Financial Literacy** (e.g., "Beginner," "I know the basics") to tailor the complexity of the language used in the app.
    *   It will capture **Risk Profile Nuances** (e.g., "I prefer new builds," "I'm open to a cosmetic renovation," "Strata properties only").
*   **Acceptance Criteria:**
    *   Questionnaire covers: Investment Budget, Primary Goal (Growth, Yield, Balanced), Risk Tolerance, Property Preferences (House, Townhouse, Apartment), Renovation Appetite, and Financial Literacy.
    *   Upon completion, a summary screen is displayed.
    *   The user can edit their profile at any time.

#### **Feature 2: AI-Powered Suburb Matchmaker**

*   *(No significant change from v1.0, but its recommendations will be more accurate due to the enhanced profile.)*

#### **Feature 3: "Why This Suburb?" AI Narratives**

*   *(No significant change from v1.0.)*

#### **Feature 4: Instant Deal Analyzer (Enhanced)**

*   **Description:** A tool that allows users to get a quick, AI-driven assessment of any live property listing by pasting a URL.
*   **User Story:**
    *   As a new investor, I want to paste a URL from realestate.com.au or domain.com.au and get an instant, deep analysis so I can quickly vet properties and understand their hidden risks.
*   **Enhancements for v2.0:**
    *   Integrates results from the **Strata Analyzer** (if applicable), **Gearing Simulator**, and **Zoning Tracker**.
    *   A "Red Flag" system will explicitly warn about common issues like flood zones, heritage overlays, and proximity to major infrastructure.
*   **Acceptance Criteria:**
    *   Parses listing URL for key data.
    *   Report includes:
        1.  "Investment Potential" score.
        2.  "Pros" and "Cons / Red Flags".
        3.  Estimated weekly rent and gross yield.
        4.  A snapshot from the Negative Gearing Simulator.
        5.  A summary of the AI Strata Report analysis (if a report is uploaded).
        6.  A mini-map showing nearby DAs from the Zoning Tracker.

---
#### **_NEW Features for v2.0_**
---

#### **Feature 5: AI Strata Report Analyzer**

*   **Description:** An LLM-powered tool that allows a user to upload a PDF Strata Inspection Report and receive a simplified "Building Health Check" summary.
*   **User Story:**
    *   "As a new investor confused by a 300-page strata report, I want to upload it and get a clear summary of the building's financial health, any major disputes, or upcoming special levies, so I can avoid buying into a problem building."
*   **Acceptance Criteria:**
    *   User can upload a PDF document.
    *   The tool scans the text for keywords like "special levy", "litigation", "defect", "waterproofing", "cladding", "concrete cancer".
    *   It extracts the Administrative Fund and Capital Works Fund (Sinking Fund) balances.
    *   It identifies any major upcoming works or disputes mentioned in AGM/EGM minutes.
    *   It generates a summary with a traffic-light system (Green: Looks good; Amber: Points to investigate; Red: Significant concerns identified).
    *   It provides a list of specific, targeted questions the user should ask the strata manager or their conveyancer.

#### **Feature 6: Negative Gearing Simulator**

*   **Description:** An interactive, personalized calculator that demystifies negative gearing and shows the real-world weekly cash flow impact.
*   **User Story:**
    *   "As a new investor, I want to enter a property's details and see exactly how it would affect my weekly budget and year-end tax position, so I can understand if I can truly afford the holding costs."
*   **Acceptance Criteria:**
    *   Pulls the user's estimated salary from their Investor DNA Profile.
    *   Uses property price, estimated rent, and outgoings (rates, strata fees) from the Deal Analyzer.
    *   Calculates the estimated weekly out-of-pocket cash flow required.
    *   Calculates the estimated potential tax refund based on the user's marginal tax rate.
    *   Presents the results in simple, clear language (e.g., "This property may cost you approx. **$85 per week** out-of-pocket, but you could receive a potential tax refund of around **$6,200** at year-end.").

#### **Feature 7: Council Zoning & Development Tracker**

*   **Description:** A map-based feature integrated into the suburb and deal analysis pages that shows local zoning and nearby development applications (DAs).
*   **User Story:**
    *   "As an investor, I want to see what is planned for the streets around my potential property, so I can avoid buying next to a future high-rise or, conversely, identify areas with positive new infrastructure."
*   **Acceptance Criteria:**
    *   Displays council zoning information on a map (e.g., R1 General Residential, R2 Low Density).
    *   Pulls and summarizes recent DA data from local council portals.
    *   Icons on the map indicate nearby DAs (e.g., new apartment block, childcare centre, subdivision).
    *   Clicking an icon provides a simple summary and a direct link to the DA on the council's website.

### 7. Data Requirements & Sources

The platform's success is critically dependent on high-quality, up-to-date data.

*   **Property Data:** Sales history, median prices, days on market, rental listings, asking rent.
    *   *Source:* CoreLogic, Pricefinder, or similar property data provider API.
*   **Demographic Data:** Population growth, age distribution, income levels, household structure.
    *   *Source:* Australian Bureau of Statistics (ABS) API.
*   **Economic & Infrastructure Data:** Vacancy rates, building approvals, infrastructure project announcements.
    *   *Source:* SQM Research, state government infrastructure websites.
*   **Geospatial Data:** School catchments, transport links, walkability scores, flood zones, heritage overlays.
    *   *Source:* OpenStreetMap, Google Maps API, various government data portals.
*   **Council Data:** Zoning maps (e.g., via GeoJSON/Shapefiles) and public-facing Development Application (DA) portals for major metropolitan councils.
*   **Taxation Data:** Official ATO income tax brackets to power the Negative Gearing Simulator.
*   **Strata Report Data:** User-uploaded PDF documents for AI analysis.

### 8. Technical Considerations & Assumptions

*   **Platform:** Web application first (responsive for mobile), native mobile app is out of scope for V1.
*   **AI Models:**
    *   **Matching Engine:** A hybrid approach using a combination of filtering and a machine learning model (e.g., a regression or ranking model) to calculate the "Match Score".
    *   **Narrative & Strata Analysis:** An API-driven LLM (e.g., GPT-4o, Claude 3 Sonnet) with carefully engineered prompts and a RAG (Retrieval-Augmented Generation) architecture to ground responses in factual data from listings and uploaded reports.
*   **Security:** Bank-level security for any user data. All uploaded strata reports must be handled with strict privacy controls and deleted after analysis.

### 9. Success Metrics (KPIs)

*   **Activation Rate:** % of new users who complete the Investor DNA Profile.
*   **Engagement Rate:** Average number of suburbs viewed and deals analyzed per user per week.
*   **Feature Adoption:** % of Deal Analyses that include a Strata Report upload. % of users who interact with the Negative Gearing Simulator.
*   **Conversion Rate:** % of free users who upgrade to a paid "Pro" subscription.
*   **North Star Metric:** % of active users who "shortlist" or "save" a recommended property for further investigation.

### 10. Out of Scope for MVP

*   Direct integration with mortgage brokers or conveyancers.
*   Portfolio tracking for existing properties.
*   A marketplace for buyer's agents.
*   Advanced financial modeling (e.g., depreciation schedules, detailed tax implications).

### 11. Risks & Dependencies

*   **Data Accuracy & Cost:** The reliability of our recommendations depends entirely on the quality and freshness of our data sources. Data provider APIs and council data scraping can be expensive and complex.
*   **AI Hallucinations:** The LLM for narratives and strata analysis could potentially generate inaccurate information. Mitigation: Strict prompt engineering, RAG, and clear disclaimers that the AI summary is not a substitute for professional legal/conveyancing advice.
*   **Regulatory Risk:** We must be extremely careful not to provide financial advice. All content must include clear, prominent disclaimers.
*   **User Over-reliance:** Users may treat the tool as a "silver bullet" and neglect crucial due diligence. Mitigation: The UI/UX must constantly reinforce that the tool is a starting point for research, not a replacement for it.
*   **Scalability of Council Data:** Scraping and standardizing DA information from dozens of different council websites is a significant technical challenge. Initial launch may be limited to a specific set of high-demand councils (e.g., in Sydney and Melbourne). 