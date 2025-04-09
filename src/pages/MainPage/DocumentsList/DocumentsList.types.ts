import { IDocument } from '../../../api/documentService/documentService.types';

export interface IDocumentsListProps {
  documents: IDocument[];
  setActiveDocument: React.Dispatch<React.SetStateAction<IDocument | undefined>>;
}
