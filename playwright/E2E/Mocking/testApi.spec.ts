import test, { expect } from "@playwright/test";

test.describe("Mocking Api Test", () => {

  test("user Api", async ({ page }) => {
    await page.route('**/api/user', route => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ name: 'Mocked User' })
      });
    })
  })

  test("mocks a fruits and doesn't call", async ({ page }) => {

    await page.route('*/**/api/v1/fruits', async route => {
      const json = [{ name: 'Strawberry', id: 1 }]
      await route.fulfill({ json })
    })
    await page.goto('https://demo.playwright.dev/api-mocking');
    await expect(page.getByText('Strawberry')).toBeVisible();
  })


})