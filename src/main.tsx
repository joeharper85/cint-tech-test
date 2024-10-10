import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import QuizContextProvider from './context/QuizContext';
import { routerConfig } from './routes';
import './styles.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter(routerConfig, {
  basename: import.meta.env.BASE_URL,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <QuizContextProvider>
        <RouterProvider router={router} />
      </QuizContextProvider>
    </QueryClientProvider>
  </StrictMode>,
);
