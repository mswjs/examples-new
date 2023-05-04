import { browser } from '$app/environment';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
  if (browser && import.meta.env.VITE_ENABLE_API_MOCKING === 'true') {
    const { worker } = await import('../mocks/browser');
    await worker.start();
  }
};
