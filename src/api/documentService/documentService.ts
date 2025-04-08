import { apiClient } from '../client';
import { IDocument } from './documentService.types';

export const fetchDocuments = async (): Promise<IDocument[]> => {
  const response = await apiClient.get<IDocument[]>('/documents');
  return response.data;
};

export const fetchDocumentById = async (id: number): Promise<IDocument> => {
  const response = await apiClient.get<IDocument>(`/documents`, { params: { id: `eq.${id}` } });
  return response.data;
};

export const createNewDocument = async (documentData: Omit<IDocument, 'id' | 'created_at'>): Promise<IDocument> => {
  const response = await apiClient.post<IDocument>(`/documents`, documentData);
  return response.data;
};
