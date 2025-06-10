import test, { expect } from "@playwright/test";
import cities from "../fixtures/testData.json"; // Assuming you have a JSON file with city names

test.describe("weather-App test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://683208dc29f4aa00c82954d1--cosmic-kelpie-ca4e4a.netlify.app/");
    await page.waitForLoadState('networkidle');
  })

  test("Verify user are able to select preselected cities search for different city", async ({ page }) => {
    {
      for (const city of Object.values(cities)) {
        await page.getByText(city).click();
        await expect(page.getByRole('heading', { name: new RegExp(city, 'i') })).toBeVisible();
      }
    }
  })

  test("Verify user are able to search for different city", async ({ page }) => {
    {
      await page.getByRole('textbox', { name: 'search for city...' }).fill("Moscow")

    }
  })

  test("Verify searching for an empty city show an error ", async ({ page }) => {
    {
      await page.getByRole('button', { name: 'Get Weather' }).click();
      await expect(page.getByText('Please enter a city name')).toBeVisible();
    }
  })

  test("Verify user are able to search for a city that does not exist", async ({ page }) => {
    {
      await page.getByRole('textbox', { name: 'search for city...' }).fill("playwright123");
      await page.getByRole('button', { name: 'Get Weather' }).click();
    }
  })
})