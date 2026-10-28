import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import '@mantine/core/styles.css';
import './index.css';
import App from './App';
import { QuizProvider } from './context/QuizContext'; 

// We maken ons eigen Mantine thema op basis van AGENTS.md
const theme = createTheme({
  primaryColor: 'blue',
  colors: {
    // Onze eigen donkerblauwe "primary" kleur tinten
    brand: ['#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569', '#334155', '#1e293b', '#0f172a', '#020617'],
  },
  fontFamily: 'system-ui, sans-serif',
  headings: { fontFamily: 'system-ui, sans-serif', fontWeight: '700' },
});

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <BrowserRouter>
        <QuizProvider>
          <App />
        </QuizProvider>
        </BrowserRouter>
      </MantineProvider>
    </QueryClientProvider>
  </StrictMode>
);