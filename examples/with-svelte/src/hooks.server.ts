import { dev } from '$app/environment';
import { enableApiMocking } from './mocks/inject.server';

if (dev) {
  await enableApiMocking();
}
