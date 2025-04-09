import { FC, memo, useContext } from 'react';
import { IDocumentsListProps } from './DocumentsList.types';
import { Button, Flex } from 'antd';
import { DocumentSidebarContext } from '../../../contexts/DocumentSidebarContext/DocumentSidebarContext';
import { DocumentSidebarMode } from '../../../contexts/DocumentSidebarContext/DocumentSidebarContext.types';
import { IDocument } from '../../../api/documentService/documentService.types';

import './DocumentList.css';

const DocumentsList: FC<IDocumentsListProps> = ({ documents, setActiveDocument }) => {
  const { setSidebarMode } = useContext(DocumentSidebarContext);
  const onOpenDocument = (document: IDocument) => {
    setActiveDocument(document);
    setSidebarMode(DocumentSidebarMode.WATCH);
  };

  return (
    <Flex vertical gap='12px'>
      {documents.map((document) => (
        <Button type='text' key={document.id} onClick={() => onOpenDocument(document)} className='open-document-btn'>
          Документ №{document.id}
        </Button>
      ))}
    </Flex>
  );
};

export default memo(DocumentsList);
