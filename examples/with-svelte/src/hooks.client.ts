import { dev } from '$app/environment';
import { enableApiMocking } from './mocks/inject';

if (dev) {
  await enableApiMocking();
}
