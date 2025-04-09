import { IDocument } from '../../../api/documentService/documentService.types';

export interface IFormValues extends Omit<IDocument, 'id' | 'created_at' | 'type'> {
  type: { label: string; value: 0 | 1 | 2 };
}
