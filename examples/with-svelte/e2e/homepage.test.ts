import { expect, test } from '@playwright/test';

test('renders the user greeting', async ({ page }) => {
  await page.goto('/');

  const greeting = page.getByText('Hello, John!');
  await expect(greeting).toBeVisible();
});
