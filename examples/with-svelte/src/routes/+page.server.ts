import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  console.log('[server] (page) load');

  return {
    user: await fetchUser()
  };
};

interface User {
  firstName: string;
  lastName: string;
}

async function fetchUser() {
  console.log('[server] (page) fetching user...', (globalThis as any).foo);

  const response = await fetch('https://api.example.com/user');
  return response.json() as Promise<User>;
}
