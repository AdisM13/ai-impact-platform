# Praktijkopdracht: Digital Impact Platform
Onderwerp: Maatschappelijk Platform met AI, Playwright E2E-testing, GitHub Peer Reviews & CI/CD

## Context & Inleiding
In deze opdracht ga je een modern, responsief en toegankelijk webplatform bouwen rond een zelfgekozen maatschappelijk thema (bijv. mentale gezondheid, klimaat, armoedebestrijding of digitale inclusie).

Je maakt hierbij vrije keuzes in je framework (JavaScript/TypeScript) en CSS-bibliotheek. Daarnaast gebruik je de AI Agent in VS Code (bijv. GitHub Copilot Agent mode, Codex...) om de ontwikkeling te versnellen.

Om het ontwikkelproces professioneel te sturen, te borgen via testen/peer-reviews en grondig te documenteren, werk je met 3 verplichte bestanden:

* AGENTS.md – De instructies, regels en stijlgids voor de AI Agent.
* ROADMAP.md – Het actieplan en de takenlijst van wat nog gedaan moet worden.
* README.md – De einddocumentatie van het project en je reflectie op het AI-proces.

## Functionele Eisen (Inhoud & Structuur)
De webapplicatie moet minimaal bestaan uit minstens 6-7 pagina's en de volgende onderdelen bevatten:

### A. De Essentie: Waar staan jullie voor?
- Branding: Eigen verzonnen naam, origineel logo (SVG of WebP) en een passend kleurenpalet.
- Hero-sectie: Pakkende headline, duidelijke visual en een directe Call-to-Action (CTA).
- Missie & Visie: Welk maatschappelijk probleem kaarten jullie aan en hoe ziet de ideale toekomst eruit?
- Concrete Projecten & Impact: Tastbare initiatieven inclusief cijfers en data (bijv. "In 2025 hebben we 400 jongeren geholpen").

### B. Educatie & Informatievoorziening
- Kennisbank: Artikelen, blogs of een veelgestelde vragenlijst (FAQ) met duidelijke bronvermeldingen.
- Nieuws & Actualiteiten: Wat speelt er momenteel rondom dit thema?
- Downloadbare hulpmiddelen: Infographics, whitepapers of een lespakket.

### C. Actie & Interactie
- De Actie-knop: Mogelijkheden voor vrijwilligerswerk, vacatures, donaties of petities.
- Formulier + Spamfilter: Een werkend contact- of aanmeldformulier beschermd tegen spam (Turnstile, reCAPTCHA, of een slimme honeypot).
- Gamificatie: Een mini-game of quiz (bijv. Klimaat-quiz of Eco-calculator).

### D. Transparantie, Juridisch & Toegankelijkheid (WCAG 2.1 Level AA)
- Wie zijn wij & Contact: Teamfoto's/bio's, fysiek adres, e-mail en KBO-nummer.
- Transparantie: Financiële verantwoording of een jaarverslag.
- Juridisch: AVG/GDPR Privacy- en cookieverklaring.
- Digitale Toegankelijkheid: Voldoende kleurcontrast ($\ge 4.5:1$), volledige toetsenbordnavigatie (Tab, Enter), semantic HTML en teksten op taalniveau B1.

## Het Werkproces in 7 Stappen
### Stap 1: Repository Clonen & Project Opzetten
1. Clone de starter-repository via deze link naar je lokale machine.

2. Maak in de root van je repository een nieuwe map aan genaamd project/.

3. Initialiseer je gekozen framework (bijv. React, Vue, Svelte, Astro, Next.js of Vanilla JS/TS) en CSS-bibliotheek (bijv. Tailwind CSS, Bootstrap, CSS Modules) binnen de map project/.

### Stap 2: AI-Instructies Vastleggen
1. Maak in de root van het project het bestand `AGENTS.md` aan. Dit bestand dient als de "kennisbank" en system prompt voor de AI-agent. Dit bestand wordt automatisch meegegeven bij elke nieuwe vraag aan de AI. Hou dit kort en bondig. Vul hierin het volgende in:

**Systeem-rol**: Beschrijf de rol van de AI (bijv. "Je bent een senior frontend ontwikkelaar gespecialiseerd in WCAG 2.1 AA toegankelijk webdesign, modern JavaScript/TypeScript en geautomatiseerd testen met Playwright").

**Tech Stack**: Geef expliciet aan welke keuzes je maakt (bijv. TypeScript, React, Tailwind CSS, Playwright).

**Schrijfstijl & Design Vibe**: Bepaal de 'vibe' voor de organisatie (bijv. "Toegankelijk, warm, betrouwbaar met hoog contrast en een modern kleurenpalet").

**Regels & Constraints**: Bijv. "Schrijf semantische HTML5, garandeer toetsenbordnavigatie (Tab/Enter), schrijf Playwright E2E-testen voor kritieke flows, en voeg altijd ARIA-labels toe".

> ARIA-labels (Accessible Rich Internet Applications labels) zijn speciale HTML-attributen (aria-label en aria-labelledby) die extra context bieden aan schermlezers (screen readers) voor mensen met een visuele beperking. Ze worden gebruikt wanneer de visuele interface onvoldoende tekstuele informatie bevat voor assistieve technologieën.

Voorbeeld:
```markdown
# AI Agent Instructions & Guidelines

## Rol & Expertise
Je bent een Senior Frontend Developer en Accessibility Specialist. Je helpt mij om een modern, toegankelijk webplatform voor een maatschappelijke organisatie te bouwen.

## Tech Stack
* **Framework:** [React / Vue / Svelte / Astro / Vanilla JS/TS]
* **CSS Framework:** [Tailwind CSS / Bootstrap / CSS Modules / etc.]
* **Test Tooling:** Playwright voor E2E- en toegankelijkheidstesten

## Design Vibe & Richtlijnen
* **Vibe:** [bijv. Clean, betrouwbaar, maatschappelijk betrokken met duidelijke typografie]
* **Kleurenpalet & Contrast:** Primary `#0f172a`, Accent `#0d9488`, Achtergrond `#f8fafc`. Voldoet aan WCAG AA (contrast ratio >= 4.5:1).

## Regels & Constraints
1. Gebruik altijd semantische HTML5 (`<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`).
2. Schrijf mobile-first en volledig responsief (vanaf 320px tot desktop).
3. Elke interactie moet volledig bedienbaar zijn met het toetsenbord (`Tab`, `Enter`, `Escape`).
4. Alle formulieren moeten een werkende spamfilter (Turnstile, reCAPTCHA of Honeypot) en heldere foutmeldingen bevatten.
```

### Stap 3: Analyse & Actieplan in ROADMAP.md
1. Open de AI Agent in VS Code. Doordat je instructies in AGENTS.md staan, neemt de AI deze automatisch mee.

2. Vraag de AI om op basis van de functionele eisen (3+ pagina's, hero, kennisbank, contactformulier met spamfilter, transparantie & WCAG) een projectstructuur en stappenplan op te stellen. Werk niet te veel functionele eisen in één keer uit. Leg wel het onderwerp/thema uit van de website.

3. Sla het door AI opgestelde plan op in `ROADMAP.md`. Dit bestand bevat alles wat nog gedaan moet worden (backlog / to-do list met checkboxen).

Voorbeeld:
```markdown
# Project Plan & Backlog (To-Do)

## Openstaande Taken
- [ ] **Fase 1: Setup & Branding**
  - [ ] Projectstructuur initialiseren in `project/`.
  - [ ] Eigen naam, logo (SVG/WebP) en kleurenpalet toevoegen.
- [ ] **Fase 2: Pagina's & Inhoud (Min. 3 Pagina's)**
  - [ ] **Home:** Hero-sectie met visual + CTA, Missie & Visie, Concrete impactdata (bijv. cijfers/resultaten).
  - [ ] **Kennisbank:** Artikelen/FAQ met bronvermelding en downloadbaar lespakket/infographic.
  - [ ] **Actie & Contact:** Vrijwilligers/donatie-module, contactformulier met werkende spamfilter, en transparantie (KBO-nummer, AVG privacyverklaring).
  - [ ] *(Optioneel)* **Gamificatie:** Mini-game of interactieve quiz (bijv. Klimaat-calculator).
- [ ] **Fase 3: Toegankelijkheid & Testen**
  - [ ] WCAG 2.1 AA check (kleurcontrast, alt-teksten, toetsenbordnavigatie).
  - [ ] Playwright E2E-testen schrijven voor navigatie, formuliervalidatie en spamfilter.
- [ ] **Fase 4: Git Workflow & Deployment**
  - [ ] Netlify koppelen voor automatische build bij PR's.
  - [ ] GitHub Actions workflow instellen voor automatische Playwright-testruns.
```

### Stap 4: Gestructureerd Ontwikkelen, Peer Review (PR) & Commits
1. Er mag niet rechtstreeks naar de main branch gecommitted worden. Maak voor elke taak een feature-branch aan (bijv. feature/hero-section, feature/playwright-tests) op basis van de main branch.

2. Voer de wijzigingen stap voor stap uit met de AI Agent op basis van je ROADMAP.md. Laat niet alles ineens uitwerken, maar werk pagina per pagina of feature per feature. Controleer gegenereerde code zorgvuldig op WCAG-toegankelijkheid en kwaliteit voordat je het accepteert!

> **Als er aan de pagina iets niet klopt of werkt, los dat dan eerst op, voor je verder gaat met de andere stappen! Los zelf kleine wijzigingen op ipv AI-tokens te gebruiken. **

3. Zodra een kleine taak is afgerond, vink je deze af in PLAN.md en commit je naar github met een volledige beschrijving wat er toegevoegd of gewijzigd is. Door regelmatig te committen, creëer je een backupplan zodat je steeds kunt teruggaan naar een vorige versie.

4. Als een feature volledig klaar is, dien je een Pull Request (PR) in op GitHub. Ook hier vermeld je duidelijk wat er in de feature allemaal is toegevoegd of gewijzigd. Minstens één medestudent moet jouw PR reviewen en goedkeuren (inclusief inhoudelijke feedback in GitHub) voordat de code naar main gemerged mag worden. Als de code fouten bevat moet je die eerst verbeteren voor je de PR accepteert!

Voorbeeld PR
```markdown
### 10:30 - Project Setup & Architecture
* Repo gecloned en map `project/` aangemaakt.
* `AGENTS.md` opgesteld met specifieke WCAG- en techstack-regels.
* Initial `ROADMAP.md` aangemaakt op basis van AI-analyse.

### 11:45 - Hero Sectie & Branding (PR #1)
* Feature branch `feature/hero-section` aangemaakt.
* Eigen logo geïmplementeerd en hero-sectie gebouwd met responsive grid.
* **AI-gebruik:** ChatGPT gebruikt voor het genereren van taalniveau B1 copy.
* **Peer Review:** PR #1 goedgekeurd door [@MedestudentNaam] na toevoegen van ontbrekende alt-tekst op hero-afbeelding.

### 14:15 - Formulier, Spamfilter & Playwright (PR #2)
* Contactformulier gebouwd op `feature/contact-form` met honeypot-spamfilter.
* Playwright E2E-test toegevoegd in `tests/form.spec.ts` om spamblokkade te valideren.
* **Peer Review:** PR #2 goedgekeurd en gemerged naar `main`.
```

### Stap 5: Einddocumentatie & Reflectie in README.md
Maak een `README.md` aan in de root van je repository en werk deze gedurende het project regelmatig bij. Neem exact de verplichte structuur over.

1. de naam van je applicatie;
2. een korte beschrijving;
3. de belangrijkste functionaliteiten;
4. hoe je de applicatie gebruikt;
5. welke technologieën je hebt gebruikt;
6. welke AI-tool(s) je hebt gebruikt;
7. waarvoor je AI hebt gebruikt;
8. lijst van problemen die je bent tegengekomen en hoe je ze hebt opgelost.
9. Wat was het moeilijkste onderdeel?
10. Welke onderdelen van de gegenereerde code heb je zelf aangepast?
11. Wat zou je nog verbeteren als je meer tijd had?

Voorbeeld
```markdown
# [Naam van je Maatschappelijk Platform]

## 1. Korte beschrijving & Maatschappelijke Relevantie
[Geef hier een korte samenvatting van de organisatie, welk maatschappelijk probleem het platform aankaart en wat de missie is.]

## 2. Belangrijkste functionaliteiten
* **Hero & Impact:** [Beschrijf de hero-sectie en hoe resultaten/impact worden getoond]
* **Kennisbank & Educatie:** [Beschrijf de artikelen/FAQ en downloadbare hulpmiddelen]
* **Actie & Contact:** [Beschrijf het contact/vrijwilligersformulier en de werking van de spamfilter]
* **Transparantie & Juridisch:** [Vermeld de KBO-gegevens, het bestuur en de AVG privacyverklaring]
* *(Optioneel)* **Gamificatie:** [Beschrijf de interactieve mini-game of quiz]

## 3. Hoe je de applicatie lokaal gebruikt en test
```bash
# Installatie
cd project
npm install

# Development server starten
npm run dev

# Playwright E2E-testen uitvoeren
npm run test:e2e
```

### Stap 6: Automatische Deployment & Testen via Netlify / GitHub Actions
1. Koppel je GitHub repository aan Netlify voor automatische deployments.

    Als je nog geen Netlify-account hebt, doorloop je eerst deze eenmalige stappen:
    1. Account aanmaken
        - Ga naar netlify.com en klik rechtsboven op Sign Up.
        - Kies verplicht voor "Sign up with GitHub".(Dit koppelt direct je GitHub-identiteit, wat de integratie in latere stappen aanzienlijk vereenvoudigt).
        - Authoriseer Netlify om toegang te krijgen tot je GitHub-profiel.
    2. Nieuwe site koppelen vanuit GitHub
        - Klik in je Netlify Dashboard op Add new site $\rightarrow$ Import an existing project.
        - Kies GitHub als Git-provider.
        - Selecteer je projectrepository (geef Netlify toegang tot de repository als deze niet direct in de lijst staat).
        - Configureer de Build Settings:
            - Base directory: project (of de map waarin je projectcode staat)
            - Build command: npm run build (afhankelijk van je gekozen framework)
            - Publish directory: dist of build (afhankelijk van je framework; bijv. dist voor Vite/Astro)
        - Klik op Deploy [Site Naam]. Netlify maakt nu automatisch je eerste live deployment aan.

2. Configureer een CI/CD-pipeline (via GitHub Actions of Netlify Build) die bij elke PR automatisch de Playwright E2E-testen uitvoert< Maak lokaal in je repository de map .github/workflows/ aan en voeg daarin het bestand playwright.yml toe:
```
name: Playwright Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v4

    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: lts/*

    - name: Install dependencies
      working-directory: ./project
      run: npm ci

    - name: Install Playwright Browsers
      working-directory: ./project
      run: npx playwright install --with-deps

    - name: Run Playwright tests
      working-directory: ./project
      run: npx playwright test

    - name: Upload Playwright Report (bij fouten)
      uses: actions/upload-artifact@v4
      if: ${{ !cancelled() }}
      with:
        name: playwright-report
        path: project/playwright-report/
        retention-days: 30
```

3. Branch Protection Rules Instellen op GitHub
    - Om te voorkomen dat er rechtstreeks naar main wordt gepusht of dat code met falende testen live gaat, stellen we beveiligingsregels in op GitHub:
        - Ga in je GitHub-repository naar Settings $\rightarrow$ Branches.
        - Klik op Add branch protection rule (of Add rule).
        - Vul bij Branch name pattern het woord main in.
        - Vink de volgende opties verplicht aan: 
            - 🗹 Require a pull request before merging 
                - 🗹 Require approvals (stel het aantal in op 1)
            - 🗹 Require status checks to pass before merging
                - Zoek in het zoekveld naar test of Playwright Tests en vink deze aan.
        - Klik onderaan op Save changes.

### Stap 7: PlayWright testen schrijven
Playwright is een test-tool die automatisch een echte browser (Chrome, Firefox, Safari) opent, door je website klikt, formulieren invult en controleert of alles werkt zoals verwacht.

1. Installeer eerst playwright in je project via de terminal.
```js
npm init playwright@latest
```

Er worden enkele vragen gesteld in de terminal. Kies de volgende opties:
- Do you want to use TypeScript or JavaScript? $\rightarrow$ Kies wat past bij je project (bijv. TypeScript of JavaScript).
- Where to put your tests? $\rightarrow$ tests (druk op Enter).
- Add a GitHub Actions workflow? $\rightarrow$ false (dit hebben we al handmatig gedaan in Stap 6).
- Install Playwright browsers? $\rightarrow$ true (belangrijk!).

2. Playwright heeft een server nodig om de testen tegen te draaien. Open `playwright.config.ts` (of .js) en zorg dat webServer onderaan ingeschakeld staat. Dit zorgt ervoor dat Playwright automatisch je lokale dev-server opstart tijdens het testen.

```TypeScript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  use: {
    // Basis URL van je lokale development server
    baseURL: 'http://localhost:5173', // Pas de poort aan naar die van jouw project (bijv. 3000, 5173 of 8080)
    trace: 'on-first-retry',
  },
  // Start automatisch je app voor de testen beginnen
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile chrome', use: { ...devices['Pixel 5'] } }, // Test ook mobiele weergave!
  ],
});
```

3. Om automatisch te testen op WCAG-toegankelijkheid (contrast, alt-teksten, ARIA-labels), gebruiken we het pakket @axe-core/playwright. Installeer dit via de terminal:

```Bash
npm install @axe-core/playwright --save-dev
```

4. Maak in de map tests/ drie verschillende testbestanden aan. Je mag hiervoor AI gebruiken, maar zorg dat je de testen wel begrijpt.

- Test 1: Navigatietest (tests/navigation.spec.ts)
Deze test controleert of de navigatiebalk werkt en of de juiste pagina's laden.

- Test 2: Formuliervalidatie & Spamfilter (tests/form.spec.ts)
Deze test controleert of het formulier foute invoer weigert én of de honeypot-spamfilter werkt.

- Test 3: Toegankelijkheid / WCAG (tests/accessibility.spec.ts)
Deze test scant automatisch je pagina's op toegankelijkheidsfouten volgens de WCAG-normen.

5. De Testen Uitvoeren
Je kunt je testen op twee manieren lokaal uitvoeren vanuit de terminal:

Optie A: Visuele modus (UI-modus - Aangeraden voor studenten)
Dit opent een interactief scherm waarin je de browser ziet klikken en stappen kunt debuggen.

```Bash
npx playwright test --ui
```

Optie B: Headless modus (Command-line)
Voert alle testen in de achtergrond uit en geeft een rapport in de terminal (zoals het ook op GitHub Actions werkt).

```Bash
npx playwright test
```

Rapport bekijken na het testen:
Als er testen falen, kun je het HTML-rapport openen om screenshots en video's van de fout te bekijken:

```Bash
npx playwright show-report
```

## Gebruik deze checklist voor je het project definitief indient:

[ ] Mappenstructuur: De code staat in de map project/ en de 3 markdown-bestanden staan op de juiste locaties (AGENTS.md, ROADMAP.md, README.md).

[ ] Functioneel: De applicatie telt minstens 6-7 pagina's, heeft een werkend formulier met spamfilter, contactgegevens en een interactieve game/quiz. Inhoudelijk bevat de website meer dan voldoende informatie.

[ ] Toegankelijkheid: Alle afbeeldingen hebben alt-teksten, de site kan volledig bediend worden met Tab/Enter, en de contrastratio's voldoen aan WCAG AA.

[ ] Git Workflow: Alle features zijn gemerged via Pull Requests

[ ] CI/CD & Deployment: De GitHub Action voor Playwright draait succesvol op GitHub en de live URL op Netlify is toegevoegd aan de README.md.
