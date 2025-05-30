import {  } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from './components/ui/provider.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import router from './router/routes.tsx'
const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <>
    <Provider>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </Provider>
    
  </>,
)
