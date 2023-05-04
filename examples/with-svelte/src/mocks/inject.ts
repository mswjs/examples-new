import { browser } from '$app/environment';

export async function enableApiMocking() {
  if (browser) {
    console.log('enabling in the browser...');
    await new Promise((r) => setTimeout(r, 1000));
    console.log('ENABLED BROWSER!');

    const { worker } = await import('./browser');
    await worker.start();
  } else {
    console.log('enabling in node...');
    await new Promise((r) => setTimeout(r, 1000));
    console.log('ENABLED NODE!');

    const { server } = await import('./node');
    server.listen();

    (globalThis as any).foo = 'bar';
  }
}
