import { test, expect } from '@playwright/test'

test('receives mocked responses in loaders', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  const greeting = page.locator('#server-side-greeting')
  await expect(greeting).toHaveText('Hello, John!')
})

test('receives mocked responses on browser runtime', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  const fetchMoviesButton = page.locator('#fetch-movies-button')
  await fetchMoviesButton.click()

  const moviesList = page.locator('#movies-list')
  await moviesList.isVisible()
  const movieItems = await moviesList.locator('li').allTextContents()

  expect(movieItems).toEqual([
    'The Lord of The Rings',
    'The Matrix',
    'Star Wars: The Empire Strikes Back',
  ])
})
