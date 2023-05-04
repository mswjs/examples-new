import { dev } from '$app/environment';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
  if (dev) {
    const { server } = await import('../mocks/node');
    server.listen();
  }
};
