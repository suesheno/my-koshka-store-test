import Medusa from '@medusajs/medusa-js';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24,
      retry: 1,
    },
  },
});

/** SET DYNAMIC ENV **/
const medusaClient = new Medusa({
  // baseUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL!,
  baseUrl: 'https://store.mykoshka.com/',
  maxRetries: 3,
  customHeaders: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  },
});

export { medusaClient, queryClient };
