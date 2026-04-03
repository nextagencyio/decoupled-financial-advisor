import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads and displays hero content from Drupal', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Meridian Wealth Partners/)
    // Hero section with content from Drupal
    await expect(page.locator('text=Your Financial Future, Elevated')).toBeVisible()
    await expect(page.locator('text=Pinnacle Financial Advisors')).toBeVisible()
  })

  test('displays CTA section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Schedule Consultation').first()).toBeVisible()
    await expect(page.locator('text=Our Services').first()).toBeVisible()
  })

  test('navigation links are present', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('nav >> text=Services')).toBeVisible()
    await expect(page.locator('nav >> text=Advisors')).toBeVisible()
    await expect(page.locator('nav >> text=Resources')).toBeVisible()
  })
})

test.describe('Services page', () => {
  test('lists services from Drupal', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('h1')).toContainText('Our Services')
    await expect(page.locator('text=Wealth Management').first()).toBeVisible()
    await expect(page.locator('text=Retirement Planning').first()).toBeVisible()
    await expect(page.locator('text=Estate Planning').first()).toBeVisible()
    await expect(page.locator('text=Tax Optimization').first()).toBeVisible()
  })

  test('service detail page loads', async ({ page }) => {
    await page.goto('/services/wealth-management')
    await expect(page.locator('h1')).toContainText('Wealth Management')
    await expect(page.locator('text=$250,000')).toBeVisible()
  })
})

test.describe('Advisors page', () => {
  test('lists advisors from Drupal', async ({ page }) => {
    await page.goto('/advisors')
    await expect(page.locator('h1')).toContainText('Our Advisors')
    await expect(page.locator('text=Robert Sterling').first()).toBeVisible()
    await expect(page.locator('text=Jennifer Hayes').first()).toBeVisible()
    await expect(page.locator('text=Michael Zhang').first()).toBeVisible()
  })

  test('advisor detail page loads', async ({ page }) => {
    await page.goto('/advisors/robert-sterling')
    await expect(page.locator('h1')).toContainText('Robert Sterling')
  })
})

test.describe('Resources page', () => {
  test('lists resources from Drupal', async ({ page }) => {
    await page.goto('/resources')
    await expect(page.locator('h1')).toContainText('Resources')
    await expect(page.locator('text=2025 Market Outlook').first()).toBeVisible()
    await expect(page.locator('text=Estate Planning Essentials').first()).toBeVisible()
  })

  test('resource detail page loads', async ({ page }) => {
    await page.goto('/resources/market-outlook-2025')
    await expect(page.locator('h1')).toContainText('2025 Market Outlook')
  })
})

test.describe('Static pages', () => {
  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('About Pinnacle Financial Advisors')
  })

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('h1')).toContainText('Contact Us')
  })
})
