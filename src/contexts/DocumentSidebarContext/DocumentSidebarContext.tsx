import { createContext } from 'react';
import { DocumentSidebarMode, IDocumentSidebarContext } from './DocumentSidebarContext.types';

export const DocumentSidebarContext = createContext<IDocumentSidebarContext>({
  sidebarMode: DocumentSidebarMode.CLOSED,
  setSidebarMode: () => {},
});
