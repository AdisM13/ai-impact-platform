// src/hooks/useNews.ts
import { useQuery } from '@tanstack/react-query';
import { fetchNews } from '../api/newsApi';

// Dit is onze custom hook. We geven hem de naam 'useNews'
export const useNews = () => {
  return useQuery({
    queryKey: ['aiNews'],
    queryFn: fetchNews,
    gcTime: 0,       // Zorgt dat de data verdwijnt als we de pagina verlaten
    staleTime: 0,    // Dwingt een refetch bij elk bezoek
  });
};