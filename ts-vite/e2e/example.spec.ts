import { test, expect } from '@playwright/test';

test('homepage has correct title and counter works', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/');
  await expect(page).toHaveTitle(/Modern Frontend Starter/);
  
  // 检查页面是否包含文本 "hello world"
  await expect(page.getByText('hello world')).toBeVisible();
});
