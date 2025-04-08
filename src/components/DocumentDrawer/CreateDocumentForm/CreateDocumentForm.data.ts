import { DocumentType } from '../../../api/documentService/documentService.types';

export const selectOptions = [
  {
    label: 'Регламент',
    value: DocumentType.REGULATION,
  },
  {
    label: 'Инструкция',
    value: DocumentType.INSTRUCTION,
  },
  {
    label: 'Распоряжение',
    value: DocumentType.ORDER,
  },
];
