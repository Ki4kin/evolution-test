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

export const getSelectStyle = (type: (typeof DocumentType)[keyof typeof DocumentType]) => {
  switch (type) {
    case DocumentType.REGULATION:
      return {
        background: '#EFF8FF',
        border: '1px solid #B2DDFF',
        color: '#175CD3',
      };
    case DocumentType.INSTRUCTION:
      return {
        background: '#EFFFF1',
        border: '1px solid #CAFED8',
        color: '#17D36F',
      };
    case DocumentType.ORDER:
      return {
        background: '#FEF3F2',
        border: '1px solid #FECDCA',
        color: '#B42318',
      };

    default:
      break;
  }
};
