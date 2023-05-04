import { setupWorker } from 'msw/browser?client';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
