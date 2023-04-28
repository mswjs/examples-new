// --- START of unnecessary polyfills
/**
 * @note The block below contains polyfills for Node.js globals
 * required for Jest to function when running JSDOM tests.
 * These HAVE to be require's and HAVE to be in this exact
 * order, since "undici" depends on the "TextEncoder" global API.
 *
 * Consider migrating to a more modern test runner if
 * you don't want to deal with this.
 */
const { TextEncoder, TextDecoder } = require('util')

Object.defineProperties(globalThis, {
  TextDecoder: { value: TextDecoder },
  TextEncoder: { value: TextEncoder },
})

const { Blob } = require('node:buffer')
const { fetch, Headers, Request, Response, FormData } = require('undici')

Object.defineProperties(global, {
  fetch: { value: fetch, writable: true },
  Headers: { value: Headers },
  Request: { value: Request },
  Response: { value: Response },
  Blob: { value: Blob },
  FormData: { value: FormData },
})
// --- END of unnecessary polyfills

import { server } from './mocks/node'

beforeAll(() => {
  // Enable API mocking before all the tests.
  server.listen()
})

afterEach(() => {
  // Reset the request handlers between each test.
  // This way the handlers we add on a per-test basis
  // do not leak to other, irrelevant tests.
  server.resetHandlers()
})

afterAll(() => {
  // Finally, disable API mocking after the tests are done.
  server.close()
})
