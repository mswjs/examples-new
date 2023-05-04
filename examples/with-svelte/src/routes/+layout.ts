import { browser, dev } from '$app/environment';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
  if (dev && browser) {
    const { worker } = await import('../mocks/browser');
    await worker.start();
  }
};
