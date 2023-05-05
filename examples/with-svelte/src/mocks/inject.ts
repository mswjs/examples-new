export async function enableApiMocking() {
  const { worker } = await import('./browser');

  await worker.start();
}
