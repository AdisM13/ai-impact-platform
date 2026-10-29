import { test, expect } from '@playwright/test';

test.describe('Navigatie en Routing', () => {
  
  test('moet de homepagina laden en de titel tonen', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('De Impact van Kunstmatige Intelligentie');
  });

  test('moet kunnen navigeren naar de Kennisbank via de navbar', async ({ page }) => {
    await page.goto('/');
    
    // DE FIX: We zoeken nu specifiek in de <header> (de navigatiebalk)
    // Hierdoor negeert hij de knop op de Home-pagina.
    const navbarLink = page.locator('header').getByRole('link', { name: 'Kennisbank' });
    await navbarLink.click();
    
    await expect(page).toHaveURL(/.*kennisbank/);
    await expect(page.locator('h1')).toContainText('Kennisbank');
  });

  test('moet de mobiele hamburgerknop tonen op kleine schermen', async ({ page, isMobile }) => {
    // DE FIX: Sla deze test over als we NIET op een mobiel scherm zitten
    test.skip(!isMobile, 'Deze test is alleen voor mobiele apparaten');
    
    await page.goto('/');
    
    const menuButton = page.getByRole('button', { name: 'Open navigatiemenu' });
    await expect(menuButton).toBeVisible();
    
    await menuButton.click();
    
    // Controleer of het menu openklapt en de link zichtbaar wordt
    const drawerLink = page.getByRole('link', { name: 'Home' });
    await expect(drawerLink).toBeVisible();
  });
});