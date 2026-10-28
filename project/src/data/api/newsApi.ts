export type NewsArticle = {
  id: number;
  title: string;
  category: string;
  date: string;
  summary: string;
};

// Onze API fetch functie
export const fetchNews = async (): Promise<NewsArticle[]> => {
  // 1. We simuleren een netwerk-vertraging van 1,5 seconde (1500ms)
  // Dit doen we zodat je de loader goed kunt zien werken!
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // 2. Het daadwerkelijke fetchen
  const response = await fetch('/ai-news.json');

  // 3. Error afhandeling: Als de response niet ok is (bijv. 404), gooien we een error
  if (!response.ok) {
    throw new Error('Kon de nieuwsberichten niet ophalen. Probeer het later opnieuw.');
  }

  // 4. We geven de data terug
  return response.json();
};