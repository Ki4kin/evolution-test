import { Dispatch, ReactNode, SetStateAction } from 'react';

export const DocumentSidebarMode = {
  WATCH: 'watch',
  CREATE: 'create',
  CLOSED: 'closed',
} as const;

export type DocumentSidebarModeType = (typeof DocumentSidebarMode)[keyof typeof DocumentSidebarMode];

export interface IDocumentSidebarContext {
  sidebarMode: DocumentSidebarModeType;
  setSidebarMode: Dispatch<SetStateAction<DocumentSidebarModeType>>;
}

export interface IDocumentSidebarProps {
  children?: ReactNode;
}
