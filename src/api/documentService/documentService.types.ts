export interface IDocument {
  id: number;
  title: string;
  description: string;
  type: DocumentType;
  created_at: string;
}

export const DocumentType = {
  REGULATION: 0,
  INSTRUCTION: 1,
  ORDER: 2,
} as const;

export interface DocumentsResponse {
  data: Document[];
}
