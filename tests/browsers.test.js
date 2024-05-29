/* eslint-disable unicorn/prefer-module */
// @ts-check
import { test } from '@playwright/test';

test('Test browsers', async ({ page }) => {
  await page.goto(`http://localhost:3000`);
  await page.pause();
});
