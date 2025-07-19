# SuburbCompass.ai

![SuburbCompass.ai Banner](https://i.imgur.com/your-banner-image.png) <!-- Placeholder for a nice banner image -->

**Your intelligent co-pilot for navigating the Australian property market.**

SuburbCompass.ai is a platform designed to demystify property investment for first-time investors in Australia. We transform fear and analysis paralysis into confidence and decisive action by translating raw market data into personalized, actionable insights.

---

### Key Features

*   **Investor DNA Profile:** A guided questionnaire to capture your unique budget, goals, and risk tolerance.
*   **AI-Powered Suburb Matchmaker:** Receive a curated list of investment-grade suburbs that perfectly match your profile.
*   **"Why This Suburb?" AI Narratives:** Understand the story behind the data with easy-to-read, AI-generated reports on suburb potential.
*   **Instant Deal Analyzer:** Paste any property listing URL (realestate.com.au, domain.com.au) to get an instant, deep analysis of its investment potential and hidden risks.
*   **AI Strata Report Analyzer:** Upload a dense strata report and receive a simple "Building Health Check" that flags key risks like special levies, defects, or disputes.
*   **Negative Gearing Simulator:** See the real-world weekly cash flow impact of an investment property on your budget.
*   **Council Zoning & Development Tracker:** View a map of nearby development applications to understand the future of the neighborhood.

---

### Tech Stack

*   **Frontend:** [Next.js](https://nextjs.org/) (React, TypeScript), [Tailwind CSS](https://tailwindcss.com/)
*   **Backend (API):** [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [PostgreSQL](https://www.postgresql.org/)
*   **Backend (AI):** [Python](https://www.python.org/), [FastAPI](https://fastapi.tiangolo.com/), [OpenAI](https://openai.com/)
*   **Containerization:** [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

---

### Getting Started

This project is fully containerized. All you need is Docker installed and running.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/suburbcompass-ai.git
    cd suburbcompass-ai
    ```

2.  **Create your environment file:**
    Duplicate the `.env.example` file (or create a new file named `.env`) and fill in your own secrets (like API keys).
    ```bash
    cp .env.example .env
    ```
    *Note: The `.env.example` file is currently missing due to repository restrictions. You will need to create a `.env` file manually and add the variables mentioned in the `docker-compose.yml` file.*

3.  **Build and run the containers:**
    ```bash
    docker-compose up --build
    ```
    This command will build the images for all services and start them.

4.  **Access the application:**
    *   **Web App:** [http://localhost:3000](http://localhost:3000)

---

### Contributing

We welcome contributions! Please feel free to submit a pull request or open an issue.

---

### Disclaimer

SuburbCompass.ai is a research tool and does not provide financial advice. All information should be independently verified, and you should consult with qualified professionals before making any investment decisions. 