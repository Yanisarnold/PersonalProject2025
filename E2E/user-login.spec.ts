import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import userCredential from "../fixtures/loginData.json"
test.describe("User Authentication Page", () => {

  let loginPage: LoginPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  })

  test('Verify user is able to login with valid credential', async ({ page }) => {
    await loginPage.userLogin(userCredential.validUser.name, userCredential.validUser.password);

    await expect(page).toHaveTitle("OrangeHRM")
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  })


  test("Verify user can't login with invalid credential", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.userLogin(userCredential.invalidUser.name, userCredential.invalidUser.pass);

    await expect(page.getByRole('heading', { name: 'Dashboard' })).not.toBeVisible();
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  })

  test("Verify user can't login with invalid userName", async ({ page }) => {
    await loginPage.userLogin("Admi", userCredential.validUser.password);

    await expect(page.getByRole('heading', { name: 'Dashboard' })).not.toBeVisible();
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  })

  test("Verify user can't login with invalid Password", async ({ page }) => {
    await loginPage.userLogin(userCredential.validUser.name, userCredential.pass.inv);

    await expect(page.getByRole('heading', { name: 'Dashboard' })).not.toBeVisible();
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  })

  test("Verify user can't login with empty credential & valid error message is displayed", async ({ page }) => {
    await loginPage.userLogin(" ", " ");
    await expect(page.getByText('Required').first()).toBeVisible()
    await expect(page.getByText('Required').nth(1)).toBeVisible()
  })

})