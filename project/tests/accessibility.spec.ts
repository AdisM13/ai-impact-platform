import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Toegankelijkheid (WCAG 2.1 AA)', () => {
  
  // We testen de belangrijkste pagina's van je site
  const pagesToTest = [
    { name: 'Home', path: '/' },
    { name: 'Kennisbank', path: '/kennisbank' },
    { name: 'Contact', path: '/contact' },
    { name: 'Quiz', path: '/quiz' }
  ];

  for (const pageInfo of pagesToTest) {
    test(`Pagina ${pageInfo.name} moet voldoen aan WCAG`, async ({ page }) => {
      // 1. Ga naar de pagina
      await page.goto(pageInfo.path);
      
      // 2. Wacht tot de pagina volledig geladen is
      await page.waitForLoadState('networkidle');

      // 3. Laat Axe de pagina scannen op toegankelijkheidsfouten
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']) // Specifiek WCAG 2.1 AA
        .analyze();

      // 4. Als er fouten zijn, faalt de test en print hij de fouten uit
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
});