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


})