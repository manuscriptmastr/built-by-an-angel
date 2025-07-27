import test, { expect } from "@playwright/test";

test("Home page redirects to Item Details page", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL("/items");
});
