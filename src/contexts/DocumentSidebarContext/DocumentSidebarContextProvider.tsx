import { useState } from 'react';
import { DocumentSidebarMode, DocumentSidebarModeType, IDocumentSidebarProps } from './DocumentSidebarContext.types';
import { DocumentSidebarContext } from './DocumentSidebarContext';

export const DocumentSidebarContextProvider = ({ children }: IDocumentSidebarProps) => {
  const [sidebarMode, setSidebarMode] = useState<DocumentSidebarModeType>(DocumentSidebarMode.CLOSED);

  const contextValue = {
    sidebarMode,
    setSidebarMode,
  };

  return <DocumentSidebarContext.Provider value={contextValue}>{children}</DocumentSidebarContext.Provider>;
};
