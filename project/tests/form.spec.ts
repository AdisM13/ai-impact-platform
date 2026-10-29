import { test, expect } from '@playwright/test';

test.describe('Contactformulier & Spamfilter', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('moet foutmeldingen tonen als het formulier leeg is', async ({ page }) => {
    await page.getByRole('button', { name: 'Verstuur bericht' }).click();

    await expect(page.getByText('Vul je naam in.')).toBeVisible();
    await expect(page.getByText('Vul je e-mailadres in.')).toBeVisible();
    await expect(page.getByText('Vul een bericht in.')).toBeVisible();
  });

  test('moet succesvol verzenden bij geldige invoer', async ({ page }) => {
    await page.getByLabel('Naam').fill('Test Gebruiker');
    await page.getByLabel('E-mailadres').fill('test@voorbeeld.be');
    await page.getByLabel('Bericht').fill('Dit is een testbericht voor Playwright.');
    
    await page.getByRole('button', { name: 'Verstuur bericht' }).click();

    // DE FIX: We zoeken nu specifiek naar de tekst in de alert, 
    // in plaats van zomaar naar ELKE alert op de pagina.
    const successAlert = page.locator('[role="alert"]').filter({ hasText: 'Gelukt!' });
    await expect(successAlert).toContainText('Je bericht is succesvol verzonden', { timeout: 3000 });
  });

  test('moet de inzending blokkeren als de Honeypot (spam) is ingevuld', async ({ page }) => {
    await page.getByLabel('Naam').fill('Ik ben een robot');
    await page.getByLabel('E-mailadres').fill('bot@spam.com');
    await page.getByLabel('Bericht').fill('Koop nu al mijn neppe producten!');
    
    // De bot vult het honeypot-veld in
    await page.locator('input[name="website_hp"]').fill('http://spam-link.com');
    
    await page.getByRole('button', { name: 'Verstuur bericht' }).click();

    // Check of het formulier NIET is leeggemaakt
    await expect(page.getByLabel('Naam')).toHaveValue('Ik ben een robot');
    
    // Check of de nep-succesmelding verschijnt
    const fakeSuccessAlert = page.locator('[role="alert"]').filter({ hasText: 'Gelukt!' });
    await expect(fakeSuccessAlert).toBeVisible(); 
  });
});