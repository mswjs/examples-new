import { test, expect } from '@playwright/test'

test('receives a mocked response to a REST API request', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  // REST API response.
  await page.waitForSelector('#rest-response')
  const greetingText = await page.locator('#rest-response').textContent()
  expect(greetingText).toBe('Hello, John!')
})

test('receives a mocked response to a GraphQL API request', async ({
  page,
}) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  // GraphQL API response.
  await page.waitForSelector('#graphql-response')
  const moviesList = await page.locator('#graphql-response')
  expect(moviesList.allTextContents()).toEqual([
    'The Lord of The Rings',
    'The Matrix',
    'Star Wars: Empire Strikes Back',
  ])
})
