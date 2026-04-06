import { test, expect } from '@playwright/test';

test.describe('ShopSmart E2E User Flow', () => {
  test('User can browse landing page and see Cybernetix title', async ({ page }) => {
    // 1. User navigates to the landing page
    await page.goto('/');

    // 2. Validate the branding text is visible (CYBERNETIX)
    const brandText = page.locator('span.brand-primary', { hasText: 'CYBERNETIX' }).first();
    await expect(brandText).toBeVisible();

    // 3. User checks the search bar
    const searchInput = page.locator('input[placeholder="Search for drones or parts..."]');
    await expect(searchInput).toBeVisible();

    // 4. User hovers over the CATEGORIES dropdown to trigger the Mega-Menu
    const categoriesLink = page.locator('div.hud-link.categories-container');
    await categoriesLink.hover();

    // 5. User ensures Drones are in the mega menu
    const dronesCategory = page.locator('div.mega-menu-title', { hasText: 'Drones' });
    await expect(dronesCategory).toBeVisible();

    // 6. User scrolls down to read the product specs
    await page.evaluate(() => window.scrollBy(0, 1000));
    
    // 7. Validate interaction by scrolling down to technical specifications
    const techSpecs = page.getByText('Technical Specifications');
    await techSpecs.scrollIntoViewIfNeeded();
    await expect(techSpecs).toBeVisible();
  });
});
