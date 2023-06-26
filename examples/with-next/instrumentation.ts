export async function register() {
  console.log('[instrumentation] server.listen()...', process.env.NEXT_RUNTIME)

  const { server } = await import('./mocks/node')
  server.listen()
}
