import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = /*#__PURE__*/ setupServer(...handlers);
