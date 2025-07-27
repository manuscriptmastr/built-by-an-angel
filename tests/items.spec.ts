import { ITEMS } from "@/app/items";
import test, { expect } from "@playwright/test";

test("Item List page displays a list of items", async ({ page }) => {
  await page.goto("/items");
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /welcome to ga-linda's closet!/i,
    })
  ).toBeVisible();
  await page.waitForSelector("li");
  expect((await page.getByRole("listitem").all()).length).toBe(ITEMS.length);
});

test("Clicking on an item navigates to Item Detail", async ({ page }) => {
  const FIRST_ITEM = ITEMS[0];

  await page.goto("/items");
  await page.getByRole("link", { name: FIRST_ITEM.title }).click();
  await expect(page).toHaveURL("/items/1");
  await expect(
    page.getByRole("heading", { level: 1, name: FIRST_ITEM.title })
  ).toBeVisible();
  expect(await page.getByRole("paragraph").textContent()).toBe(
    FIRST_ITEM.description
  );
  await expect(
    page.getByRole("button", { name: `Add to cart — ${FIRST_ITEM.price}` })
  ).toBeVisible();
});
