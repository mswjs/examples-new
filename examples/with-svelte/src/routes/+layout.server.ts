import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
  console.log('[server] (layout) load');

  if (import.meta.env.VITE_ENABLE_API_MOCKING === 'true') {
    console.log('[server] (layout) importing setupServer...');

    const { server } = await import('../mocks/node');
    server.listen();

    console.log('* [server] (layout) ENABLED MOCKING!');
    (globalThis as any).foo = 'bar';
  }
};
