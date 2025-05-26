import { Page } from "@playwright/test";

export class LoginPage {
  private page: Page
  
  elements = {
    companyName: () => this.page.getByRole('textbox', { name: 'Company name' }),
  }

  constructor(page: Page) {
    this.page = page;
  }


  async navigate(link) {
    await this.page.goto(link)
  }

  async userLogin(userName, password) {
    await this.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await this.page.getByRole("textbox", { name: "Username" }).fill(userName)
    await this.page.getByRole("textbox", { name: "Password" }).fill(password)
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}