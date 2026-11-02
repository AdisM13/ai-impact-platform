# AI-Impact Platform

## 1. Korte beschrijving & Maatschappelijke Relevantie
Het AI-Impact Platform is een modern, toegankelijk webplatform dat zich richt op de maatschappelijke impact van Kunstmatige Intelligentie (AI). Het platform kaart zowel de positieve kansen (zoals vooruitgang in de gezondheidszorg) als de risico's (zoals deepfakes, banenverlies en ethische kwesties) aan. De missie is om bezoekers bewust te maken van de razendsnelle ontwikkeling van AI en hen de middelen te geven om hier kritisch naar te kijken.

## 2. Belangrijkste functionaliteiten
* **Hero & Impact:** Een pakkende hero-sectie op de Home-pagina met actuele, Belgische impactcijfers (o.a. over AI-gebruik in het bedrijfsleven).
* **Kennisbank & Educatie:** Een interactieve Mantine Accordion (FAQ) met heldere uitleg (B1-niveau) en een overzicht van officiële bronnen.
* **Actie & Contact:** Een werkend contactformulier met validatie en een robuuste Honeypot-spamfilter. Inclusief transparante gegevens (KBO-nummer, adres) en een AVG-privacyverklaring.
* **Gamificatie (Quiz):** Een interactieve "AI of Mens?" quiz, waarbij de voortgang en score worden bijgehouden via de React Context API.
* **Actualiteiten (API):** Een nieuwsoverzicht dat dynamisch wordt ingeladen via TanStack Query. Inclusief een live zoekfilter en een gedetailleerde modal-weergave per bericht.

## 3. Hoe je de applicatie lokaal gebruikt en test
```bash
# Ga naar de projectmap
cd project

# Installeer de dependencies
npm install

# Start de development server
npm run dev

# Voer de Playwright E2E- en WCAG-testen uit
npx playwright test