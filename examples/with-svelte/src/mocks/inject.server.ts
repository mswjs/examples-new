export async function enableApiMocking() {
  const { server } = await import('./node');

  server.listen();
}
