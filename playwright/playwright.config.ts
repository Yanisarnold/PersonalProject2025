import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 2,
  workers: 4,

  use: {
    baseURL: process.env.BASE_URL || 'https://app.curationcorp.com',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'mobile',
      use: { ...devices['iPhone 13'] },
    },
  ],

  reporter: [
    ['html', { outputFolder: 'reports/playwright-report' }],
    ['junit', { outputFile: 'reports/junit-results.xml' }],
    ['list'],
  ],
});
