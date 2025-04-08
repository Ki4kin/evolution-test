import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { DocumentSidebarContextProvider } from './contexts/DocumentSidebarContext/DocumentSidebarContextProvider.tsx';

import App from './App.tsx';
import 'antd/dist/reset.css';
import './styles/global.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <DocumentSidebarContextProvider>
        <App />
      </DocumentSidebarContextProvider>
    </QueryClientProvider>
  </StrictMode>,
);
