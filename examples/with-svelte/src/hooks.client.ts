import { dev } from '$app/environment';

if (dev) {
  const { worker } = await import('./mocks/browser');

  await worker.start();
}
