// src/data/quizData.ts

export type Question = {
  text: string;
  options: string[];
  correct: string;
};

export const quizQuestions: Question[] = [
  {
    text: "Kan een kunstmatige intelligentie (AI) echte emoties voelen, zoals verdriet of blijdschap?",
    options: ["Ja, net als een mens", "Nee, het simuleert alleen patronen"],
    correct: "Nee, het simuleert alleen patronen",
  },
  {
    text: "Welke Europese wetgeving treedt in 2026 in werking om AI aan banden te leggen?",
    options: ["De AVG (Privacywet)", "De AI Act"],
    correct: "De AI Act",
  },
  {
    text: "Wat is een 'deepfake'?",
    options: ["Een nep-video of foto gemaakt met AI", "Een diepzeeduik door een robot"],
    correct: "Een nep-video of foto gemaakt met AI",
  },
  {
    text: "Kan AI een arts volledig vervangen bij een medisch consult?",
    options: ["Ja, AI weet alles", "Nee, AI is een hulpmiddel, geen vervanger"],
    correct: "Nee, AI is een hulpmiddel, geen vervanger",
  },
  {
    text: "Wie is er wettelijk verantwoordelijk als een AI-systeem een fout maakt?",
    options: ["De AI zelf", "De mens of het bedrijf dat de AI inzet"],
    correct: "De mens of het bedrijf dat de AI inzet",
  },
  {
    text: "Wat heeft een AI-systeem nodig om te kunnen 'leren'?",
    options: ["Heel veel data en rekenkracht", "Een robotlichaam"],
    correct: "Heel veel data en rekenkracht",
  },
  {
    text: "Is het toegestaan om met AI een liedje te maken in de stem van een beroemde artiest?",
    options: ["Ja, dat is altijd toegestaan", "Nee, dat schendt vaak het portretrecht"],
    correct: "Nee, dat schendt vaak het portretrecht",
  },
  {
    text: "Wat is 'Machine Learning'?",
    options: ["Een computer die leert van data", "Een robot die een machine bestuurt"],
    correct: "Een computer die leert van data",
  },
  {
    text: "Kan AI helpen bij het sneller vinden van nieuwe medicijnen?",
    options: ["Ja, door het analyseren van enorme databanken", "Nee, dat is onmogelijk"],
    correct: "Ja, door het analyseren van enorme databanken",
  },
  {
    text: "Wat betekent het als een AI-systeem 'biased' (vooringenomen) is?",
    options: ["Het heeft een oneerlijk voordeel voor bepaalde groepen", "Het is ontworpen om mensen te plezieren"],
    correct: "Het heeft een oneerlijk voordeel voor bepaalde groepen",
  }
];